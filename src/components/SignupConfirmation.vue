<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import api from '@/utils/api'

const $route = useRoute()

// lifecycle hooks
onMounted(async () => {
  console.log(`Signup confirmation`)
  console.log($route.params.token)

  const {status} = await api.post(`/signup/${$route.params.token}`)
  console.log(status)
})
</script>

<template>
    <div class="auth-container">
        <div class="form-container signup-confirmation-container">
            Hello
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/auth.scss';

</style>