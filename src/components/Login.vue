<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import api from '@/utils/api'

// reactive state
const form = ref({
    email: '',
    password: '',
})
const $route = useRoute()

async function onSubmit() {
    try {
        const { data } = await api.post('/jwt/create', form.value)
        console.log(data)

        if ($route.query.redirect_url) {
            location.href = $route.query.redirect_url;
        }
        
    } catch(err) {
        console.log(err)
    }
    
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${form.value}.`)
  console.log($route.query)
})
</script>

<template>
    
    <div class="auth-container">
        <div class="form-container login-container">
            <form @submit.prevent="onSubmit" action="#">
                <h1>Log in</h1>
                <div class="social-container">
                    <a href="#" class="social"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                    <a href="#" class="social"><font-awesome-icon :icon="['fab', 'github']" /></a>
                    <a href="#" class="social"><font-awesome-icon :icon="['fab', 'google']" /></a>
                    <a href="#" class="social"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                </div>
                
                <span>or use your account</span>
                <input 
                    type="email" 
                    placeholder="Email"
                    v-model="form.email" />
        
                <input 
                    type="password" 
                    placeholder="Password" 
                    v-model="form.password" />

                <a href="#">Forgot your password?</a>
                
                <button type="submit">Log In</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/auth.scss';

.login-container {
	left: 0;
	width: 100%;
	z-index: 2;

    h1 {
        margin-bottom: 15px;
    }
}
</style>