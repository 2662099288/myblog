<template>
  <div class="register">
    <van-row type="flex" justify="center">
      <van-col>
        <Register></Register>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/temRegister.vue";
import Vue from "vue";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
export default {
  name: "longin",
  components: {
    Register: Register
  }
};
</script>
<style scoped>
</style>