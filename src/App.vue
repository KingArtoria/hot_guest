<script>
import Vue from 'vue';
export default {
  onLaunch() {
    // 声明全局版本号变量
    Vue.prototype._version = '5.0.0';
  },
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
</style>
<style>
@import './index.css';
</style>
