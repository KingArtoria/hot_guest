<script>
import Vue from "vue";
import GoEasy from "goeasy";
import { getUserInfo } from "./utils/api";
import { connect } from "./utils";
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
        // 创建GoEasy参数
        let params = {
          goeasy: this.goeasy,
          id: res.data.id,
          nickname: res.data.nick_name,
          head: res.data.head,
        };
        // 建立GoEasy链接
        connect(params);
      });
    },
  },
  onLaunch() {
    // 声明全局版本号变量
    Vue.prototype._version = "5.0.0";
    // 声明全局来源
    Vue.prototype._source = "小米";
    // 声明全局类型
    Vue.prototype._type = "android";
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
    // 获取用户信息
    this.getUserInfo();
    // 初始化GoEasy
    Vue.prototype.goeasy = GoEasy.getInstance({
      host: "hangzhou.goeasy.io",
      appkey: "BC-ad662406fecb4b58bcd6e609416cf61f",
      modules: ["pubsub", "im"],
    });
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
<style>
@import "./index.css";
</style>
