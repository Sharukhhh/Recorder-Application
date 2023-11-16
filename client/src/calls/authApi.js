import {axios} from '../../API/axiosInstance.js';

export const register = async (newUserData) => {
    try {
        const response = await axios.post('/signup' , newUserData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (userData) => {
    try {
        const response = await axios.post('/login' , userData);

        return response.data;
    } catch (error) {
        throw error;
    }
}