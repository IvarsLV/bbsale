<template>
  <aside
    id="sidebar"
    :class="[
      { 'sidebar-loading': isLoading },
      { 'sidebar-open': sidebarOpen }
    ]"
  >
    <div class="logo-bg">
      <img class="logo" src="/bbsale/img/logo.png" alt="Логотип BBSALE" />
    </div>
    
    <ul class="sidebar-list">
      <li class="sidebar-list-item" v-for="link in links" :key="link.translationKey">
        <router-link :to="link.to" @click="closeSidebar" class="sidebar-link">
          <span class="material-symbols-outlined">{{ link.icon }}</span>
          {{ $t(link.translationKey) }}
        </router-link>
      </li>
    </ul>
    <div class="sidebar-company-info">
      <img src="/bbsale/img/ipx.png" alt="IPX SIA" width="70%" />
      <p>
        {{ $t("sidebar_company_info.intro") }}
        <strong>{{ $t("sidebar_company_info.company_name") }}</strong>.
        {{ $t("sidebar_company_info.help") }}
      </p>
      <a href="mailto:info@ipx.lv" class="email-link">
        <span class="material-symbols-outlined">mail</span>
        {{ $t("sidebar_company_info.contact_email") }}
      </a>
    </div>
  </aside>
</template>
  
<script>
export default {
  props: {
    sidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false, // Управляет анимацией при загрузке
      links: [  
        { to: "/", icon: "dashboard", translationKey: "main" },
        { to: "/about", icon: "work", translationKey: "aboutmenu" },
        { to: "/kpi", icon: "analytics", translationKey: "kpi_menu" },
        { to: "/assets", icon: "cases", translationKey: "assets_menu" },
        { to: "/photos", icon: "photo", translationKey: "photos" },
        { to: "/contacts", icon: "contact_mail", translationKey: "contacts_menu" },
      ],
    };
  },
  mounted() {
    // Добавляем класс для показа панели с анимацией
    setTimeout(() => {
      this.isLoading = true;
    }, 100); // Задержка для запуска анимации
  },
  methods: {
    closeSidebar() {
      this.$emit("close-sidebar");
    },
  },
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>