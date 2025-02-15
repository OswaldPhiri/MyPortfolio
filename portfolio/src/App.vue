<template>
  <div id="app" :class="themeClasses">
    <AppNavbar />
    <router-view />
    <button class="theme-toggle" @click="toggleTheme">
      ☀️ / 🌙
    </button>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'App',
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
