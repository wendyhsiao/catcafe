<template>
  <div>
    <AdminNavbar />
    <div class="container py-5">
      <div class="text-center">
        <h1>註冊會員</h1>
      </div>
      <form @submit.stop.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">姓名</label>
          <input 
            v-model="name"
            name="name"
            type="text" 
            class="form-control" 
            id="name" 
            placeholder="請輸姓名"
            required 
            autofocus>
        </div>
        <div class="form-group">
          <label for="email">電子郵件</label>
          <input 
            v-model="email"
            name="email"
            type="email" 
            class="form-control" 
            id="email" 
            placeholder="請輸入電子郵件"
            required>
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
        <div class="form-group">
          <label for="password">確認密碼</label>
          <input 
            v-model="password2"
            name="password2"
            type="password" 
            class="form-control" 
            id="password2" 
            placeholder="請輸入密碼"
            required>
        </div>
        <button type="submit" class="btn btn-primary w-100">立即註冊</button>
        <div class="text-center mt-3">
          <router-link to="/admin/catcafes/signin" >登入帳號</router-link>
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
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  components: {
    AdminNavbar
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.name || !this.email || !this.password || !this.password2) {
          Toast.fire({
            icon: 'warning',
            title: '所有都為必填項目！'
          })
          return
        }

        if (this.password !== this.password2) {
          Toast.fire({
            icon: 'warning',
            title: '兩次密碼輸入不同！'
          })
          return
        }

        const {data} = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          password2: this.password2
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        
        Toast.fire({
          icon: 'success',
          title: data.message
        })

        this.$router.push('/admin/catcafes/signin')
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: `無法註冊 - ${error.message}`
        })
        console.log('error', error)
      }
    }
  }
}
</script>