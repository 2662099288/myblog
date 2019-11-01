<template>
  <div>
    <div class="messageBoard">
      <h2>留言板</h2>
      <pre>
       走过路过不要错过！交流，咨询，吐槽，感叹，勾搭都在这里，轻松畅谈！</pre>
      <img src="../assets/img/message.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  name: "MessageBoard"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messageBoard {
  box-sizing: border-box;
  width: 800px;
  height: 738px;
  margin-top: 90px;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px;
}
pre {
  text-align: left;
  font-size: 15px;
  font-weight: bolder;
  color: #444444;
}
</style>
