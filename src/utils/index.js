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
export const showToast = (title) => uni.showToast({ title: title, duration: 3000, icon: 'none' });;
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
// * 获取发布内容字段
export const getPublishContent = type => {
  let params = [
    // 标题
    { key: "标题", value: 'title' },
    // 填写字段
    [],
    // 选择字段
    [{ key: "合作地区", value: "area" }],
    // 联系方式
    [
      { key: "联系方式", value: "contact" },
      { key: "微信", value: "wx" },
      { key: "QQ", value: "qq" }
    ]
  ];
  // ? 广告甲方 流量乙方 海外业务
  (type == 1 || type == 2 || type == 11) && params[2].push({ key: "合作类型", value: "cooptype" });
  // ? 广告甲方 流量乙方 海外业务
  (type == 1 || type == 2 || type == 11) && params[2].push({ key: "推广方式", value: "promotion" });
  // ? 广告甲方 流量乙方 优质货源 海外业务
  (type == 1 || type == 2 || type == 3 || type == 11) && params[1].push({ key: "单价", value: "price" });
  // ? 广告甲方 流量乙方 海外业务
  (type == 1 || type == 2 || type == 11) && params[2].push({ key: "结算方式", value: "settmod_id" });
  // ? 广告甲方 流量乙方 销售渠道 海外业务
  (type == 1 || type == 2 || type == 4 || type == 11) && params[2].push({ key: "结算周期", value: "settcycle_id" });
  // ? 广告甲方、流量乙方
  (type == 1 || type == 2) && params[1].push({ key: "详情", value: "info" });;
  // ? 资源互换
  type == 5 && params[1].push({ key: "需求的资源", value: "info" });
  // ? 线下广告
  type == 8 && params[1].push({ key: "合作方式", value: "info" });
  // ? 线下场地
  type == 9 && params[1].push({ key: "需求资源", value: "info" });
  // ? 销售渠道 优质货源
  (type == 4 || type == 3) && params[2].push({ key: "产品类型", value: "product" });
  // ? 招商加盟
  type == 7 && params[2].push({ key: "项目类型", value: "product" });
  // ? 线下广告
  type == 8 && params[2].push({ key: "广告位场景", value: "product" });
  // ? 线下场地
  type == 9 && params[2].push({ key: "场地类型", value: "product" });
  // ? 销售渠道
  type == 4 && params[2].push({ key: "渠道类型", value: "source" });
  // ? 优质货源
  type == 3 && params[2].push({ key: "货源类型", value: "source" });
  // ? 资源互换
  type == 5 && params[2].push({ key: "提供资源类型", value: "source" });
  // ? 流量互换
  type == 6 && params[2].push({ key: "提供用户类型", value: "source" });
  // ? 招商加盟
  type == 7 && params[2].push({ key: "加盟费", value: "comprehensive" });
  // ? 资源互换
  type == 5 && params[2].push({ key: "需求资源类型", value: "comprehensive" });
  // ? 流量互换
  type == 6 && params[2].push({ key: "需求用户类型", value: "comprehensive" });
  // ? 线下场地
  type == 9 && params[2].push({ key: "需求合作模式", value: "comprehensive" });
  // ? 流量互换
  type == 6 && params[1].push({ key: "用户量", value: "user_number" });
  // ? 线下广告
  type == 8 && params[1].push({ key: "日曝光量", value: "user_number" });
  // ? 优质货源
  type == 3 && params[1].push({ key: "产品名称", value: "product_name" });
  // ? 招商加盟
  type == 7 && params[1].push({ key: "项目名称", value: "product_name" });
  // ? 优质货源 销售渠道
  (type == 3 || type == 4) && params[1].push({ key: "一件代发", value: "issuing" });
  // ? 线下场地
  type == 9 && params[1].push({ key: "场地所在区域", value: "issuing" });
  // ? 销售渠道
  type == 4 && params[1].push({ key: "产品要求", value: "product_advantage" });
  // ? 优质货源
  type == 3 && params[1].push({ key: "产品优势", value: "product_advantage" });
  // ? 招商加盟
  type == 7 && params[1].push({ key: "项目简介", value: "product_advantage" });
  // ? 资源互换
  type == 5 && params[1].push({ key: "提供的资源", value: "product_advantage" });
  // ? 流量互换
  type == 6 && params[1].push({ key: "流量载体类型", value: "product_advantage" });
  // ? 销售渠道 招商加盟 资源互换 流量互换
  (type == 4 || type == 7 || type == 5 || type == 6) && params[1].push({ key: "其他补充", value: "supplement" });
  // ? 优质货源
  type == 3 && params[1].push({ key: "相关资质", value: "supplement" });
  // ? 线下场地
  type == 9 && params[1].push({ key: "场地概况", value: "supplement" });
  // ? 销售渠道
  type == 4 && params[1].push({ key: "渠道优势", value: "channel_advantage" });
  // ? 销售渠道
  type == 4 && params[1].push({ key: "渠道简介", value: "introduce" });
  // ? 流量互换
  type == 6 && params[1].push({ key: "可互换位置", value: "introduce" });
  // ? 招商加盟
  type == 7 && params[1].push({ key: "加盟扶持政策", value: "introduce" });
  // ? 销售渠道
  type == 4 && params[1].push({ key: "销货能力", value: "assessment" });
  // ? 资源互换 流量互换
  (type == 5 || type == 6) && params[1].push({ key: "合作要求", value: "assessment" });
  // ? 线下广告
  type == 8 && params[1].push({ key: "广告位资源描述", value: "assessment" });
  // ? 销售渠道 流量互换 线下广告
  (type == 4 || type == 6 || type == 8) && params[1].push({ key: "合作模式", value: "alliance" });
  // ? 招商加盟
  type == 7 && params[1].push({ key: "加盟条件", value: "alliance" });
  // ? 招商加盟
  type == 7 && params[1].push({ key: "预计年利润", value: "profits" });
  // ? 线下广告
  type == 8 && params[1].push({ key: "广告位数量", value: "quantity" });
  // ? 线下场地
  type == 9 && params[1].push({ key: "线下场地数量", value: "amount" });
  console.log(params, 'params')
  return params;
}