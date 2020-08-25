import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')

export default {
  getAdminCafes ({ search, page }) {
    const searchParams = new URLSearchParams({ search, page })
    return apiHelper.get(`/admin/cafes?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getAdminCafe (cafeId) {
    return apiHelper.get(`/admin/cafes/${cafeId}/edit`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  putAdminCafe ({ cafeId, formData }) {
    return apiHelper.put(`/admin/cafes/${cafeId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postAdminCafe ({ formData }) {
    return apiHelper.post('/admin/cafes', formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCurrentUser () {
    return apiHelper.get('/admin/get_current_user', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
