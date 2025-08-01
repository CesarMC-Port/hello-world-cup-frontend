import { axiosQuery } from '../utils/axios.js'

export const indexUser = async ({callback=() => {}}) => {
    try {
        const response = await axiosQuery.get('/users');
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}

export const getUser = async ({callback=() => {}}) => {
    try {
        const response = await axiosQuery.get('/user');
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
    }
}
