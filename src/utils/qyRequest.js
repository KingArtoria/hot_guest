const request = (config) => {
  config.url = 'https://appv41.bdhuoke.com/api/v5/Apicurl/curl';
  if (!config.data) {
    config.data = {};
  }
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
        resolve(response);
      }
    }).catch(error => {
      reject(error);
    })
  })
  return promise;
};
export default request;