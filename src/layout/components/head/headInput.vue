<template>
  <el-input
    v-model="input"
    placeholder="请输入"
    class="el-input__inner"
  ></el-input>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.el-input__inner {
  height: 36px;
  line-height: 36px;
  padding-right: 30px;
  border-radius: 4px;
  border: 1px solid #d8dde3;
  padding: 0 15px;
  color: #606266;
}
</style>
