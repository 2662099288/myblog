<template>
  <div>
    <div class="rightlist">
      <img src="../assets/img/headtou.jpg" alt />
      <h2>Aimee</h2>
      <p>你能抓到我么？</p>
      <div class="contact contact1">
        <a href="#">
          <i class="iconfont">&#xe608;</i>
        </a>
        <a href="#">
          <i class="iconfont">&#xea8a;</i>
        </a>
        <a href="#">
          <i class="iconfont">&#xe658;</i>
        </a>
      </div>
      <div class="contact contact2">
        <a href="#">
          <i class="iconfont">&#xe606;</i>
        </a>
        <a href="#">
          <i class="iconfont">&#xe6d7;</i>
        </a>
        <a href="#">
          <i class="iconfont">&#xe623;</i>
        </a>
        <a href="#">
          <i class="iconfont">&#xe6ee;</i>
        </a>
      </div>
    </div>
    <div :class="fixDo?'like fixed':'like'" v-bind:number="heartNumber">
      <h2>Do you like me?</h2>
      <i class="iconfont" @click="click()">&#xe60b;</i>
      {{heartNumber}}
    </div>
    <div class="blank"></div>
    <div class="section">
      <div class="topclass">
        大家都排队来看这些
        <div class="topclassjiao"></div>
      </div>
      <div class="eventboxfather">
<div class="eventbox" v-for="(event,index) in eventList" :key="index">
                <span  @click="read(event.id)" class="eventname">{{event.name}}</span>
        <span> - {{event.BrowseNumber}}次围观</span>
      </div>
      </div>
    </div>
    <div :class="!isShowTop?'scrollbox':'scrollbox scrollbox1'" @click="returntop()" >
         <img src="../assets/img/scroll.png" alt="">

    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";
Vue.use(Image);
export default {
  data() {
    return {
      first: 0,
      eventList:[],
      heartNumber: "",
      fixDo: false,
      isShowTop:false
    };
  },
  methods: {
    click() {
      if (this.first == 0) {
        this.$axios.get("http://localhost:8888/like").then(response => {
          this.heartNumber = response.data.courses1[0].heartNumber;
          this.first++;
          //    this.$http.post(
          //        `http://localhost:8888/index/`,
          //        { heartNumber: 22222 },
          //        {
          //          emulateJSON: true
          //        }
          //      )
          //      .then(res => {
          //        window.console.log(res);

          //      });
        });
      }
    },
    get() {
      // 请求后台
      this.$axios.get("http://localhost:8888/index").then(result => {
        this.heartNumber = result.data.courses1[0].heartNumber;
        this.eventList = result.data.eventList;
      });
    },
    read(id) {
      let that = this;
      that.$axios.get("http://localhost:8888/read?id=" + id).then(res => {
        that.$router.push({ path: "/read?id=" + id });
      });
    },
    returntop(){
         document.getElementById('Top').scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        })
    }
  },
  created() {
    let that = this;
    this.get();
    window.onscroll = function() {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      //console.log(t);
      if (!that.going) {
        if (t > 600) {
          that.gotoTop = true;
          that.isShowTop=true;
        } else {
          that.gotoTop = false;
          that.isShowTop=false;
        }
      }
      if (t > 1800) {
        that.fixDo = true;
      } else {
        that.fixDo = false;
      }
    };
  },
  name: "Rightlist"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like {
  width: 363px;
  height: 110px;
  margin-top: 20px;
  border-radius: 5px;
  color: #df2050;
  font-size: 40px;
  transition: all 0.5s;
  background: #ffffff;
  padding: 10px;
  z-index: 90;
}
.like h2 {
  font-size: 20px;
}
.like i {
  font-size: 25px;
  transition: all 0.5s;
  cursor: pointer;
}
.like:hover {
  box-shadow: 3px -3px 20px rgba(0, 0, 0, 0.137);
  transform: translateY(-3px);
}
.like i:hover {
  font-size: 35px;
}
.fixed {
  position: fixed;
  top: 22px;
  right: 139px;
}
.blank {
  width: 383px;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  transition: all 0.5s;
  background: #ffffff;
}
.blank:hover {
  box-shadow: 3px -3px 20px rgba(0, 0, 0, 0.137);
  transform: translateY(-3px);
}
.section {
  width: 383px;
  height: 500px;
  margin-top: 20px;
  border-radius: 5px;
  transition: all 0.5s;
  background: #ffffff;
  z-index: 80;
  position: relative;
}
.section:hover {
  box-shadow: 3px -3px 20px rgba(0, 0, 0, 0.137);
  transform: translateY(-3px);
}
.rightlist {
  margin-top: 90px;
  width: 383px;
  height: 386px;
  position: relative;
  border-radius: 5px;
  transition: all 0.5s;
  background: #ffffff;
}
.rightlist:hover {
  box-shadow: 3px -3px 20px rgba(0, 0, 0, 0.075);
  transform: translateY(-3px);
}
.rightlist img {
  width: 352px;
  height: 220px;
  margin-top: 15px;
  border-radius: 3px;
}
.rightlist h2 {
  color: white;
  position: absolute;
  top: 190px;
  left: 145px;
}
.rightlist p {
  margin-top: 0px;
  font-size: 14px;
  font-weight: 700;
}
.contact2 {
  margin-top: 8px;
  color: #000;
}
.contact a {
  display: inline-block;
  margin-left: 15px;
  color: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.1);
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.contact a:hover {
  color: #fff;
  background: #f4692c;
}
.contact a i {
  font-size: 18px;
  line-height: 42px;
}
.topclass {
  width: 160px;
  height: 30px;
  color: #ffffff;
  background: #97dffd;
  line-height: 30px;
  font-size: 14px;
  text-indent: 1em;
  position: absolute;
  top: 29px;
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
.eventboxfather{
     position: absolute;   
     top: 70px;

}
.eventbox {
  font-size: 14px;
  text-align: left;
  text-indent:1em;   
  margin-top: 20px;
  
}

.eventname{
     color: #000;
     font-weight: 600;
     cursor: pointer;
}
.eventname:hover{
     color: rgb(11, 34, 165);
}
.scrollbox{
     transition: all 1s;
     position: fixed;
     top: -900px;
     right: 50px;
     transition: all 0.8s;
}
.scrollbox1{
     transform: translateY(700px)

}
</style>
