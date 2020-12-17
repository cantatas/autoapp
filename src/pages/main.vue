<template>
  <c-view title="HUIONE PAY" class="main-page">
    <a class="message" slot="s-right">
      <i class="iconfont iconlingdang"></i>
    </a>
    <div data-beautify-type="8" class="menu main-menu box beautify-ui">
      <a>
        <i class="iconfont iconsaoma"></i>
        <div class="menu-text">扫码付</div>
      </a>
      <a>
        <i class="iconfont iconfukuanma"></i>
        <div class="menu-text">付款码</div>
      </a>
      <a>
        <i class="iconfont iconshoukuanma01"></i>
        <div class="menu-text">收款码</div>
      </a>
    </div>
    <div data-beautify-type="7" class="menu list-menu box beautify-ui">
      <a :key="index" v-for="(item, index) in menus">
        <div class="icon-box box">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <div class="menu-text">{{ item.text }}</div>
      </a>
      <!-- <a>
        <div class="icon-box"></div>
        <div class="menu-text">话费充值</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">转账</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">兑汇</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">理财</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">生活缴费</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">充值</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">汇率</div>
      </a>
      <a>
        <div class="icon-box"></div>
        <div class="menu-text">账单</div>
      </a> -->
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
      menus: [
        {
          text: "提现",
          icon: "icontixian",
        },
        {
          text: "话费充值",
          icon: "iconmeiyuandollar142",
        },
        {
          text: "转账",
          icon: "iconzhuanzhang-",
        },
        {
          text: "兑汇",
          icon: "iconzhuanzhang",
        },
        {
          text: "理财",
          icon: "iconlicai",
        },
        {
          text: "生活缴费",
          icon: "iconshenghuojiaofei",
        },
        {
          text: "充值",
          icon: "iconchong",
        },
        {
          text: "汇率",
          icon: "iconhuilvzhuanhuan",
        },
        {
          text: "账单",
          icon: "iconliushuidingdan",
        },
      ],
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
  // 主菜单与头部颜色同步
  background: var(--main-menu-bgcolor) !important;
  color: var(--main-menu-font-color);
  border-color: var(--main-menu-bgcolor) !important;
}
.main-page {
  .message {
    font-size: 18px;
  }
  .menu {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px;
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
      .menu-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      .iconfont {
        display: block;
        font-size: 22px;
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
          .iconfont {
            color: var(--list-menu-icon-color);
          }
        }
      }
    }
    &.main-menu {
      background: var(--main-menu-bgcolor);
      padding: 20px 0;
      justify-content: center;
      a {
        color: var(--main-menu-font-color);
        font-size: var(--main-menu-font-size);
        .iconfont {
          color: var(--main-menu-icon-color);
          font-size: var(--main-menu-font-icon-size);
          margin-bottom: var(--main-menu-icon-margin-bottom);
        }
      }
    }
  }
}
</style>
