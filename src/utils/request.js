const request = (config) => {
  config.url = `http://appv5.bdhuoke.com/app_v5${config.url}`;
  if (!config.data) {
    config.data = {};
  }
  if (uni.getStorageSync('token')) config.header.token = uni.getStorageSync('token');
  let promise = new Promise(function (resolve, reject) {
    uni.request(config).then(responses => {
      if (responses[0]) {
        uni.showToast({
          title: '网络超时,请刷新重试',
          duration: 3000,
          icon: 'none'
        });
        reject({ message: "网络超时" });
      } else {
        let response = responses[1].data;
        if (response.code == -2) {
          // 删除token
          uni.removeStorageSync('token');
          return
        }
        resolve(response);
      }
    }).catch(error => {
      reject(error);
    })
  })
  return promise;
};
export default request;