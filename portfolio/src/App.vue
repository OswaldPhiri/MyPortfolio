<template>
  <div id="portfolio">
    <AppNavbar />
    <AppHome />
    <AppProjects />
    <AppContact/>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppHome from './components/AppHome.vue';
import AppProjects from './components/AppProjects.vue';
import AppContact from './components/AppContact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppHome,
    AppProjects,
    AppContact,
    AppFooter
  }
}
</script>

<style>
#portfolio {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
