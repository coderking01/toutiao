import request from '../utils/request'

export const login = data => {
  return request({
    method: 'GET',
    url: '/sms/codes/13911111111',
    data
  })
}
