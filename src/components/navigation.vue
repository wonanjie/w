<template>
  <div>
    <navlink id="logo"></navlink>
    <router-view />
  </div>
</template>
<script>
import navlink from "../views/navlink";

export default {
  props: ["logo"],
  data(){
    return{
      msg: "navigation"
    }
  },
  components: {
    navlink: navlink
  }
};
</script>
