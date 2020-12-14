<template>
  <div class="view">
    <div class="c-head box">
      <div v-if="sLeft" class="c-head-left">
        <slot name="s-left" />
      </div>
      <a @click="doGoback" v-else class="c-head-left">
        <i class="iconfont iconfanhui def-fh"></i>
      </a>
      <h1 class="c-head-title text-overflow">{{ title }}</h1>
      <div class="c-head-right">
        <slot name="s-right" />
      </div>
    </div>
    <div class="view-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cView",
  props: {
    title: {
      type: String,
      default: "",
    },
    sLeft: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    doGoback() {
      history.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.view {
  display: flex;
  flex-flow: column;
  height: 100%;

  .c-head {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #e8e8e8;
    background: #fff;
    > * {
      text-align: center;
      font-size: 14px;
    }
    .c-head-left {
      flex: 2;
      i {
        font-size: 18px;
        &.def-fh {
          margin-left: -20px;
        }
      }
    }
    .c-head-title {
      flex: 6;
      font-weight: normal;
    }
    .c-head-right {
      flex: 2;
    }
  }

  .view-container {
    position: relative;
    height: 100%;
  }
}
</style>
