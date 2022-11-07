<template>
  <view>
    <Head style="background: #f0f2f5" title="企业详细" />
    <view class="content">
      <Corporate marginBottom="0rpx" border :corporate="headData" />
      <!-- 查看联系方式 -->
      <view class="content_1" @click="callPhone">
        <!-- 联系方式左侧盒子 -->
        <view class="content_1_1">
          <!-- 电话图标 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img/phoneicon.png" />
          <!-- 查看联系方式 -->
          <view class="content_1_1_2">{{ data.com_telephone }}</view>
        </view>
      </view>
      <!-- 风险提醒 -->
      <view class="content_2">
        <!-- 左侧盒子 -->
        <view class="content_2_1">
          <!-- 提示 -->
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img/tips.png" />
          <!-- 雷达图 -->
          <image class="content_2_1_2" src="http://39.106.208.234/pic/img/fengxian_gh.png" />
          <!-- 艺术字 -->
          <image class="content_2_1_3" src="http://39.106.208.234/pic/img/fxtx.png" />
        </view>
        <!-- 右侧盒子 -->
        <view class="content_2_2">
          <!-- 单个盒子 -->
          <view class="content_2_2_1" @click="toJudicialDoc">
            <!-- 标题 -->
            <view class="content_2_2_1_1">裁判文书</view>
            <!-- 数量 -->
            <view class="content_2_2_1_2">{{ data.company_judicial_doc_count > 99 ? '99+' : data.company_judicial_doc_count }}条</view>
          </view>
          <!-- 单个盒子 -->
          <view class="content_2_2_1">
            <!-- 标题 -->
            <view class="content_2_2_1_1">行政处罚</view>
            <!-- 数量 -->
            <view class="content_2_2_1_2">{{ data.administrative_penalize_count > 99 ? '99+' : data.administrative_penalize_count }}条</view>
          </view>
          <!-- 单个盒子 -->
          <view class="content_2_2_1">
            <!-- 标题 -->
            <view class="content_2_2_1_1">法院公告</view>
            <!-- 数量 -->
            <view class="content_2_2_1_2">{{ data.court_notice_count > 99 ? '99+' : data.court_notice_count }}条</view>
          </view>
          <!-- 单个盒子 -->
          <view class="content_2_2_1">
            <!-- 标题 -->
            <view class="content_2_2_1_1">开庭公告</view>
            <!-- 数量 -->
            <view class="content_2_2_1_2">{{ data.notice_of_court_hearing_info_table_count > 99 ? '99+' : data.notice_of_court_hearing_info_table_count }}条</view>
          </view>
        </view>
      </view>
      <!-- 荣誉 -->
      <view class="content_3">
        <!-- 单个荣誉 -->
        <view class="content_3_1">
          <!-- 左侧 -->
          <image class="content_3_1_1" src="http://39.106.208.234/pic/img/qiyyj_icon.png" />
          <!-- 右侧 -->
          <view class="content_3_1_2">
            <!-- 标题 -->
            <view class="content_3_1_2_1">企业业绩</view>
            <!-- 数量 -->
            <view class="content_3_1_2_2">
              <!-- 标题 -->
              <view class="content_3_1_2_2_1">总额：</view>
              <!-- 数量 -->
              <view class="content_3_1_2_2_2">{{ data.winning_bid_money_new }}万元</view>
            </view>
          </view>
        </view>
        <!-- 单个荣誉 -->
        <view class="content_3_1">
          <!-- 左侧 -->
          <image class="content_3_1_1" src="http://39.106.208.234/pic/img/qiyzz_icon.png" />
          <!-- 右侧 -->
          <view class="content_3_1_2">
            <!-- 标题 -->
            <view class="content_3_1_2_1">企业资质</view>
            <!-- 数量 -->
            <view class="content_3_1_2_2">
              <!-- 标题 -->
              <view class="content_3_1_2_2_1">资质数量：</view>
              <!-- 数量 -->
              <view class="content_3_1_2_2_2">{{ data.various_certificates_info_table_count }}个</view>
            </view>
          </view>
        </view>
        <!-- 单个荣誉 -->
        <view class="content_3_1">
          <!-- 左侧 -->
          <image class="content_3_1_1" src="http://39.106.208.234/pic/img/ryzs_icon.png" />
          <!-- 右侧 -->
          <view class="content_3_1_2">
            <!-- 标题 -->
            <view class="content_3_1_2_1">人员证书</view>
            <!-- 数量 -->
            <view class="content_3_1_2_2">
              <!-- 标题 -->
              <view class="content_3_1_2_2_1">获证书数量：</view>
              <!-- 数量 -->
              <view class="content_3_1_2_2_2">{{ data.architect_info_table_count }}个</view>
            </view>
          </view>
        </view>
        <!-- 单个荣誉 -->
        <view class="content_3_1">
          <!-- 左侧 -->
          <image class="content_3_1_1" src="http://39.106.208.234/pic/img/hjry_icon.png" />
          <!-- 右侧 -->
          <view class="content_3_1_2">
            <!-- 标题 -->
            <view class="content_3_1_2_1">获奖荣誉</view>
            <!-- 数量 -->
            <view class="content_3_1_2_2">
              <!-- 标题 -->
              <view class="content_3_1_2_2_1">获荣誉奖项：</view>
              <!-- 数量 -->
              <view class="content_3_1_2_2_2">{{ data.company_honor_count }}个</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 企业信用 -->
      <view class="content_4">
        <!-- 宫格列表 -->
        <Lattice title="企业信用" :latticeArray="corporate" labelColor="#E24E30" />
      </view>
      <!-- 经营信息 -->
      <view class="content_4">
        <!-- 宫格列表 -->
        <Lattice title="经营信息" :latticeArray="business" labelColor="#EF6A2C" />
      </view>
      <!-- 知识产权 -->
      <view class="content_4">
        <!-- 宫格列表 -->
        <Lattice title="知识产权" :latticeArray="intellectual" labelColor="#35AE6A" />
      </view>
      <!-- 企业背景 -->
      <view class="content_4">
        <!-- 宫格列表 -->
        <Lattice title="企业背景" :latticeArray="background" labelColor="#0D86FF" />
      </view>
    </view>
  </view>
</template>
<script>
import Head from '../../components/Head';
import Corporate from '../../components/Corporate';
import Lattice from '../../components/Lattice.vue';
import { businessInfo, companyCredit, intellectualProperty, companyBackground } from '../../utils/const';
import { getQyApi } from '../../utils/api';
export default {
  data() {
    return {
      // 企业信用数组
      corporate: [],
      // 经营信息数组
      business: [],
      // 知识产权数组
      intellectual: [],
      // 企业背景数组
      background: [],
      // 企业详情参数
      params: {
        url: '/api/company/getCompanyDetailAll',
        company: '',
      },
      // 企业详情数据
      data: {},
      // 企业头部组件数据
      headData: [],
      op: '',
    };
  },
  methods: {
    // 初始化参数
    initParams(op) {
      // 企业信用赋值
      this.corporate = companyCredit;
      // 经营信息赋值
      this.business = businessInfo;
      // 知识产权赋值
      this.intellectual = intellectualProperty;
      // 企业背景赋值
      this.background = companyBackground;
      // 企业详情参数
      this.params.company = op.company;
      // op赋值
      this.op = op;
    },
    // 获取企业详情
    getCompanyDetail() {
      getQyApi(this.params).then(res => {
        // 企业详情赋值
        this.data = res.data;
        // 头部组件赋值
        this.headData.push(res.data);
        // logo赋值
        this.headData[0].logo = this.headData[0].company.substring(0, 4);
        this.headData[0].companyName = this.headData[0].company;
        // 企业信用赋值
        this.corporateData();
        // 经营信息赋值
        this.businessData();
        // 知识产权赋值
        this.intellectualData();
        // 企业背景赋值
        this.backgroundData();
      });
    },
    // 拨打企业电话
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: this.data.com_telephone,
      });
    },
    // 企业信用赋值
    corporateData() {
      let data = this.data;
      // 开庭公告
      let n_o_c_h_i_t_c = data.notice_of_court_hearing_info_table_count;
      this.corporate[0].num = n_o_c_h_i_t_c > 99 ? '99+' : n_o_c_h_i_t_c;
      // 裁判文书
      let c_j_d_c = data.company_judicial_doc_count;
      this.corporate[1].num = c_j_d_c > 99 ? '99+' : c_j_d_c;
      // 法院公告
      let c_n_c = data.court_notice_count;
      this.corporate[2].num = c_n_c > 99 ? '99+' : c_n_c;
      // 行政处罚
      let a_p_c = data.administrative_penalize_count;
      this.corporate[3].num = a_p_c > 99 ? '99+' : a_p_c;
      // 税务违法
      let c_t_r_v_c = data.company_tax_revenue_violation_count;
      this.corporate[4].num = c_t_r_v_c > 99 ? '99+' : c_t_r_v_c;
      // 破产公告
      let b_n_c = data.broke_notice_count;
      this.corporate[5].num = b_n_c > 99 ? '99+' : b_n_c;
    },
    // 经营信息赋值
    businessData() {
      let data = this.data;
      // 招投标
      let t_n = data.tender_num;
      this.business[0].num = t_n > 99 ? '99+' : t_n;
      // 建造师
      let a_i_t_c = data.architect_info_table_count;
      this.business[1].num = a_i_t_c > 99 ? '99+' : a_i_t_c;
      // 资质证书1
      let v_c_i_t_c = data.various_certificates_info_table_count;
      this.business[2].num = v_c_i_t_c > 99 ? '99+' : v_c_i_t_c;
      // 招聘信息
      let r_i_t_c = data.recruit_info_table_count;
      this.business[3].num = r_i_t_c > 99 ? '99+' : r_i_t_c;
      // 税务评级
      let t_r_i_t_c = data.tax_rating_info_table_count;
      this.business[4].num = t_r_i_t_c > 99 ? '99+' : t_r_i_t_c;
      // 进出口信用
      let i_e_c_i_t_c = data.import_export_credit_info_table_count;
      this.business[5].num = i_e_c_i_t_c > 99 ? '99+' : i_e_c_i_t_c;
      // 微信公众号
      let w_p_n_i_t_c = data.wechat_public_number_info_table_count;
      this.business[6].num = w_p_n_i_t_c > 99 ? '99+' : w_p_n_i_t_c;
    },
    // 知识产权赋值
    intellectualData() {
      let data = this.data;
      // 商标信息
      let t_i_i_t_c = data.trademark_information_info_table_count;
      this.intellectual[0].num = t_i_i_t_c > 99 ? '99+' : t_i_i_t_c;
      // 网站备案
      let w_f_i_t_c = data.website_filing_info_table_count;
      this.intellectual[1].num = w_f_i_t_c > 99 ? '99+' : w_f_i_t_c;
      // 软件著作权
      let s_c_i_t_c = data.software_copyright_info_table_count;
      this.intellectual[2].num = s_c_i_t_c > 99 ? '99+' : s_c_i_t_c;
      // 专利信息
      let e_i_t_c = data.enterprise_info_table_count;
      this.intellectual[3].num = e_i_t_c > 99 ? '99+' : e_i_t_c;
    },
    // 企业背景赋值
    backgroundData() {
      let data = this.data;
      // 主要成员
      let c_p_c = data.company_people_count;
      this.background[0].num = c_p_c > 99 ? '99+' : c_p_c;
      // 股东信息
      let c_g_i_c = data.company_gudong_info_count;
      this.background[1].num = c_g_i_c > 99 ? '99+' : c_g_i_c;
      // 对外投资
      let c_d_i_c = data.company_duiwai_info_count;
      this.background[2].num = c_d_i_c > 99 ? '99+' : c_d_i_c;
      // 分支机构
      let c_b_c = data.company_branch_count;
      this.background[3].num = c_b_c > 99 ? '99+' : c_b_c;
    },
    // 前往裁判文书
    toJudicialDoc() {
      uni.navigateTo({
        url: `/pages/enterprise/adjudicativeDocument?company=${this.op.company}`,
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams(op);
    // 获取企业详情
    this.getCompanyDetail();
  },
  components: { Head, Corporate, Lattice },
};
</script>

<style lang="scss" scoped>
@import './info.scss';
</style>
