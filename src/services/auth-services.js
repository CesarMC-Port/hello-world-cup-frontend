import { axiosQuery } from '../utils/axios.js'

export const login = async (data,callback=() => {}) => {
    try {
        const response = await axiosQuery.post('/login', data);
        return response.data;
    } catch (error) {
        return callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}

export const register = async (data,callback=() => {}) => {
    try {
        const response = await axiosQuery.post('/register', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        return callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}