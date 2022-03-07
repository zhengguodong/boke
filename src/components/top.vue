<template>
      <div id="top">
          <div id="mid">
              <div><h1 style="color:rgb(98, 191, 255)">博客</h1><h6 style="color:rgb(215, 181, 153)">一个刚写的博客</h6></div>  
              <div style="display: flex;justify-content: center;align-items: center;">
                  <div class="litletop"><router-link to="/Home" style="text-decoration:none;color:rgb(215, 181, 153);"><h4>博客首页</h4></router-link></div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="litletop"><router-link to="/talk" style="text-decoration:none;color:rgb(215, 181, 153);"><h4>写博客</h4></router-link></div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="litletop"><router-link to="/more" style="text-decoration:none;color:rgb(215, 181, 153);"><h4>我的</h4></router-link></div>
              </div>
          </div>
      </div>
</template>

<script lang="ts">
import {} from '@element-plus/icons'
export default {
    components:{},
    setup(){

        return{
            
        }
    }
}
</script>

<style scoped>
#top{
    z-index:1;
    position:fixed;
    width: 100%;
    height: 70px;
    background-color:white;
    display: flex;/*开启弹性布局*/
    justify-content: center;/*横轴居中*/
    align-items: center;/*垂直居中*/
    border-bottom: 1px solid #eee
}
#mid{
    height: 100%;
    width: 60%;
    
    display: flex;/*开启弹性布局*/
    justify-content: space-around;
    align-items: center;/*垂直居中*/
}
.litletop{
    color:rgb(215, 181, 153);
}
</style>