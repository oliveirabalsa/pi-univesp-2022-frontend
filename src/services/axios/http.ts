import Axios from 'axios'

export const http = Axios.create({
  baseURL: "https://pi-univesp-2022-backend.herokuapp.com/",
})