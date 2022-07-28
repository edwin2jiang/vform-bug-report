import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import 'uno.css'

import './assets/main.css'

// @ts-ignore
import VFormRender from 'vform3-builds/dist/render.umd.js' //引入VFormRender组件
import 'vform3-builds/dist/render.style.css' //引入VFormRender样式

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(VFormRender) //全局注册VFormRender等组件

app.mount('#app')
