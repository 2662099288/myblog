<template>
  <div class="amessage">
    <h3>发表评论</h3>
    <form action="message">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="3"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="说点什么呢``"
          show-word-limit
          class="messagetext"
        />
      </van-cell-group>
      <input type="button" class="submit" value="发送~" @click="send()" />
    </form>
    <h3 class="comment">评论</h3>
    <div v-for="(message,index) in messageList" :key="index">
      <div class="leavemessage">
        <img v-bind:src="message.Headsrc" alt="111" />
        <div class="incomment">
          <div class="name">{{message.username}}</div>
          <div class="time">{{message["date_format(time,'%Y-%m-%d %H:%i:%s')"]}}</div>
          <div class="message">{{message.message}}</div>
          <div class="Reply">回复</div>
        </div>
      </div>
    </div>
    <div @click="clickMore" class="clickmore">{{more}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);
export default {
  data() {
    return {
         i:0,
         more:"加载更多",
      messageList: [],
      message: "",
      username: ""
    };
  },
  methods: {
    send() {
      let that = this;
      if (localStorage.getItem("userInfo") == "false") {
        alert("请登录后留言！");
      } else {
        that.username = JSON.parse(localStorage.getItem("username"));
        this.$axios
          .get(
            "http://localhost:8888/sendmessage?username=" +
              that.username +
              "&sendmessage=" +
              that.message
          )
          .then(response => {
               that.i=0;
               that.messageList=[];
            that.get();
            that.message = "";
          });
      }
    },
    get() {
      this.$axios.get("http://localhost:8888/index").then(res => {
        let i = this.i;
        while (res.data.Message[i]) {
          this.messageList.push( res.data.Message[i]);
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
        let breaki = i + 6;
        while (result.data.Message[i]) {
          this.messageList.push(result.data.Message[i]);
          i++;
          this.i++;
          if (breaki == i) {
            break;
          }
        }
        if (!result.data.Message[i]) {
          this.more = "没有更多啦";
        }
      });
    }
  },
  created() {
    this.get();
  },
  mounted: function() {
     //实现跳转到该页面的指定位置
  document.documentElement.scrollTop = 675;
},

  name: "amessage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amessage {
  box-sizing: border-box;
  width: 800px;
  margin-top: 40px;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px 20px;
  text-align: center;
  position: relative;
}
.amessage h3 {
  font-size: 18px;
  text-align: left;
}
.messagetext {
  border: 1px solid chocolate;
  border-radius: 5px;
}
.submit {
  width: 100%;
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 40px;
  background: #97dffd;
  color: #ffffff;
  transition: all 1s;
}
.submit:hover {
  background: #48456d;
}
.comment {
  border-left: 2px solid #363d4c;
  font-size: 20px;
  text-indent: 0.5em;
  margin: 40px 0;
}
.leavemessage {
  border-top: 1px solid #e5eaed;;
  height: 100px;
  width: 500px;
  padding: 20px 0;
  margin-top: 20px;
  text-align: center;
  position: relative;
}
.leavemessage img {
  border-radius: 50%;
  transition: all 0.5s;
  width: 65px;
  position: absolute;
  left: 0px;
  top: 20px;
}
.leavemessage img:hover {
  transform: rotate(360deg);
}
.incomment{
position: absolute;
  left: 80px;
  text-align: left;
}
.name {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
.time {
  margin-top: 10px;
  font-size: 12px;
  color: #aaaaaa;
}
.message {
  margin-top: 20px;
  font-size: 14px;
}
.Reply {
  margin-top: 20px;
  font-size: 12px;
  color: #64609e;
  cursor: pointer;
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
  transition: all 0.5s;
}
.clickmore:hover {
  background: #15024bcc;
}
</style>
