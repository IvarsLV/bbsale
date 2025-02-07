import { createRouter, createWebHistory } from 'vue-router';
import PageDashboard from '../pages/PageDashboard.vue';
import PageAbout from '../pages/PageAbout.vue';
import PageIndicators from '../pages/PageIndicators.vue';
import PageAssets from '../pages/PageAssets.vue';
import PagePhotos from '../pages/PagePhotos.vue';
import PageContacts from '../pages/PageContacts.vue';
import i18n from '../i18n';

export const routes = [
  { path: '/', name: 'dashboard', component: PageDashboard, meta: { titleKey: "dashboard.title" } },
  { path: '/about', name: 'about', component: PageAbout, meta: { titleKey: "about.title" } },
  { path: '/kpi', name: 'kpi', component: PageIndicators, meta: { titleKey: "kpi.title" } },
  { path: '/assets', name: 'assets', component: PageAssets, meta: { titleKey: "assets.title" } },
  { path: '/photos', name: 'photos', component: PagePhotos, meta: { titleKey: "photo.title" } },
  { path: '/contacts', name: 'contacts', component: PageContacts, meta: { titleKey: "contacts.title" } },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const titleKey = to.meta.titleKey;
  document.title = titleKey
    ? i18n.global.t(titleKey) // Используем текущую локаль по умолчанию
    : "BB Sale";

  next();
});

export default router;