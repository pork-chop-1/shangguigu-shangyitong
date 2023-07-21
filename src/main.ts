import { createApp } from 'vue'
// 清除默认样式
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.js'
import 'element-plus/dist/index.css'

import pinia from '@/store'

import '@/assets/style/reset.css'
import '@/assets/style/style.css'
import App from './App.vue'
import router from '@/router'

import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
