<template>
  <div>
    <div style="height:100px;">


    </div>
    <el-divider></el-divider>
    <div v-for="(item,index) in bklist" :key="index">
      <!-- <h1 style="margin-left:15px; color:rgb(98, 191, 255)">标题：{{item.title}} &nbsp;&nbsp;&nbsp;&nbsp;写于：{{item.date}}</h1>
      <div id="box">
        <blockquote style="white-space: pre-wrap;">{{item.content}}</blockquote>
      </div> -->
      <div class="itembox">
          <div class="title">{{item.title}}</div>
          <el-tag>{{item.label}}</el-tag>
          <div style="float:right;color:#ccc">发布时间：{{item.date}}</div>
          <div style="margin-top:5px">
            <el-link type="primary" @click="goto(item.id)">查看</el-link>
          </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {getmsg} from "../api/test"
export default {
  components:{
  },
    setup(){
      let router=useRouter();
        const bklist=ref([])
        let getmsg1=():void=>{
            getmsg().then((res)=>{
            console.log(res.data);
            bklist.value=res.data
          })
        }
        let goto=(id:any)=>{
            router.push({path:"/blog",query:{id:id}})
        }
        onMounted(()=>{
          getmsg1();
        })
        return{bklist,goto}
    }
}
</script>

<style scoped>
#box{
  width:100%;
  height: 200px;
  background-color: white;
  border: #eee 1px solid;
}
blockquote {
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
/* blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
} */
blockquote p {
  display: inline;
}
.itembox{
  height: 100px;
  width: 96%;
  margin: 0 auto;
  border-bottom:1px dotted #ddd;
}
.title{
  height: 40px;
  color: rgb(159, 170, 194);

}
</style>
