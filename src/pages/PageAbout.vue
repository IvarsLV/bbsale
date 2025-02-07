<!-- filepath: /Users/ivarsplisko/PY_Projects/BB Sale/bbsale/src/pages/PageAbout.vue -->
<template>
  <div class="main-container">
    <div class="main-card-1">
      <div class="card">
        <div class="card-inner">
          <p v-html="$t('about.welcome_title')"></p>
          <span class="material-symbols-outlined">work</span>
        </div>
            <p v-html="$t('about.main_content')"></p>

      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/css/style.css";

.content {
  display: flow-root;


}

.image-right {
  float: right;
  margin: 35px 10px 10px 15px;
  width: 400px;
  border-radius: 5px;
}

.image-left {
  float: left;
  margin: 0 15px 10px 0;
  width: 350px;
  border-radius: 5px;
}

</style>