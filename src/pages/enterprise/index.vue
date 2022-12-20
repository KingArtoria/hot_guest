<template>
  <view>
    <Head title="查企业" />
    <view class="content">
      <!-- 标语 -->
      <image
        class="content_1"
        src="http://39.106.208.234/pic/img/chaqy_wa.png"
      />
      <!-- 搜索框 -->
      <view class="content_2" @click="goSearch">输入企业名称或关键词</view>
      <!-- 热搜 -->
      <view class="content_3">
        <image
          class="content_3_1"
          src="http://39.106.208.234/pic/img/resou.png"
        />
        <view
          class="content_3_2"
          v-for="(item, index) in hotSearch"
          :key="index"
          >{{ item.com_legal }}</view
        >
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getQyApi } from "../../utils/api";
export default {
  data() {
    return {
      // 热搜参数
      hotSearchParams: {
        pageNo: 1,
        url: "/api/company/getHotPeople",
        pageSize: 5,
      },
      // 热搜
      hotSearch: [],
    };
  },
  methods: {
    // 前往搜索
    goSearch() {
      uni.navigateTo({
        url: "/pages/enterprise/search",
      });
    },
    // 获取热搜
    getHotSearch() {
      getQyApi(this.hotSearchParams).then((res) => {
        this.hotSearch = res.data.list;
      });
    },
  },
  onLoad() {
    // 获取热搜
    this.getHotSearch();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
