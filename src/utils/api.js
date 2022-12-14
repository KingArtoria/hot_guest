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
// ? 搜索
export const search = data => {
  return request({
    method: 'post',
    url: '/index/search',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 签到信息
export const getSignInfo = data => {
  return request({
    method: 'post',
    url: '/coupons/getSignInfo',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 签到
export const sign = data => {
  return request({
    method: 'post',
    url: '/coupons/setPunchCard',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 兑换列表
export const getExchangeList = data => {
  return request({
    method: 'post',
    url: '/order/getCoupons',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 兑换
export const exchange = data => {
  return request({
    method: 'post',
    url: '/coupons/setCoupons',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 推荐人脉
export const getRecommend = data => {
  return request({
    method: 'post',
    url: '/friend/getRecommendList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 搜索人脉
export const searchFriend = data => {
  return request({
    method: 'post',
    url: '/friend/searchFriendapply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 我的好友
export const getMyFriend = data => {
  return request({
    method: 'post',
    url: '/Friend/getFriendList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 通知
export const getNotice = data => {
  return request({
    method: 'post',
    url: '/friend/manageFriendapply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 加好友请求处理
export const handleFriend = data => {
  return request({
    method: 'post',
    url: '/friend/agreeFriendapply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 申请广告
export const applyAd = data => {
  return request({
    method: 'post',
    url: '/Advertising/setAdverting',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取排行榜
export const getRank = data => {
  return request({
    method: 'post',
    url: '/other/ranking_List',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 兑换记录
export const getExchangeRecord = data => {
  return request({
    method: 'post',
    url: '/member/coupons_log',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 主题图标
export const getThemeIcon = data => {
  return request({
    method: 'post',
    url: '/other/theme',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 下拉选项
export const getSelect = data => {
  return request({
    method: 'post',
    url: '/Comprehensive/typeList',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 发布项目
export const publishProject = data => {
  return request({
    method: 'post',
    url: '/Comprehensive/comprehensiveAdd',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 实名认证检测
export const checkRealName = data => {
  return request({
    method: 'post',
    url: '/other/authentication_verification',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 实名认证
export const realName = data => {
  return request({
    method: 'post',
    url: '/other/authentication',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 微信支付
export const wxPay = data => {
  return request({
    method: 'post',
    url: '/wxpay/pay',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 支付宝支付
export const aliPay = data => {
  return request({
    method: 'post',
    url: '/zfbpay/alipay',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 删除好友
export const deleteFriend = data => {
  return request({
    method: 'post',
    url: '/friend/putDelFriend',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 修改备注
export const editRemark = data => {
  return request({
    method: 'post',
    url: '/friend/saveName',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 系统通知
export const getSystemNotice = data => {
  return request({
    method: 'post',
    url: '/member/getMessage',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 微信登录
export const wxLogin = data => {
  return request({
    method: 'post',
    url: '/login/wxlogin',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 绑定手机号
export const bindPhone = data => {
  return request({
    method: 'post',
    url: '/login/phonebind',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 一键登录
export const oneKeyLogin = data => {
  return request({
    method: 'post',
    url: '/login/phoneaKeyBind',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取合作评论
export const getCooperationComment = data => {
  return request({
    method: 'post',
    url: '/member/mycomment',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取活动弹窗
export const getActivityPopup = data => {
  return request({
    method: 'post',
    url: '/Version/popup',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取通讯录好友
export const getContactFriend = data => {
  return request({
    method: 'post',
    url: '/friend/detectionApply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  });
}
// ? 短信邀请
export const smsInvite = data => {
  return request({
    method: 'post',
    url: '/friend/addBookNonFriendapply',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 版本检测
export const checkVersion = data => {
  return request({
    method: 'post',
    url: '/Version/appActive',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 热更新检测接口
export const checkHotUpdate = data => {
  return request({
    method: 'post',
    url: '/Version/hot',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 苹果支付校验接口
export const applePayCheck = data => {
  return request({
    method: 'post',
    url: '/verify/applepay',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 获取轮播
export const getBanner = data => {
  return request({
    method: 'post',
    url: '/other/swiper',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 申请城市代理
export const applyCityAgent = data => {
  return request({
    method: 'post',
    url: '/Advertising/setAgent',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 申请项目合作
export const applyProjectCooperation = data => {
  return request({
    method: 'post',
    url: '/Advertising/setProject',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 钱包余额
export const getWalletBalance = data => {
  return request({
    method: 'post',
    url: '/member/wallet',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 生成二维码
export const generateCode = data => {
  return request({
    method: 'post',
    url: '/other/qrcode',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}
// ? 查看更多浏览人数
export const getMoreView = data => {
  return request({
    method: 'post',
    url: '/comprehensive/get_visitors',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  });
}