import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//设置全局组件
import top from './components/top.vue'

// use

const app=createApp(App)
app.component('top',top)

app.use(store).use(router).use(ElementPlus).mount('#app')
