<template>
  <div class="longin">
    <van-row type="flex" justify="center">
      <van-col>
        <Longin></Longin>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Longin from "@/components/temLogin.vue";
import Vue from "vue";
import { Row, Col } from "vant";

Vue.use(Row).use(Col);
export default {
  name: "longin",
  components: {
    Longin: Longin
  }
};
</script>
<style scoped>
</style>