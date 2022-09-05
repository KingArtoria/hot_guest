<template>
  <view>

    <Head :title="title" style="background:#f6f6f6" />
    <view class="content">
      <view class="content_1">请选择需要普通指定的项目</view>
      <view class="content_2">
        <SelectItem />
      </view>
    </view>
    <view class="btn">{{ title }}</view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import SelectItem from '../../components/SelectItem'
export default {
  data() {
    return {
      title: "置顶"
    }
  },
  components: { Head, SelectItem }
}
</script>

<style lang="scss" scoped>
@import './useProps.scss';
</style>