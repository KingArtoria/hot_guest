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
// ? 内购列表
export const getInnerList = data => {
  return request({
    method: 'post',
    url: '/order/goodslist',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 创建订单
export const createOrder = data => {
  return request({
    method: 'post',
    url: '/order/goodsorderadd',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 黑卡申请
export const applyBlackCard = data => {
  return request({
    method: 'post',
    url: '/Blackcard/applyForBlackCard',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 我发布的
export const getMyRelease = data => {
  return request({
    method: 'post',
    url: '/member/member_project',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 项目详情
export const getProjectDetail = data => {
  return request({
    method: 'post',
    url: '/comprehensive/Info',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 查看联系方式
export const getContact = data => {
  return request({
    method: 'post',
    url: '/comprehensive/GetContactInfo',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取评论内容
export const getComment = data => {
  return request({
    method: 'post',
    url: '/comprehensive/getCommentContent',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 收藏
export const collect = data => {
  return request({
    method: 'post',
    url: '/member/keep',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 评论
export const comment = data => {
  return request({
    method: 'post',
    url: '/comprehensive/setComments',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取评论默认文本
export const getCommentDefault = data => {
  return request({
    method: 'post',
    url: '/comprehensive/getCommentContent',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 他人个人信息
export const getOtherUserInfo = data => {
  return request({
    method: 'post',
    url: '/friend/getFriendHome',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 他人发布的
export const getOtherRelease = data => {
  return request({
    method: 'post',
    url: '/friend/friend_project',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 添加好友
export const addFriend = data => {
  return request({
    method: 'post',
    url: '/friend/addFriendapply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 担保交易
export const guarantee = data => {
  return request({
    method: 'post',
    url: '/Guarantee/establishGuarantee',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 首页数据
export const getHomeData = data => {
  return request({
    method: 'post',
    url: '/index/index',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 分类菜单
export const getCategoryMenu = data => {
  return request({
    method: 'post',
    url: '/index/getMenu',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 我的收藏
export const getMyCollect = data => {
  return request({
    method: 'post',
    url: '/member/member_keep',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 我的道具
export const getMyProps = data => {
  return request({
    method: 'post',
    url: '/member/user_coupons',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 一级使用道具
export const usePropsOne = data => {
  return request({
    method: 'post',
    url: '/coupons/useCouponsList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 二级使用道具
export const usePropsTwo = data => {
  return request({
    method: 'post',
    url: '/coupons/useCoupons',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 担保记录
export const getGuaranteeRecord = data => {
  return request({
    method: 'post',
    url: '/Guarantee/member_Guarantee',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 意见反馈
export const feedback = data => {
  return request({
    method: 'post',
    url: '/member/feedback',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 修改手机号
export const changePhone = data => {
  return request({
    method: 'post',
    url: '/member/changephone',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 添加关键词
export const addKeyword = data => {
  return request({
    method: 'post',
    url: '/Keywords/setKeyword',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 删除关键词
export const deleteKeyword = data => {
  return request({
    method: 'post',
    url: '/Keywords/updateKeyword',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取邀请码
export const getInviteCode = data => {
  return request({
    method: 'post',
    url: '/shell/getCashList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 返现列表
export const getBackCashList = data => {
  return request({
    method: 'post',
    url: '/shell/sumMoneyList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 修改密码
export const changePassword = data => {
  return request({
    method: 'post',
    url: '/login/forgetPass',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}