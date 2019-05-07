<template>
  <div id="app" class="container">
    <Header></Header>
    <Nav id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/article">文章</router-link> |
      <router-link to="/about">关于我</router-link>
    </Nav>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
