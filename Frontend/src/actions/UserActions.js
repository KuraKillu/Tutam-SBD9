import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const signUp = async (beData
    
) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/signUp`, beData
            
        );
        console.log("Backend Success");
        return baseApiResponse(response.data, true);
    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
};

export const login = async (beData
    
) => {
    try{
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/login`, beData
            
        );
        console.log("Backend Success");
        return baseApiResponse(response.data, true);
    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
}

export const getUserId = async (beData
    
) => {
    try{
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/getUserId/:user_id`, beData
            
        );
        console.log("Backend Success");
    } catch (err) {
        console.error(err);
        return baseApiResponse(null, false);
    }
}