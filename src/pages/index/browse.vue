<template>
  <view>
    <Head title="查看更多" />
    <view class="content">
      <!-- 信息 -->
      <view
        class="content_1"
        v-for="(item, index) in visitors.slice(0, 1000)"
        :key="index"
        @click="goPersonal(item.id)"
      >
        <!-- 头像 -->
        <image class="content_1_1" :src="item.head" />
        <!-- 文本信息 -->
        <view class="content_1_2">
          <!-- 上盒子 -->
          <view class="content_1_2_1">
            <!-- 名字 -->
            <view class="content_1_2_1_1">{{ item.nick_name }}</view>
          </view>
          <!-- 下盒子 -->
          <view class="content_1_2_2">
            <!-- 职位 -->
            <view class="content_1_2_2_1"
              >{{ item.position }}{{ item.company }}</view
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getMoreView } from "../../utils/api";
export default {
  data() {
    return {
      // 浏览人
      visitors: [],
      // 页码
      page: 1,
      // op
      op: "",
      // 总页码
      totalPage: 0,
    };
  },
  methods: {
    // 前往个人页
    goPersonal(id) {
      uni.navigateTo({
        url: `/pages/contacts/personal?id=${id}`,
      });
    },
    // 获取更多浏览
    getMoreView(op) {
      // 更多浏览API
      getMoreView({ fid: op.fid, page: this.page }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 赋值
          this.visitors.push(item);
        });
      });
    },
  },
  onLoad(op) {
    // 获取更多浏览
    this.getMoreView(op);
    // op赋值
    this.op = op;
    // 计算总页码
    this.totalPage = Math.ceil(op.total / 10);
  },
  // 滚动到底部
  onReachBottom() {
    // 页码+1
    this.page++;
    // 判断页码是否大于总页码
    if (this.page > this.totalPage) {
      // 提示
      uni.showToast({
        title: "没有更多了",
        icon: "none",
      });
      return;
    }
    // 获取更多浏览
    this.getMoreView(this.op);
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./browse.scss";
</style>
