<script>
import Vue from "vue";
import GoEasy from "goeasy";
import { checkHotUpdate, getUserInfo } from "./utils/api";
export default {
  methods: {
    // 获取用户信息
    getUserInfo() {
      // 获取用户信息API
      getUserInfo().then((res) => {
        // head是否包含http
        if (res.data.head.indexOf("http") === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        Vue.prototype._userInfo = res.data;
        // 建立连接;
        this.goeasy.connect({
          // id标识
          id: this._userInfo.id + "",
          // 自定义数据
          data: {
            // 头像
            head: this._userInfo.head,
            // 名字
            nickName: this._userInfo.nick_name,
            // 公司
            company: this._userInfo.company,
            // 职位
            position: this._userInfo.position,
          },
          // 成功回调
          onSuccess: () => console.log("链接成功"),
          // 失败回调
          onFailed: (error) => console.log(`链接失败${error.content}`),
          // 重连
          onProgress: (attempts) => console.log(`重连中${attempts}`),
        });
      });
    },
    // 热更新
    checkHotUpdate() {
      // 热更新接口
      checkHotUpdate().then((res) => {
        // 声明全局热更新
        Vue.prototype._hotUpdate = res;
      });
    },
  },
  onLaunch() {
    // 声明全局版本号变量
    Vue.prototype._version = "5.0.7";
    // 声明全局来源
    Vue.prototype._source = "直推";
    // 声明全局类型
    Vue.prototype._type = "and";
    // 声明头像资源路径
    Vue.prototype._avatarUrl = "https://admin.bdhuoke.com";
    // 接口地址
    Vue.prototype._apiUrl = "http://appv5.bdhuoke.com/";
    // 图片资源路径
    Vue.prototype._url = "http://39.106.208.234/pic/img_/";
    // 道具资源路径
    Vue.prototype._propUrl = "http://39.106.208.234";
    // 初始化全局用户信息
    Vue.prototype._userInfo = {};
    // 初始化GoEasy
    Vue.prototype.goeasy = GoEasy.getInstance({
      host: "hangzhou.goeasy.io",
      appkey: "BC-ad662406fecb4b58bcd6e609416cf61f",
      modules: ["pubsub", "im"],
    });
    // 声明全局常用语变量
    if (!uni.getStorageSync("common"))
      uni.setStorageSync("common", [
        "你好，我有您需要的资源，可合作",
        "你好，我想了解这个资源，方便聊聊吗？",
        "你好，合作有什么要求吗？",
      ]);
    // 获取用户信息
    this.getUserInfo();
    //? 监听中间按钮
    uni.onTabBarMidButtonTap(() => {
      uni.navigateTo({
        url: "/pages/release/index",
      });
    });
    let a, b;
    b = ((a = 3 * 5), a * 4);
    a + 15;
    // 热更新
    this.checkHotUpdate();
  },
};
</script>

<style lang="scss">
.placeholderClass {
  color: red;
}

@import "uview-ui/index.scss";
</style>
<style>
@import "./index.css";
</style>
