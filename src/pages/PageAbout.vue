<!-- filepath: /Users/ivarsplisko/PY_Projects/BB Sale/bbsale/src/pages/PageAbout.vue -->
<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  }
};
</script>

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
  margin: 10px 0;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
}

.image-left {
  float: left;
  margin: 0 15px 10px 0;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
}

</style>