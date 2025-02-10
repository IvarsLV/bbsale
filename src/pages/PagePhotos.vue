<!-- filepath: /Users/ivarsplisko/PY_Projects/BB Sale/bbsale/src/pages/PagePhotos.vue -->
<template>
  <div class="main-container">
    <!-- Two Cards Row -->
    <div class="main-card-1">
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("photo.welcome_title") }} </h3>
          <span class="material-symbols-outlined">photo</span>
        </div>
        <div class="photo-gallery">
          <div v-for="(image, index) in images" :key="image" class="photo-item" @click="showImage(index)">
            <img :src="`/img/photo/${image}`" :alt="image" />
          </div>
        </div>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="imageUrls"
      :index="index"
      @hide="handleHide"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      images: [
        '1.png', '2.jpg', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.png', '8.png', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg'
      ],
      visible: false,
      index: 0
    };
  },
  computed: {
    imageUrls() {
      return this.images.map(image => `/img/photo/${image}`);
    }
  },
  methods: {
    showImage(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 4 в ряд */
  gap: 10px;
  margin-top: 10px;
}

.photo-item img {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
</style>