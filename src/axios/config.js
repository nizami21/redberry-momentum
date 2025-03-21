import axios from 'axios';


const API_KEY = '9e7c5ffa-c54e-49d5-adc8-402887b80386';
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