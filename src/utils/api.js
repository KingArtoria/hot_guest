import qyRequest from './qyRequest';
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