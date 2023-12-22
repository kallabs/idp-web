import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import SignupConfirmationView from '../views/SignupConfirmationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { path: '/login', component: LoginView },
        { 
            path: '/signup', 
            component: SignupView,            
        },
        {
            path: '/signup/:token',
            component: SignupConfirmationView,
        }
  ]
})

export default router
