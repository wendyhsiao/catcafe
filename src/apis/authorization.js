import { apiHelper } from '../utils/helpers.js'

export default {
  signIn ({ email, password }) {
    return apiHelper.post('/admin/signin', { email, password })
  },
  signUp({ name, email, password, password2 }) {
    return apiHelper.post('/admin/signup', { name, email, password, password2 })
  }
}
