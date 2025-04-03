<template>
  <div id="app" :class="themeClasses">
    <AppNavbar />
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
    <button class="theme-toggle" @click="toggleTheme">
      ☀️ / 🌙
    </button>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      darkMode: false
    };
  },
  computed: {
    themeClasses() {
      return this.darkMode ? 'dark-theme' : 'light-theme';
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    }
  }
};
</script>

<style src="@/assets/styles.css"></style>
<style>
/* Global animation styles */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Fade animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Theme toggle button animation */
.theme-toggle {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.theme-toggle:hover {
  transform: rotate(15deg) scale(1.1);
}
</style>
