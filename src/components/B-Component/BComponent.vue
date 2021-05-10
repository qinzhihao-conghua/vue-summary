<template>
  <div>我是B组件{{inputValue}}</div>
</template>

<script>
export default {
  name: 'B',
  components: {},
  props: {
    inputValue: String
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
</style>