<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-button type="success" round @click="$router.push('/new')" style="margin-top: 20px;">新 增</el-button>
      </el-col>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="padding:20px">
        <el-col :span="2">
          <el-form-item>
            <el-input v-model="formInline.keyword" placeholder="名称"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item>
            <el-select v-model="formInline.categoryId" multiple clearable placeholder="分类">
              <!-- <el-option-group
                v-for="group in options"
                :key="group.id"
              :label="group.name">-->
              <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
              <!-- </el-option-group> -->
            </el-select>
          </el-form-item>
        </el-col>

      </el-form>
      <el-col :span="2">
        <el-button class="byn" type="primary" style="margin-left:280px;" @click="handleSearch">查询</el-button>
      </el-col>
    </el-row>

    <el-table :data="ress" style="width: 100%">
      <el-table-column label="id" prop="id" style="width: 80px;"></el-table-column>
      <el-table-column label="姓名" prop="name" style="width: 120px;"></el-table-column>
      <el-table-column label="序号" prop="categoryId" style="width: 120px;"></el-table-column>
      <el-table-column label="图片" prop="image" style="width: 120px;"></el-table-column>
      <el-table-column label="金额" prop="price" style="width: 120px;"></el-table-column>

      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

      <el-table-column label prop style="width: 120px;"></el-table-column>
    </el-table>

    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page.currentPage"
      :page-size="page.pagesize"
      layout="total, prev, pager, next"
      :total="page.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        keyword: "",
        categoryId: []
      },
      options: [],
      ress: [],
      search: "",
      page: {
        total: 0,
        pagesize: 0,
        currentPage: 1
      }
    };
  },

  created() {
    this.msg();
  },
  methods: {
    msg() {
      //     this.axios.get(`http://localhost:3000/admin/products`).then(res=>{
      //     console.log(res)
      //       this.ress=res.data.products.rows
      // })
      this.axios.get(`http://localhost:3000/admin/categories`).then(msg => {
        console.log(msg);
        this.options = msg.data.cartegories;
      });
      this.axios
        .get(
          `http://localhost:3000/admin/products?page=${this.page.current_page}`
        )
        .then(msg => {
          this.ress = msg.data.products;

          this.page = msg.data.page
        });
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    //分页

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);

      this.page.currentPage = val;

      this.msg();
    },
    //查询
    handleSearch() {
    //   let created_at =
    //     this.formInline.created_at == null ? "" : this.formInline.created_at;

      this.axios.get(`http://localhost:3000/admin/products?&keyword=${this.formInline.keyword}&categoryId={this.formInline.categoryId}`
        
        )
        .then(msg => {
            console.log(msg)
          this.ress = msg.data.products;
          
          this.page = msg.data.page
        });
    }
  }
};
</script>

<style>
.el-table_2_column_5 {
  width: 120px;
  text-align: left;
}
.cell {
  text-align: center;
  
}
.byn {
  position: relative;
  top: -18px;
}
</style>