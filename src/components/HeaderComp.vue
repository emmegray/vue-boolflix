<template>
  <nav>
    <a @click="homeClick" href="#"><img src="https://fontmeme.com/permalink/220520/5eb8c995a6653abb8ffe3ce39ff01a53.png" alt="logo" srcset="" /></a>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComp',
  methods: {
    homeClick () {
      this.$emit("homeClick")
    }
  }
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
} 
</style>