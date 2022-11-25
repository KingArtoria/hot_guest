<template>
  <view>
    <Head title="意见反馈">
      <view slot="head_3_1" :style="slotStyle" @click="feedback">提交</view>
    </Head>
    <view class="content">
      <!-- 内容 -->
      <view class="content_1">
        <u-textarea
          placeholder="请描述您遇到的问题或意见"
          border="none"
          autoHeight
          count
          :maxlength="500"
          confirmType="send"
          @confirm="feedback"
          v-model="feedbackParams.title"
        />
        <u-upload
          style="margin-top: 50rpx; padding-left: 14rpx"
          :fileList="fileList1"
          @afterRead="afterRead"
          @delete="deletePic"
          name="1"
          multiple
          :maxCount="10"
        />
      </view>
      <!-- 联系方式 -->
      <view class="content_2">
        <view class="content_2_1">联系方式</view>
        <u--input
          border="none"
          placeholder="QQ、邮箱或手机号码"
          v-model="feedbackParams.phone"
          fontSize="32rpx"
        />
      </view>
    </view>
    <!-- 意见反馈模态框 -->
    <u-modal
      :show="feedbackModal.show"
      :title="feedbackModal.title"
      :content="feedbackModal.content"
      @confirm="feedbackModal.confirm"
    />
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { feedback } from "../../utils/api";
export default {
  data() {
    return {
      /* 头部样式 */ slotStyle: { "font-size": "28rpx" },
      // 意见反馈参数
      feedbackParams: { pic: "" },
      // 文件列表
      fileList1: [],
      // 意见反馈模态框对象
      feedbackModal: {
        show: false,
        title: "提交成功",
        content: "感谢您的反馈，我们会尽快处理",
        confirm: () => {
          // 隐藏模态框
          this.feedbackModal.show = false;
          // 返回上一页
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 意见反馈
    feedback() {
      // 初始化参数
      this.fileList1.forEach((item) => {
        // url添加到参数里
        this.feedbackParams.pic += item.url + ";";
      });
      // 意见反馈API
      feedback(this.feedbackParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 显示模态框
        this.feedbackModal.show = true;
      });
    },
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(
          fileListLen,
          1,
          Object.assign(item, {
            status: "success",
            message: "",
            url: result,
          })
        );
        fileListLen++;
        console.log(this.fileList1);
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: "http://appv5.bdhuoke.com/app_v5/member/upload",
          filePath: url,
          name: "file",
          success: (res) => {
            resolve(JSON.parse(res.data).data);
          },
        });
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./feedback.scss";
</style>
