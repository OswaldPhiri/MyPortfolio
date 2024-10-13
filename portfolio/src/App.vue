<template>
  <div id="portfolio">
    <AppNavbar />

    <!-- Routed views will be displayed here -->
    <main>
      <router-view />
    </main>

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
  }
}
</script>

<style>
/* Set the overall layout */
#portfolio {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the full height is covered */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-active {
  font-weight: bold;
}

/* Make sure the main content area grows to fill the remaining space */
main {
  flex-grow: 1; /* This makes the main content take up available space */
  padding: 20px;
}

/* Footer stays at the bottom */
footer {
  padding: 2rem 1rem;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2);
  position: relative;
  bottom: 0;
  width: 100%;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
