<template>
  <div class="login">
    <p>Roy的博客</p>
    <div class="login1">
      <div class="login2">
        <div>
          <h1>登录</h1>
          <span class="register">
            新用户
            <router-link to="/register">注册</router-link>
          </span>
        </div>

        <form action="user" method="get">
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
            <div class="passwordline"></div>
          </van-cell-group>
          <p class="miss">忘记密码？</p>
          <input type="button" class="submit" value="登录" @click="login1()" />
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
      username: "stystem",
      password: "123456"
    };
  },
  methods: {
    login1() {
         let that=this;
      if (this.username === "") {
        alert("用户名不能为空！");
      } else if (this.password === "") {
        alert("密码不能为空！");
      } else {
        this.$axios.get("http://localhost:8888/like").then(response => {
          response.data.User.forEach(function(user) {
            if (user.username == that.username) {
              if(user.userpassword == that.password){
                   alert('成功登录！');
                   that.$router.push({path:'/'});
                   localStorage.setItem('userInfo',JSON.stringify(user.username));
              }else{
                   alert('密码错误！')
              }
            }else{
                 alert('该用户不存在！')
            }
          });
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
.login1 h1 {
  font-size: 24px;
  color: #666666;

  display: inline-block;
  margin: 40px 0 20px -270px;
  text-align: left;
}
.login > p {
  font-size: 26px;
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
  margin-top: 100px;
  background: #97dffd;
  color: #ffffff;
}
.register {
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
