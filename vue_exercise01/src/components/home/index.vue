<template>
  <div>
    <!--上有轮播图，下游九宫格-->
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        {{ index+1 }}
        <img :src="img"/>
      </mt-swipe-item>
      <!--<mt-swipe-item>2</mt-swipe-item>-->
      <!--<mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    <!--九宫格-->
    <div class="grid">
      <!--<ul>
        <li v-for="num in nums">
          <a class="part" href="###">
            <img src="" alt="这是图片" />
            <p>title</p>
          </a>
        </li>
      </ul>-->
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <router-link :to="grid.router">
            <img src="" alt="这是图片"/>
            <p>{{grid.title}}</p>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: ['', '', ''],  //轮播图数据
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        grids: [
          {className: 'grid', title: '1', router: {name: 'news.list'}},
          {className: 'grid', title: '2', router: {name: 'news.list'}},
          {className: 'grid', title: '3', router: {name: 'news.list'}},
          {className: 'grid', title: '4', router: {name: 'news.list'}},
          {className: 'grid', title: '5', router: {name: 'news.list'}},
          {className: 'grid', title: '6', router: {name: 'news.list'}},
          {className: 'grid', title: '7', router: {name: 'news.list'}},
          {className: 'grid', title: '8', router: {name: 'news.list'}},
          {className: 'grid', title: '9', router: {name: 'news.list'}}
        ]
      }
    },
    //created创建组件的生命周期中，可以操作数据
    created() {
      /*this.$axios.get('getlunbo').then(res=>{
        console.log(res)
        this.imgs = ["","",""];
      }).catch(err=>{
        console.log('轮播图获取异常');
        this.imgs = ["","",""];
        console.log(err)
      })*/
    }
  }
</script>
<style scoped>
  /*scoped实现样式组件化的属性*/
  .mint-swipe {
    height: 200px;
  }

  /*相当于全局改变img标签的属性，想要只针对当前组件几句要为style标签添加scoped属性*/
  /*img{
    width: 100%;
  }*/
  .grid {
    width: 100%;
  }

  /*  .grid ul{
      width: 100%;
      padding: 2%;
    }

    .grid ul li {
      list-style: none;
      width: 30%;
      background-color: aqua;
      float: left;
      margin: 1%;
      line-height: 3rem;
    }

    .grid ul:after{
      content: '';
      display: block;
      clear: both;
    }*/

  /*  my-ul:after{
      content: '';
      display: block;
      clear: both;
    }*/

  .grid {
    width: 100%;
    display: block;
    text-decoration: none;
  }

  .grid img, .grid p {
    display: block;
    color: #000;
    font-weight: 900;
    text-align: center;
    line-height: 150%;
  }

</style>
