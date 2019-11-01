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
    <div  v-for="(message,index) in messageList" :key="index">
      <div class="leavemessage">
        <img v-bind:src="message.Headsrc" alt="111" />
        <span>{{message.username}}</span>
        <span>{{message.time}}</span>
        <p>{{message.message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);
export default {
  data() {
    return {
      messageList: "",
      message: "",
      username: "",
    };
  },
  methods: {
    send() {
      let that = this;
      if (localStorage.getItem("userInfo")=='false') {
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
               that.get();
               that.message='';
          });
      }
    },
    get() {
         
      this.$axios.get("http://localhost:8888/index").then(res => {
        console.log(res.data.Message[0]);
        this.messageList = res.data.Message;
      });
    }
  },
  created() {
    this.get();
  },

  name: "amessage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amessage {
  box-sizing: border-box;
  width: 800px;
  height: 738px;
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
  margin-top: 30px;
  background: #97dffd;
  color: #ffffff;
  transition: all 1s;
}
.submit:hover {
  background: #48456d;
}
.leavemessage {
  border: 1px solid darkcyan;
  height: 100px;
  width: 500px;
}
.leavemessage img {
  border-radius: 50%;
  transition: all 0.5s;
  width: 65px;
}
.leavemessage img:hover {
  transform: rotate(360deg);
}
</style>
