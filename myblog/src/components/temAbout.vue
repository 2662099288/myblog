<template>
  <div class="about" id="test">
    <h2>关于我</h2>
    <img src="../assets/img/maoto.png" alt />
    <pre>
       欢迎来到Mango Ya！我是Aimee，是一个可爱的boy，前端程序媛，喜欢各种有趣的事物，爱好各种动手的小玩意儿

       90后小帅哥，前端小萌新，

       爱美食，爱动手做美食，想长胖的尽管来。

       ==========================</pre>
    <div class="link">
      <a href="#">GitHub</a>
      <a href="#">Resume</a>
      <a href="#">CSDN</a>
    </div>
    <div class="link">
      <a href="#">公众号</a>
      <a href="#">微博</a>
      <a href="#">微信</a>
      <a href="#">QQ</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
       //实现跳转到该页面的指定位置
    document.documentElement.scrollTop = 675;
  },
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  box-sizing: border-box;
  width: 800px;
  height: 738px;
  margin-top: 90px;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px;
}
pre {
  text-align: left;
  font-size: 15px;
}
.link {
  margin-top: 10px;
  margin-left: 40px;
  width: 40%;
  text-align: left;
}
.link a {
  color: #01aaed;
  margin-right: 20px;
  font: 15px avenir;
  font-style: italic;
}
.link a:hover {
  color: #8f0ef8;
}
</style>
