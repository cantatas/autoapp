<template>
  <div 
  data-beautify-type="0" 
  class="app-index-page"
  :style="themeData"
  >
    <div class="login-page form beautify-ui" data-beautify-type="1">
      <!-- log -->
      <div class="row">
        <div class="logo box">logo</div>
      </div>

      <!-- 国家/地区 -->
      <div
        class="row beautify-ui"
        data-beautify-type="2"
        data-beautify-name="prefixer"
      >
        <div class="row-body box input-form">
          <div class="form-title">国家/地区</div>
          <div class="form-ele">
            <input type="text" placeholder="请选择" />
          </div>
          <div class="form-options"></div>
        </div>
      </div>

      <!-- 账号 -->
      <div
        class="row beautify-ui"
        data-beautify-type="2"
        data-beautify-name="name"
      >
        <div class="row-body input-form box">
          <div data-beautify-refit="2name" class="form-title">账号</div>
          <div class="form-ele">
            <input
              data-beautify-refit="2placeholder"
              type="text"
              placeholder="请输入账号"
            />
          </div>
          <div class="form-options"></div>
        </div>
      </div>

      <!-- 密码 -->
      <div
        class="row beautify-ui"
        data-beautify-type="3"
        data-beautify-name="pwd"
      >
        <div class="row-body input-form box">
          <div class="form-title">密码</div>
          <div class="form-ele">
            <input type="password" placeholder="请输入密码" />
          </div>
          <div class="form-options"></div>
        </div>
      </div>

      <!-- 登录 -->
      <div data-beautify-type="5" class="row beautify-ui box">
        <a class="form-btn">登录</a>
      </div>

      <!-- 底部其他操作 -->
      <div data-beautify-type="6" class="row box beautify-ui full-box">
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
  data() {
    return {
      themeData: {
        '--font-color':'#333',
        '--border-color':'#333',
        '--bg-color':'#333',
      },
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/form.less";
.app-index-page {
  height: 100%;
  .login-page {
    .logo {
      min-height: 50px;
    }
  }
  .form-btn {
    margin-top: 30px;
    background: var(--btn-bg-color);
    border: 1px solid;
    border-color: var(--btn-border-color);
    border-radius: var(--btn-border-radius);
  }
  .input-form{
      border-bottom: var(--input-border-thick) var(--input-border-style) var(--input-border-color);
    &.bottom-border{
      border-bottom: var(--input-border-thick) var(--input-border-style) var(--input-border-color);
    }
    &.full-border{
      padding: 10px 15px;
      border: var(--input-border-thick) var(--input-border-style) var(--input-border-color);
      // 全显边框才支持半径样式
      &.border-radius{
        border-radius: var(--input-border-radius);
      }
    }
    .form-title {
      color: var(--font-color);
    }
  }
}
</style>
