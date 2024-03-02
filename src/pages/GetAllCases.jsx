import {GetAllReunificationCases} from "../API/familyReunification.api.js";
import {useState, useEffect} from "react";
import axios from "axios";

function GetAllCases() {
    const [reunificationCases, setReunificationCases] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // const fetchData = async () => {
        //     setIsLoading(true);
        //     try {
        //         const response = await GetAllReunificationCases();
        //         console.log("this is my test",response);
        //         setReunificationCases(response);
        //     } catch (error) {
        //         setError('Error fetching cases');
        //     }
        //     setIsLoading(false);
        // };
        //
        // fetchData();
        axios.get('https://assignment2-flmi.onrender.com/familyReunification')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="getAllContainer">
            <h1>All Reunification Cases</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {reunificationCases.map((reunificationCase) => (
                        <li key={reunificationCase._id}>
                            <div>Parents: {reunificationCase.parents.join(', ')}</div>
                            <div>Children: {reunificationCase.children.join(', ')}</div>
                            <div>Active: {reunificationCase.active ? 'Yes' : 'No'}</div>
                            <div>Reunion Date: {reunificationCase.reunion_date}</div>
                            <div>Reunion Location: {reunificationCase.reunion_location}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GetAllCases;
