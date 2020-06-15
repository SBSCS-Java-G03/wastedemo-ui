<template>
  <div>
    <h1>组件的使用</h1>

    <div>
      <h2>message</h2>
      <el-card shadow="hover">
        <el-alert title="成功提示的文案" type="success" :show-icon="true">
          <div slot>
            使用slot插槽 添加辅助信息
            随着辅助信息的增多 icon也会变大
          </div>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          close-text="关闭的文本"
          :show-icon="true"
          v-bind:description="msg"
        ></el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          description="关闭时触发方法"
          @close="closemethod"
          :show-icon="false"
        ></el-alert>
        <el-alert title="错误提示的文案" type="error" :show-icon="true"></el-alert>
      </el-card>
    </div>

    <div>
      <h2>popconfirm气泡确认框</h2>
      <el-card shadow="hover">
        <el-popconfirm
          confirmButtonText="好的"
          cancelButtonText="不用了"
          icon="el-icon-info"
          iconColor="red"
          title="这是一段内容确定删除吗？"
          @onConfirm="popconfirmed"
          @onCancel="popcanceled"
        >
          <el-button slot="reference">点击打开popconfirm</el-button>
        </el-popconfirm>
      </el-card>
    </div>

    <div>
      <h2>counter</h2>
      <el-card shadow="hover">
        <el-button type="danger" plain v-on:click="count++">{{count}}</el-button>
      </el-card>
    </div>

    <div>
      <h2>button</h2>
      <h4>基础按钮</h4>
      <el-card shadow="hover">
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-card>

      <h4>图标按钮</h4>
      <el-card shadow="hover">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">
          上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </el-card>

      <h4>按钮组</h4>
      <el-card shadow="hover">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">
          上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </el-card>

      <h4>加载中的按钮</h4>
      <el-card shadow="hover">
        <el-button type="primary" :loading="true">加载中</el-button>
      </el-card>

      <h4>不同尺寸的按钮</h4>
      <el-card shadow="hover">
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button size="medium">中等按钮</el-button>
          <el-button size="small">小型按钮</el-button>
          <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
          <el-button round>默认按钮</el-button>
          <el-button size="medium" round>中等按钮</el-button>
          <el-button size="small" round>小型按钮</el-button>
          <el-button size="mini" round>超小按钮</el-button>
        </el-row>
      </el-card>
    </div>

    <div>
      <h2>分割线</h2>
      <h4>1</h4>
      <el-card shadow="hover">
        <div>
          <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
          <el-divider></el-divider>
          <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
        </div>
      </el-card>
      <h4>2</h4>
      <el-card shadow="hover">
        <div>
          <span>头上一片晴天，心中一个想念</span>
          <el-divider content-position="left">少年包青天</el-divider>
          <span>饿了别叫妈, 叫饿了么</span>
          <el-divider>
            <i class="el-icon-mobile-phone"></i>
          </el-divider>
          <span>为了无法计算的价值</span>
          <el-divider content-position="right">阿里云</el-divider>
        </div>
      </el-card>
      <h4>3</h4>
      <el-card shadow="hover">
        <div>
          <span>雨纷纷</span>
          <el-divider direction="vertical"></el-divider>
          <span>旧故里</span>
          <el-divider direction="vertical"></el-divider>
          <span>草木深</span>
        </div>
      </el-card>
    </div>

    <div>
      <h2>日历</h2>
      <el-card shadow="hover">
        <el-calendar v-model="datevalue"></el-calendar>
      </el-card>
    </div>

    <div>
      <h2>card</h2>
      <el-card shadow="hover">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always" body-style="{background:#909399}">总是显示</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">鼠标悬浮时显示</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">从不显示</el-card>
          </el-col>
        </el-row>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        </el-card>
      </el-card>
    </div>

    <div>
      <h2>无限加载</h2>
      <el-card
        shadow="hover"
        style="max-height:300px; background-color: #67c23a; overflow:scroll; "
      >
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
          <li v-for="(i,index) in count" :key="index" class="infinite-list-item">{{ i }}</li>
        </ul>
      </el-card>
    </div>

    <div>
      <h2>messagebox</h2>
      <el-card shadow="hover">
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
      </el-card>
    </div>

    <div>
      <h2>container</h2>
      <el-card shadow="hover">
        <div>
          <el-container>
            <el-header>
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item index="1">主页</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">公告栏</template>
                  <el-menu-item index="2-1">
                    <a href="#/msg">message组件</a>
                  </el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>垃圾分类知识</el-menu-item>
                <el-menu-item index="4">
                  <a href="https://www.ele.me" target="_blank">社区垃圾回收</a>
                </el-menu-item>
                <el-menu-item index="5">
                  <a href="https://www.ele.me" target="_blank">数据分析</a>
                </el-menu-item>
                <el-menu-item index="4">
                  <a href="https://www.ele.me" target="_blank">个人中心</a>
                </el-menu-item>
              </el-menu>
            </el-header>
            <el-container>
              <el-aside width="200px">Aside</el-aside>
              <el-main>Main</el-main>
            </el-container>
          </el-container>
        </div>
      </el-card>
    </div>

    <div>
      <h2>通知</h2>
      <el-card shadow="hover">
        <el-button plain @click="open1">成功</el-button>
        <el-button plain @click="open2">警告</el-button>
        <el-button plain @click="open3">消息</el-button>
        <el-button plain @click="open4">错误</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "mymessage",
  data() {
    return {
      msg: "这里使用了data中的值（插值到desc属性中）",
      count: 0,
      datevalue: new Date()
    };
  },
  methods: {
    closemethod() {
      console.log("触发了一个方法");
      this.$message("这是一条消息提示，触发了一个方法");
    },
    popconfirmed() {
      this.$message("popconfirm 确认动作");
    },
    popcanceled() {
      this.$message("popconfirm 取消动作");
    },
    load() {
      //this.count += 2;
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },

    open2() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },

    open3() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息"
      });
    },

    open4() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息"
      });
    }
  }
};
</script>

<style>
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

.box-card {
  width: 480px;
}
</style>