<template>
  <div>
      <div id="header">标题：<strong>{{title}}</strong></div>
      <MdEditor v-model="textarea" style="width:100%;height:700px;"/>
      <div id="btn">
          <el-button type="primary" @click="edit">修改</el-button>
      </div>

      <div>
          <el-page-header content="返回" @back="goBack" />
      </div>
  </div>
</template>

<script lang="ts">
 import MdEditor from 'md-editor-v3';
 import 'md-editor-v3/lib/style.css';
import { onMounted,ref} from '@vue/runtime-core';
import useCurrentInstance from "../utils/useCurrentInstance";
import { ElMessageBox, ElMessage } from 'element-plus'
import {useRoute,useRouter} from "vue-router"
 import {getmsg,editbk} from "../api/test"
export default {
    components:{MdEditor},
    data(){
        return{
            textarea:'',
            title:''
        }
    },
    setup(){
        let route=useRoute();
        let router=useRouter();
        //测试proxy 解决ts中报错问题
        //const { proxy } = getCurrentInstance() 报错问题
        let {proxy} =useCurrentInstance();
        let id=ref()
        let  getdata= ()=>{
            getmsg().then(res=>{
                 res.data.map((x: { id: string; content: any; title: any; })=>{
                   if(x.id==id.value){
                    proxy.textarea=x.content;
                    proxy.title=x.title
                   }
               })
             })
        }
        let goBack=()=>{
            router.push("/home")
        }
        let edit=()=>{
            if(proxy.textarea!=''){

            ElMessageBox.confirm(
                            '是否进行修改?',
                            'Warning',
                            {
                            confirmButtonText: '确认',
                            cancelButtonText: '取消',
                            type: 'warning',
                            }
                        )
                            .then(() => {
                                let params={
                                    content:proxy.textarea,
                                    id:id.value
                                }
                                editbk(params).then(()=>{

                                ElMessage({
                                type: 'success',
                                message: '修改成功',
                                })
                            })

                            })
                            .catch(() => {
                            ElMessage({
                                type: 'info',
                                message: '取消',
                            })
                            })

            }else{
                      ElMessage({
                                type: 'warning',
                                message: '无法提交空白页',
                            })
            }


        }
        onMounted(()=>{
            id.value=route.query.id
            getdata();

        })

        return{
            goBack,edit
        }
    }

}
</script>

<style scoped>
#header{
    margin-left: 10px;
    margin-bottom: 20px;
    color:rgb(98, 191, 255)
}
#btn{
    margin-top: 10px;
    text-align: center;

}
</style>
