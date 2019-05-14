import axios from '@/libs/api.request'

export const getUserList = parameter => {
  return axios.request({
    url: `/api/v1/users?${parameter}`,
    method: 'get'
  })
}

export const createUser = data => {
  return axios.request({
    url: '/api/v1/users',
    data: data,
    method: 'post'
  })
}

export const updateUser = (id, data) => {
  return axios.request({
    url: `/api/v1/users/${id}`,
    data: data,
    method: 'PUT'
  })
}

export const deleteUser = id => {
  return axios.request({
    url: `/api/v1/users/${id}`,
    method: 'delete'
  })
}
