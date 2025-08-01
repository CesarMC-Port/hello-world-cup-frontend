import { axiosQuery } from '../utils/axios.js'

export const createPost = async (callback=() => {}) => {
    try {
        const response = await axiosQuery.post('/posts');
        return response.data;
    } catch (error) {
        return callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}

export const indexPost = async (callback=() => {}) => {
    try {
        const response = await axiosQuery.get('/posts');
        return response.data;
    } catch (error) {
        return callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}
