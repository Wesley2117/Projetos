// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/' // URL base para requisições da API ViaCEP
});

export default api;
