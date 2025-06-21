import '../../App.css';
import { School } from '../../interfaces/school.interfaces';

type SchoolTableProps = {
  schools: School[];
  loading: boolean;
  error: string | null;
  handleDeactivateSchool: (id: number) => void
}

export default function SchoolTable({ 
    schools, loading, error, handleDeactivateSchool
}: SchoolTableProps) {

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Назва</th>
              <th>ЄДРПОУ</th>
              <th>Регіон</th>
              <th>Тип</th>
              <th>Активність</th>
            </tr>
          </thead>
          <tbody>
            {schools.length > 0 ? (
              schools.map(school => (
                <tr key={school.id}>
                  <td>
                    {school.isActive && (
                      <button 
                        onClick={() => handleDeactivateSchool(school.id)}
                        className="deactivate-button"
                      >
                        Деактивувати
                      </button>
                    )}
                  </td>
                  <td>{school.name}</td>
                  <td>{school.edrpou || '-'}</td>
                  <td>{school.region}</td>
                  <td>{school.type}</td>
                  <td className={school.isActive ? 'active' : 'inactive'}>
                    {school.isActive ? 'Активна' : 'Неактивна'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="no-results">
                  No schools found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  );
}