<template>
  <div>
    <!-- 1.小案例 -->
    <div id="part1">
      <h3>小案例：</h3>
      <br>
      <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in part1list" :key="item.id">
      <h3 @click="tiao(item.title,item.content)">{{ item.title }}</h3>
    </el-carousel-item>
  </el-carousel>
    </div>
    <br><br>
    <hr>
    <div id="part2">


    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref,nextTick} from 'vue'
import {getpart1} from "../api/test"
import { useRouter } from 'vue-router'
interface obj{
  id:number,
  text:string
}
interface obj1{
  id:number,
  title:string,
  content:string
}
export default {
    setup(){
    const router = useRouter()
    let list=ref<obj[]>([{id:1,text:"zz"},{id:2,text:'gg'},{id:3,text:'dd'},{id:4,text:'dd'},{id:5,text:'dd'},{id:6,text:'dd'}])
    let part2list=ref([])
    let part1list=ref([])
    let getPart1=()=>{
      getpart1().then((res)=>{
        part1list.value=res.data
      })
    }
    let tiao=(title: string,content: string)=>{
      router.push({path:'/test',query:{title:title,content:content}})
    }
    onMounted(()=>{
      getPart1()
    })

    return{list,part1list,part2list,tiao}
  }
}
</script>

<style scoped>
#part1,#part2{
  width: 100%;
  height: 250px;

}
/* #box1{
  width: 100%;
  height: 200px;
  background-color: rgb(182, 76, 94);
  overflow: scroll;
  overflow-y: hidden;
  white-space: nowrap;/*不换行*/
/* } */
/* .list{
  display: inline-block;
  height: 95%;
  width: 200px;
  border: #eee 1px solid;
  margin-right: 5px;
} */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
