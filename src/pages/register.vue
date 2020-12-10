<template>
  <c-view title="注册" class="register-page">
    <a href="" class="service" slot="s-right">联系客服</a>
  </c-view>
</template>

<script>
import cView from "@components/view.vue";
export default {
  name: "register",
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
.register-page {
  .service {
    color: #3899ec;
  }
}
</style>
