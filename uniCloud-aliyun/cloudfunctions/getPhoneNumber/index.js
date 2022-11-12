'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  const res = await uniCloud.getPhoneNumber({
    appid: '__UNI__81DA490',
    provider: 'univerify',
    apiKey: 'ef0e9382458a6553e5a482c67347f729', // 在开发者中心开通服务并获取apiKey
    apiSecret: '8b07b4682176f2de976c261d6faaf223', // 在开发者中心开通服务并获取apiSecret
    access_token: event.access_token,
    openid: event.openid
  });
  return res
};