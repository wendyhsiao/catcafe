import { apiHelper } from '../utils/helpers.js'

export default {
  getCafes ({ search, page }) {
    const searchParams = new URLSearchParams({ search, page })
    return apiHelper.get(`/cafes?${searchParams.toString()}`)
  },
  getCafe (id) {
    return apiHelper.get(`/cafes/${id}`)
  }
}
