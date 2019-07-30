<template>
  <div>
    <el-button type="success" round @click="dialogVisible = true" style="float: left;">新 增</el-button>
    <el-dialog  @closed='closeds'  title="新增" :visible.sync="dialogVisible" width="30%" >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分类序号" prop="sort">
          <el-input v-model.number="ruleForm.sort"></el-input>
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="id" prop="id" style="width: 80px;"></el-table-column>
      <el-table-column label="姓名" prop="name" style="width: 120px;"></el-table-column>
      <el-table-column label="序号" prop="sort" style="width: 120px;"></el-table-column>
      <el-table-column label prop style="width: 120px;"></el-table-column>
      <el-table-column label prop style="width: 120px;"></el-table-column>

      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="centerDialogVisible = true ; handleEdits(scope.$index, scope.row)">编辑</el-button>
          <el-dialog title="编辑" :visible.sync="centerDialogVisible" width="30%" center>
            <el-form
              :model="ruleForms"
              :rules="rules"
              ref="ruleForms"
              label-width="100px"
              class="demo-ruleForms"
            >
              <el-form-item label="分类名称" prop="name">
                <el-input v-model="ruleForms.name"></el-input>
              </el-form-item>
              <el-form-item label="分类序号" prop="sort">
                <el-input v-model="ruleForms.sort"></el-input>
              </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="submForms('ruleForms')">确 定</el-button>
            </span>
          </el-dialog>

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>

      <el-table-column label prop style="width: 120px;"></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      id:'',
      search: "",
      dialogVisible: false,

      centerDialogVisible: false,
      ruleForm: {
        name: "",
        sort: 99
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      ruleForms:{
          name: "",
        sort: 0,
      }
    };
  },

  created() {
   this.init()
  },
  methods: {
    // handleEdit(index, row) {
    //   console.log(index, row);
    // },
    //初始化
    init(){
         this.axios.get(`http://localhost:3000/admin/categories`).then(res => {
    //   console.log(res);
      this.tableData = res.data.cartegories;
    });
    },

closeds(){
    this.ruleForm={
        name: "",
        sort: 0
    }
},
    // //编辑
    // handleEdit(index, row) {
     
    //     this.id= row.id
    //         this.axios.get(`http://localhost:3000/admin/categories/${row.id}`,this.ruleForm).then(res => {
    //     //    console.log(res)
    //    this.Data = res.data.Cartegory;
        
    //     });
    // },
    

    submForms(ruleForms) {
            
        this.$refs[ruleForms].validate((valid) => {
            console.log(this.id);
          if (valid) {
            this.axios.put(`http://localhost:3000/admin/categories/${this.id}`,this.ruleForms).then(res=>{
               
                this.$message({
                    
                    message: '恭喜你，编辑成功！！！！',
                    type: 'success'
                });
                this.centerDialogVisible= false,
                
                this.init()
            })
          }
        });
      },
    handleEdits(index, row) {
      console.log(index, row);
      let id = row.id;
      this.id=id
      this.axios.get(`http://localhost:3000/admin/categories/${id}`, this.ruleForms).then(() => {
          this.ruleForms = row;
          console.log(this.ruleForms);
          // this.$router.push({name:'edit',params:{id:row.id}})
        });
    },

    //删除
    handleDelete(index,row){
      console.log(index,row)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(()=>{
           this.axios.delete(`http://localhost:3000/admin/categories/${row.id}`).then(res=>{
              
             this.init()
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              
              })
              
            }
            
            ).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            }); 
                 
            });
            
    },

    //新增
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post(`http://localhost:3000/admin/categories`, this.ruleForm)
            .then(() => {
              this.$message({
                message: "恭喜你，添加成功！！！！",
                type: "success"
              });
               this.dialogVisible= false,
              this.init()
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
</style>