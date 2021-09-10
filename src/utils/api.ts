import axios from 'axios'

type HeaderType = {
  Authorization?: string
  Accept: string
}

const api_token =
  localStorage.getItem('identity') ?? process.env.REACT_APP_AUTH_KEY
const headers: HeaderType = {
  Accept: 'application/json',
}

if (api_token) {
  headers.Authorization = `Token token=${api_token}`
}

const api_url = process.env.REACT_APP_API_URL

const Api = axios.create({
  baseURL: api_url,
  headers,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
})

export default Api
