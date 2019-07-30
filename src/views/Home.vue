<template>
    
        <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>分类</template>
                <el-menu-item-group>
                <router-link to="/fenlei">
                <el-menu-item index="1-1">分类</el-menu-item>
                </router-link>
                <router-link to="/shangpin">
                <el-menu-item index="1-2">商品</el-menu-item>
                </router-link>
 
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-3">选项4</el-menu-item>
                </el-menu-item-group>
                
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>
        </el-aside>
        
        
    
</template>

<style>
  .el-header {
    background-color:rgba(151, 238, 108, 0.863);
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-container{
      text-align:center;
  }
</style>


