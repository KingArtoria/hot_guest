<script>
import Vue from "vue";
import { getUserInfo } from "./utils/api";
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
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
<style>
@import "./index.css";
</style>
