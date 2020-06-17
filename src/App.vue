<template>
  <div id="app">
    <div class="navbar flex a-center space-between" id="nav">
      <h1>missBooks</h1>
      <div class="route-container">
        <router-link to="/">BookApp</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.route-container {
  margin-right: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  height: 10vh;
  background-color: #353b48;
}

.navbar h1 {
  color: white;
  margin-left: 20px;
}

#nav {
  padding: 10px 0px;

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    padding: 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
