<template>
  <div id="app" :style="themeData.formStyle" :class="themeData.FormBorderClass">
    <router-view></router-view>
  </div>
</template>
<script>
import { getInfoByIdApi } from "@/api/editor";
export default {
  name: "App",
  data() {
    return {
      themeData: {
        formStyle: "",
        FormBorderClass: "",
      },
    };
  },
  created() {
    this.getInfoById();
  },
  methods: {
    getInfoById() {
      getInfoByIdApi({ _id: window.AutoappsManifest.appId }).then((res) => {
        res = res.data.formAttribute;
        this.themeData.formStyle = res.formStyle;
        this.themeData.FormBorderClass = res.FormBorderClass;
      });
    },
  },
};
</script>
