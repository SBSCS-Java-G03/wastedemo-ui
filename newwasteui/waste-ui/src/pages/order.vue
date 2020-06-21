<template>
  <div>
    <el-container>
      <el-header>
        <h1>order page</h1>
      </el-header>
      <el-main>
        <el-tabs tab-position="left" type="border-card" @tab-click="handleClick">
          <!-- 标签1 -->
          <el-tab-pane label="附近回收点">
            <h1>附近回收点</h1>
            <p>查找本区的回收站点 - 暂时查找所有</p>
            <el-table
              :data="sitelist.filter(data => !search || data.sitename.toLowerCase().includes(search.toLowerCase()) || (data.area.includes(search)))"
              style="width: 100%"
            >
              <el-table-column label="所在区域" prop="area" width="150" sortable></el-table-column>
              <el-table-column label="站点名" prop="sitename" width="200"></el-table-column>
              <el-table-column label="详细地址" prop="address" min-width="20%"></el-table-column>
              <el-table-column align="right" width="300">
                <template slot="header" slot-scope="scope">
                  <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <!-- 标签2 -->
          <el-tab-pane label="下单">
            <h1 @click="ordermsg">下单</h1>

            <el-form :model="orderForm" ref="orderFrom" label-width="100px" class="demo-dynamic">
              <el-form-item prop="site" label="回收站点" :rules="[]">
                <el-select v-model="orderForm.siteid" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item
                v-for="(domain, index) in orderForm.domains"
                :label="'回收垃圾' + index"
                :key="domain.key"
                :prop="'domains.' + index + '.value'"
                :rules="{}"
              >
                <el-select v-model="domain.rubbishid" placeholder="请选择">
                  <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                    <el-option
                      v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-option-group>
                </el-select>
                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                <el-input type="hidden" v-model="domain.orderid"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('orderFrom')">提交</el-button>
                <el-button @click="addDomain">添加回收垃圾</el-button>
                <el-button @click="resetForm('orderFrom')">重置</el-button>
              </el-form-item>

              <el-form-item>
                <el-input v-model="orderForm.userid" type="hidden">userid</el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>

          <!-- 标签3 -->
          <el-tab-pane label="订单查询">订单查询</el-tab-pane>

          <!-- 标签4 -->
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderForm: {
        userid: 0,
        siteid: 0,
        pointnumber: 0,
        totalnumber: 0,
        totalprice: 0,
        createtime: Date.now(),
        delFlag: true,
        domains: [
          {
            orderid: 0,
            rubbishid: 0,
            delFlag: true
          }
        ]
      },
      sitelist: [],
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: 0,
              label: "上海"
            },
            {
              value: 1,
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: 2,
              label: "成都"
            },
            {
              value: 3,
              label: "深圳"
            },
            {
              value: 4,
              label: "广州"
            },
            {
              value: 5,
              label: "大连"
            }
          ]
        }
      ],
      search: ""
    };
  },
  methods: {
    async loadsitelist() {
      const { data: res } = await this.$http.post(
        "http://localhost:8001/recycle/site/findall"
      );
      if (res.code == 200) {
        // let siteobj = res.data;
        // let sitearr = [];
        // for (let i in siteobj) {
        //   sitearr.push(siteobj[i]);
        // }
        let sitearr = Array.from(res.data);
        this.sitelist = sitearr;
        if (this.sitelist instanceof Array) console.log("sitelist is Array");
      }
    },
    loadarealist() {},
    ordermsg() {
      this.$notify({
        title: "order字段",
        message:
          "{id，userid，siteid，积分数pointnumber，总积分数totalnumber，totalprice，createtime，delFlag}",
        duration: 0
      });
      this.$notify({
        title: "order detail字段",
        message: "{id，orderid，rubbishid，delFlag}",
        position: "bottom-right",
        duration: 0
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(this.orderForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.orderForm.domains.indexOf(item);
      if (index !== -1) {
        this.orderForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.orderForm.domains.push({
        orderid: 0,
        rubbishid: 0,
        delFlag: true,
        key: Date.now()
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {
    this.loadsitelist();
  },
  watch: {}
};
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
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

.el-tab-pane {
  text-align: left;
}
</style>