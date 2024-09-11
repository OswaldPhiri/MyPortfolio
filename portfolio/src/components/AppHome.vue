<template>
  <header class="hero-section">
    <div class="hero-content">
      <!-- Logo -->
      <img class="hero-logo" src="@/assets/images/pic.jpg" alt="Logo" />

      <!-- Main Title and Description -->
      <h1 class="hero-title">Software Engineer & IT Technician</h1>
      <p class="hero-subtitle">
        I'm Oswald Phiri, a self-taught developer passionate about learning and building software that is beneficial to developers and the world at large.
      </p>

      <!-- Call to Action -->
      <a href="#contact" class="cta-button">Contact Me</a>

      <!-- Social Media Icons -->
      <div class="social-icons">
        <a href="#" class="social-icon"><i class="fab fa-python"></i> Python</a>
        <a href="#" class="social-icon"><i class="fab fa-laravel"></i> Laravel (PHP)</a>
        <a href="#" class="social-icon"><i class="fab fa-js"></i> JavaScript</a>
        <a href="#" class="social-icon"><i class="fas fa-network-wired"></i> LAN (Networking)</a>
        <a href="#" class="social-icon"><i class="fab fa-react"></i> React JS, Vue JS</a>
        <!-- Add more social icons as needed -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  background-color: #f7f7f7;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  color: #333;
  background-image: linear-gradient(to right, #ffffff, #e6e6e6); /* Soft gradient background */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 1.5s ease-out; /* Smooth fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-logo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

.hero-logo:hover {
  transform: scale(1.1); /* Slightly enlarge the image on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 3rem; /* Larger font for better visibility */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #555;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.social-icon {
  color: #333;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
}

.social-icon i {
  margin-right: 0.5rem; /* Space between icon and text */
}

.social-icon:hover {
  background-color: #333;
  color: #fff;
  transform: scale(1.05); /* Slightly enlarge on hover */
}
</style>
