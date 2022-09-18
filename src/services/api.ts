import axios from 'axios'

const URL = import.meta.env.VITE_PUBLIC_URL

const api = axios.create({
  baseURL: URL,
})

export default api
