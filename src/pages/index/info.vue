<template>
  <view>
    <Head :title="title" />
    <view class="content" v-if="isRender">
      <!-- 项目标题 -->
      <view class="content_1">
        <!-- 标题 -->
        <view class="content_1_1">{{ projectDetail.title }}</view>
        <!-- 时间 -->
        <view class="content_1_2">{{ projectDetail.addtime }}</view>
      </view>
      <!-- 个人信息 -->
      <view class="content_2" @click="goPersonal(projectDetail.member_id)">
        <!-- 头像 -->
        <image class="content_2_1" :src="projectDetail.head" />
        <!-- 文本信息 -->
        <view class="content_2_2">
          <!-- 上盒子 -->
          <view class="content_2_2_1">
            <!-- 名字 -->
            <view class="content_2_2_1_1">{{ projectDetail.nick_name }}</view>
            <!-- 分割线 -->
            <view class="content_2_2_1_2" v-if="projectDetail.position" />
            <!-- 职位 -->
            <view class="content_2_2_1_3">{{ projectDetail.position }}</view>
          </view>
          <!-- 公司 -->
          <view class="content_2_2_2">{{ projectDetail.company }}</view>
        </view>
      </view>
      <!-- 平台交易 -->
      <view
        class="content_8"
        v-if="projectDetail.platform == 1"
        @click="goTradingRules"
      >
        <!-- 图标 -->
        <image
          class="content_8_1"
          src="http://39.106.208.234/pic/img_/baozhang@2x.png"
        />
        <!-- 文本1 -->
        <view class="content_8_2">该项目可进行平台交易</view>
        <!-- 文本2 -->
        <view class="content_8_3">交易双方资金安全保障</view>
      </view>
      <!-- 我能提供 -->
      <view class="content_3">
        <!-- 标题 -->
        <Title title="我能提供" />
        <!-- 内容盒子 -->
        <view class="content_3_1">
          <!-- 单个内容 -->
          <view
            class="content_3_1_1"
            v-for="(item, index) in projectDetail.kv"
            :key="index"
            >{{ item }}</view
          >
        </view>
      </view>
      <!-- 联系方式 -->
      <view class="content_4">
        <!-- 标题 -->
        <Title title="联系方式" />
        <!-- 联系方式盒子 -->
        <view class="content_4_1" v-show="projectDetail.lock">
          <view style="display: flex; flex-wrap: wrap">
            <!-- 电话 -->
            <view
              class="content_4_1_1"
              @click="callPhone"
              style="margin-right: 30rpx"
            >
              <text style="color: #161616">电话：</text>
              <text style="color: #1f73f1">{{
                projectDetail.contact || "暂未填写"
              }}</text>
            </view>
            <!-- 微信 -->
            <view class="content_4_1_1" @click="copyWxQq(projectDetail.wx)">
              <text style="color: #161616">微信：</text>
              <text style="color: #1f73f1">{{
                projectDetail.wx || "暂未填写"
              }}</text>
            </view>
          </view>
          <!-- QQ -->
          <view class="content_4_1_1" @click="copyWxQq(projectDetail.qq)">
            <text style="color: #161616">QQ：</text>
            <text style="color: #1f73f1">{{
              projectDetail.qq || "暂未填写"
            }}</text>
          </view>
        </view>
        <!-- 未查看 -->
        <view class="content_4_2" v-show="!projectDetail.lock">
          <!-- 查看按钮 -->
          <view class="content_4_2_1" @click="getContact"
            >点击查看联系方式</view
          >
        </view>
      </view>
      <!-- 资源详情 -->
      <view
        class="content_5"
        v-for="(item, index) in projectDetail.infoArray"
        :key="index"
      >
        <!-- 标题 -->
        <Title :title="item.title" />
        <!-- 内容富文本 -->
        <view class="content_5_1" v-html="item.value" />
      </view>
      <!-- 浏览人数 -->
      <view class="content_6">
        <!-- 标题 -->
        <Title :title="`浏览人数(${projectDetail.viewcount})`"></Title>
        <!-- 列表 -->
        <view class="content_6_1">
          <!-- 信息 -->
          <view
            class="content_6_1_1"
            v-for="(item, index) in projectDetail.visitors"
            :key="index"
            @click="goPersonal(item.member_id)"
          >
            <!-- 头像 -->
            <image class="content_6_1_1_1" :src="item.head" />
            <!-- 文本信息 -->
            <view class="content_6_1_1_2">
              <!-- 上盒子 -->
              <view class="content_6_1_1_2_1">
                <!-- 名字 -->
                <view class="content_6_1_1_2_1_1">{{ item.nick_name }}</view>
              </view>
              <!-- 下盒子 -->
              <view class="content_6_1_1_2_2">
                <!-- 职位 -->
                <view class="content_6_1_1_2_2_1"
                  >{{ item.position }}{{ item.company }}</view
                >
              </view>
            </view>
          </view>
        </view>
        <!-- 查看更多 -->
        <view
          class="content_6_2"
          v-show="projectDetail.viewcount > 3"
          @click="getMoreView"
        >
          查看更多
        </view>
      </view>
      <!-- 评论 -->
      <view class="content_7" v-if="projectDetail.comment.length > 0">
        <!-- 标题 -->
        <Title :title="`全部回复(${projectDetail.comment.length})`"></Title>
        <!-- 列表 -->
        <view class="content_7_1">
          <!-- 单条评论 -->
          <view
            class="content_7_1_1"
            v-for="(item, index) in projectDetail.comment"
            :key="index"
          >
            <!-- 信息盒子 -->
            <view class="content_7_1_1_1">
              <!-- 头像 -->
              <image
                class="content_7_1_1_1_1"
                :src="item.head"
                @click="goPersonal(item.member_id)"
              />
              <!-- 信息 -->
              <view class="content_7_1_1_1_2">
                <!-- 上盒子 -->
                <view class="content_7_1_1_1_2_1">
                  <!-- 名字 -->
                  <view class="content_7_1_1_1_2_1_1">{{
                    item.nick_name
                  }}</view>
                  <!-- 发布时间 -->
                  <view class="content_7_1_1_1_2_1_2">{{
                    item.createtime
                  }}</view>
                </view>
                <!-- 工作信息 -->
                <view class="content_7_1_1_1_2_2"
                  >{{ item.position }}{{ item.company }}</view
                >
              </view>
            </view>
            <!-- 评论盒子 -->
            <view class="content_7_1_1_2">
              <!-- 单条评论 -->
              <view
                class="content_7_1_1_4_1"
                @click="comment(item.id, item.member_id, item.id, 2)"
                >{{ item.content }}
              </view>
              <!-- 回复 -->
              <view
                class="content_7_1_1_4_2"
                v-for="(item2, index2) in item.child"
                :key="index2"
              >
                <text style="color: #303030">{{ item2.nick_name }}</text>
                <text style="color: #3875e9">：{{ item2.content }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 功能板 -->
    <view class="functionBoard">
      <!-- 收藏 -->
      <view class="functionBoard_1" @click="collect">
        <!-- 图标 -->
        <image
          class="functionBoard_1_1"
          src="http://39.106.208.234/pic/img_/shoucang@2x.png"
          v-show="projectDetail.keep != 1"
        />
        <image
          class="functionBoard_1_1"
          src="http://39.106.208.234/pic/img_/yishoucang@2x.png"
          v-show="projectDetail.keep == 1"
        />
        <!-- 文本 -->
        <view class="functionBoard_1_2">收藏</view>
      </view>
      <!-- 评论 -->
      <view class="functionBoard_2" @click="comment(0, 0, 0, 1)"
        >点击此处即可留言</view
      >
    </view>
    <!-- 底部弹出层 -->
    <u-popup
      :show="bottomPopupShow"
      mode="bottom"
      @close="bottomPopupShow = false"
    >
      <view class="bottomPopup">
        <!-- 文本框 -->
        <view class="bottomPopup_1">
          <u--textarea
            placeholder="请输入内容"
            autoHeight
            maxlength="-1"
            border="none"
            style="background: transparent"
            confirmType="send"
            @confirm="publishComment"
            v-model="commentParams.content"
            :disabled="_userInfo.maxvip == 'ordinary'"
          />
        </view>
        <!-- 回复按钮 -->
        <view class="bottomPopup_2" @click="publishComment">回复</view>
        <!-- 文本 -->
        <view class="bottomPopup_3">快捷回复</view>
        <!-- 列表 -->
        <view class="bottomPopup_4">
          <!-- tag -->
          <view
            class="bottomPopup_4_1"
            v-for="(item, index) in commentDefault"
            :key="index"
            @click="quickSelect(item)"
          >
            {{ item.content }}</view
          >
        </view>
      </view>
    </u-popup>
    <!-- 查看更多权限不足 -->
    <u-popup :show="noPermission" mode="center" @close="noPermission = false">
      <!-- 盒子 -->
      <view class="noPermission">
        <!-- 图片 -->
        <image
          class="noPermission_1"
          src="http://39.106.208.234/pic/img_/huiyts_ta.png"
        />
        <!-- 文本 -->
        <view class="noPermission_2"
          >会员用户可以查看最多<text style="color: red">1000</text
          >位浏览用户</view
        >
        <!-- 文本 -->
        <view class="noPermission_2"
          >普通用户只能查看最新的<text style="color: red">3</text
          >位浏览用户</view
        >
        <!-- 按钮 -->
        <view class="noPermission_3" @click="goBuyVip"
          >升级会员查看更多浏览记录</view
        >
      </view>
    </u-popup>
    <!-- 次数不足 -->
    <u-popup :show="noTimes" mode="center" @close="noTimes = false">
      <!-- 盒子 -->
      <view class="noTimes">
        <!-- 图片 -->
        <image
          class="noTimes_1"
          src="http://39.106.208.234/pic/img_/huiyts_ta.png"
        />
        <!-- 文本 -->
        <view class="noTimes_2"
          >免费查看次数已用完，是否升级会员获得更多查看机会?</view
        >
        <!-- 按钮 -->
        <view class="noTimes_3" @click="goBuyVip"
          >开通会员获得更多查看机会</view
        >
        <!-- 按钮2 -->
        <view class="noTImes_4">邀请新用户获得更多查看机会</view>
      </view>
    </u-popup>
    <!-- 登录模态框 -->
    <u-modal
      showCancelButton
      :show="loginModal.show"
      :title="loginModal.title"
      :content="loginModal.content"
      @confirm="loginModal.confirm"
      @cancel="loginModal.cancel"
    />
  </view>
</template>

<script>
import Head from "../../components/Head";
import Title from "../../components/Title";
import HY from "../../components/HY";
import { LABEL_IMG } from "../../utils/const";
import {
  collect,
  comment,
  getCommentDefault,
  getContact,
  getProjectDetail,
} from "../../utils/api";
import { showToast } from "../../utils";
export default {
  data() {
    return {
      // 项目详情
      projectDetail: { visitors: [], comment: [] },
      // op
      op: "",
      // 底部弹出层
      bottomPopupShow: false,
      // 评论默认文本
      commentDefault: "",
      // 评论参数
      commentParams: { content: "" },
      // 权限不足
      noPermission: false,
      // 次数不足
      noTimes: false,
      // 登录模态框
      loginModal: {
        title: "登录提示",
        content: "您还未登录，是否前往登录？",
        show: false,
        confirm: () => {
          this.loginModal.show = false;
          // 前往登录
          uni.navigateTo({
            url: "/pages/user/login",
          });
        },
        cancel: () => (this.loginModal.show = false),
      },
      // 标题
      title: "",
      // 接口是否渲染完成
      isRender: false,
    };
  },
  methods: {
    // 获取项目详情
    getProjectDetail(op) {
      // 项目详情API
      getProjectDetail({ fid: op.id, version: 5.1 }).then((res) => {
        // 时间删除后3位
        res.data.addtime = res.data.addtime.slice(0, -3);
        // 头像格式化
        if (res.data.head.indexOf("http") === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        // 格式化浏览数据
        res.data.visitors.forEach((item) => {
          // 头像格式化
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 格式化评论数据
        res.data.comment.forEach((item) => {
          // 头像格式化
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 时间删除后3位
          item.createtime = item.createtime.slice(0, -3);
        });
        // 初始化我能提供数据
        switch (res.data.type) {
          case 1:
          case 2:
          case 11:
            res.data.kv = [
              `结算方式：${res.data.settmod_id}`,
              `结算周期：${res.data.settcycle_id}`,
              `推广方式：${res.data.promotion}`,
              `合作类型：${res.data.cooptype_id}`,
              `合作地区：${res.data.area}`,
            ];
            // 初始化结算单价
            if (
              res.data.price == "" ||
              res.data.price == null ||
              res.data.price == "0.00"
            )
              res.data.price = "可议";
            // 在kv第1下标插入单价
            res.data.kv.splice(1, 0, `结算单价：${res.data.price}`);
            res.data.infoArray = [{ title: "考核标准", value: res.data.info }];
            break;
          case 3:
            res.data.kv = [
              `产品类型：${res.data.product}`,
              `资源类型：${res.data.source}`,
              `产品名称：${res.data.product_name}`,
              `一件代发：${res.data.issuing}`,
              `相关资质：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "产品优势", value: res.data.product_advantage },
              { title: "产品名称", value: res.data.product_name },
            ];
            // 初始化结算单价
            if (
              res.data.price == "" ||
              res.data.price == null ||
              res.data.price == "0.00"
            )
              res.data.price = "可议";
            // 在kv第2下标插入单价
            res.data.kv.splice(2, 0, `客单价：${res.data.price}`);
            break;
          case 4:
            res.data.kv = [
              `类型：${res.data.source}`,
              `产品类型：${res.data.product}`,
              `结算周期：${res.data.settcycle_id}`,
              `销货能力：${res.data.assessment}`,
              `合作模式：${res.data.alliance}`,
              `一件代发：${res.data.issuing}`,
              `其他补充：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "渠道简介", value: res.data.introduce },
              { title: "产品要求", value: res.data.product_advantage },
            ];
            break;
          case 5:
            res.data.kv = [
              `提供类型：${res.data.source}`,
              `需求类型：${res.data.comprehensive}`,
              `合作要求：${res.data.assessment}`,
              `其他补充：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "提供的资源", value: res.data.product_advantage },
              { title: "需求的资源", value: res.data.info },
            ];
            break;
          case 6:
            res.data.kv = [
              `提供用户类型：${res.data.source}`,
              `需求用户类型：${res.data.comprehensive}`,
              `用户量：${res.data.user_number}`,
              `流量载体类型：${res.data.product_advantage}`,
              `可互换位置：${res.data.introduce}`,
              `其他补充：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "合作模式", value: res.data.alliance },
              { title: "合作要求", value: res.data.assessment },
            ];
            break;
          case 7:
            res.data.kv = [
              `项目类型：${res.data.product}`,
              `加盟费：${res.data.comprehensive}`,
              `预计年利润：${res.data.profits}`,
              `项目名称：${res.data.product_name}`,
              `加盟扶持政策：${res.data.introduce}`,
              `其他要求：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "项目简介", value: res.data.product_advantage },
              { title: "加盟条件", value: res.data.alliance },
            ];
            break;
          case 8:
            res.data.kv = [
              `广告位场景：${res.data.product}`,
              `日曝光量：${res.data.user_number}`,
              `广告位数量：${res.data.quantity}`,
              `合作方式：${res.data.info}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "广告位资源描述", value: res.data.assessment },
              { title: "合作要求", value: res.data.alliance },
            ];
            break;
          case 9:
            res.data.kv = [
              `场地类型：${res.data.product}`,
              `合作模式：${res.data.comprehensive}`,
              `线下场地数量：${res.data.amount}`,
              `场地所在区域：${res.data.issuing}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "场地概况", value: res.data.supplement },
              { title: "需求资源", value: res.data.info },
            ];
            break;
          case 10:
            res.data.kv = [
              `场地类型：${res.data.product}`,
              `合作模式：${res.data.alliance}`,
              `线下场地数量：${res.data.supplement}`,
              `合作地区：${res.data.area}`,
            ];
            res.data.infoArray = [
              { title: "资源描述", value: res.data.product_advantage },
              { title: "合作要求", value: res.data.assessment },
            ];
            break;
        }
        // 赋值
        this.projectDetail = res.data;
        // 评论参数赋值
        // 发布人id
        this.commentParams.art_m_id = res.data.member_id;
        // 项目id
        this.commentParams.article_id = res.data.id;
        // 循环标签
        LABEL_IMG.forEach((item) => {
          // 判断类型
          if (item.id == res.data.type) {
            // 赋值标题
            this.title = item.name;
          }
        });
        // 接口渲染完成
        this.isRender = true;
      });
    },
    // 查看联系方式
    getContact() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      getContact({ fid: this.op.id }).then((res) => {
        // 抛出异常
        if (res.code != 1 && res.code != -3) return showToast(res.msg);
        // 次数不足
        if (res.code == -3) {
          // 次数不足弹窗
          this.noTimes = true;
          return;
        }
        // 手机号赋值
        this.projectDetail.contact = res.data.contact;
        // qq号赋值
        this.projectDetail.qq = res.data.qq;
        // 微信号赋值
        this.projectDetail.wx = res.data.wx;
        // 展开联系方式
        this.projectDetail.lock = true;
      });
    },
    // 收藏
    collect() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      // 参数赋值
      let params = {
        // 项目id
        fid: this.op.id,
        // 项目类型
        type: this.projectDetail.type,
      };
      // 收藏API
      collect(params).then((res) => {
        // 打印异常
        if (res.code != 1) return showToast(res.msg);
        // 收藏取反
        this.projectDetail.keep = !this.projectDetail.keep;
      });
    },
    // 评论前置
    comment(pid, re_member, c_id, type) {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      if (type == 2 && this._userInfo.id != this.projectDetail.member_id)
        return showToast("只有发布人可以对评论进行回复");
      // 展示评论框
      this.bottomPopupShow = true;
      // 如果参数不为null,则赋值
      // 评论父级id
      if (pid != null) this.commentParams.pid = pid;
      // 被评论人id
      if (re_member != null) this.commentParams.re_member = re_member;
      // 最上级id
      if (c_id != null) this.commentParams.c_id = c_id;
    },
    // 发布评论
    publishComment() {
      // 评论API
      comment(this.commentParams).then((res) => {
        // 打印异常
        if (res.code != 1) return showToast(res.msg);
        // 评论成功
        this.getProjectDetail(this.op);
        // 评论框隐藏
        this.bottomPopupShow = false;
        // 参数默认
        this.commentParams = { content: "" };
      });
    },
    // 获取评论默认文本
    getCommentDefault() {
      // 获取评论默认文本API
      getCommentDefault().then((res) => {
        // 赋值
        this.commentDefault = res.data;
      });
    },
    // 快捷语选中
    quickSelect(item) {
      // 评论内容赋值
      this.commentParams.content = item.content;
      // 评论id
      this.commentParams.immobilization_id = item.id;
    },
    // 前往个人页
    goPersonal(id) {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      uni.navigateTo({
        url: `/pages/contacts/personal?id=${id}`,
      });
    },
    // 前往平台交易
    goTradingRules() {
      uni.navigateTo({
        url: "/pages/index/tradingRules",
      });
    },
    // 拨打电话
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: this.projectDetail.contact,
      });
    },
    // 复制微信/QQ
    copyWxQq(data) {
      uni.setClipboardData({
        data,
        success: () => {
          showToast("复制成功");
        },
      });
    },
    // 查看更多浏览人数
    getMoreView() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      // 判断是否为普通用户
      if (this._userInfo.maxvip == "ordinary") {
        // 权限不足弹窗
        this.noPermission = true;
        return;
      }
      uni.navigateTo({
        url: `/pages/index/browse?fid=${this.op.id}&count=${this.projectDetail.viewcount}`,
      });
    },
    // 前往购买会员
    goBuyVip() {
      uni.navigateTo({
        url: "/pages/user/vip",
      });
    },
  },
  onLoad(op) {
    // 获取项目详情
    this.getProjectDetail(op);
    // op赋值
    this.op = op;
    // 获取评论默认文本
    this.getCommentDefault();
  },
  components: { Head, Title, HY },
};
</script>

<style lang="scss" scoped>
@import "./info.scss";
</style>
