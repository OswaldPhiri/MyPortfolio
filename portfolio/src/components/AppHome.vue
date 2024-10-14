<template>
  <header class="hero-section">
    <div class="hero-content">
      <!-- Logo -->
      <img class="hero-logo" src="@/assets/images/pic.jpg" alt="Logo" />

      <!-- Main Title and Description -->
      <h1 class="hero-title">Software Engineer & IT Technician</h1>
      <p class="hero-subtitle">
        I'm Oswald Phiri, a dedicated developer passionate about crafting innovative software solutions that make a positive impact.
      </p>

      <!-- Skills Section -->
      <section class="skills-section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-container">
          <div class="skill-item"><i class="fab fa-python"></i> Python</div>
          <div class="skill-item"><i class="fab fa-laravel"></i> Laravel (PHP)</div>
          <div class="skill-item"><i class="fab fa-js"></i> JavaScript</div>
          <div class="skill-item"><i class="fas fa-network-wired"></i> LAN (Networking)</div>
          <div class="skill-item"><i class="fab fa-react"></i> React JS, Vue JS</div>
          <div class="skill-item"><i class="fab fa-html5"></i> HTML</div>
          <div class="skill-item"><i class="fab fa-css3-alt"></i> CSS</div>
          <div class="skill-item"><i class="fab fa-wordpress"></i> WordPress</div>
          <div class="skill-item"><i class="fas fa-database"></i> SQL</div>
          <div class="skill-item">Hardware/Software Troubleshooting</div>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHome',
};
</script>

<style scoped>
.hero-section {
  background-color: #ffffff; /* Use white background for consistency */
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  color: #333;
  background-image: linear-gradient(to right, #f9f9f9, #e6e6e6);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 1.5s ease-out;
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
  box-shadow: 0 0 15px rgba(255, 223, 70, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 223, 70, 0.7);
}

.hero-title {
  font-size: 3.5rem; /* Adjusted for better prominence */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4a4a4a; /* Dark gray for better readability */
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #666; /* Slightly lighter gray for contrast */
  line-height: 1.6;
}

/* Skills Section */
.skills-section {
  padding: 3rem 1rem;
  text-align: center;
  border-top: 3px solid rgba(255, 223, 70, 0.5);
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #4a4a4a; /* Consistent title color */
  text-shadow: 1px 1px 5px rgba(255, 223, 70, 0.3);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem; /* Increased font size for better visibility */
  color: #4a4a4a; /* Dark gray color for text */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 223, 70, 0.3);
}

.skill-item i {
  margin-right: 0.5rem; /* Space between icon and text */
}

.skill-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 223, 70, 0.5);
}
</style>
