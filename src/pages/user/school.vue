<template>
  <view>
    <Head title="学校名称" style="background: #f6f6f6" />
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
        <u--input placeholder="输入学校名称" fontSize="28px" border="none" clearable v-model="keyword" confirm="search" @confirm="getSchool" />
      </view>
      <view class="content_2" v-for="(item, index) in schoolList" :key="index" v-html="item.showName" @click="selectSchool(item)" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { getSchool } from '../../utils/api';
export default {
  data() {
    return {
      // 学校列表
      schoolList: [],
      // 搜索关键字
      keyword: '',
    };
  },
  methods: {
    // 获取学校
    getSchool() {
      getSchool({ name: this.keyword }).then(res => {
        // 如果name中包含关键词则变色
        res.data.forEach(item => {
          item.showName = item.name.replace(this.keyword, `<span style="color: #1f73f1">${this.keyword}</span>`);
        });
        this.schoolList = res.data;
      });
    },
    // 选中学校
    selectSchool(item) {
      uni.$emit('updateUserInfo', [
        { key: 'school', value: item.id },
        { key: 'schoolname', value: item.name },
      ]);
      uni.navigateBack();
    },
  },
  onLoad() {
    // 获取学校
    this.getSchool();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './school.scss';
</style>
