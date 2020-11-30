<template>
  <div class="app-index-page">
    <div class="login-page form">
      <div class="row">
        <div class="logo box">logo</div>
      </div>
      <div class="row">
        <div class="row-body box">
          <div class="form-title">国家/地区</div>
          <div class="form-ele">
            <input type="text" placeholder="请选择" />
          </div>
          <div class="form-options"></div>
        </div>
      </div>
      <div class="row">
        <div class="row-body box">
          <div class="form-title" >账号</div>
          <div class="form-ele">
            <input type="text" placeholder="请输入账号" />
          </div>
          <div class="form-options"></div>
        </div>
      </div>
      <div class="row">
        <div class="row-body box">
          <div class="form-title">密码</div>
          <div class="form-ele">
            <input type="password" placeholder="请输入密码" />
          </div>
          <div class="form-options"></div>
        </div>
      </div>

      <div class="row box">
        <a class="form-btn">登录</a>
      </div>

      <div class="row box full-box">
        <a class="form-text-btn btn-align-left">忘记密码？</a>
        <a class="form-text-btn">进入汇率</a>
        <a class="form-text-btn btn-align-right">新人注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexPage",
};
</script>

<style lang="less" scoped>
.form {
  font-size: 14px;
  width: 80%;
  margin: auto;
  input {
    appearance: none;
    border: 0;
  }
  .row {
    margin-bottom: 8%;
    .row-body {
      border-bottom: 1px solid #999;
      padding: 5px 0;
      > * {
        width: 100%;
        flex: 1;
      }
      .form-title {
        text-align: left;
      }
    }
  }
  .form-btn {
    border-radius: 5px;
    display: block;
    background: #ff7171;
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #fff;
  }
  .form-text-btn{
    display: block;
  }
  .btn-align-left{
    text-align: left;
  }
  .btn-align-right{
    text-align: right;
  }
}
.app-index-page {
  .login-page {
    .logo{
      height: 100px;
    }
  }
  .form-btn{
    margin-top: 30px;
  }
}
</style>
