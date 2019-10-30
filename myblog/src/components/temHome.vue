<template>
  <div class="home">
    <lazy-component v-for="(event,index) in eventList" :key="index" class="eventbox">
      <h2>{{event.name}}</h2>
      <p>发表于{{event.time}}{{event.Browse_number}}次浏览</p>
      <p>{{event.introduction}}</p>
      <div class="eventimgbox">
        <img v-lazy="event.img" />
      </div>
    </lazy-component>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true
});
export default {
  data() {
    return {
      eventList: []
    };
  },
  methods: {
    get() {
      // 请求后台
      this.$axios.get("http://localhost:8888/index").then(result => {
        console.log(result.data.eventList);
        this.eventList = result.data.eventList;
      });
    }
  },
  created() {
    let that = this;
    that.get();
  },
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 800px;
  margin-top: 50px;

  border-radius: 5px;
  padding: 5px;
}
.eventbox {
  margin-top: 40px;
  background: #ffffff;
  border-radius: 5px;
}
.eventimgbox {
  width: 770px;
  height: 300px;
  overflow: hidden;
  text-align: center;
}
.home img {
  max-width: 100%;
}
</style>
