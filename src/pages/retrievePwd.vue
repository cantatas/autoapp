<template>
  <c-view title="忘记密码" class="retrieve-page box">
    <div class="no-data box">忘记密码</div>
  </c-view>
</template>

<script>
import cView from "@components/view.vue";
export default {
  name: "retrieve",
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
.retrieve-page {
}
</style>
