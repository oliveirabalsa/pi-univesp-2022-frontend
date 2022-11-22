import Axios from 'axios'

export const http = Axios.create({
  baseURL: "https://pi-2022-backend.onrender.com/",
})
