<template>
  <div class="container py-5">
    <div class="text-center">
      <h1>登入會員</h1>
    </div>
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">電子郵件</label>
        <input 
          v-model="email"
          name="email"
          type="email" 
          class="form-control" 
          id="email" 
          placeholder="請輸入電子郵件"
          required 
          autofocus>
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <input 
          v-model="password"
          name="password"
          type="password" 
          class="form-control" 
          id="password" 
          placeholder="請輸入密碼"
          required>
      </div>
      <button type="submit" class="btn btn-primary w-100">登入</button>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../../apis/authorization.js'
import {Toast} from '../../utils/helpers.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const {data} = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        localStorage.setItem('token', data.token)
        this.$router.push('/admin/catcafes')
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>