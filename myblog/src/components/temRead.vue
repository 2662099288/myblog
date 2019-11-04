<template>
  <div class="read" id="A1">
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
      <div class="article-content" v-html="event.content"></div>
      <div class="sharebox">
        分享到：
        <span class="iconfontbox iconfontboxweb">
          <a href title="分享到微博">
            <i class="iconfont iconfontweb">&#xe658;</i>
          </a>
        </span>
        <span class="iconfontbox iconfontboxQQ">
          <a href title="分享到QQ">
            <i class="iconfont iconfontQQ">&#xea8a;</i>
          </a>
        </span>
        <span class="iconfontbox iconfontboxweixin">
          <a href title="分享到微信">
            <i class="iconfont iconfontweixin">&#xe606;</i>
          </a>
        </span>
      </div>
      <div class="admire_mainbox">
        <div class="admire_father">
          <div @click="admire()" class="admire">赞赏</div>
        </div>
        <div v-show="isadmire" class="admirebox">
          <div>
            <img
              src="../assets/img/weixin.png"
              alt
            />
            <p>微信扫一扫，向我赞赏</p>
          </div>
          <div>
            <img
              src="../assets/img/zfb.jpg"
              alt
            />
            <p>支付宝扫一扫，向我赞赏</p>
          </div>
        </div>
      </div>
    </div>
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
      aid: "",
      more: "点击加载更多",
      eventList: [],
      isadmire: false
    };
  },
  methods: {
    get() {
      // 请求后台
      var that = this;
      that.aid = that.$route.query.id;
      console.log(that.aid);
      this.$axios.get("http://localhost:8888/index").then(result => {
           this.eventList=[];
        this.eventList.push(result.data.eventList[that.aid]);
        this.scrollToView();
      });
      
    },
    admire() {
      this.isadmire = this.isadmire ? false : true;
    },
    scrollToView () {
         //实现跳转到该页面的指定位置A1
        document.getElementById('A1').scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        })
    }
    
  },
  created() {
    let that = this;
    that.get();
  },
watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "get"
  },
  name: "About"
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admire_mainbox{
     margin-top: 10px;
}
.admire_father{
     height: 80px;
}
.admire {
  width: 80px;
  height: 34px;
  color: #fff;
  background: #e26d6d;
  line-height: 34px;
  border-radius: 5px;
  margin: 0px auto;
   cursor: pointer;
}
.admirebox {
  display: flex;
  flex-basis: row;
  justify-content: center;
  cursor: pointer;
}
.admirebox img {
  width: 110px;
  height: 110px;
}
.admirebox > div {
  width: 138px;
  margin: 40px 20px;
}
.sharebox {
  text-align: left;
  width: 80%;
  margin: 60px auto;
}
.iconfontbox {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 5px;
  text-align: center;
  transition: all 0.5s;
}
.iconfontboxweb {
  border: 1px solid #ff763b;
}
.iconfontboxQQ {
  border: 1px solid #56b6e7;
}
.iconfontboxweixin {
  border: 1px solid #7bc549;
}
.iconfont {
  font-size: 17px;
  line-height: 32px;
}
.iconfontweb {
  color: #ff763b;
}
.iconfontboxweb:hover .iconfontweb {
  color: white;
}
.iconfontboxweb:hover {
  background: #ff763b;
  color: white;
}
.iconfontQQ {
  color: #56b6e7;
}
.iconfontboxQQ:hover {
  background: #56b6e7;
  color: white;
}
.iconfontboxQQ:hover .iconfontQQ {
  color: white;
}
.iconfontweixin {
  color: #7bc549;
}
.iconfontboxweixin:hover {
  background: #7bc549;
  color: white;
}
.iconfontboxweixin:hover .iconfontweixin {
  color: white;
}
.read {
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
  text-align: left;
}
.article-content h2 {
  display: inline-block;
  text-align: left !important;
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
  max-width: 80%;
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

.article-content {
  box-sizing: border-box;
  width: 80%;
  padding: 20px;
  font-size: 15px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  overflow-x: hidden;
  text-align: left;
  margin: 0 auto;
}
.article-content p {
  margin: 10px 0;
  line-height: 24px;
  word-wrap: break-word;
  word-break: break-all;
  overflow-x: hidden;
}
.article-content pre {
  word-wrap: break-word;
  word-break: break-all;
  overflow-x: hidden;
}
.article-content img {
  width: 100% !important;
  height: auto !important;
  overflow-x: hidden;
}
.article-content a {
  color: #df2050 !important;
}
.article-content a:hover {
  text-decoration: underline;
  color: #f00 !important;
}
.article-content i {
  font-style: italic;
}
.article-content strong {
  font-weight: bold;
}
.article-content h1,
.article-content h2,
.article-content h3 {
  font-size: 200%;
  font-weight: bold;
}
.article-content h4,
.article-content h5,
.article-content h6 {
  font-size: 150%;
  font-weight: bold;
}
</style>
