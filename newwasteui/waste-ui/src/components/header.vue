<template>
  <div>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="6">
        <div>
          <el-image
            style="width: auto; height: 140px; float:left;"
            :src="require('@/assets/logo.png')"
            fit="contain"
          ></el-image>
        </div>
      </el-col>
      <el-col :span="18">
        <el-row>
          <el-col :span="14" class="headerdiv">
            <div>
              <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="10" class="headerdiv">
            <div>
              <div v-if="isLogin" class="userinfo">
                <el-avatar
                  size="medium"
                  fit="scale-down"
                  shape="circle"
                  class="sub"
                  :src="userInfo.img"
                  :alt="userInfo.username"
                ></el-avatar>
                <span class="sub">欢迎您，{{userInfo.username}}</span>
                <el-button type="primary" plain @click="logout" class="sub">注销</el-button>
              </div>
              <div v-else>
                <el-button type="primary" @click="tologin">登录</el-button>
                <el-button type="primary" plain @click="toregister">注册</el-button>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
          >
            <el-menu-item index="1" route="/">主页</el-menu-item>
            <el-menu-item index="2" route="/noticeboard">公告栏</el-menu-item>
            <el-menu-item index="3" route="/knowledge">垃圾分类知识</el-menu-item>
            <el-menu-item index="4" route="/order">社区垃圾回收</el-menu-item>
            <el-menu-item index="5" route="/data">数据分析</el-menu-item>
            <el-menu-item index="6" route="/user">个人中心</el-menu-item>
          </el-menu>
        </el-row>
      </el-col>
    </el-row>

    <login-dialog :login-show.sync="loginShow"></login-dialog>
    <logout-dialog :out-show.sync="outShow"></logout-dialog>
    <register-dialog :reg-show.sync="regShow"></register-dialog>
  </div>
</template>

<script>
import LoginDialog from "@/components/login";
import RegisterDialog from "@/components/register";
import LogoutDialog from "@/components/logout";

export default {
  name: "myHeader",
  data() {
    return {
      isLogin: false,
      keyword: "",
      activeIndex: "1",
      loginShow: false,
      outShow: false,
      regShow: false,
      userInfo: {
        img:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        username: "testuser"
      }
    };
  },
  methods: {
    tologin() {
      this.loginShow = true;
      this.isLogin = !this.isLogin;
    },
    logout() {
      this.outShow = true;
      this.isLogin = !this.isLogin;
    },
    toregister() {
      this.regShow = true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.headerindex = key;
      this.$emit("on-callback", this.headerindex);
    }
  },
  components: {
    LoginDialog,
    RegisterDialog,
    LogoutDialog
  },
  watch: {
    // outShow() {
    //   this.logoutVisible = this.outShow;
    // }
  }
};
</script>

<style>
/* mystyle */
.headerdiv {
  margin-top: 20px;
}

.userinfo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.userinfo .sub {
  margin: 10px;
}
</style>