<template>
  <div id="app">
    <!--头部-->
    <mt-header title="信息化系统"></mt-header>
    <!--中部，没有<router-view></router-view>留坑就不会显示-->
    <router-view></router-view>
    <!--底部-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="" slot="icon" src=""/>
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img @click="" slot="icon" src=""/>
        VIP
      </mt-tab-item>
      <mt-tab-item id="find">
        <img @click="" slot="icon" src=""/>
        查找
      </mt-tab-item>
      <mt-tab-item id="shopCar">
        <img @click="" slot="icon" src=""/>
        购物车
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: ''
      }
    },
    /*methods: {
      changeHash() {
        //调用早于子组件赋值给父组件的selected
        this.$nextTick(function () {
          //在vue完成渲染任务以后的行为
          /!*
          * 这里执行有误，打印的this.selected任然延迟执行
          * *!/
          console.log(this.selected);
          this.$router.push({
            name: this.selected
          })
        })
      }
    },*/
    watch: {
      selected(newV, oldV) {
        console.log(newV);
        //通过push函数实现页面跳转
        this.$router.push({
          name: newV
        })
      }
    }
  }
</script>

<style>

</style>
