<template>
  <div data-beautify-type="0" class="app-index-page">
    <div
      class="login-page form beautify-ui beautify-form"
      data-beautify-type="1"
    >
      <!-- log -->
      <div class="row">
        <div class="logo box">
          <div class="logo-cover"></div>
          <div class="logo-body box">HUIONE PAY</div>
        </div>
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
        data-beautify-type="2"
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
        <a @click="doLogin" class="form-btn">登录</a>
      </div>

      <!-- 底部其他操作 -->
      <div data-beautify-type="6" class="row box beautify-ui full-box">
        <a href="#/retrieve" class="form-text-btn btn-align-left"
          >忘记密码？</a
        >
        <a class="form-text-btn">进入汇率</a>
        <a href="#/register" class="form-text-btn btn-align-right">新人注册</a>
      </div>
    </div>

    <version></version>
  </div>
</template>

<script>
import version from "./version.vue";
export default {
  name: "indexPage",
  data() {
    return {};
  },
  created() {},
  components: {
    version,
  },
  methods: {
    doLogin() {
      this.$router.push("/main");
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/form.less";
.app-index-page {
  background: url(../assets/imgs/login/login_bg.jpg) no-repeat;
  background-size: cover;
  height: 100%;
  .login-page {
    .logo {
      flex-flow: column;
      padding-top: 30px;
      .logo-cover {
        height: 100px;
        width: 100px;
        background: url(../assets/imgs/login/login_huione_logo.png) no-repeat;
        background-size: cover;
      }
      .logo-body {
        min-height: 40px;
        min-width: 80px;
        border-radius: 3px;
        color: #fbf2c9;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
  .form-btn {
    margin-top: 30px;
    background: var(--btn-bg-color);
    border: var(--btn-border-thick) var(--btn-border-style)
      var(--btn-border-color);
    border-color: var(--btn-border-color);
    border-radius: var(--btn-border-radius);
    color: var(--btn-font-color);
  }

  .form-text-btn {
    color: var(--text-btn-font-color);
    text-decoration: var(--text-btn-text-decoration);
  }

  .input-form {
    border-bottom: var(--input-border-thick) var(--input-border-style)
      var(--input-border-color);
    input,
    .form-title {
      color: var(--input-title-color);
    }
  }
  .form {
    &.bottom-border .input-form {
      border-bottom: var(--input-border-thick) var(--input-border-style)
        var(--input-border-color);
    }
  }
}

.no-border .input-form {
  border: none;
}
</style>
