/* eslint-disable no-unused-vars */
import axios from 'axios'
import SecurityService from '../services/security-service'

const API_BASE_URL = 'https://303e-117-248-63-31.ngrok-free.app'

const authInstanceHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': '3600',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// AXIOS INSTANCE FOR PRE-AUTHENTICATION -----------------------------
export const wpAuthInstance = axios.create({
  baseURL: API_BASE_URL,
})

// AXIOS INSTANCE FOR POST-AUTHENTICATION -----------------------------
export const wpAppInstance = axios.create({
  baseURL: API_BASE_URL,
})

// INTERCEPTOR : REQUEST
wpAppInstance.interceptors.request.use(
  (request) => {
    if (SecurityService.getSecurityToken()) {
      request.headers['Authorization'] = `Bearer ${SecurityService.getSecurityToken()}`
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

// INTERCEPTOR : RESPONSE
wpAppInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)
