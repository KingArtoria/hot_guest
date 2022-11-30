import GoEasy from 'goeasy'
// * 时间戳转换为自定义格式
export const formatTime = (time, format) => {
  if (!time) {
    return '';
  }
  let date = new Date(time);
  let fmt = format || 'yyyy-MM-dd hh:mm:ss';
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}
// * 消息提示
export const showToast = (title) => uni.showToast({ title: title, duration: 3000, icon: 'none' });
// * 非空校验
export const isNull = (value) => {
  // 循环value对象查看数据是否正常
  for (let key in value) {
    if (value[key] === null || value[key] === undefined || value[key] === '') {
      return true;
    }
  }
  return false;
}
// * 建立链接
export const connect = (data) => {
  data.goeasy.connect({
    id: data.id,
    data: { "avatar": data.avatar, "nickname": data.nickname },
    onSuccess: () => {
      console.log("链接成功")
    },
    onFailed: (error) => {
      console.log(`链接失败:${error}`);
    },
    onProgress: (attempts) => {
      console.log(`正在进行重连:${attempts}`);
    }
  });
}
// * 私聊信息
export const privateChat = (data) => {
  console.log(data)
  var im = data.im;
  let textMessage = im.createTextMessage({
    text: data.text,
    to: {
      type: GoEasy.IM_SCENE.PRIVATE,
      id: data.id,
      data: { "avatar": data.head, "nickname": data.nickName }
    }
  });
  im.sendMessage({
    message: textMessage,
    onSuccess: message => {
      console.log("发送成功", message);
    },
    onFailed: error => {
      console.log("发送失败", error);
    }
  });
}