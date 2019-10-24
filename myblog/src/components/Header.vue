<template>
  <div class="hello">
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <i class="iconfont">&#xe601;</i>首页
        </router-link>
        <router-link to="/">
          <i class="iconfont">&#xe602;</i>分类
        </router-link>
        <router-link to="/">
          <i class="iconfont">&#xe603;</i>实验室
        </router-link>
        <router-link to="/">
          <i class="iconfont">&#xe601;</i>赞赏
        </router-link>
        <router-link to="/">
          <i class="iconfont">&#xe607;</i>伙伴
        </router-link>
        <router-link to="/">
          <i class="iconfont">&#xe604;</i>留言板
        </router-link>

        <router-link to="/about">
          <i class="iconfont">&#xe6c5;</i>关于
        </router-link>
      </div>
      <div class="header-right">
        <div class="header-right-left">
          <router-link to="/about">登录</router-link>
          <span>|</span>
          <router-link to="/about">注册</router-link>
        </div>
        <i class="iconfont search">&#xe605;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  background: rgba(40, 42, 44, 0.6);
  color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78%;
}
.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 55%;
}
.header-left a {
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.header-right {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 38px;
  line-height: 38px;
}
.header-right-left {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.header-right-left a,
.header-right-left span {
  margin-right: 2px;
  height: 38px;
}
.search {
  font-size: 12px;
  margin-right: 10px;
}
.header-left a:hover {
 background: rgba(73, 69, 107, 0.7);
}
</style>
