import { Dispatch } from "react";

import { SetStateAction } from "react";
import { School } from "../../interfaces/school.interfaces";

type CreateSchoolFormProps = {
    showCreateForm: boolean;
    setShowCreateForm: Dispatch<SetStateAction<boolean>>;
    handleCreateSchool: (e: React.FormEvent) => void;
    handleNewSchoolChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    newSchool: Omit<School, 'id'>;
}

export default function CreateSchoolForm({
    showCreateForm, setShowCreateForm, handleCreateSchool, handleNewSchoolChange, newSchool
}: CreateSchoolFormProps) {

    return (
        <>
            {showCreateForm && (
            <div className="create-form">
                <h2>Створити нову школу</h2>
                <form onSubmit={handleCreateSchool}>
                <div className="form-group">
                    <label>Назва:</label>
                    <input
                    type="text"
                    name="name"
                    value={newSchool.name}
                    onChange={handleNewSchoolChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>ЄДРПОУ:</label>
                    <input
                    type="text"
                    name="edrpou"
                    value={newSchool.edrpou}
                    onChange={handleNewSchoolChange}
                    />
                </div>
                <div className="form-group">
                    <label>Регіон:</label>
                    <input
                    type="text"
                    name="region"
                    value={newSchool.region}
                    onChange={handleNewSchoolChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Тип:</label>
                    <select
                    name="type"
                    value={newSchool.type}
                    onChange={handleNewSchoolChange}
                    >
                    <option value="LYCEUM">Ліцей</option>
                    <option value="GYMNASIUM">Гімназія</option>
                    <option value="GES">ЗЗСО</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={newSchool.isActive}
                        onChange={handleNewSchoolChange}
                    />
                    Активний
                    </label>
                </div>
                <div className="form-actions">
                    <button className='button' type="submit">Створити</button>
                    <button className='button' type="button" onClick={() => setShowCreateForm(false)}>
                    Скасувати
                    </button>
                </div>
                </form>
            </div>
            )}
        </>
    );
}