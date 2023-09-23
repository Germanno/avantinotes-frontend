import axios from "axios";

export const api = axios.create({
  baseURL: 'https://avantinotes-api.onrender.com'
});