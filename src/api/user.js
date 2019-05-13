import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password
  }
  return axios.request({
    url: '/token',
    data,
    method: 'post'
  })
}

export const getUserInfo = token => {
  return axios.request({
    url: '/userInfo',
    data: {
      token
    },
    method: 'post'
  })
}

export const logout = token => {
  return axios.request({
    url: '/system/api/logout',
    data: {
      token
    },
    method: 'post'
  })
}
