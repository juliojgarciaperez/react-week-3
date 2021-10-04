import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response.status === 401) {
      window.location.replace('/login')
    }
  }
)

export const login = (username, password) => http.post('/login', { username, password })

export const logout = () => http.post('/logout')

export const getEpisodes = () => http.get('/episodes')
