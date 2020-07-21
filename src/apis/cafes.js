import { apiHelper } from '../utils/helpers.js'

export default {
  getCafes ({ search }) {
    const searchParams = new URLSearchParams(search)
    return apiHelper.get(`/cafes?${searchParams.toString()}`)
  },
  getCafe (id) {
    return apiHelper.get(`/cafes/${id}`)
  }
}
