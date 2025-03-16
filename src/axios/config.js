import axios from 'axios';


const API_KEY = '9e6e419b-ff05-442b-8587-7fb9c5d97741';
const API_URL = 'https://momentum.redberryinternship.ge/api';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});

export default axiosInstance;