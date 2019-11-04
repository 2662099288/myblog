<template>
  <div class="home">
    <div v-for="(event,index) in eventList" :key="index" class="eventbox">
      <h2>{{event.name}}</h2>
      <div class="topTime">{{event.time1}}</div>
      <div class="topclass">
        {{event.class}}
        <div class="topclassjiao"></div>
      </div>
      <p class="eventheader">
        <i class="iconfont">&#xe60a;</i> 发表于
        <i class="iconfont">&#xe61a;</i>
        {{event.time}}
        <i class="iconfont">&#xe643;</i>
        {{event.BrowseNumber}}次浏览
      </p>
      <p class="eventintrodu">{{event.introduction}}</p>
      <div class="eventimgbox">
        <img v-lazy="event.img" />
      </div>
      <span class="link" @click="read(event.id)">阅读全文>></span>
    </div>
    <div @click="clickMore" class="clickmore">{{more}}</div>
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
      i: 0,
      more: "点击加载更多",
      eventList: [],
      istop: false
    };
  },
  methods: {
    get() {
      // 请求后台
      this.$axios.get("http://localhost:8888/index").then(result => {
        let i = this.i;
        while (result.data.eventList[i]) {
          this.eventList.push(result.data.eventList[i]);
          i++;
          this.i++;
          if (i == 3) {
            break;
          }
        }
      });
    },
    clickMore() {
      this.$axios.get("http://localhost:8888/index").then(result => {
        let i = this.i;
        let breaki = i + 3;
        while (result.data.eventList[i]) {
          this.eventList.push(result.data.eventList[i]);
          i++;
          this.i++;
          if (breaki == 3) {
            break;
          }
        }
        if (!result.data.eventList[i]) {
          this.more = "没有更多啦";
        }
      });
    },
    read(id) {
      let that = this;
      that.$axios.get("http://localhost:8888/read?id=" + id).then(res => {
        that.$router.push({ path: "/read?id=" + id });
      });
    }
  },
  created() {
    let that = this;
    that.get();
  },
  mounted: function() {
    //实现跳转到该页面的指定位置
    this.istop = this.$route.query.istop;
    console.log(this.istop);
    if (this.istop) {
      document.documentElement.scrollTop = 675;
    }
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
  position: relative;
}
.eventbox h2 {
  display: inline-block;
  font-size: 25px;
  color: #444444;
  margin-top: 30px;
}
.eventheader {
  font-size: 14px;
  color: rgb(85, 85, 85);
}
.eventheader i {
  margin-left: 5px;
}
.eventintrodu {
  width: 754px;
  text-indent: 2em;
  text-align: left;
  margin: 70px auto 15px;
}
.eventimgbox {
  width: 770px;
  height: 300px;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}
.topTime {
  width: 70px;
  height: 70px;
  font-size: 28px;
  border-radius: 50%;
  color: #ffffff;
  background: #97dffd;
  position: absolute;
  top: -20px;
  left: -35px;
}
.topclass {
  width: 85px;
  height: 30px;
  color: #ffffff;
  background: #97dffd;
  line-height: 30px;
  font-size: 14px;
  text-indent: 1em;
  position: absolute;
  top: 130px;
  left: -16px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.topclassjiao {
  position: absolute;
  top: 30px;
  width: 0px;
  height: 0px;
  border-top: 7px solid #48456d;
  border-right: 7px solid #48456d;
  border-left: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
.home img {
  max-width: 100%;
}
.clickmore {
  width: 100%;
  height: 30px;
  color: white;
  background: #97dffd;
  margin-top: 30px;
  border-radius: 5px;
  line-height: 30px;
  font-size: 14px;
}
.clickmore:hover {
  background: #15024bcc;
}
.link {
  display: inline-block;
  font-size: 12px;
  border-radius: 5px;
  width: 80px;
  height: 23px;
  line-height: 23px;
  background: #97dffd;
  margin: 15px 0 30px;
}
.link:hover {
  background: #48456d;
}
</style>
