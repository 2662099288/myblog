<template>
  <div>
    <div class="bgheader" :style="{backgroundImage:headbg01}">
      <div class="h-information">
        <div class="h-information-box">
          <div class="h-information-boximg">
            <img src="../assets/img/tou.png" alt />
            <h2 class="text1">Write the Code. Change the World.</h2>
          </div>
        </div>
      </div>
    </div>
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
          <i class="iconfont search">
            &#xe605;
            <div class="searchbox">
              <div class="searchBox">
                <input type="text" class="searchBoxli" placeholder="搜索" />
                <i class="iconfont searchclick">&#xe605;</i>
              </div>
            </div>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headbg01: "url(" + require("../assets/img/headbg01.jpg") + ")"
    };
  },

  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bgheader {
  height: 650px;
  background-size: cover;
  background-position: center 50%;
}
.hello {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  background: rgba(40, 42, 44, 0.6);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  white-space: nowrap;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78%;
  flex-wrap: nowrap;
}
.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 55%;
  flex-wrap: nowrap;
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
  flex-wrap: nowrap;
}
.header-right-left {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  flex-wrap: nowrap;
}
.header-right-left a,
.header-right-left span {
  margin-right: 2px;
  height: 38px;
}
.search {
  width: 30px;
  font-size: 12px;
  margin-left: 5px;
  position: relative;
}
.header-left a:hover {
  background: rgba(73, 69, 107, 0.7);
}
.searchbox {
  width: 220px;
  height: 58px;
  position: absolute;
  top: 38px;
  right: 8px;
  background: rgba(40, 42, 44, 0.6);
  display: none;
  border-radius: 2px;
}
.searchBox {
  width: 180px;
  height: 30px;
  margin-top: 12px;
  margin-left: 20px;
  border-radius: 3px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchBoxli {
  height: 28px;
  color: black;
  outline: none;
  border: none;
}
.searchclick {
  position: absolute;
  top: 7px;
  left: 180px;
  color: rgba(0, 0, 0, 0.123);
  font-size: 13px;
}
.search:hover .searchbox {
  display: block;
}
.h-information {
  width: 100%;
  position: absolute;
  top: 480px;
  left: 225px;
}
.h-information-boximg {
  height: 145px;
  width: 70%;
  background: rgba(230, 244, 249, 0.8);
  border-radius: 4px;
  padding: 40px 0;
}
.h-information-boximg img:hover{
     transform: rotate(360deg);
}
.h-information-boximg img {
  width: 100px;
  border-radius: 50%;
  transition: all 0.8s;
}
.text1 {
  background: linear-gradient(to right, rgb(253, 3, 3), #48456d);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 18px;
}
</style>
