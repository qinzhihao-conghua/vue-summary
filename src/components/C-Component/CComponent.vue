<template>
  <div class="cc">
    <h1>我是C组件，一级组件</h1>
    <d-component></d-component>
  </div>
</template>

<script>
import DComponent from '../D-Component/DComponent'
export default {
  name: 'C',
  components: { DComponent },
  props: {},
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
.cc {
  border: 1px solid #000;
}
</style>