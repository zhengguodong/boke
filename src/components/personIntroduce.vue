<template>
  <div id="box">
      <div id="top">
          <img src="../pics/tx.jpeg" alt="">
      </div>
      <h2 style="color:rgb(98, 191, 255)">{{name}}</h2>
      <br>
      <div id="bq">
        <el-tag>萌新</el-tag> 
        &nbsp;
        <el-tag type="success">前端</el-tag>
        &nbsp;
        <el-tag type="info">vue3</el-tag>
        &nbsp;
        <el-tag type="warning">ts</el-tag>
      </div>
      <br>
      <el-divider>
        联系
      </el-divider>
        <div id="lx">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="微信：xxxxxx"
                placement="top-end"
            >
             <el-icon>
                <ChatDotRound />
            </el-icon></el-tooltip>
            微信&nbsp;&nbsp;
            <el-tooltip
                class="box-item"
                effect="dark"
                content="手机号：xxxxx"
                placement="top-end"
            >
            <el-icon>
                <Iphone />
            </el-icon>
            </el-tooltip>
            手机&nbsp;&nbsp;
            <el-tooltip
                class="box-item"
                effect="dark"
                content="邮箱：xxxxxx"
                placement="top-end"
            >
            <el-icon>
                <Cellphone />
            </el-icon>
            </el-tooltip>
            邮箱
        </div>
  </div>
</template>

<script lang="ts">
import {ChatDotRound,Iphone,Cellphone} from '@element-plus/icons'
//图标名称要大写，要使用驼峰命名法
import {ref} from 'vue'
export default {
    components:{
       ChatDotRound,Iphone,Cellphone
    },
    setup(){
        let name=ref<string>('郑国栋')
        return{name}
    }
}
</script>

<style scoped>
#box{
    display: flex;/*开启弹性布局*/
    justify-content: center;/*横轴居中*/
    align-items: center;/*垂直居中*/ 
    flex-direction:column;/*垂直方向从上到下排列*/  
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee
}
#top{
    position: relative;
    /* top:20px; */
    margin-top: 20px;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    background-color:pink;
    overflow: hidden;
    margin-bottom: 15px;
}
img{
    width: 100%;
    height: 100%;
}
#lx{
    width: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center;
    
}
</style>