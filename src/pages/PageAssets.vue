<template>
  <div class="main-container">
    <!-- Title -->


    <!-- Two Cards Row -->
    <div class="main-card-1">
      <div class="card">
        <div class="card-inner">
          <h2>{{ $t("assets.welcome_title") }} </h2>
          <span class="material-symbols-outlined">cases</span>
        </div>
        <p v-html="$t('assets.main_content')"></p>

      </div>
    </div>
  </div>
</template>

<style>
.content {
  display: flow-root;


}

.image-right {
  float: right;
  margin: 5px 10px 10px 15px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
}

.image-right2 {
  float: right;
  margin: 5px 10px 10px 15px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
}


@import "../assets/css/style.css";
</style>