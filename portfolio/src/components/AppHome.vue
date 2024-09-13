<template>
  <header class="hero-section">
    <div class="hero-content">
      <!-- Logo -->
      <img class="hero-logo" src="@/assets/images/pic.jpg" alt="Logo" />

      <!-- Main Title and Description -->
      <h1 class="hero-title">Software Engineer & IT Technician</h1>
      <p class="hero-subtitle">
        I'm Oswald Phiri, a self-taught developer passionate about learning and
        building software that is beneficial to developers and the world at large.
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
          <div class="skill-item">Hardware/Software Troubleshooting</div> <!-- No icon available -->
        </div>
      </section>
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
  background-image: linear-gradient(to right, #ffffff, #e6e6e6);
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
  /* Add a faint yellow glow */
  box-shadow: 0 0 15px rgba(255, 223, 70, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 223, 70, 0.7);
}

.hero-title {
  font-size: 3rem;
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

/* Update Call to Action Button with Yellow Highlight */
.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 223, 70, 0.5);
}

.cta-button:hover {
  background-color: #0056b3;
  box-shadow: 0 0 15px rgba(255, 223, 70, 0.7);
}

/* Skills Section with Yellow Accent */
.skills-section {
  background-color: #f7f7f7;
  padding: 3rem 1rem;
  text-align: center;
  border-top: 3px solid rgba(255, 223, 70, 0.5); /* Add a faint yellow border at the top */
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  text-shadow: 1px 1px 5px rgba(255, 223, 70, 0.3); /* Faint yellow shadow for the title */
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
  font-size: 1.1rem;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 223, 70, 0.3); /* Yellow border around skill items */
}

.skill-item i {
  margin-right: 0.5rem; /* Space between icon and text */
}

.skill-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 223, 70, 0.5);
}

/* Social Icons with Yellow Accent */
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
  border: 1px solid rgba(255, 223, 70, 0.3); /* Yellow border around social icons */
}

.social-icon:hover {
  background-color: #333;
  color: #fff;
  transform: scale(1.05);
}
</style>
