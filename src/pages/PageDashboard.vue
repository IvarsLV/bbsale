<template>
  <div class="main-container">
    <!-- Title -->
    <div class="main-title" style="justify-content: center;">
      <h2>{{ $t("dashboard.welcome_title") }}</h2>
    </div>

    <!-- Two Cards Row -->
    <div class="main-card-2">
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("dashboard.card_title") }}</h3>
          <span class="material-symbols-outlined">front_hand</span>
        </div>
        <p v-html="$t('dashboard.main_content')"></p>
        
        <router-link to="/about" class="details-link">{{ $t("dashboard.details") }}</router-link>
      </div>
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("dashboard.photos_title") }}</h3>
          <span class="material-symbols-outlined">photo</span>
          <router-link to="/photos" class="details-link">{{ $t("dashboard.details") }}</router-link>
        </div>
        <div class="slider-container">
          <img id="slider" :alt="$t('dashboard.random_photo')" />
        </div>
      </div>
    </div>

    <!-- Four Cards Row -->
    <div class="main-card-4">
      <div class="card" v-for="stat in stats" :key="stat.title">
        <div class="card-inner">
          <h3>{{ $t(stat.title) }}</h3>
          <span class="material-symbols-outlined">{{ stat.icon }}</span>
        </div>
        <h1 :style="{ color: stat.color || 'inherit' }">{{ stat.amount }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import statsData from "../assets/langs/data.json";

export default {
  data() {
    return {
      stats: [],
    };
  },
  mounted() {
    this.stats = statsData.stats;

    const imagePaths = [
  "/img/photo/1.png",
  "/img/photo/2.jpg",
  "/img/photo/3.png",
  "/img/photo/4.jpg",
  "/img/photo/5.jpg",
  "/img/photo/6.jpg",
  "/img/photo/7.png",
  "/img/photo/8.png",
  "/img/photo/9.jpg",
  "/img/photo/10.jpg",
  "/img/photo/11.jpg",
  "/img/photo/12.jpg",
  "/img/photo/13.jpg",
  "/img/photo/14.jpg",
  "/img/photo/15.jpg",
  "/img/photo/16.jpg",
  "/img/photo/17.jpg",
  "/img/photo/18.jpg",
  "/img/photo/19.jpg",
  "/img/photo/20.jpg",
  "/img/photo/21.jpg",
  "/img/photo/22.jpg",
  "/img/photo/23.jpg",
  "/img/photo/24.jpg",
  "/img/photo/25.jpg",
  "/img/photo/26.jpg",
  "/img/photo/27.jpg",
  "/img/photo/28.jpg",
  "/img/photo/29.jpg",
  "/img/photo/30.jpg",
  "/img/photo/31.jpg",
  "/img/photo/32.jpg",
  "/img/photo/33.jpg",
  "/img/photo/34.jpg",
  "/img/photo/35.jpg",
  "/img/photo/36.jpg",
  "/img/photo/37.jpg",
  "/img/photo/38.jpg",
  "/img/photo/39.jpg",
  "/img/photo/40.jpg"
];

    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const slider = document.getElementById("slider");
    slider.src = randomImage;
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>