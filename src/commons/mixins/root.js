export default {
  data() {
    return {
      IS_DO_NEXT: false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const isParent = sessionStorage.getItem('parent-beautify');
      if (isParent) {
        this.$root.IS_DO_NEXT = true;
      }
    }
  }
};