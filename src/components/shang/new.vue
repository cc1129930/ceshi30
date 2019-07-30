<template>
<div>
     
         <el-form 
        :model="product" :rules="rules" 
        ref="product" label-width="100px" 
        class="demo-product" 
        >       
            <el-form-item label="品牌名称" prop="name" style="padding-top:20px" >
                <el-col :span="12">
                    <el-input v-model="product.name" >
                    </el-input>
                </el-col>
            </el-form-item>
           
        <el-form-item label="缩略图" prop="image"   
            style="padding-top:20px" >
             <el-col :span="12">
           <el-upload
            class="upload-demo"
            drag
            action="https://upload.qiniup.com"
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess"
            list-type="picture"
            :data='qiniuForm'
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif文件，且不超过2M</div>
            </el-upload>
            </el-col>
        </el-form-item>
            
            <el-form-item label="品牌网址" prop="categoryId" style="padding-top:20px" >
                <el-col :span="12">
                    <el-input v-model="product.categoryId" >
                    </el-input>
                </el-col>
            </el-form-item>


             <el-form-item label="排序" prop="price" style="padding-top:20px" >
                <el-col :span="6">
                    <el-input v-model="product.price" >
                    </el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="品牌网址" prop="stock" style="padding-top:20px" >
                <el-col :span="12">
                    <el-input v-model="product.stock" >
                    </el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="品牌网址" prop="ode" style="padding-top:20px" >
                <el-col :span="12">
                    <el-input v-model="product.ode" >
                    </el-input>
                </el-col>
            </el-form-item>
    
            
            <el-form-item label="品牌描述" prop="body">
                <el-col :span="10">
                <el-input type="textarea" :rows="5" v-model="product.body"></el-input>
                </el-col>
            </el-form-item>



            <el-form-item>
                <el-col :span="3" :offset="2">
                    <el-button type="primary" @click="submitForm('product')">立即创建</el-button>
                </el-col>
                <el-col :span="3" :offset="1">
                    <el-button @click="resetForm('product')" >取消</el-button>
                </el-col>
                <el-col :span="3" :offset="1">
                    <el-button @click="resetForm('product')">重置</el-button>
                </el-col>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
const uuidv1 = require('uuid/v1');
    export default {
        data(){
            return{
        product: {
          name: '',
          categoryId: '',
          image:'',
          price: 0,
          stock: '',
         body: '',
         ode: '',
        },
        qiniuForm:{
             key:'',//文件名称
            token: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入品牌名称', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          
          body: [
            {  message: '请输入品牌描述', trigger: 'blur' },
             { min: 0, max:250, message: '请输入小于250个字符', trigger: 'blur' }
          ]
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post(`http://localhost:3000/admin/products`,this.product).then(ref=>{
               

                this.$message({
                    showClose: true,
                    message: '恭喜你，添加成功！！！！',
                    type: 'success'
                    });
                    this.$router.push('/shangpin')
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


      //上传图片
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },

      async beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' ||file.type === 'image/png';
        
        
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG/PNG/GIF 格式!');
          
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          
        }
        //验证失败，返回假
        if(isJPG && isLT2M ==false) return false;

        //验证成功，获取token
        let fileType = fil.type =='image.jpeg' ? 'jpg' : 'png' ;//获取扩展名
        let res = await this.axios.get('http://localhost:3000/admin/photos/uploadToken')
        this.qiniuForm = {
            key:`${uuidv1()}.${fileType}`,//文件名称
            token: res.data.uploadToken
        }
        console.log(res)
        return true;
      },
      handleAvatarSuccess(res, file,fileList) {
        
       this.product.image = 'http://putpbd8v1.bkt.clouddn.com/' + res.key
         //console.log(this.product.image)
        
         
      },
       handleRemove(file, fileList) {
        // console.log(file);
        this.product.image=''

      },

    }
    }
</script>
<style lang="css">
    h4{
        padding-left:30px;
    }
</style>