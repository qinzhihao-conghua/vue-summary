<template>
  <div id="app">
    <header>
      <div>vue2.x知识点总结</div>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="router-link" to="/base">基础</router-link>
        </li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  height: 100%;
  header {
    display: flex;
    align-items: center;
    height: 56px;
    background-color: #3a58fc;
    color: #fff;
    padding: 0 24px;
    .nav {
      margin-left: 56px;
      height: 100%;
      .nav-item {
        height: 100%;
      }
    }
  }
}
.router-link {
  height: 100%;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
}
.router-link-active {
  border-bottom: 4px solid #ffeb3b;
}
</style>
