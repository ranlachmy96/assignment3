import { useState } from "react";
import { GetReunificationCaseById } from "../API/familyReunification.api.js";

function GetOneCase() {
    const [reunificationCase, setReunificationCase] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState('');

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handleFetchData = async () => {
        setIsLoading(true);
        try {
            const response = await GetReunificationCaseById(id);
            setReunificationCase(response.data[0]); // Make sure to access the first item in the array
        } catch (error) {
            console.error("Error fetching case:", error);
            setError('Error fetching case');
        }
        setIsLoading(false);
    };

    return (
        <div className="getOneContainer">
            <h1>Reunification Case</h1>
            <div>
                <label htmlFor="caseId">Enter Case ID:</label>
                <input
                    type="text"
                    id="caseId"
                    value={id}
                    onChange={handleInputChange}
                />
                <button onClick={handleFetchData}>Fetch Case</button>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : reunificationCase ? (
                <ul>
                    <li>
                        <div>Parents: {reunificationCase.parents.join(', ')}</div>
                        <div>Children: {reunificationCase.children.join(', ')}</div>
                        <div>Active: {reunificationCase.active ? 'Yes' : 'No'}</div>
                        <div>Reunion Date: {reunificationCase.reunion_date}</div>
                        <div>Reunion Location: {reunificationCase.reunion_location}</div>
                    </li>
                </ul>
            ) : null}
        </div>
    );
}

export default GetOneCase;
