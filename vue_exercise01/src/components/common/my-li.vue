<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name:'myLi',
    data(){
      return {

      }
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
    width: 30%;
    background-color: aqua;
    float: left;
    margin: 1%;
    line-height: 3rem;
  }
</style>
