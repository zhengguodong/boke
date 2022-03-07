<template>
  <div id="box">
      <br>
      <h3>写博客</h3>
        <br>
        <nobr>标题：<el-input v-model="form.title" placeholder="请输入标题" style="width: 140px" /></nobr>
        <br>
        <div id="lx">类型：<el-input v-model="form.label" placeholder="请输入类型" style="width: 140px"/></div>
        <br><br>
        <MdEditor v-model="form.textarea" style="width:100%;height:500px;"/>
        <br>
      <el-button type="primary" @click="getTitle">发布</el-button>
      <button @click="getmsg"></button>

  </div>


</template>

<script lang="ts">
import {reactive} from "vue"
import { ElMessage } from 'element-plus'
 import MdEditor from 'md-editor-v3';
 import 'md-editor-v3/lib/style.css';

import {writebk} from "../api/test"
interface obj1{
    textarea:string;
    title:string
}
export default {
    components:{MdEditor},

    setup(){
       let form=reactive({
           title:'',
           textarea:'',
           label:''
       })
        let getTitle=():void=>{
                if(form.title!=""&&form.textarea!=""&&form.label){
                    let params={
                    title:form.title,
                    content:form.textarea,
                    date:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
                    label:form.label
                }

                    writebk(params).then(()=>{
                     ElMessage({
                        message: '发布成功！',
                        type: 'success',
                    })
                }).catch(()=>{
                      ElMessage({
                        message: '发布失败',
                        type: 'warning',
                    })
                })
                form.textarea=''
                form.title=''
                form.label=''
                }else{
                    ElMessage({
                               message: '请完整填写',
                               type: 'warning',
                              })
                }

        }


        return{getTitle,form}
    }
}
</script>

<style scoped>
    #box{
        display: flex;/*开启弹性布局*/
        justify-content: center;/*横轴居中*/
        align-items: center;/*垂直居中*/
        flex-direction:column;

    }
    #lx{
        white-space: nowrap;
    }
</style>
