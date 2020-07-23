import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')

export default {
  getAdminCafes ({ search, page }) {
    const searchParams = new URLSearchParams({ search, page })
    return apiHelper.get(`/admin/cafes?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
