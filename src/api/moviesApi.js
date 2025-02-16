import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const getMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}discover/movie`, {
            params: {
                api_key: API_KEY 
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
        return []
    }
}