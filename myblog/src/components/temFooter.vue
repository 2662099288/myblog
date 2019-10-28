<template>
  <div class="footer1">
    <div class="bgimg">
      <img src="../assets/img/footer01.png" alt />
    </div>
    <div class="footertext">
      <p>
        博客已萌萌哒运行
        <span v-bind:longtime="longTime">{{longTime}}</span>
        <span class="runText">(●'◡'●)ﾉ♥</span>
      </p>
      <p>
        托管于
        <a>GitHub</a>。
        <a>阿里云</a>提供静态文件云存储服务。
        <a>百度统计</a>提供网站统计服.
        <a>CloudXNS</a>提供DNS解析服务.
      </p>
      <p>
        ©2019 芒果屋。由
        <a>Vue</a>强力驱动。主题由
        <a>diygod.me</a>提供。京ICP备17071595号-1.
      </p>
      <p>
        Made with
        <span class="heart">
          <i class="iconfont iconfontfooter">&#xe60b;</i>
        </span>
by Roy.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longTime: ""
    };
  },
  methods: {
    runTime: function() {
      let that = this;
      let oldTime = new Date("2019/10/28 14:00:00");

      setInterval(function() {
        let newTime = new Date();
        let longTime = newTime - oldTime;
        let days = parseInt(longTime / 1000 / 60 / 60 / 24, 10);
        let hours = parseInt((longTime / 1000 / 60 / 60) % 24, 10);
        let minutes = parseInt((longTime / 1000 / 60) % 60, 10);
        let seconds = parseInt((longTime / 1000) % 60, 10);
        that.longTime =
          days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      }, 1000);
    }
  },
  created() {
    let that = this;
    that.runTime();
  },

  name: "footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer1 {
  width: 100%;
  color: #888;
}
.bgimg {
  margin-top: 10px;
}
.footertext {
  background: #232323;
  height: 120px;
  font-size: 12px;
  margin-top: -78px;
  padding: 10px 0px;
}
.footertext a {
  color: #795548;
}
.footertext a:hover {
  color: black;
}
.iconfontfooter {
  color: red;
  position: absolute;
  top: 10px;
  left: 2px;
  animation: heartScale 1.33s ease-in-out infinite;
  -webkit-animation: heartScale 1.33s ease-in-out infinite;
}
.heart {
  display: inline-block;
  position: relative;
  width: 25px;
  height: 25px;
  margin: -12px 3px 0px 3px;
}
@keyframes heartScale {
  0% {
    font-size: 20px;
  }
  50% {
    font-size: 16px;
  }
  100% {
    font-size: 20px;
  }
}
@-webkit-keyframes heartScale {
  0% {
    font-size: 20px;
  }
  50% {
    font-size: 15px;
  }
  100% {
    font-size: 20px;
  }
}
.runText {
  margin-left: 10px;
  position: absolute;
  animation: runtext 0.5s ease-in-out infinite;
}
@keyframes runtext {
  0% {
    transform: translate(0, -2.5px) rotate(2deg);
  }
  20% {
    transform: translate(0, 2.5px) rotate(-2deg);
  }
  40% {
    transform: translate(2.5px, -2.5px) rotate(2deg);
  }
  60% {
    transform: translate(-2.5px, 2.5px) rotate(-2deg);
  }
  80% {
    transform: translate(0px, 2.5px) rotate(-2deg);
  }
  100% {
    transform: translate(0, -2.5px) rotate(2deg);
  }
}
</style>
