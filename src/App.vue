<template>
  <el-container id="app">
	   <el-header style="height: 100px"><Header ></Header></el-header>
   
       <el-container style="height: 100xl; border: 1px solid #eee"> <Home></Home>
        <el-main>
            <router-view/>
        </el-main>
    
	</el-container>
</el-container>
</template>


<style>
    *{
        margin: 0;
        padding: 0;
    }
   .el-header, .el-footer {
        background-color:rgba(151, 238, 108, 0.863);
        color: #333;
        line-height: 100px;
        
    }

    .el-main {
        background-color: rgb(226, 221, 230);
        color: #333;
        line-height: 30px;
        
    }
    
    body > .el-container {
        margin-bottom: 10px;
      
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
     .el-menu {
        border: none;
    }

    .el-main {
        background-color: #fff;
        color: #333;
        /*line-height: 160px;*/
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    body > .el-container {
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    .el-aside {
        height: 100%;
      
        
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    body::-webkit-scrollbar ,.el-aside::-webkit-scrollbar {
        display: none;
    }

    .has-gutter th div.cell {
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease;
    }

    .fade-enter, .fade-leave-to {
        transform: scale(.98);
        opacity: 0;
    }

    .animate_fix {
        position: relative;
        width: 100%;
    }

    .animate_fix > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    /*订单管理CSS设置*/
    .el-card__body {
        padding: 5px;
    }

    .el-collapse-item:last-child {
        margin: 0;
    }

    .el-collapse-item__header {
        height: 38px;
        line-height: 38px;
        /*border: 1px solid red;*/
    }

    .el-collapse-item__arrow {
        line-height: 38px;
        height: 38px;
    }

    .el-footer {
        margin-top: 30px;
        text-align: center;
    }

    .el-table td, .el-table th {
        text-align: center;
    }
    .el-upload,.el-upload__tip{
        padding-left: 60px
    } 
</style>


<script>
 import Home from './views/Home'


 export default {
     components: {
     Home,
   }
 }
</script>
