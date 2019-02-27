<template>
  <div class="container">
    <div class="head_title">
      <h1>
        <router-link><span>&lt;</span></router-link :to="router.name">
        新闻列表
      </h1>
    </div>
    <div class="content">
      <ul>
        <li v-for="(num,index) in nums" :key="index">
          <a href="###">
            <img src="" alt="图片没有显示"/>
            <div class="introduce">
              <p class="news_title">this is the title about the news</p>
              <p class="line2"><span class="clickNums">点击数：{{num}}</span><span class="thisTime">{{thisTime}}</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        thisTime: '2019-09-09',
        nums: [999, 33, 444, 5556, 777, 789, 799, 997, 977, 99999],
        router: {name: 'home'}
      }
    }
  }
</script>
<style scoped>
  .container {
    width: 100%;
  }

  .head_title {
    width: 100%;
    font-size: 0.7rem;
  }

  .head_title span {
    position: absolute;
    left: 1rem;
  }

  .head_title h1 {
    width: 100%;
    text-align: center;
    line-height: 150%;
  }

  .content {
    width: 100%;
    padding: 1%;
  }

  ul li {
    list-style: none;
    width: 100%;
    margin-top: 1rem;
  }

  .content a {
    width: 100%;
    text-decoration: none;
  }

  img {
    width: 20%;
    margin-right: 5%;
    float: left;
  }

  .introduce {
    width: 75%;
    float: left;
  }

  .content a:after {
    content: '';
    display: block;
    clear: both;
  }

  .news_title {
    text-align: left;
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
  }

  .clickNums, .thisTime {
    display: block;
    width: 50%;
    float: left;
    font-size: 0.5rem;
    line-height: 150%;
  }

  .line2:after {
    content: '';
    display: block;
    clear: both;
  }

</style>
