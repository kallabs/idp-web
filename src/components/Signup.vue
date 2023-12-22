<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import api from '@/utils/api'

// reactive state
const form = ref({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
})
const hasSignupRequested = ref(false);
const $route = useRoute()

async function onSubmit() {
    const {repeatPassword, ...reqData} = form.value;
    console.log(reqData);
    const { status } = await api.post('/signup', reqData)
    console.log(status)
    if (status == 200) {
        hasSignupRequested.value = true;
    }
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is.`)
  console.log($route.query)
})
</script>

<template>
    <div class="auth-container">
        <div class="form-container signup-container" v-if="!hasSignupRequested">
            <form @submit.prevent="onSubmit">
                <h1>Sign up</h1>
                <!--
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                -->
                <input 
                    type="text" 
                    placeholder="Enter username..." 
                    v-model="form.username" />

                <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    v-model="form.email" />

                <input 
                    type="password" 
                    placeholder="Enter password..." 
                    v-model="form.password" />
                
                <input 
                    type="password" 
                    placeholder="Repeat password..." 
                    v-model="form.repeatPassword" />

                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div class="signup-requested" v-if="hasSignupRequested">
            
            <h2>Create account requested successfully.</h2>
            <div>Please check your mailbox and finish registration.</div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/auth.scss';

.signup-container {
	left: 0;
	width: 100%;
	z-index: 1;

    h1 {
        margin-bottom: 15px;
    }
}

.signup-requested {
    padding: 20px;
    text-align: center;

    h2 {
        font-size: 1.5em;
        font-weight: bold;
        color: green;
    }

}
</style>