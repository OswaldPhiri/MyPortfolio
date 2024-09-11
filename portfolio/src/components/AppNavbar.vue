<template>
  <nav class="navbar">
    <div class="navbar-content">
      <!-- Logo Section -->
      <a href="/" class="navbar-logo" style = "font-family: cursive; font-weight: bold; font-size: large;">
       Portfolio
      </a>
      <!-- Links Section -->
      <ul class="navbar-links">
        <li><a href="/" class="navbar-link">Home</a></li>
        <li><a href="AppProjects" class="navbar-link">Projects</a></li>
        <li><a href="AppContact" class="navbar-link">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #f7f7f7;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.navbar-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo img {
  height: 50px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navbar-link {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #007bff;
}
</style>
