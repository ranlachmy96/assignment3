import { useState } from 'react';
import { deleteReunificationCase } from '../API/familyReunification.api';

function DeleteCase() {
    const [id, setId] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteReunificationCase(id);
            console.log("Deleted reunification case:", response.data);
            setSuccess(true);
            setId(''); // Clear the input field after successful deletion
        } catch (error) {
            setError('Error deleting reunification case');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Delete Case</h1>
            {success && <p>Reunification case with ID {id} deleted successfully!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Case ID:</label>
                    <input type="text" value={id} onChange={handleChange} required />
                </div>
                <button type="submit">Delete Case</button>
            </form>
        </div>
    );
}

export default DeleteCase;
