<template>
  <div>
    <el-dialog
      title="注册"
      :visible.sync="regVisible"
      @close="$emit('update:regShow', false)"
      :show="regShow"
    >
    <!-- id,username,password,role,tel,email -->
      <span>确认要注销吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="regVisible = false">取 消</el-button>
        <el-button type="primary" @click="regVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "regdialog",
  data() {
    return {
      regVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  props: {
    regShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    regShow() {
      this.regVisible = this.regShow;
    }
  }
};
</script>

<style>
</style>