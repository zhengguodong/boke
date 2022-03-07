<template>
  <div>
    <div>
    <MdEditor v-model="text" style="width:500px;height:500px;"/>
    111111{{msg}}
    </div>
    <br>
    <hr>
    <br>
  </div>
</template>

<script>
 import { defineComponent,ref,onMounted } from 'vue';
 import {getdata} from "../api/test.js"
// 注意这边的路径，按照自己项目引入的实际路径引入即可
 import MdEditor from 'md-editor-v3';
 import 'md-editor-v3/lib/style.css';
export default defineComponent({
  components: {
    MdEditor
  },
  data () {
    return {
      text: '11' // 富文本绑定的参数
    }
  },
  setup(){
    let msg=ref("nihao")
    onMounted(()=>{
      console.log("2222")
      getdata("/searchPerson").then(res=>{
        console.log("hello");
      })
    })
    return{msg}
  }
})
</script>

