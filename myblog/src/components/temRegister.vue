<template>
  <div class="login">
    <p>Roy的博客</p>
    <div class="login1">
      <div class="login2">
        <div>
          <h1>注册</h1>
          <span class="loginbox">
            用户
            <router-link to="/login">登录</router-link>
          </span>
        </div>

        <form action="user" method="get" id="myForm">
          <van-cell-group>
            <van-field
              v-model="username"
              required
              label="用户名"
              right-icon="question-o"
              placeholder="请输入用户名"
              @click-right-icon="$toast('question')"
              class="userinput"
            />
            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              class="passwordinput"
            />
            <van-field
              v-model="password1"
              type="password"
              label="确认密码"
              placeholder="确认密码"
              required
              class="passwordinput"
            />
            <div class="passwordline"></div>
          </van-cell-group>
          <input type="button" class="submit" value="注册" @click="login1()" />
        </form>
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
      username: "",
      password: "",
      password1: "",
      usered: false
    };
  },
  methods: {
      
    login1() {
      let that = this;
      if (this.username === "") {
        alert("用户名不能为空！");
      } else if (!(this.username === "")) {
        this.$axios.get("http://localhost:8888/index").then(response => {
          that.usered = response.data.User.some(function(user) {
            return user.username == that.username;
          });
          if (that.usered) {
            alert("该用户名已被使用！");
          } else if (this.password === "") {
            alert("密码不能为空！");
          } else if (this.password1 === "") {
            alert("请重复输入密码！");
          } else if (this.password === this.password1) {
            this.$axios
              .get(
                "http://localhost:8888/register?username=" +
                  that.username +
                  "&password=" +
                  that.password
              )
              .then(response => {
                alert("注册成功！");
                localStorage.setItem('username',JSON.stringify(that.username));
                that.$router.push({ path: "/login" });
              });
          } else {
            alert("重复密码有误！");
          }
        });
      }
    }
  },

  name: "Login"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 400px;
}
.login1 {
  background: #ffffff;
  width: 400px;

  position: relative;
}
.login2 {
  width: 320px;
  height: 400px;
  margin: 20px auto;
}
.login a {
  color: #97dffd;
}
.login > p {
  font-size: 26px;
}
.login1 h1 {
  font-size: 24px;
  color: #666666;

  display: inline-block;
  margin: 40px 0 20px -270px;
  text-align: left;
}
.passwordinput {
  margin-top: 20px;
}
.submit {
  width: 100%;
  height: 35px;
  border: 0px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 60px;
  background: #97dffd;
  color: #ffffff;
}
.submit:hover{
     background: #1bb5f7;
  color: #ffffff;
}
.loginbox {
  position: absolute;
  top: 45px;
  left: 295px;
  font-size: 12px;
}
.miss {
  font-size: 12px;
  position: absolute;
  top: 235px;
  left: 295px;
  color: #999999;
}
</style>
