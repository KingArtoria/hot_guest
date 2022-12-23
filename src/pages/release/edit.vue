<template>
  <view>
    <!-- 头部 -->
    <Head :title="title" />
    <!-- 内容 -->
    <view class="content">
      <!-- 提示 -->
      <view class="content_2" v-if="showTip">
        <!-- 左侧内容 -->
        <view class="content_2_1"
          >严禁发布各类违法、违禁信息；严禁在非指定区域
          输入任何联系方式，一旦发现，将做封号处理；</view
        >
        <!-- 右侧按钮 -->
        <view class="content_2_2" @click="showTip = false">知道了</view>
      </view>
      <!-- 标题表单 -->
      <view class="content_1">
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">标题</text>
        </view>
        <!-- 文本框 -->
        <view class="content_1_2">
          <u--textarea
            v-model="releaseParams.title"
            placeholder="请输入标题"
            confirmType="done"
            autoHeight
            :maxlength="-1"
            border="none"
            placeholderClass="placeholderClass"
          />
        </view>
      </view>
      <!-- 地区 -->
      <view class="content_3" @click="goArea">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">选择地区</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="请选择地区"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.area"
        />
      </view>
      <!-- 合作类型 -->
      <view
        class="content_3"
        v-if="type == 1 || type == 2 || type == 11"
        @click="coopTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">合作类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择合作类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.cooptype"
        />
      </view>
      <!-- 推广方式 -->
      <view
        class="content_3"
        v-if="type == 1 || type == 2 || type == 11"
        @click="spreadTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">推广方式</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择推广方式"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="releaseParams.promotion"
        />
      </view>
      <!-- 结算方式 -->
      <view
        class="content_3"
        v-if="type == 1 || type == 2 || type == 11"
        @click="settlementTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">结算方式</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择结算方式"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.settmod_id"
        />
      </view>
      <!-- 结算周期 -->
      <view
        class="content_3"
        v-if="type == 1 || type == 2 || type == 4 || type == 11"
        @click="settlementCycleModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">结算周期</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择结算周期"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.settcycle_id"
        />
      </view>
      <!-- 产品类型 -->
      <view
        class="content_3"
        v-if="type == 4 || type == 3"
        @click="productTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">产品类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择产品类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.product"
        />
      </view>
      <!-- 项目类型 -->
      <view
        class="content_3"
        v-if="type == 7"
        @click="projectTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">项目类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择项目类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.product"
        />
      </view>
      <!-- 广告位场景 -->
      <view
        class="content_3"
        v-if="type == 8"
        @click="adSceneModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">广告位场景</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择广告位场景"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.product"
        />
      </view>
      <!-- 场地类型 -->
      <view
        class="content_3"
        v-if="type == 9"
        @click="placeTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">场地类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择场地类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.product"
        />
      </view>
      <!-- 渠道类型 -->
      <view
        class="content_3"
        v-if="type == 4"
        @click="channelTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">渠道类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择渠道类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.source"
        />
      </view>
      <!-- 货源类型 -->
      <view
        class="content_3"
        v-if="type == 3 || type == 187"
        @click="goodsTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">货源类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择货源类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.source"
        />
      </view>
      <!-- 提供资源类型 -->
      <view
        class="content_3"
        v-if="type == 5"
        @click="resourceTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">提供资源类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择提供资源类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.source"
        />
      </view>
      <!-- 提供用户类型 -->
      <view
        class="content_3"
        v-if="type == 6"
        @click="userTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">提供用户类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择提供用户类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.source"
        />
      </view>
      <!-- 加盟费 -->
      <view
        class="content_3"
        v-if="type == 7"
        @click="joinFeeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">加盟费</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择加盟费"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.comprehensive"
        />
      </view>
      <!-- 需求资源类型 -->
      <view
        class="content_3"
        v-if="type == 5"
        @click="demandResourceTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">需求资源类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择需求资源类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.comprehensive"
        />
      </view>
      <!-- 需求用户类型 -->
      <view
        class="content_3"
        v-if="type == 6"
        @click="demandUserTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">需求用户类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择需求用户类型"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.comprehensive"
        />
      </view>
      <!-- 需求合作模式 -->
      <view
        class="content_3"
        v-if="type == 9"
        @click="demandCoopTypeModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">需求合作模式</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择需求合作模式"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.comprehensive"
        />
      </view>
      <!-- 用户量 -->
      <view
        class="content_3"
        v-if="type == 6"
        @click="userNumModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">用户量</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择用户量"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.user_number"
        />
      </view>
      <!-- 日曝光量 -->
      <view
        class="content_3"
        v-if="type == 8"
        @click="dayExposureModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">日曝光量</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择日曝光量"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.user_number"
        />
      </view>
      <!-- 渠道优势 -->
      <view
        class="content_3"
        v-if="type == 4"
        @click="channelAdvantageModal.show = true"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">渠道优势</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="选择渠道优势"
          border="none"
          style="height: 99rpx; background: #fff !important"
          disabled
          fontSize="28rpx"
          inputAlign="end"
          suffixIcon="arrow-right"
          v-model="showParams.channel_advantage"
        />
      </view>
      <!-- 分隔符 -->
      <view class="content_4" />
      <!-- 单价 -->
      <view
        class="content_3"
        v-if="type == 1 || type == 2 || type == 3 || type == 11 || type == 187"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">单价</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入单价0为可议"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.price"
          inputAlign="end"
          type="number"
          clearable
        />
      </view>
      <!-- 产品名称 -->
      <view class="content_3" v-if="type == 3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">产品名称</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入产品名称"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_name"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 项目名称 -->
      <view class="content_3" v-if="type == 7">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">项目名称</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入项目名称"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_name"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 一件代发 -->
      <view class="content_3" v-if="type == 3 || type == 4 || type == 187">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">一件代发</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入一件代发"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.issuing"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 场地所在区域 -->
      <view class="content_3" v-if="type == 9">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">场地所在区域</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入场地所在区域"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.issuing"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 产品要求 -->
      <view class="content_3" v-if="type == 4">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">产品要求</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入产品要求"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_advantage"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 产品优势 -->
      <view class="content_3" v-if="type == 3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">产品优势</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入产品优势"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_advantage"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 项目简介 -->
      <view class="content_3" v-if="type == 7">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">项目简介</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入项目简介"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_advantage"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 提供的资源 -->
      <view class="content_3" v-if="type == 5">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">提供的资源</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入提供的资源"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_advantage"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 流量载体类型 -->
      <view class="content_3" v-if="type == 6">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">流量载体类型</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入流量载体类型"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.product_advantage"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 其他补充 -->
      <view
        class="content_3"
        v-if="type == 4 || type == 7 || type == 5 || type == 6"
      >
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">其他补充</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入其他补充"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.supplement"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 相关资质 -->
      <view class="content_3" v-if="type == 3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">相关资质</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入相关资质"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.supplement"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 场地概况 -->
      <view class="content_3" v-if="type == 9">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">场地概况</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入场地概况"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.supplement"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 渠道简介 -->
      <view class="content_3" v-if="type == 4">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">渠道简介</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入渠道简介"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.introduce"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 可互换位置 -->
      <view class="content_3" v-if="type == 6">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">可互换位置</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入可互换位置"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.introduce"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 加盟扶持政策 -->
      <view class="content_3" v-if="type == 7">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">加盟扶持政策</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入加盟扶持政策"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.introduce"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 销货能力 -->
      <view class="content_3" v-if="type == 4">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">销货能力</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入销货能力"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.assessment"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 合作要求 -->
      <view class="content_3" v-if="type == 5 || type == 6">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">合作要求</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入合作要求"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.assessment"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 广告位资源描述 -->
      <view class="content_3" v-if="type == 8">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">广告位资源描述</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入广告位资源描述"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.assessment"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 合作模式 -->
      <view class="content_3" v-if="type == 4 || type == 6 || type == 8">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">合作模式</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入合作模式"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.alliance"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 加盟条件 -->
      <view class="content_3" v-if="type == 7">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">加盟条件</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入加盟条件"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.alliance"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 预计年利润 -->
      <view class="content_3" v-if="type == 7">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">预计年利润</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入预计年利润"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.profits"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 广告位数量 -->
      <view class="content_3" v-if="type == 8">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">广告位数量</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入广告位数量"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.quantity"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 线下场地数量 -->
      <view class="content_3" v-if="type == 9">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">线下场地数量</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入线下场地数量"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.amount"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- 详情 -->
      <view
        class="content_1"
        v-if="type == 1 || type == 2 || type == 11 || type == 187"
      >
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">详情</text>
        </view>
        <!-- 文本框 -->
        <view class="content_1_2">
          <u--textarea
            v-model="releaseParams.info"
            placeholder="请输入详情"
            confirmType="done"
            autoHeight
            :maxlength="-1"
            border="none"
            placeholderClass="placeholderClass"
          />
        </view>
      </view>
      <!-- 需求的资源 -->
      <view class="content_1" v-if="type == 5">
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">需求的资源</text>
        </view>
        <!-- 文本框 -->
        <view class="content_1_2">
          <u--textarea
            v-model="releaseParams.info"
            placeholder="请输入需求的资源"
            confirmType="done"
            autoHeight
            :maxlength="-1"
            border="none"
            placeholderClass="placeholderClass"
          />
        </view>
      </view>
      <!-- 合作方式 -->
      <view class="content_1" v-if="type == 8">
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">合作方式</text>
        </view>
        <!-- 文本框 -->
        <view class="content_1_2">
          <u--textarea
            v-model="releaseParams.info"
            placeholder="请输入合作方式"
            confirmType="done"
            autoHeight
            :maxlength="-1"
            border="none"
            placeholderClass="placeholderClass"
          />
        </view>
      </view>
      <!-- 需求资源 -->
      <view class="content_1" v-if="type == 9">
        <!-- 标题 -->
        <view class="content_1_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">需求资源</text>
        </view>
        <!-- 文本框 -->
        <view class="content_1_2">
          <u--textarea
            v-model="releaseParams.info"
            placeholder="请输入需求资源"
            confirmType="done"
            autoHeight
            :maxlength="-1"
            border="none"
            placeholderClass="placeholderClass"
          />
        </view>
      </view>
      <!-- 分隔符 -->
      <view class="content_4" />
      <!-- 联系方式 -->
      <view class="content_3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #e82323">*</text>
          <text style="color: #414141">联系方式</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入手机号码"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.contact"
          inputAlign="end"
          clearable
          type="number"
        />
      </view>
      <!-- 微信 -->
      <view class="content_3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #414141">微信</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入微信"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.wx"
          inputAlign="end"
          clearable
        />
      </view>
      <!-- QQ -->
      <view class="content_3">
        <!-- 标题 -->
        <view class="content_3_1">
          <text style="color: #414141">QQ</text>
        </view>
        <!-- 输入框 -->
        <u--input
          placeholder="输入QQ"
          border="none"
          style="height: 99rpx"
          fontSize="28rpx"
          v-model="releaseParams.qq"
          inputAlign="end"
          clearable
          type="number"
        />
      </view>
      <!-- 平台交易 -->
      <view class="content_5">
        <!-- 标题 -->
        <view class="content_5_1">
          <!-- 必选符 -->
          <text style="color: #e82323">*</text>
          <!-- 标题 -->
          <text style="color: #414141">支持平台交易</text>
          <!-- 图标 -->
          <image
            class="content_5_1_1"
            src="http://39.106.208.234/pic/img_/yiwen_fb.png"
            @click="goPlatform"
          />
        </view>
        <!-- 按钮 -->
        <view class="content_5_2">
          <!-- 支持 -->
          <view
            class="content_5_2_1"
            style="margin-right: 21rpx"
            :style="`
            background:${
              releaseParams.platform == 1 ? 'rgba(56,117,233,0.11)' : '#ECECEC'
            };
            border:${
              releaseParams.platform == 1
                ? '2rpx solid #3875E9'
                : '2rpx solid transparent'
            };
            color:${releaseParams.platform == 1 ? '#3875E9' : '#9E9E9E'}
            `"
            @click="releaseParams.platform = 1"
          >
            支持
          </view>
          <!-- 不支持 -->
          <view
            class="content_5_2_1"
            :style="`
            background:${
              releaseParams.platform == 0 ? 'rgba(56,117,233,0.11)' : '#ECECEC'
            };
            border:${
              releaseParams.platform == 0
                ? '2rpx solid #3875E9'
                : '2rpx solid transparent'
            };
            color:${releaseParams.platform == 0 ? '#3875E9' : '#9E9E9E'}
            `"
            @click="releaseParams.platform = 0"
          >
            不支持
          </view>
        </view>
      </view>
    </view>
    <!-- 发布 -->
    <view class="release">
      <!-- 按钮 -->
      <view class="release_1" @click="publishProject">发布</view>
    </view>
    <!-- 合作类型 -->
    <u-picker
      keyName="name"
      :show="coopTypeModal.show"
      :columns="coopTypeModal.columns"
      @confirm="coopTypeModal.confirm"
      @cancel="coopTypeModal.cancel"
      @close="coopTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 推广方式 -->
    <u-picker
      :show="spreadTypeModal.show"
      :columns="spreadTypeModal.columns"
      @confirm="spreadTypeModal.confirm"
      @cancel="spreadTypeModal.cancel"
      @close="spreadTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 结算方式 -->
    <u-picker
      keyName="name"
      :show="settlementTypeModal.show"
      :columns="settlementTypeModal.columns"
      @confirm="settlementTypeModal.confirm"
      @cancel="settlementTypeModal.cancel"
      @close="settlementTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 结算周期 -->
    <u-picker
      keyName="name"
      :show="settlementCycleModal.show"
      :columns="settlementCycleModal.columns"
      @confirm="settlementCycleModal.confirm"
      @cancel="settlementCycleModal.cancel"
      @close="settlementCycleModal.cancel"
      closeOnClickOverlay
    />
    <!-- 产品类型 -->
    <u-picker
      keyName="name"
      :show="productTypeModal.show"
      :columns="productTypeModal.columns"
      @confirm="productTypeModal.confirm"
      @cancel="productTypeModal.cancel"
      @close="productTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 项目类型 -->
    <u-picker
      keyName="name"
      :show="projectTypeModal.show"
      :columns="projectTypeModal.columns"
      @confirm="projectTypeModal.confirm"
      @cancel="projectTypeModal.cancel"
      @close="projectTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 广告位场景 -->
    <u-picker
      keyName="name"
      :show="adSceneModal.show"
      :columns="adSceneModal.columns"
      @confirm="adSceneModal.confirm"
      @cancel="adSceneModal.cancel"
      @close="adSceneModal.cancel"
      closeOnClickOverlay
    />
    <!-- 场地类型 -->
    <u-picker
      keyName="name"
      :show="placeTypeModal.show"
      :columns="placeTypeModal.columns"
      @confirm="placeTypeModal.confirm"
      @cancel="placeTypeModal.cancel"
      @close="placeTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 渠道类型 -->
    <u-picker
      keyName="name"
      :show="channelTypeModal.show"
      :columns="channelTypeModal.columns"
      @confirm="channelTypeModal.confirm"
      @cancel="channelTypeModal.cancel"
      @close="channelTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 货源类型 -->
    <u-picker
      keyName="name"
      :show="goodsTypeModal.show"
      :columns="goodsTypeModal.columns"
      @confirm="goodsTypeModal.confirm"
      @cancel="goodsTypeModal.cancel"
      @close="goodsTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 提供资源类型 -->
    <u-picker
      keyName="name"
      :show="resourceTypeModal.show"
      :columns="resourceTypeModal.columns"
      @confirm="resourceTypeModal.confirm"
      @cancel="resourceTypeModal.cancel"
      @close="resourceTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 提供用户类型 -->
    <u-picker
      keyName="name"
      :show="userTypeModal.show"
      :columns="userTypeModal.columns"
      @confirm="userTypeModal.confirm"
      @cancel="userTypeModal.cancel"
      @close="userTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 加盟费 -->
    <u-picker
      keyName="name"
      :show="joinFeeModal.show"
      :columns="joinFeeModal.columns"
      @confirm="joinFeeModal.confirm"
      @cancel="joinFeeModal.cancel"
      @close="joinFeeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 需求资源类型 -->
    <u-picker
      keyName="name"
      :show="demandResourceTypeModal.show"
      :columns="demandResourceTypeModal.columns"
      @confirm="demandResourceTypeModal.confirm"
      @cancel="demandResourceTypeModal.cancel"
      @close="demandResourceTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 需求用户类型 -->
    <u-picker
      keyName="name"
      :show="demandUserTypeModal.show"
      :columns="demandUserTypeModal.columns"
      @confirm="demandUserTypeModal.confirm"
      @cancel="demandUserTypeModal.cancel"
      @close="demandUserTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 需求合作模式 -->
    <u-picker
      keyName="name"
      :show="demandCoopTypeModal.show"
      :columns="demandCoopTypeModal.columns"
      @confirm="demandCoopTypeModal.confirm"
      @cancel="demandCoopTypeModal.cancel"
      @close="demandCoopTypeModal.cancel"
      closeOnClickOverlay
    />
    <!-- 用户量 -->
    <u-picker
      keyName="name"
      :show="userNumModal.show"
      :columns="userNumModal.columns"
      @confirm="userNumModal.confirm"
      @cancel="userNumModal.cancel"
      @close="userNumModal.cancel"
      closeOnClickOverlay
    />
    <!-- 日曝光量 -->
    <u-picker
      keyName="name"
      :show="dayExposureModal.show"
      :columns="dayExposureModal.columns"
      @confirm="dayExposureModal.confirm"
      @cancel="dayExposureModal.cancel"
      @close="dayExposureModal.cancel"
      closeOnClickOverlay
    />
    <!-- 渠道优势 -->
    <u-picker
      keyName="name"
      :show="channelAdvantageModal.show"
      :columns="channelAdvantageModal.columns"
      @confirm="channelAdvantageModal.confirm"
      @cancel="channelAdvantageModal.cancel"
      @close="channelAdvantageModal.cancel"
      closeOnClickOverlay
    />
    <!-- 发布完成模态框 -->
    <u-modal
      :show="releaseCompleteModal.show"
      @confirm="releaseCompleteModal.confirm"
      :title="releaseCompleteModal.title"
      :content="releaseCompleteModal.content"
    />
    <!-- 实名认证弹出 -->
    <u-popup :show="realNameShow" mode="center" round="20rpx">
      <view class="realName">
        <!-- 标题 -->
        <view class="realName_1">你还未填写实名信息</view>
        <!-- 信息 -->
        <view class="realName_2">
          因国家政策要求，发布内容必须实名。谢谢您配合。
        </view>
        <!-- 输入框 -->
        <view class="realName_3">
          <u--input
            placeholder="请输入姓名"
            border="none"
            fontSize="24rpx"
            style="height: 90rpx"
            v-model="realNameParams.name"
          />
        </view>
        <!-- 输入框 -->
        <view class="realName_3">
          <u--input
            placeholder="请输入身份证号"
            border="none"
            fontSize="24rpx"
            style="height: 90rpx"
            v-model="realNameParams.card"
          />
        </view>
        <!-- 提交按钮 -->
        <view class="realName_4" @click="realName">提交</view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import {
  checkRealName,
  getSelect,
  publishProject,
  realName,
} from "../../utils/api";
export default {
  data() {
    return {
      // 标题
      title: "",
      // 发布内容参数
      releaseParams: { area: [], platform: 1 },
      // 发布内容字段
      releaseContent: [],
      // 展示提示
      showTip: true,
      // 展示参数
      showParams: {},
      // 项目类型
      type: "",
      // 合作类型模态框对象
      coopTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 合作类型参数
          this.releaseParams.cooptype = item.value[0].id;
          // 展示
          this.showParams.cooptype = item.value[0].name;
          // 关闭模态框
          this.coopTypeModal.show = false;
        },
        cancel: () => (this.coopTypeModal.show = false),
      },
      // 推广方式模态框对象
      spreadTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 推广方式参数
          this.releaseParams.promotion = item.value[0];
          // 关闭模态框
          this.spreadTypeModal.show = false;
        },
        cancel: () => (this.spreadTypeModal.show = false),
      },
      // 结算方式模态框对象
      settlementTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 结算方式参数
          this.releaseParams.settmod_id = item.value[0].id;
          // 展示参数
          this.showParams.settmod_id = item.value[0].name;
          // 关闭模态框
          this.settlementTypeModal.show = false;
        },
        cancel: () => (this.settlementTypeModal.show = false),
      },
      // 结算周期模态框对象
      settlementCycleModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 结算周期参数
          this.releaseParams.settcycle_id = item.value[0].id;
          // 展示参数
          this.showParams.settcycle_id = item.value[0].name;
          // 关闭模态框
          this.settlementCycleModal.show = false;
        },
        cancel: () => (this.settlementCycleModal.show = false),
      },
      // 产品类型模态框对象
      productTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 产品类型参数
          this.releaseParams.product = item.value[0].id;
          // 展示参数
          this.showParams.product = item.value[0].name;
          // 关闭模态框
          this.productTypeModal.show = false;
        },
        cancel: () => (this.productTypeModal.show = false),
      },
      // 项目类型模态框对象
      projectTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 项目类型参数
          this.releaseParams.product = item.value[0].id;
          // 展示参数
          this.showParams.product = item.value[0].name;
          // 关闭模态框
          this.projectTypeModal.show = false;
        },
        cancel: () => (this.projectTypeModal.show = false),
      },
      // 广告位场景模态框对象
      adSceneModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 广告位场景参数
          this.releaseParams.product = item.value[0].id;
          // 展示参数
          this.showParams.product = item.value[0].name;
          // 关闭模态框
          this.adSceneModal.show = false;
        },
        cancel: () => (this.adSceneModal.show = false),
      },
      // 场地类型模态框对象
      placeTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 场地类型参数
          this.releaseParams.product = item.value[0].id;
          // 展示参数
          this.showParams.product = item.value[0].name;
          // 关闭模态框
          this.placeTypeModal.show = false;
        },
        cancel: () => (this.placeTypeModal.show = false),
      },
      // 渠道类型模态框对象
      channelTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 渠道类型参数
          this.releaseParams.source = item.value[0].id;
          // 展示参数
          this.showParams.source = item.value[0].name;
          // 关闭模态框
          this.channelTypeModal.show = false;
        },
        cancel: () => (this.channelTypeModal.show = false),
      },
      // 货源类型模态框对象
      goodsTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 货源类型参数
          this.releaseParams.source = item.value[0].id;
          // 展示参数
          this.showParams.source = item.value[0].name;
          // 关闭模态框
          this.goodsTypeModal.show = false;
        },
        cancel: () => (this.goodsTypeModal.show = false),
      },
      // 提供资源类型模态框对象
      resourceTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 提供资源类型参数
          this.releaseParams.source = item.value[0].id;
          // 展示参数
          this.showParams.source = item.value[0].name;
          // 关闭模态框
          this.resourceTypeModal.show = false;
        },
        cancel: () => (this.resourceTypeModal.show = false),
      },
      // 提供用户类型模态框对象
      userTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 提供用户类型参数
          this.releaseParams.source = item.value[0].id;
          // 展示参数
          this.showParams.source = item.value[0].name;
          // 关闭模态框
          this.userTypeModal.show = false;
        },
        cancel: () => (this.userTypeModal.show = false),
      },
      // 加盟费模态框对象
      joinFeeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 加盟费参数
          this.releaseParams.comprehensive = item.value[0].id;
          // 展示参数
          this.showParams.comprehensive = item.value[0].name;
          // 关闭模态框
          this.joinFeeModal.show = false;
        },
        cancel: () => (this.joinFeeModal.show = false),
      },
      // 需求资源类型模态框对象
      demandResourceTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 需求资源类型参数
          this.releaseParams.comprehensive = item.value[0].id;
          // 展示参数
          this.showParams.comprehensive = item.value[0].name;
          // 关闭模态框
          this.demandResourceTypeModal.show = false;
        },
        cancel: () => (this.demandResourceTypeModal.show = false),
      },
      // 需求用户类型模态框对象
      demandUserTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 需求用户类型参数
          this.releaseParams.comprehensive = item.value[0].id;
          // 展示参数
          this.showParams.comprehensive = item.value[0].name;
          // 关闭模态框
          this.demandUserTypeModal.show = false;
        },
        cancel: () => (this.demandUserTypeModal.show = false),
      },
      // 需求合作模式模态框对象
      demandCoopTypeModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 需求合作模式参数
          this.releaseParams.comprehensive = item.value[0].id;
          // 展示参数
          this.showParams.comprehensive = item.value[0].name;
          // 关闭模态框
          this.demandCoopTypeModal.show = false;
        },
        cancel: () => (this.demandCoopTypeModal.show = false),
      },
      // 日曝光量模态框对象
      dayExposureModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 日曝光量参数
          this.releaseParams.user_number = item.value[0].id;
          // 展示参数
          this.showParams.user_number = item.value[0].name;
          // 关闭模态框
          this.dayExposureModal.show = false;
        },
        cancel: () => (this.dayExposureModal.show = false),
      },
      // 用户量模态框对象
      userNumModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 用户量参数
          this.releaseParams.user_number = item.value[0].id;
          // 展示参数
          this.showParams.user_number = item.value[0].name;
          // 关闭模态框
          this.userNumModal.show = false;
        },
        cancel: () => (this.userNumModal.show = false),
      },
      // 渠道优势模态框对象
      channelAdvantageModal: {
        show: false,
        columns: [],
        confirm: (item) => {
          // 渠道优势参数
          this.releaseParams.channel_advantage = item.value[0].id;
          // 展示参数
          this.showParams.channel_advantage = item.value[0].name;
          // 关闭模态框
          this.channelAdvantageModal.show = false;
        },
        cancel: () => (this.channelAdvantageModal.show = false),
      },
      // 发布完成模态框对象
      releaseCompleteModal: {
        show: false,
        title: "发布成功",
        content: "您的项目已发布成功，我们将尽快审核",
        confirm: () => {
          // 关闭模态框
          this.releaseCompleteModal.show = false;
          // 返回上级
          uni.navigateBack();
        },
      },
      // 实名认证弹出层
      realNameShow: false,
      // 实名认证参数
      realNameParams: {},
    };
  },
  methods: {
    // 发布项目
    publishProject() {
      // 是否实名认证
      checkRealName().then((res) => {
        // 未实名
        if (res.code == -1) return (this.realNameShow = true);
        // 加载中
        uni.showLoading({ title: "加载中" });
        // 发布项目API
        publishProject(this.releaseParams).then((res) => {
          // 隐藏加载
          uni.hideLoading();
          // 抛出异常
          if (res.code != 1) return showToast(res.msg);
          // 发布完成
          this.releaseCompleteModal.show = true;
        });
      });
    },
    // 获取下拉选项
    getSelect() {
      // 获取下拉选项API
      getSelect({ type: this.releaseParams.type }).then((res) => {
        // 类型赋值
        let type = this.type;
        // 合作类型 推广方式 结算方式
        if (type == 1 || type == 2 || type == 11) {
          // 合作类型赋值
          this.coopTypeModal.columns = [res.data.cooptype];
          // 推广方式赋值
          this.spreadTypeModal.columns = [["网推", "地推", "网推地推"]];
          // 结算方式赋值
          this.settlementTypeModal.columns = [res.data.settmod];
        }
        // 结算周期
        if (type == 1 || type == 2 || type == 4 || type == 11) {
          // 结算周期赋值
          this.settlementCycleModal.columns = [res.data.settcycle];
        }
        // 产品类型
        if (type == 4 || type == 3) {
          // 产品类型赋值
          this.productTypeModal.columns = [res.data.product];
        }
        // 项目类型 加盟费
        if (type == 7) {
          // 项目类型赋值
          this.projectTypeModal.columns = [res.data.product];
          // 加盟费赋值
          this.joinFeeModal.columns = [res.data.comprehensive];
        }
        // 广告位场景 日曝光量
        if (type == 8) {
          // 广告位场景赋值
          this.adSceneModal.columns = [res.data.product];
          // 日曝光量赋值
          this.dayExposureModal.columns = [res.data.user_number];
        }
        // 场地类型 需求合作模式
        if (type == 9) {
          // 场地类型赋值
          this.placeTypeModal.columns = [res.data.product];
          // 需求合作模式赋值
          this.demandCoopTypeModal.columns = [res.data.comprehensive];
        }
        // 渠道类型
        if (type == 4) {
          // 渠道类型赋值
          this.channelTypeModal.columns = [res.data.source];
          // 渠道优势赋值
          this.channelAdvantageModal.columns = [res.data.channel_advantage];
        }
        // 货源类型
        if (type == 3 || type == 187) {
          // 货源类型赋值
          this.goodsTypeModal.columns = [res.data.source];
        }
        // 提供资源类型 需求资源类型
        if (type == 5) {
          // 提供资源类型赋值
          this.resourceTypeModal.columns = [res.data.source];
          // 需求资源类型赋值
          this.demandResourceTypeModal.columns = [res.data.comprehensive];
        }
        // 提供用户类型 需求用户类型 用户数量
        if (type == 6) {
          // 提供用户类型赋值
          this.userTypeModal.columns = [res.data.source];
          // 需求用户类型赋值
          this.demandUserTypeModal.columns = [res.data.comprehensive];
          // 用户数量赋值
          this.userNumModal.columns = [res.data.user_number];
        }
      });
    },
    // 前往选择地区
    goArea() {
      uni.navigateTo({
        url: "/pages/release/cooperativeArea",
      });
    },
    // 前往平台交易
    goPlatform() {
      // 路由跳转
      uni.navigateTo({
        url: "/pages/index/tradingRules",
      });
    },
    // 实名认证
    realName() {
      realName(this.realNameParams).then((res) => {
        // 抛出异常
        if (res.code != 1) return this.showToast(res.msg);
        // 实名成功
        showToast("实名成功");
        this.realNameShow = false;
      });
    },
  },
  onLoad(op) {
    // 标题赋值
    this.title = op.title;
    // 参数发布类型赋值
    this.releaseParams.type = op.type;
    // 项目类型
    this.type = op.type;
    // 获取下拉选项
    this.getSelect();
  },
  onShow() {
    console.log(uni.getStorageSync("fn"));
    this.releaseParams.area = [];
    let area = [];
    // 地区字段
    if (uni.getStorageSync("fn")) {
      area = JSON.parse(uni.getStorageSync("fn"));
    }
    // 地区字段展示赋值
    if (area.length > 0)
      this.showParams.area = area.map((item) => item.name).join(",");
    // 地区参数格式化
    if (area.length > 0)
      if (area[0].name == "全国") this.releaseParams.area = ["0:0"];
      else {
        area.forEach((item) => {
          // 如果id为0
          if (item.id == 0) {
            this.releaseParams.area.push(`${item.pid}:0`);
          } else {
            this.releaseParams.area.push(`${item.pid}:${item.id}`);
          }
        });
      }
    // 转为字符串
    this.releaseParams.area = this.releaseParams.area.join(",");
    this.$forceUpdate();
  },
  onUnload() {
    // 清除地区缓存
    uni.removeStorageSync("fn");
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./edit.scss";
</style> 