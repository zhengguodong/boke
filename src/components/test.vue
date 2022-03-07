<template>

      <div id="box">
          <br><br>
      <h1>{{title}}</h1>
      <br>

      <blockquote style="white-space: pre-wrap;">{{content}}</blockquote>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
export default {
    setup(){
        let msg=ref<string>("")
        let title=ref<string|undefined>('')
        let content=ref<string|undefined>('')
        const route = useRoute()
        
        title.value=route.query.title?.toString()
        content.value=route.query.content?.toString()

       
        return{msg,title,content}
    }
}
</script>

<style scoped>
 #box{
      display: flex;
        justify-content: center;
         align-items: center;
         flex-direction:column;
 }
 blockquote {
     overflow: scroll;
     overflow-x: hidden;
     width: 90%;
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
</style>
