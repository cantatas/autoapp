<template>
  <div class="start-page box">
    <a class="skip" @click="gotoLogin">跳过</a>
    START PAGE
  </div>
</template>
<script>
export default {
  name: "skipPage",
  data() {
    return {
      timer: null,
    };
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
  .skip {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    border: 1px solid;
    padding: 2px 10px;
    border-radius: 3px;
    color: #555;
  }
}
</style>
