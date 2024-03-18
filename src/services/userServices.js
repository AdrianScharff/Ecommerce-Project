import axios from 'axios'
const BASE_URL = 'http://localhost:3000/'

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