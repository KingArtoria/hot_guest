<template>
  <view>

    <Head title="通讯录" />
    <!-- 内容 -->
    <view class="content">
      <!-- 结交好友 -->
      <view class="content_1" v-if="list.length > 0">
        <!-- 标题 -->
        <view class="content_1_1">{{ list.length }}位可结交好友</view>
        <!-- 列表 -->
        <view class="content_1_2">
          <!-- 单个数据 -->
          <view class="content_1_2_1" v-for="(item, index) in list" :key="index">
            <!-- 左侧盒子 -->
            <view class="content_1_2_1_1">
              <!-- 头像 -->
              <image class="content_1_2_1_1_1" :src="item.head" />
              <!-- 信息 -->
              <view class="content_1_2_1_1_2">
                <!-- 名称 -->
                <view class="content_1_2_1_1_2_1">{{ item.nick_name }}</view>
                <!-- 公司/职位 -->
                <view class="content_1_2_1_1_2_2">{{ item.company }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.position }}</view>
              </view>
            </view>
            <!-- 右侧盒子 -->
            <view class="content_1_2_1_2" @click="addFriend(item.id)">
              <!-- 图标 -->
              <image class="content_1_2_1_2_1" src="http://39.106.208.234/pic/img_/haoyou.png" />
              <!-- 文案 -->
              <view class="content_1_2_1_2_2">好友</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 邀请好友 -->
      <view class="content_1" v-if="invite.length > 0">
        <!-- 标题 -->
        <view class="content_1_1">{{ invite.length }}位可邀请成为好友</view>
        <!-- 列表 -->
        <view class="content_1_2">
          <!-- 单个数据 -->
          <view class="content_1_2_1" v-for="(item, index) in invite" :key="index">
            <!-- 左侧盒子 -->
            <view class="content_1_2_1_1">
              <!-- 头像 -->
              <image class="content_1_2_1_1_1" src="http://39.106.208.234/pic/img_/tx_kong.png" />
              <!-- 信息 -->
              <view class="content_1_2_1_1_2">
                <!-- 名称 -->
                <view class="content_1_2_1_1_2_1">{{ item.name }}</view>
                <!-- 公司/职位 -->
                <view class="content_1_2_1_1_2_2">尚未加入火客</view>
              </view>
            </view>
            <!-- 右侧盒子 -->
            <view class="content_1_2_1_2" @click="smsInvite(item.phone)">
              <!-- 文案 -->
              <view class="content_1_2_1_2_2">邀请</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 一件添加 -->
    <view class="add">
      <!-- 按钮 -->
      <view class="add_1" @click="inviteFriend">一键邀请全部好友</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import { showToast } from '../../utils'
import { addFriend, getContactFriend, smsInvite } from '../../utils/api'
export default {
  data() {
    return {
      // 可结交好友
      list: [],
      // 邀请好友
      invite: [],
    }
  },
  methods: {
    // 获取通讯录
    getContacts() {
      // 通讯录类型常量
      let ADDRESSBOOK_PHONE = plus.contacts.ADDRESSBOOK_PHONE
      // 获取通讯录对象
      plus.contacts.getAddressBook(ADDRESSBOOK_PHONE, (addressbook) => {
        // 获取通讯录数据
        addressbook.find(["displayName", "phoneNumbers"], (contacts) => {
          console.log(contacts)
          // 创建参数
          let members = []
          contacts.forEach((item) => {
            members.push({ name: item.displayName, phone: item.phoneNumbers[0].value.split(" ").join("") });

          })
          // 获取通讯录好友API
          getContactFriend({ members }).then(res => {
            // 初始化可结交好友数据
            res.data.list.forEach(item => {
              // 初始化头像
              if (item.head.indexOf("http") === -1) {
                item.head = `${this._avatarUrl}${item.head}`;
              }
            })
            // 可结交好友赋值
            this.list = res.data.list
            // 可邀请好友
            this.invite = res.data.diff
            console.log('获取通讯录好友成功', res)
          })
        })
      }, (e) => {
        console.log('获取通讯录失败', e)
      });
    },
    // 添加好友
    addFriend(toid) {
      // 添加好友API
      addFriend({ toid }).then(res => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg)
        // 好友申请发送成功
        showToast('好友申请发送成功')
      })
    },
    // 短信邀请
    smsInvite(diff) {
      // 短信邀请API
      smsInvite({ diff }).then(res => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg)
        // 短信邀请发送成功
        showToast('短信邀请发送成功')
      })
    },
    // 一键邀请好友
    inviteFriend() {
      // 循环调用单次邀请
      this.invite.forEach(item => {
        // 短信邀请API
        this.smsInvite(item.phone)
      })
    }
  },
  onLoad() {
    // 存入缓存标识
    uni.setStorageSync('address', true)
    // 获取通讯录
    this.getContacts()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './contacts.scss';
</style>