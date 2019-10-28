<template>
  <div class="about">
    <Header></Header>
    <van-row  type="flex" justify="space-around">
      <van-col offset="2" span="10">
        <About></About>
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
import Header from "@/components/Header.vue";
import about from "@/components/temAbout.vue";
import Rightlist from "@/components/temRightlist.vue";
import Footer from '@/components/temFooter.vue';
import Vue from "vue";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
export default {
  name: "about",
  components: {
    About: about,
    Header: Header,
    Rightlist: Rightlist,
    Footer:Footer
  }
};
</script>
<style scoped>
     .van-row{
          background:rgb(239,239,239);
     }
</style>