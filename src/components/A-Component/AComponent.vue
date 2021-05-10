<template>
  <div class="ac">
    <h1>我是A组件，一级组件</h1>
    <input type="text" ref="test">
    <button @click="toB($refs.test.value)">传递给b组件</button>
    <b-component :inputValue="inputValue"></b-component>
  </div>
</template>

<script>
import BComponent from '../B-Component/BComponent'
export default {
  name: 'A',
  components: { BComponent },
  props: {},
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    toB(value) {
      console.log('1111', value);
      this.inputValue = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.ac {
  border: 1px solid #000;
}
</style>