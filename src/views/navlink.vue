<template>
  <a></a>
</template>
<script>
export default {
  props: ["name"]
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
  color: gray;
  background-color: white;
  &:hover {
    color: blue;
  }
}
</style>
