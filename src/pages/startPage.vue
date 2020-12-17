<template>
  <div class="start-page box">
    <a class="skip" @click="gotoLogin">跳过</a>
    <version></version>
  </div>
</template>
<script>

import version from "./version.vue";
export default {
  name: "skipPage",
  data() {
    return {
      timer: null,
    };
  },
  components: {
    version,
  },
  created() {
    this.autoRedirect();
  },
  methods: {
    autoRedirect() {
      if (this.$root.IS_DO_NEXT) return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$router.push("/login");
      }, 3000);
    },
    gotoLogin(){
      if (this.$root.IS_DO_NEXT) return;
      clearTimeout(this.timer);
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="less" scoped>
.start-page {
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/start/splash.png) no-repeat;
  background-size: cover;
  
  .skip {
    position: absolute;
    display: none;
    top: 20px;
    right: 20px;
    font-size: 12px;
    border: 1px solid;
    padding: 2px 10px;
    border-radius: 3px;
    color: #fff;
    z-index: 9;
  }
}
</style>
