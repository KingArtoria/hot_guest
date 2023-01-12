<template>
  <view>
    <Head title="邀请有礼">
      <view slot="head_3_1" :style="slotStyle" @click="test.savePoster"
        >保存</view
      >
    </Head>
    <view class="content" id="content">
      <!-- 二维码展示 -->
      <image class="content_1" crossorigin="anonymous" :src="qrCodeImgUrl" />
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { base64ToPath } from "image-tools";
import { generateCode } from "../../utils/api";
export default {
  data() {
    return {
      // 插槽样式
      slotStyle: {
        "font-size": "30rpx",
        "font-weight": "500",
        color: "#000000",
      },
      // 二维码链接
      qrCodeUrl: "",
      // 二维码图片链接
      qrCodeImgUrl: "",
      // 海报链接
      posterUrl: "",
    };
  },
  methods: {
    // 生成二维码
    generateCode() {
      // 生成二维码API
      generateCode({ url: this.qrCodeUrl }).then((res) => {
        // 图片链接赋值
        this.qrCodeImgUrl = `data:image/png;base64,${res}`;
      });
    },
    // 保存海报
    handleResult(dataUrl) {
      console.log(dataUrl);
      base64ToPath(dataUrl).then((res) => {
        uni.saveImageToPhotosAlbum({
          filePath: res,
          success: (res) => {
            showToast("保存成功,前往系统相册查看");
          },
        });
      });
    },
  },
  onLoad() {
    // 二维码链接赋值
    this.qrCodeUrl = `http://laxin.channel.bdhuoke.com?code=${this._userInfo.Invitation_code}`;
    // 生成二维码
    this.generateCode();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./poster.scss";
</style>
<script module="test" lang="renderjs">
import html2canvas from "html2canvas";
	export default {
		methods: {
      // 保存海报
      savePoster() {
        this.$nextTick(() => {
          let el = document.getElementById('content')
          html2canvas(el).then(canvas => {
            const dataUrl = canvas.toDataURL('images/png');
            this.$ownerInstance.callMethod('handleResult', dataUrl)
          });
        })
      },
		},
		mounted() {
		},
	}
</script>