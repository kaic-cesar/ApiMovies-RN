import axios from 'axios';
// Axios => é uma biblioteca JavaScript usada para requisições HTTPS para interagir com APIs.

// https://sujeitoprogramador.com/
// r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api;