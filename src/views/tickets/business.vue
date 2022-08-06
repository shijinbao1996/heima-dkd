<template>
  <div class="tickets-container">
    <div class="tickets-text">
      <div class="headbar">
        <headinput></headinput>
      </div>
      <div class="result"></div>
    </div>
  </div>
</template>

<script>
import headinput from "../../layout/components/head/headInput.vue";
export default {
  data() {
    return {};
  },
  components: {
    headinput,
  },
  created() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.tickets {
  &-container {
    margin: 30px;
    height: 100%;
    width: 100%;
    background-color: #f8fafd;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    .headbar {
      display: flex;
      height: 64px;
      align-items: center;
      margin-bottom: 20px;
      padding-left: 17px;
      background-color: blue;
    }
    .result {
      padding: 20px 15px 19px 17px;
      background-color: #fff;
    }
  }
}
</style>
