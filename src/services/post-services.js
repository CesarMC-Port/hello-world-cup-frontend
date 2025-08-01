import { axiosQuery } from '../utils/axios.js'

export const createPost = async ({callback=() => {}}) => {
    try {
        const response = await axiosQuery.post('/publication');
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}

export const indexPost = async ({callback=() => {}}) => {
    try {
        const response = await axiosQuery.get('/publication');
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}
