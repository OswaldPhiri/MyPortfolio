<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <!-- <img src="@/assets/images/logo.png" alt="Logo" class="logo" /> -->
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2); /* Faint yellow shadow */
  border-bottom: 2px solid rgba(255, 255, 0, 0.2); /* Light yellow border */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.navbar-brand .logo {
  height: 40px;
}

.navbar-nav {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s, border-bottom 0.3s;
  padding: 0.5rem;
}

.nav-link:hover {
  color: #007bff;
  border-bottom: 2px solid #f8e9a8; /* Yellow underline */
}
</style>
