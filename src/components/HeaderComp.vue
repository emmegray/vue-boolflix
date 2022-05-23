<template>
  <nav>
    <a @click="homeClick" href="#"><img src="https://fontmeme.com/temporary/6a70d7c8925a7bbf00f474f7029b84e5.png" alt="logo" srcset="" /></a>
    <a href="#">Movies</a>
    <a @click="changePage" href="#">Serie TV</a>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComp',
  methods: {
    homeClick () {
      this.$emit("homeClick")
    },
    changePage (){
      this.$emit("changePage", "tv")
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
  background: rgb(116,16,16);
  background: linear-gradient(0deg, rgba(116,16,16,0) 0%, rgba(255,165,233,0) 27%, rgba(0,0,0,1) 69%);
  color: red;
  text-align: start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  a {
    text-decoration: none;
    color: white;
    justify-self: left;
    &:hover {
      opacity: 0.5;
    }
  }
} 
</style>