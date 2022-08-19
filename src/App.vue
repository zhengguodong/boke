<template>
  <div id="box">
    <top/>
    <div id="zj"><router-view ></router-view> </div>
    <div id="right"><PersonIntroduce/></div>
    <div id="zuo">
      <div>【人生若只如初见♥何事秋风悲画扇】</div>
      <div>Live For Code</div>
    </div>
    <div id="you"></div>
  </div>
  
</template>
<script lang="ts">
// import Top from "./components/top.vue"
import "./assets/css/animation.css"
import PersonIntroduce from "./components/personIntroduce.vue"
export default {
  components:{
    PersonIntroduce
  },
  setup() {
  
    
    return{}
  },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: rgb(244, 245, 245);
}
#box{
    width: 100%;
    display: flex;/*开启弹性布局*/
    justify-content: center;/*横轴居中*/
   
}
#zj{
    position:absolute;
    width: 820px;
    min-height: calc(100% - 77px);
    top: 75px;
    background-color: white;
    border: 1px solid #eee
  }
  #right{
    position:relative;
    width: 220px;
    height:360px;
    top: 75px;
    left: 530px;
    background-color: white;
  }
  #zuo{
  
    position: fixed;
    right: 1400px;
    top: 800px;
    width: 400px;
    height: 100px;
    text-align: center;
    font-size: 12px;
    color: #888;
    line-height: 1.5;
    

  }
  // @keyframes shanghua{
  
  //   0% {font-size: 12px;transform:rotate(0deg);}
  //   25% {font-size: 13px;transform:rotate(90deg);}
  //   50% {font-size: 15px;transform:rotate(180deg);}
  //   75% {font-size: 13px;transform:rotate(270deg);}
  //   100% {font-size: 12px;transform:rotate(360deg);}
  // }
  #zuo{
    animation: face 5s infinite ease-in-out;
  }

</style>
