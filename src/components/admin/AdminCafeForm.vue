<template>
  <div class="bg-white p-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.name"
            name="name"
            type="text" class="form-control" id="inputName">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputTel" class="col-sm-2 col-form-label">Tel</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.tel"
            name="tel"
            type="text" class="form-control" id="inputTel">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputCity" class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputCity">City</label>
                <input 
                  v-model="cafe.address_city"
                  name="addressCity"
                  type="text" class="form-control" id="inputCity">
              </div>
              <div class="form-group col-md-3">
                <label for="inputDistrict">District</label>
                <input 
                  v-model="cafe.address_dist"
                  name="addressDist"
                  type="text" class="form-control" id="inputDistrict">
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input 
                  v-model="cafe.address_other"
                  name="addressOther"
                  type="text" class="form-control" id="inputAddress">
              </div>
            </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="inputOpeningHour" class="col-sm-2 col-form-label">OpeningHour</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.opening_hour"
            name="openingHour"
            type="text" class="form-control" id="inputOpeningHour">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputMinimumCharge" class="col-sm-2 col-form-label">MinimumCharge</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.minimum_charge"
            name="minimumCharge"
            type="text" class="form-control" id="inputMinimumCharge">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputFacebook" class="col-sm-2 col-form-label">Facebook</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.facebook"
            name="facebook"
            type="text" class="form-control" id="inputFacebook">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputInstagram" class="col-sm-2 col-form-label">Instagram</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.instagram"
            name="instagram"
            type="text" class="form-control" id="inputInstagram">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputConsumptionPatterns" class="col-sm-2 col-form-label">ConsumptionPatterns</label>
        <div class="col-sm-10">
          <textarea 
            v-model="cafe.consumption_patterns"
            name="consumptionPatterns" cols="30" rows="5" class="form-control" id="inputConsumptionPatterns"></textarea>
        </div>
      </div>
      
      <div class="form-group row">
        <label for="inputRule" class="col-sm-2 col-form-label">Rule</label>
        <div class="col-sm-10">
          <textarea 
            v-model="cafe.rule"
            name="rule" cols="30" rows="5" class="form-control" id="inputRule"></textarea>
        </div>
      </div>
      
      <div class="form-group row">
        <label for="inputOther" class="col-sm-2 col-form-label">Other</label>
        <div class="col-sm-10">
          <textarea 
            v-model="cafe.other"
            name="other" cols="30" rows="5" class="form-control" id="inputOther"></textarea>
        </div>
      </div>
      <!-- Image -->
      <div class="form-group row">
        <label for="Image" class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-10">
          <div class="row">
            <div 
              v-for="image in images"
              :key="image.id"
              class="col-sm-3 mb-3">
              <button 
                @click.prevent.stop="deteleImage(image.id)"
                class="btn btn-danger btn-sm"
                type="button">Delete</button>
              <img :src="image.url" class="w-100 border rounded">
              <input type="text" name="imageId" :value="image.id" class="d-none">
            </div>
            <!-- 新增的照片 -->
            <div 
              v-for="(img, index) in preview_list"
              :key="'a' + index" 
              class="col-sm-3 mb-3">
              <button 
                @click.prevent.stop="detelePreviewImage(index)"
                class="btn btn-danger btn-sm"
                type="button">Delete</button>
              <img :src="img.imageURL" class="w-100 border rounded">
            </div>
            <!-- 新增按鈕 -->
            <div class="col-sm-3 mb-3 image-upload">
              <label for="fileInput" class="w-100 border rounded text-center">+ Add Image</label>
              <input 
                id="fileInput"
                type="file" 
                name="image"
                accept="image/*"
                multiple="multiple"
                ref="imageUploader"
                @change="previewMultiImage">
            </div>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-12 text-right">
          <router-link 
            class="btn btn-secondary mr-3"
            :to="{name: 'admin-cat-cafes'}">Cancel</router-link>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialCafe: {
      type: Object,
      default: () => ({
        id: -1,
        name: '',
        tel: '',
        address_city: '',
        address_dist: '',
        address_other: '',
        opening_hour: '',
        minimum_charge: '',
        facebook: '',
        instagram: '',
        consumption_patterns: '',
        rule: '',
        other: ''
      })
    },
    initialImages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cafe: {...this.initialCafe},
      images: [],
      preview_list: [],
      image_list: []
    }
  },
  watch: {
    initialCafe(newVaule) {
      this.cafe = {
        ...this.cafe,
        ...newVaule
      }
    },
    initialImages(newVaule) {
      this.images = {
        ...this.images,
        ...newVaule
      }
    }
  },
  created() {
    this.images = this.initialImages
  },
  methods: {
    previewMultiImage(e) {
      const {files} = e.target
      let index = 0
      
      if (files) {
        files.forEach(file => {
          this.preview_list.push({
            imageURL: window.URL.createObjectURL(file)
          })
          this.image_list.push(files[index])
          index ++
        })
      }

      // 解決選擇相同檔案時，@change 無法運作的問題
      this.$refs.imageUploader.value = ''
    },
    deteleImage(id) {
      const newImagesList = this.images.filter(image => image.id !== id)
      this.images = newImagesList
    },
    detelePreviewImage(index) {
      this.preview_list.splice(index, 1)
      this.image_list.splice(index, 1)
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      formData.set('image', '')
      for (let i = 0; i < this.image_list.length; i++) {
        formData.append('image', this.image_list[i] )
      }

      this.$emit('after-submit', formData)
    }
  }
}
</script>

<style scoped>
.image-upload {
  position: relative;
}
.image-upload > label{
  cursor: pointer;
  height: 120px;
  line-height: 120px;
}
.image-upload > input{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
</style>