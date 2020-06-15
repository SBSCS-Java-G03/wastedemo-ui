<template>
  <div>
    <div >
      <el-row :gutter="20" type="flex" justify="space-between"> 
        <el-col :span="8">
          <div class="grid-content">
            <el-image
              style="width: 100%; height:150px; float:left;"
              :src="require('@/assets/logo.png')"
              fit="contain"
            ></el-image>
          </div>
        </el-col>
        <el-col :span="8" class="searchdiv">
          <div class="grid-content">
            <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content" :gutter="20">
            <el-button type="primary" plain @click="tologin">登录</el-button>
            <el-button type="primary" plain @click="toregister">注销</el-button>
            <p>{{keyword}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-container>
      <el-header>
        <!-- :default-active="activeIndex2 @select="handleSelect" -->
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="2">公告栏</el-menu-item>
          <el-menu-item index="3">垃圾分类知识</el-menu-item>
          <el-menu-item index="4">社区垃圾回收</el-menu-item>
          <el-menu-item index="5">数据分析</el-menu-item>
          <el-menu-item index="6">个人中心</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <h1>公告栏</h1>
        </el-aside>
        <el-main>
          <h1>垃圾分类知识</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword:""
    };
  },
  methods:{
    tologin(){
      this.$router.push({
        name:'frontlogin',
        query:{ id: 123 }
      })
      // try to push some params
      /*
      this.$router.push({
        name:'frontlogin',
        params:{ id: 123 } -> id = this.$route.params.id
        or 
        query: {id:123} -> this.$route.query.id
      })
       */
    },
    toregister(){
      this.$router.push('/signup')
    }
  }
};
</script>

<style>

.el-header,
.el-footer {
  /*background-color: #b3c0d1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.searchdiv {
  margin-top: 25px;
}
</style>