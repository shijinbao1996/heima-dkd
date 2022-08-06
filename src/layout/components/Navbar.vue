<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <el-row type="flex">
      <el-col>
        <img class="logoImg" src="../../assets/logo.3673fab5.png" alt="" />
      </el-col>
      <el-col :span="4">
        <el-row class="el-rowa" type="flex" align="middle">
          <el-col :span="6">
            <div class="avatar-wrapper">
              <img src="../../assets/avatar.png" class="user-avatar" />
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <span>欢迎您，{{ $store.state.common.userInfo.userName }}</span>
            </div>
          </el-col>
          <el-col :span="6" @click.native="exitBtn">
            <div class="right-menu">
              <span style="display: block">退出</span>
              <i
                class="el-icon-arrow-down el-icon--right"
                style="display: block"
              >
              </i>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.common.userInfo.userName);
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch("app/toggleSideBar");
    // },
    async exitBtn() {
      await this.$store.dispatch("common/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  right: 0;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1999;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);

  .logoImg {
    width: 88px;
    margin-top: 6px;
    margin-left: 15px;
    position: relative;
    top: 4px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  // navbar右侧结构
  .el-rowa {
    color: #fff;
    .right-menu {
      display: flex;
      height: 100%;
      line-height: 50px;
      align-items: center;
      line-height: 60px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        // display: flex;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        // color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }
      .avatar-wrapper {
        width: 40px;
        height: 40px;
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
