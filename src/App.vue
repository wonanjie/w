<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/404">New Page</router-link> |
      <router-link to="/nav">Nav</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
body {
  background-color: rgb(58, 58, 65);
}

a {
  text-decoration: none;
  margin-left: 10px;
  &:link {
    color: gray;
  }
  &:visited {
    color: gray;
  }
  &:hover {
    color: aqua;
  }
  font: {
    size: 20px;
  }
}

#nav {
  height: 50px;
  color: white;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  // align-content: center;
  justify-content: center;
  text-align: center;
  font: {
    family: arial;
    weight: bold;
  }
}
</style>
