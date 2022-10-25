import { createRouter, createWebHistory } from 'vue-router'
import MultiRoot from '@/components/MultiRoot/MultiRoot.vue'
import MultiVModel from '@/components/MultiVModel/MultiVModel.vue'
import Composition from '@/components/Composition/'


const routes = [
  {
    path: '/',
    component : MultiRoot
  },
  {
    path: '/multi-v-model',
    component : MultiVModel
  },
  {
    path: '/composition',
    component : Composition
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router

