<template>
<div class="c-head box">
  <a href="" class="c-head-left">返回</a>
  <h1 class="c-head-title"><slot name="title"></slot></h1>
  <a href="" class="c-head-right">其他</a>
</div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
.c-head{
    height: 44px;
    line-height: 44px;
  > *{
    text-align: center;
    font-size: 14px;
  }
  .c-head-left{
    flex: 2;
  }
  .c-head-title{
    flex: 6;
    font-weight: normal;
  }
  .c-head-right{
    flex: 2;
  }
}

</style>
