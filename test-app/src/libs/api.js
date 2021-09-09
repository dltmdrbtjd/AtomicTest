import api from './axios'

export const RegisterApi = (userinfo) => api.post('/sign-up', userinfo)

export const LoginApi = (userinfo) => api.post('/login', userinfo)

export const LoadOrderList = (page) => api.get(`/order?page=${page}`)

export const DetailOrderLoad = (id) => api.get(`/order/${id}`)
