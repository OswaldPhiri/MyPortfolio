<template>
  <div id="portfolio">
   <AppHome />
   <AppProjects />
   <AppFooter />
  </div>
</template>

<script>
import AppHome from './components/AppHome.vue';
import AppProjects from './components/AppProjects.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHome,
    AppProjects,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
