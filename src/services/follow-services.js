import { axiosQuery } from '../utils/axios.js'

export const followE = async (teacher_id,callback=() => {}) => {
    try {
        const response = await axiosQuery.post('/follow',{teacher_id});
        return response.data;
    } catch (error) {
        callback(error?.response?.data?.errors?.error?.[0] || '')
        throw new Error(error?.response?.data?.errors?.error?.[0] || '')
    }
}
