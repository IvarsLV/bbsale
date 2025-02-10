<template>
  <div class="grid-container">
    <header class="header">
      <div class="menu-icon" @click="toggleSidebar">
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div class="language-switcher">
        <button
          v-for="lang in availableLanguages"
          :key="lang.code"
          :class="{ active: lang.code === currentLocale }"
          @click="changeLanguage(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </header>
    <AppSidebar
  v-if="screenWidth > 992 || sidebarOpen"
  :sidebarOpen="sidebarOpen"
  @close-sidebar="closeSidebar"
/>

    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";
import { useI18n } from "vue-i18n";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import i18n from "./i18n";

export default {
  components: {
    AppSidebar,
  },
  setup() {
    const { locale, t } = useI18n();
    const route = useRoute();

    const sidebarOpen = ref(false);
    const screenWidth = ref(window.innerWidth);

    const availableLanguages = [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
      { code: "lv", label: "LV" },
    ];

    const currentLocale = locale;

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    const closeSidebar = () => {
      sidebarOpen.value = false;
    };

    const changeLanguage = (lang) => {
      locale.value = lang;
      i18n.global.locale.value = lang;
    };

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    // Следим за изменением размера окна
    onMounted(() => {
      window.addEventListener("resize", updateScreenWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenWidth);
    });

    watch(
  [locale, route],
  ([, newRoute]) => { // Убрали `newLocale`
    const titleKey = newRoute.meta?.titleKey;
    if (titleKey) {
      document.title = t(titleKey);
    }
  },
  { immediate: true }
);

    return {
      sidebarOpen,
      screenWidth,
      availableLanguages,
      currentLocale,
      toggleSidebar,
      closeSidebar,
      changeLanguage,
    };
  },
};
</script>

<style scoped>
@import "./assets/css/style.css";
</style>