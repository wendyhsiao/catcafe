<template>
  <div class="bg-white p-5">
    <form>
      <div class="form-group row">
        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.name"
            type="text" class="form-control" id="inputName">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputTel" class="col-sm-2 col-form-label">Tel</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.tel"
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
                  type="text" class="form-control" id="inputCity">
              </div>
              <div class="form-group col-md-3">
                <label for="inputDistrict">District</label>
                <input 
                  v-model="cafe.address_dist"
                  type="text" class="form-control" id="inputDistrict">
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input 
                  v-model="cafe.address_other"
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
            type="text" class="form-control" id="inputOpeningHour">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputMinimumCharge" class="col-sm-2 col-form-label">MinimumCharge</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.minimum_charge"
            type="text" class="form-control" id="inputMinimumCharge">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputFacebook" class="col-sm-2 col-form-label">Facebook</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.facebook"
            type="text" class="form-control" id="inputFacebook">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputInstagram" class="col-sm-2 col-form-label">Instagram</label>
        <div class="col-sm-10">
          <input 
            v-model="cafe.instagram"
            type="text" class="form-control" id="inputInstagram">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputConsumptionPatterns" class="col-sm-2 col-form-label">ConsumptionPatterns</label>
        <div class="col-sm-10">
          <textarea 
            v-model="cafe.consumption_patterns"
            name="consumption_patterns" cols="30" rows="5" class="form-control" id="inputConsumptionPatterns"></textarea>
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
              <img :src="image.url" class="w-100 border rounded">
            </div>
            <div class="col-sm-3 mb-3">
              <input type="submit" class="w-100 h-100 border rounded" value="+ Add Image">
            </div>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-12 text-right">
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
      images: []
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
  }
}
</script>