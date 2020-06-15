<template>
  <div>
    <el-container>
      <!-- 公告板 -->
      <el-aside width="400px">
        <h1 @click="noticemsg">公告板</h1>
        <div id="notice">
          <el-card class="notice-card" shadow="hover" v-for="i in 4" :key="i">
            <div slot="header" class="clearfix">
              <span>公告模板{{i}}</span>
              <span
                style="float: right; padding: 3px 0"
                type="text"
              >{{currentDate | comverTime('YYYY-MM-DD')}}</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'模拟内容 ' + o }}</div>
          </el-card>
        </div>
      </el-aside>
      <!-- 垃圾分类知识 -->
      <el-main>
        <h1>垃圾分类知识</h1>
        <div id="know">
          <el-card class="know-card" shadow="hover" v-for="i in 4" :key="i">
            <div slot="header" class="clearfix">
              <span>知识模板{{i}}</span>
            </div>
            <img :src="know.img" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum odit alias nemo ex nobis architecto quos fugit enim voluptate qui, eaque voluptas. Excepturi atque esse ipsam cupiditate dignissimos ab.</span>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header";

export default {
  name: "home",
  data() {
    return {
      currentDate: new Date(),
      know: {
        img:
          "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      }
    };
  },
  computed: {},
  methods: {
    noticemsg() {
      const h = this.$createElement;

      this.$notify({
        title: "公告板提示",
        message: h(
          "i",
          { style: "color: teal" },
          "id:notice\nnotice board\n此处放置公告内容\n模板card"
        )
      });
    }
  },
  components: {
    MyHeader
  }
};
</script>

<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 1.5em;
}

.el-aside h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 1.5em;
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* mystyle */

.notice-card {
  margin: 20px;
}

.know-card {
  margin: 20px;
  height: fit-content;
  min-height: 250px;
}

#know img {
  height: 100px;
  float: right;
  margin: 20px;
}
</style>