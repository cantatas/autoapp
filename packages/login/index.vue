<template>
  <view class="login-page box">
    <view class="page-body">
      <view class="logo box">logo</view>
      <view class="number-prefix box row">
        <view class="left"><text>国家/地区</text></view>
        <view class="right"><input type="text" /></view>
      </view>
      <view class="login-name box row">
        <view class="left"><text>账号</text></view>
        <view class="right"><input type="text" /></view>
      </view>
      <view class="login-key box row">
        <view class="left"><text>密码</text></view>
        <view class="right"><input type="text" /></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "module-login",
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style scoped>
.login-page {
  width: 100%;
  flex-direction: column;
  font-size: 12rpx;
}
.page-body {
  margin: 20rpx;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  width: 100%;
  border-bottom: 1px solid #888;
  margin-bottom: 10rpx;
  min-height: 40rpx;
  margin: 20rpx;
}
.row > * {
  height: 40rpx;
  line-height: 40rpx;
}
.left {
  display: inline-block;
  height: 100%;
  flex: 3;
  text-align: left;
  background: #999
}
.right {
  width: 100%;
  flex: 7;
}
.logo {
  min-height: 200rpx;
}
</style>
