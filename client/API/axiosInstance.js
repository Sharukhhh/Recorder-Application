import Axios from 'axios';

const baseUrl = "http://localhost:5000"

export const axios = Axios.create({
    baseURL : baseUrl,
})

