<template>
  <view>
    <view class="head">
      <image class="head_1" src="http://39.106.208.234/pic/img/black_icon_w.png" />
      <view class="head_2">
        <u--input placeholder="请输入内容" border="none" clearable fontSize="28rpx" :customStyle="{ height: '88rpx' }" v-model="search.keyWord" confirm-type="search" @confirm="searchEnterprise(2)" />
      </view>
    </view>
    <view class="content">
      <!-- 总数提示 -->
      <view class="content_1">
        <!-- 方块 -->
        <image class="content_1_1" src="http://39.106.208.234/pic/img/ssxq.png" />
        <!-- 提示 -->
        <text class="content_1_2"
          >共搜索到
          <text style="color: #0068de">{{ total }}</text>
          公司
        </text>
      </view>
      <Corporate :corporate="searchList" />
      <!-- 加载中 -->
      <u-loadmore :status="status" fontSize="28rpx" iconSize="28rpx" loadingText="努力加载中，先喝杯茶" />
    </view>
    <!-- 加载页 -->
    <u-loading-page :loading="loading" fontSize="28rpx" loadingText="努力加载中，先喝杯茶" />
  </view>
</template>

<script>
import Corporate from '../../components/Corporate';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 搜索参数
      search: {
        keyWord: '',
        pageNo: 1,
        url: '/api/company/getListAllByCondition',
      },
      // 搜索列表
      searchList: [],
      // 总数
      total: 0,
      // 加载页
      loading: false,
      // 加载中状态
      status: 'nomore',
    };
  },
  methods: {
    // 搜索企业
    searchEnterprise(loadingType = 0) {
      // 是否在加载中
      if (this.loading || this.status == 'loading') return;
      // 加载类型
      // 首次加载
      if (loadingType == 0) this.loading = true;
      // 分页加载
      else if (loadingType == 1) this.status = 'loading';
      // 搜索加载
      else if (loadingType == 2) {
        this.search.pageNo = 1;
        this.searchList = [];
        this.loading = true;
      }
      getQyApi(this.search).then(res => {
        // 保留之前的值
        res.data.list.forEach(item => {
          // 企业logo赋值
          this.$set(item, 'logo', item.company.substring(0, 4));
          // 搜索变色
          this.$set(item, 'companyName', item.company.replace(this.search.keyWord, `<text style="color: #0068de">${this.search.keyWord}</text>`));
          // 列表数组追加
          this.searchList.push(item);
        });
        // 总数赋值
        this.total = res.data.totalCount;
        // 加载放开
        this.loading = false;
        // 加载放开
        this.status = 'nomore';
      });
    },
  },
  onLoad() {
    // 搜索企业
    this.searchEnterprise();
  },
  // 滚动到底部监听
  onReachBottom() {
    // 页码加1
    this.search.pageNo += 1;
    // 搜索企业
    this.searchEnterprise(1);
  },
  components: { Corporate },
};
</script>

<style lang="scss" scoped>
@import './search.scss';
</style>
