<template>
  <view class="login-page box">
    <view class="page-body">
      <view class="logo box">logo</view>
      <view class="number-prefix box row">
        <view class="left"><text>国家/地区</text></view>
        <view class="center"><input type="text" /></view>
        <view class="right"></view>
      </view>
      <view class="login-name box row">
        <view class="left"><text>账号</text></view>
        <view class="center"><input type="text" /></view>
        <view class="right"></view>
      </view>
      <view class="login-key box row">
        <view class="left"><text>密码</text></view>
        <view class="center"><input type="text" /></view>
        <view class="right"></view>
      </view>
	<view class="login-form box ">
		<button>登录</button>
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
  onLoad() {
	  
  },
  methods: {
	  
  },
};
</script>

<style lang="scss" scoped>
.login-page {
	color: #fff;
    height: 100%;
	width: 100%;
	flex-direction: column;
    justify-content: flex-start;
	font-size: 28rpx;
	background: url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3230537411,2410127023&fm=26&gp=0.jpg)  no-repeat;
	background-size: cover;
}
.page-body {
  margin: 40rpx;
  width: 80%;
}
.row {
	width: 100%;
	border-bottom: 1rpx solid #c1c1c1;
	margin-bottom: 20rpx;
	padding-top:40rpx;
	padding-bottom:10rpx;
}
.row > * {
  height: 40rpx;
  line-height: 40rpx;
  uni-input{
	font-size: 28rpx;
    margin-right: 10rpx;
    color: #fff;
  }
}
.left {
  display: inline-block;
  height: 100%;
  flex: 3;
  text-align: left;
}
.center{
  width: 100%;
  flex: 6;
}
.right {
  width: 100%;
  flex: 1;
}
.logo {
  min-height: 200rpx;
}
.login-form{
	margin-top: 80rpx;
	uni-button{
		width: 100%;
		border: none;
		background: #fc6f6f;
		color: #fff;
		font-size: 28rpx;
		padding: 10rpx 0;
	}
}
</style>
