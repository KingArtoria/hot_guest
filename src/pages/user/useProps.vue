<template>
  <view>
    <!-- 头部 -->
    <Head title="使用道具" style="background: #f6f6f6" />
    <!-- 内容 -->
    <view class="content">
      <!-- 内容列表 -->
      <view class="content_1">
        <!-- 单个内容 -->
        <view
          class="content_1_1"
          v-for="(item, index) in useProps"
          :key="index"
          @click="checkedProps(item)"
        >
          <!-- 未选中 -->
          <image
            class="content_1_1_1"
            src="http://39.106.208.234/pic/img_/wx_kong.png"
            v-show="!item.checked"
          />
          <!-- 选中 -->
          <image
            class="content_1_1_1"
            src="http://39.106.208.234/pic/img_/xuanzhong.png"
            v-show="item.checked"
          />
          <!-- 右侧内容 -->
          <view class="content_1_1_2">{{ item.title }}</view>
        </view>
      </view>
    </view>
    <!-- 使用按钮 -->
    <view class="use" @click="usePropsTwo">使用</view>
    <!-- 使用成功模态框 -->
    <u-modal
      :show="useModal.show"
      :title="useModal.title"
      :content="useModal.content"
      @confirm="useModal.confirm"
    />
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { usePropsTwo } from "../../utils/api";
export default {
  data() {
    return {
      // 使用道具列表
      useProps: [],
      // 使用道具参数
      usePropsParams: {},
      // 使用成功模态框
      useModal: {
        // 是否显示
        show: false,
        // 标题
        title: "使用成功",
        // 内容
        content: "道具使用成功",
        confirm: () => {
          // 关闭模态框
          this.useModal.show = false;
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 选中道具
    checkedProps(item) {
      // 遍历列表
      this.useProps.forEach((item) => {
        // 取消选中
        item.checked = false;
      });
      // 选中当前
      item.checked = true;
      // 参数赋值
      this.usePropsParams.project_id = item.id;
    },
    // 确认使用
    usePropsTwo() {
      // 使用道具二级API
      usePropsTwo(this.usePropsParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 使用成功,显示模态框
        this.useModal.show = true;
      });
    },
  },
  onLoad(op) {
    // 使用道具列表赋值
    this.useProps = uni.getStorageSync("props");
    // 添加是否选中到列表
    this.useProps.forEach((item) => {
      // 添加是否选中
      this.$set(item, "checked", false);
    });
    // 参数赋值
    this.usePropsParams.coupons = op.coupons;
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./useProps.scss";
</style>