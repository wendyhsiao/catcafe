<template>
  <div>
    <AdminNavbar />
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
        <div class="text-center mt-3">
          <router-link to="/admin/catcafes/signup" >註冊帳號</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavbar from '../../components/admin/AdminNavbar.vue'
import authorizationAPI from '../../apis/authorization.js'
import {Toast} from '../../utils/helpers.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    AdminNavbar
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '電子郵件或密碼未填！'
          })
          return
        }
        const {data} = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        localStorage.setItem('token', data.token)
        // 資料傳到 Vuex
        this.$store.commit('setCurrentUser', data.user)
        
        this.$router.push('/admin/catcafes')
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: '電子郵件或密碼錯誤！'
        })
        this.password = ''
        console.log('error', error)
      }
    }
  }
}
</script>