import qyRequest from './qyRequest';
import request from './request';
import qs from 'qs'
// ? 企业接口中转
export const getQyApi = data => {
  return qyRequest({
    method: 'post',
    url: 'https://appv41.bdhuoke.com/api/v5/Apicurl/curl',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 账号密码登录
export const passwordLogin = data => {
  return request({
    method: 'post',
    url: '/login/dologin',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取验证码
export const getVerificationCode = data => {
  return request({
    method: 'post',
    url: '/Alibabasms/sms',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 手机号码登录
export const phoneLogin = data => {
  return request({
    method: 'post',
    url: '/login/loginnopass',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 注册
export const register = data => {
  return request({
    method: 'post',
    url: '/login/sign',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}