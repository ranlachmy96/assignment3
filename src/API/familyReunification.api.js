import axios from 'axios'

axios.defaults.withCredentials = true;

const baseUrl = "https://assignment2-flmi.onrender.com";

export const GetAllReunificationCases = async () => {
    return await axios.get(baseUrl + "/familyReunification", {withCredentials: true})
};
export const GetReunificationCaseById = async (_id) => {
    return await axios.get(`${baseUrl}/familyReunification/${_id}`);
};

export const addReunificationCase = async (formData) => {
    try {
        const reunificationCase = {
            parents: formData.parents,
            children: formData.children,
            active: formData.active,
            reunion_date: formData.reunion_date,
            reunion_location: formData.reunion_location
        };

        return await axios.post(`${baseUrl}/familyReunification`, reunificationCase);
    } catch (error) {
        console.error("Error adding reunification case:", error);
    }
};

export const updateReunificationCase = async (reunificationCase) => {
    try {
        const response = await axios.put(
            `${baseUrl}/familyReunification/${reunificationCase._id}`, reunificationCase);
        return response.data;
    } catch (error) {
        console.error("Error updating reunification case:", error);
    }
};
export const deleteReunificationCase = async (_id) =>{
    try{
        return await axios.delete(`${baseUrl}/familyReunification/${_id}`);
    } catch (error){
        console.log("Error deleting reunification case", error);
    }
};

