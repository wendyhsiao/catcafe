import { apiHelper } from '../utils/helpers.js'

export default {
  signIn ({ email, password }) {
    return apiHelper.post('/admin/signin', { email, password })
  }
}
