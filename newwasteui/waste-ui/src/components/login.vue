<template>
  <div>
    <el-dialog
      title="收货地址"
      :visible.sync="loginVisible"
      @close="$emit('update:loginShow', false)"
      :show="loginShow"
    >
      <el-form :model="form">          
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input placeholder="请输入用户名" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input placeholder="请输入密码" v-model="form.pswd" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="loginVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "logindialog",
  data() {
    return {
      loginVisible: false,
      form: {
        name: "",
        pswd: ""
      },
      formLabelWidth: "120px"
    };
  },
  props: {
    loginShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    loginShow() {
      this.loginVisible = this.loginShow;
    }
  }
};
</script>

<style>
</style>