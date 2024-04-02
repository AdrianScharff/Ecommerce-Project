import axios from 'axios'
const BASE_URL = 'https://ecommerce-api-json-server-jwt-dev-f.onrender.com/'

const fetchAllItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}items`)
        const { data } = response
        return data
    } catch (error) {
        console.error(error);
    }
}

const fetchSelectedItem = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}items/${id}`)
        const { data } = response
        return data
    } catch (error) {
        console.error(error);
    }
}

const fetchSearchedItems = async (text) => {
    try {
        const response = await axios.get(`${BASE_URL}items`)
        const { data } = response
        if (text) {
            const normalizedText = text.normalize('NFD').toLowerCase()
            const itemMatches = data.filter(i => {
                const normalizedName = i.product_name.normalize('NFD').toLowerCase()
                return normalizedName.startsWith(normalizedText)
            })
            return itemMatches
        }
        return []
    } catch (error) {
        console.error(error);
    }
}

const addNewItem = async (data, token) => {
    try {
        return await axios.post(`${BASE_URL}items`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
        throw error
    }
}

export { fetchAllItems, fetchSelectedItem, fetchSearchedItems, addNewItem }