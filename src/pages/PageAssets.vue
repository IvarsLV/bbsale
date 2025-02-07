<template>
  <div class="main-container">
    <!-- Title -->


    <!-- Two Cards Row -->
    <div class="main-card-1">
      <div class="card">
        <div class="card-inner">
          <h3>{{ $t("assets.welcome_title") }} </h3>
          <span class="material-symbols-outlined">cases</span>
        </div>
        <p v-html="$t('assets.main_content')"></p>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/style.css";
</style>