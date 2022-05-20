<template>
  <nav>
    <h1>BOOFLIX</h1>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: red;
  text-align: start;
}
</style>