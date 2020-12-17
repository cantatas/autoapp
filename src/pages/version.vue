<template>
  <div class="app-version">V {{ number }}</div>
</template>
<script>
export default {
  name: "appVersion",
  data() {
    return {
      number: "2.9.10 157",
    };
  },
  created() {},
};
</script>
<style lang="less" scoped>
.app-version {
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: #fff;
  font-size: 12px;
  text-align: center;
}
</style>
