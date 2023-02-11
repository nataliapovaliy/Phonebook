import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})
const setTokenAuth = (value) => {
    axiosInstance.defaults.headers.common['Authorization'] = value
}
export const dellTokenAuth = () => {
    delete axiosInstance.defaults.headers.common['Authorization']
}


export const registerUser = (body) => {
    return axiosInstance.post('/users/signup', body)
}

export const loginUser = async (body) => {
    const { data } = await axiosInstance.post('/users/login', body)
    setTokenAuth(`Bearer ${data.access_token}`)
    return data
}

export const getProfile = async () => {
    const { data } = await axiosInstance('/users/current')
    return data
}