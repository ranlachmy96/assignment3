import { useState } from 'react';
import { updateReunificationCase } from '../API/familyReunification.api';

function UpdateCase() {
    const [formData, setFormData] = useState({
        _id: '',
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
            const response = await updateReunificationCase(formData);
            console.log("Updated reunification case:", response);
            setSuccess(true);
        } catch (error) {
            setError('Error updating reunification case');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Update Case</h1>
            {success && <p>Reunification case updated successfully!</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Case ID:</label>
                    <input type="text" name="_id" value={formData._id} onChange={handleChange} required />
                </div>
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
                <button type="submit">Update Case</button>
            </form>
        </div>
    );
}

export default UpdateCase;
