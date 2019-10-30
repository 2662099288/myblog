<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <van-row  type="flex" justify="space-around">
      <van-col offset="2" span="10">
        <Home></Home>
      </van-col>
      <van-col offset="3" span="8" >
        <Rightlist></Rightlist>
      </van-col>
    </van-row>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
import Header from '@/components/Header.vue';
import Home from '@/components/temHome.vue';
import Rightlist from "@/components/temRightlist.vue";
import Footer from '@/components/temFooter.vue';
export default {
  name: 'home',
  components: {
    Header:Header,
    Rightlist:Rightlist,
    Footer:Footer,
    Home:Home
  }
}
</script>
