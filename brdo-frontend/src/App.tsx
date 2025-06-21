import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import { School, SchoolFilters } from './interfaces/school.interfaces';
import SchoolTable from './components/school/SchoolTable';
import CreateSchoolForm from './components/school/CreateSchoolForm';
import SchoolHeader from './components/school/SchoolHeader';

function App() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SchoolFilters>({
    region: '',
    type: '',
    activeOnly: false
  });
  const [newSchool, setNewSchool] = useState<Omit<School, 'id'>>({
    name: '',
    edrpou: '',
    region: '',
    type: 'LYCEUM',
    isActive: true
  });
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchSchools = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/schools', {
        params: {
          region: filters.region || undefined,
          type: filters.type || undefined,
          isActive: filters.activeOnly || undefined
        }
      });
      setSchools(response.data);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setLoading(false);
    }
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNewSchoolChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setNewSchool(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDeactivateSchool = async (id: number) => {
    try {
      await axios.patch(`http://localhost:8080/api/schools/${id}/deactivate`);
      fetchSchools();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не вдалося деактивувати школу');
    }
  };

  const handleCreateSchool = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/schools', newSchool);
      setShowCreateForm(false);
      setNewSchool({
        name: '',
        edrpou: '',
        region: '',
        type: 'LYCEUM',
        isActive: true
      });
      fetchSchools();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не вдалося створити школу');
    }
  };

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  return (
    <div className="App">
      <SchoolHeader
        filters={filters}
        handleFilterChange={handleFilterChange}
        setShowCreateForm={setShowCreateForm}
      />

      <CreateSchoolForm
        showCreateForm={showCreateForm}
        setShowCreateForm={setShowCreateForm}
        handleCreateSchool={handleCreateSchool}
        handleNewSchoolChange={handleNewSchoolChange}
        newSchool={newSchool}
      />

      <SchoolTable
        schools={schools}
        loading={loading}
        error={error}
        handleDeactivateSchool={handleDeactivateSchool}
      />
    </div>
  );
}

export default App;