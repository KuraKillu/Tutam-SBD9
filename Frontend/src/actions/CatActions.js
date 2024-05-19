import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const getCattos = async () => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cats/cattos`);

        console.log("Backend Success");
        return baseApiResponse(response.data, true);

    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
};

export const createCattos = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/cats/createcattos`, formData);
        console.log("Backend Success");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
};

export const deleteCattos = async (formData) => {
    try{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/cats/deletecattos/:cat_id`,{ data: formData });
        console.log("Backend Success");
        return baseApiResponse(response.data, true);
    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
};