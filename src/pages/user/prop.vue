<template>
  <view>
    <Head title="道具商城" />
    <view class="content">
      <view class="content_1">
        <Props v-for="(item, index) in data" :key="index" :item="item" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Props from '../../components/Props';
import { PROPS_IMG } from '../../utils/const';
export default {
  data() {
    return {
      data: [],
    };
  },
  onLoad() {
    this.data = PROPS_IMG;
  },
  components: { Head, Props },
};
</script>

<style lang="scss" scoped>
@import './prop.scss';
</style>
