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
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        // Добавьте остальные имена файлов изображений
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* 4 в ряд */
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