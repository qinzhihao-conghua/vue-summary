<template>
  <section class="main-area">
    <aside class="area-left">
      <ul class="left-nav">
        <li class="nav-item">
          <router-link to="./comment-doc">基础的东西</router-link>
        </li>
        <li class="nav-item">
          <router-link to="./communication">组件间通讯</router-link>
        </li>
        <li class="nav-item">
          <router-link to="./router-example">路由相关</router-link>
        </li>
      </ul>
    </aside>
    <main class="area-right">
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Base',
  components: {},
  props: {},
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
.main-area {
  display: flex;
  height: calc(100% - 56px);
  .area-left {
    flex: 3;
    max-width: 350px;
    margin-right: 24px;
    border-right: 1px solid #ddd;
    .left-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      .nav-item {
        width: 100%;
        padding: 12px;
      }
    }
  }
  .area-right {
    flex: 7;
  }
}
</style>