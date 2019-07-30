<template>
  <div class="about">
      <el-button type="success" plain @click="dialogVisible = true" style="margin-bottom: 20px;" class="one">注册</el-button>
    
    <el-dialog @closed="closeds" title="注册" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="tableData"
        :rules="rule"
        ref="tableData"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="tableData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="tableData.password" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="check_password">
          <el-input v-model="tableData.check_password"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForms('tableData')">确 定</el-button>
      </span>
    </el-dialog>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
            <el-col :span="6"><el-input v-model="ruleForm.username"></el-input></el-col>

        
      </el-form-item>

      <el-form-item label="密码" prop="password">
          
           <el-col :span="6"><el-input v-model="ruleForm.password"></el-input></el-col>
        
      </el-form-item>

      <el-form-item>
          <el-col :span="6"><el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button></el-col>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      dialogVisible: false,
      tableData: {
        username: "",
        password: "",
        check_password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12个字符", trigger: "blur" }
        ]
      },
      rule: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        check_password: [
          { required: true, message: "请再输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    closeds() {
      this.tableData = {
        username: "",
        password: "",
        check_password: ""
      };
    },
    submitForms(tableData) {
      this.$refs[tableData].validate(valid => {
        if (valid) {
          this.axios
            .post(`http://localhost:3000/admin/users/register`, {
              username: this.tableData.username,
              password: this.tableData.password,
              check_password: this.tableData.check_password
            })
            .then(res => {
              console.log(res);
                 if(res.data.success==true){
                     this.dialogVisible=false
                    //  localStorage.token='Bearer ' +res.data.token;
                    //  this.$router.push('/fenlei')
                 }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post(`http://localhost:3000/admin/users/login`, {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              console.log(res);
              if (res.data.success == true) {
                localStorage.token = "Bearer " + res.data.token;
                this.$router.push("/fenlei");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
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
.one{
    position: relative;
    left: -500px;

}
</style>