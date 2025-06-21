import { SetStateAction } from "react";
import { Dispatch } from "react";
import { SchoolFilters } from "../../interfaces/school.interfaces"

type SchoolHeaderProps = {
    filters: SchoolFilters;
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setShowCreateForm: Dispatch<SetStateAction<boolean>>;
}

export default function SchoolHeader({
    filters, handleFilterChange, setShowCreateForm
}: SchoolHeaderProps) {
    return (
        <div className="filters">
            <div className="filter-group">
                <label htmlFor="region">Регіон:</label>
                <input
                    type="text"
                    id="region"
                    name="region"
                    value={filters.region}
                    onChange={handleFilterChange}
                    placeholder="Фільтрувати по області"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="type">Тип:</label>
                <select
                    id="type"
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                >
                    <option value="">Усі типи</option>
                    <option value="LYCEUM">Ліцей</option>
                    <option value="GYMNASIUM">Гімназія</option>
                    <option value="GES">ЗЗСО</option>
                </select>
            </div>

            <div className="filter-group">
                <label>
                    <input
                    type="checkbox"
                    name="activeOnly"
                    checked={filters.activeOnly}
                    onChange={handleFilterChange}
                    />
                    Показати лише активні
                </label>
            </div>

            <button 
                className="create-button"
                onClick={() => setShowCreateForm(true)}
            >
                Створити нову школу
            </button>
      </div>
    )
}