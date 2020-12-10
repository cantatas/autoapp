<template>
  <c-view title="找回密码" class="retrieve-page">
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
