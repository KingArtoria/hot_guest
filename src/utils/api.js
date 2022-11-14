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
// ? 个人信息
export const getUserInfo = data => {
  return request({
    method: 'post',
    url: '/member/getMemberInfo',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 个人信息修改
export const updateUserInfo = data => {
  return request({
    method: 'post',
    url: '/member/memberInfoEdit',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取学校
export const getSchool = data => {
  return request({
    method: 'post',
    url: '/member/getSchoolList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取省
export const getProvince = data => {
  return request({
    method: 'post',
    url: '/area/getProvince',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取市
export const getCity = data => {
  return request({
    method: 'post',
    url: '/area/getCity',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取一级行业
export const getIndustry = data => {
  return request({
    method: 'post',
    url: '/member/getIndustryList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取二级行业
export const getIndustryTwo = data => {
  return request({
    method: 'post',
    url: '/member/getIndustryInfo',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}