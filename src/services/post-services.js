import { axiosQuery } from '../utils/axios.js'

export const createPost = async (data, callback=() => {}) => {
    try {
        const response = await axiosQuery.post('/publication',data);
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
        throw new Error(error?.response?.data?.errors?.error?.[0] || '')
    }
}

export const indexPost = async (callback=() => {}) => {
    try {
        const response = await axiosQuery.get('/publications');
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
        throw new Error(error?.response?.data?.errors?.error?.[0] || '')
    }
}
