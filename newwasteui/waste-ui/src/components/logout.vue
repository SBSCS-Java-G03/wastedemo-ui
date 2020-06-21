<template>
  <div>
    <el-dialog
      :visible.sync="logoutVisible"
      width="30%"
      center
      @close="$emit('update:outShow', false)"
      :show="outShow"
    >
      <span>确认要注销吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutVisible = false">取 消</el-button>
        <el-button type="primary" @click="logoutaction">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "logoutdialog",
  data() {
    return {
      logoutVisible: false
    };
  },
  props: {
    outShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    outShow() {
      this.logoutVisible = this.outShow;
    }
  },
  methods:{
    logoutaction(){
      this.logoutVisible=false;
      window.sessionStorage.removeItem("userid")
      window.sessionStorage.removeItem("username") 
      this.$cookies.remove("currentuser")    
      console.log("removed")
    }

  }
};
</script>

<style>
</style>