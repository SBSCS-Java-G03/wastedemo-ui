<template>
  <div>
    <center>
      <div>
        <el-card :style="card">
          <div slot="header">
            <el-row type="flex" justify="center">
              <el-col :span="8">
                <div>
                  <el-image
                    style="width:200px"
                    :src="require('@/assets/logo.png')"
                    fit="contain"
                  ></el-image>
                </div>
              </el-col>
              <el-col :span="4" :offset="2">
                <div class="headerdiv">
                  <h2>登录</h2>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="form.pswd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  created() {
    this.login();
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      card: {
        width: "480px",
        position: "absolute",
        top: "",
        left: ""
      },
      form: {
        name: "",
        pswd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }]
      }
    };
  },
  computed: {
    pageheight() {
      return this.innerWidth;
      //return this.window.innerHeight ;
    }
  },
  methods: {
    login() {
      this.card.top = window.innerHeight / 2 - 200 + "px";
      this.card.left = window.innerWidth / 2 - 200 + "px";
      //   this.height.width =
    },
    onSubmit() {}
  },
  watch:{
    pageheight(val){
      pageheight=val;
      console.log("pageheight"+val)
    }
  }
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 480px;
}
.headerdiv{
  vertical-align: -webkit-baseline-middle;
  color: red;
  height: 150px;
  line-height: 80px;
}
</style>

