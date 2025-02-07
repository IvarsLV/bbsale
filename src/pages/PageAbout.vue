<template>
  <div class="main-container">
    <!-- Two Cards Row -->
    <div class="main-card-1">
      <div class="card">
        <div class="card-inner">
          <p v-html="$t('about.welcome_title')"> </p>
          <span class="material-symbols-outlined">work</span>
        </div>
        <p v-html="$t('about.main_content')"></p>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/style.css";
</style>