<template>
  <div id="app">
    <el-col :span="4">
      <h5>自定义颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="16">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          用户管理
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div
                class="grid-content bg-purple"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae unde explicabo doloribus modi voluptates impedit ipsum dolorum dicta odio, enim porro voluptatem vel veritatis sunt esse perspiciatis molestias numquam.</div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div class="grid-content bg-purple-light">
                <img src="./assets/logo.png" />
              </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
              <div
                class="grid-content bg-purple"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima blanditiis quo dolorem qui, officiis voluptatum cupiditate, quae tempora itaque esse necessitatibus laudantium. Odit voluptatem enim deleniti, voluptates perferendis maxime pariatur.</div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div
                class="grid-content bg-purple-light"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut aspernatur quidem saepe ut quasi recusandae itaque veritatis vero provident ad, incidunt accusantium non dolor. Natus ipsa quod illo eveniet id.</div>
            </el-col>
          </el-row>
          <el-row>
            <span>以上布局必须相加为24</span>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          配置管理
          <el-row>
            <span>以下btn的样式由type指定</span>
            <h2>{{msg}}</h2>
          </el-row>
          <el-row :gutter="20">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>

          <el-row :gutter="100">
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          角色管理
          <el-row>
            <el-radio v-model="radio" disabled label="1">通过radio控件的label绑定值</el-radio>
            <el-radio v-model="radio" label="2">通过【v-model】在data中控制值</el-radio>
            <el-radio v-model="radio" label="3">通过【disabled】控制radio禁用</el-radio>
            <el-button type="success" @click="mysubmit">提交radio</el-button>
          </el-row>

          <el-row>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </el-row>

          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>

          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">
          定时任务补偿
          <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
          </el-radio-group>

          <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>

          <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <span>我来啦!</span>
          </el-drawer>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <el-col :span="4" class="r4">
      <el-row>
        <h1>hello~</h1>

      </el-row>

    </el-col>

    <!-- <img src="./assets/logo.png" />
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>-->
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    },
    mysubmit() {
      this.$notify({
        title: "It works!" + this.radio,
        type: "success",
        message:
          "学习获取radio group的值，通过btn&this.radio得到选择的值\r\n通知框的消失时间由duration指定",
        duration: 2000 //2s后消失
      });
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose1(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      msg: "hello",
      radio: "1",
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      checkList: ["选中且禁用", "复选框 A"],
      input: "",
      drawer: false,
      direction: "rtl"
    };
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.r4{
  border-left: solid black 2px;
  height: 100%;
}
</style>
