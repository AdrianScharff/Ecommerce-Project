import axios from 'axios'
const BASE_URL = 'https://ecommerce-api-json-server-jwt-dev-f.onrender.com/'

const registerUser = async (data) => {
    try {
        return await axios.post(`${BASE_URL}register`, data)
    } catch (error) {
        throw error
    }
}

const loginUser = async (data) => {
    try {
        return axios.post(`${BASE_URL}login`, data)
    } catch (error) {
        throw error
    }
}

const getUserData = async (token) => {
    try {
        return await axios.get(`${BASE_URL}me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
        throw error
    }
}

export { registerUser, loginUser, getUserData }