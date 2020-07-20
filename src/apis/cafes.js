import { apiHelper } from '../utils/helpers.js'

export default {
  getCafes () {
    return apiHelper.get('/cafes')
  }
}
