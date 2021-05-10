<template>
  <div class="communi">
    <div class="left">
      <a-component></a-component>
    </div>
    <div class="right">
      <c-component></c-component>
    </div>
  </div>
</template>

<script>
import AComponent from '../../components/A-Component/AComponent';
import CComponent from '../../components/C-Component/CComponent';
export default {
  name: 'Communication',
  components: { AComponent, CComponent },
  props: {},
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
.communi {
  display: flex;
  height: 100%;
  .left {
    flex: 1;
    border: 1px solid red;
    padding: 12px;
  }
  .right {
    flex: 1;
    border: 1px solid green;
    padding: 12px;
  }
}
</style>