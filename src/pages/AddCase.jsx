import { useState } from 'react';
import { addReunificationCase } from '../API/familyReunification.api';

function AddCase() {
    const [formData, setFormData] = useState({
        parents: '',
        children: '',
        active: false,
        reunion_date: '',
        reunion_location: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Parse input values to arrays
            const parsedFormData = {
                ...formData,
                parents: formData.parents.split(',').map(parent => parent.trim()),
                children: formData.children.split(',').map(child => child.trim())
            };

            const response = await addReunificationCase(parsedFormData);
            console.log("test", response.data); // Log the response data
            setSuccess(true);
        } catch (error) {
            setError('Error adding reunification case');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Add Case</h1>
            {success && <p>Reunification case added successfully!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Parents:</label>
                    <input type="text" name="parents" value={formData.parents} onChange={handleChange} required />
                </div>
                <div>
                    <label>Children:</label>
                    <input type="text" name="children" value={formData.children} onChange={handleChange} required />
                </div>
                <div>
                    <label>Active:</label>
                    <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} />
                </div>
                <div>
                    <label>Reunion Date:</label>
                    <input type="date" name="reunion_date" value={formData.reunion_date} onChange={handleChange} required />
                </div>
                <div>
                    <label>Reunion Location:</label>
                    <input type="text" name="reunion_location" value={formData.reunion_location} onChange={handleChange} required />
                </div>
                <button type="submit">Add Case</button>
            </form>
        </div>
    );
}

export default AddCase;
