<template>
  <view>
    <!-- 头部 -->
    <Head :title="title" />
    <!-- 内容 -->
    <view class="content">
      <!-- 项目列表 -->
      <Project :list="list" />
    </view>
  </view>
</template>
<script>
import Head from "../../components/Head";
import Project from "../../components/Project";
import { search } from "../../utils/api";
export default {
  data() {
    return {
      // 标题
      title: "",
      // 列表
      list: [],
      // 搜索参数
      params: {
        page: 1,
        num: 10,
        title: "",
      },
    };
  },
  methods: {
    // 获取列表
    search() {
      search(this.params).then((res) => {
        res.data.list.forEach((item) => {
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 时间删除最后3位
          item.addtime = item.addtime.slice(0, -3);
          // 不同类型展示的tag不一样(字段, 标签)
          switch (item.type) {
            case 1:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "广告甲方";
              break;
            case 2:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "流量乙方";
              break;
            case 3:
              item.k = [item.product, item.source];
              item.typeName = "优质货源";
              break;
            case 4:
              item.k = [item.settcycle_id, item.source, item.product];
              item.typeName = "销售渠道";
              break;
            case 5:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = "资源互换";
              break;
            case 6:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = "流量互换";
              break;
            case 7:
              item.k = [item.product, item.comprehensive];
              item.typeName = "招商加盟";
              break;
            case 8:
              item.k = [item.product, `曝光：${item.user_number}`];
              item.typeName = "线下广告";
              break;
            case 9:
              item.k = [item.product, item.comprehensive];
              item.typeName = "线下场地";
              break;
            case 10:
              item.k = [item.product];
              item.typeName = "免费福利";
              break;
            case 11:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "海外项目";
              break;
          }
        });
        this.list = res.data.list;
      });
    },
  },
  onLoad(op) {
    // 标题赋值
    this.title = op.title;
    // 初始化opid的值
    this.params.type = op.id;
    // 获取列表
    this.search();
  },
  components: { Head, Project },
};
</script>

<style lang="scss" scoped>
@import "./list.scss";
</style>