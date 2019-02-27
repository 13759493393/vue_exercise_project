<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name:'myUl',
    data(){
      return {

      }
    }
  }
</script>
<style scoped>
  ul{
    width: 100%;
    padding: 2%;
  }

  ul:after{
    content: '';
    display: block;
    clear: both;
  }
</style>
