<template>
  <c-view title="HUIONE PAY" class="main-page">
    <a class="message" slot="s-right">
      <i class="iconfont iconlingdang"></i>
    </a>
    <div data-beautify-type="8" class="menu main-menu box beautify-ui">
      <a>
        <i class="iconfont iconsaoma"></i>
        <span>扫码付</span>
      </a>
      <a>
        <i class="iconfont iconfukuanma"></i>
        <span>付款码</span>
      </a>
      <a>
        <i class="iconfont iconshoukuanma01"></i>
        <span>收款码</span>
      </a>
    </div>
    <div data-beautify-type="7" class="menu list-menu box beautify-ui">
      <a>
        <div class="icon-box"></div>
        <span>提现</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>话费充值</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>转账</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>兑汇</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>理财</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>生活缴费</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>充值</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>汇率</span>
      </a>
      <a>
        <div class="icon-box"></div>
        <span>账单</span>
      </a>
    </div>
  </c-view>
</template>

<script>
import cView from "@components/view.vue";
export default {
  name: "mainPage",
  data() {
    return {
      activeIndex: 0,
    };
  },
  components: {
    cView,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
/deep/ .c-head {
  background: #202533 !important;
  color: #fff;
  border-color: #202533 !important;
}
.main-page {
  .message {
    font-size: 18px;
  }
  .menu {
    flex-wrap: wrap;
    justify-content: flex-start;
    a {
      text-align: center;
      padding: 20px 0;
      font-size: 12px;
      color: #666;
      width: 33.33%;
      display: inline-block;
      .icon-box {
        width: 50px;
        height: 50px;
        background: #e2e2e2;
        margin: 0 auto;
        border-radius: 100%;
        margin-bottom: 10px;
      }
      .iconfont {
        display: block;
        font-size: 32px;
        margin-bottom: 10px;
      }
    }
    &.list-menu {
      a {
        // 动态设置点
        font-size: var(--list-menu-font-size);
        color: var(--list-menu-font-color);
        width: var(--list-menu-column-num);
        .icon-box {
          box-shadow: var(--list-menu-box-shadow);
          border-radius: var(--list-menu-border-radius);
          background: var(--list-menu-icon-bgcolor);
          margin-bottom: var(--list-menu-icon-margin-bottom);
        }
      }
    }
    &.main-menu {
      background: #202533;
      padding: 20px 0;
      justify-content: center;
      a {
        color: #fff;
      }
    }
  }
}
</style>
