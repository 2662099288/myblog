<template>
  <div class="message">
    <Header></Header>
    <van-row  type="flex" justify="space-around">
      <van-col offset="2" span="10">
        <MessageBoard></MessageBoard>
        <aMessage></aMessage>
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
import MessageBoard from "@/components/temMessageBoard.vue";
import aMessage from "@/components/temaMessage.vue";
import Rightlist from "@/components/temRightlist.vue";
import Footer from '@/components/temFooter.vue';
import Vue from "vue";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
export default {
  name: "message",
  components: {
    MessageBoard: MessageBoard,
    Header: Header,
    aMessage:aMessage,
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