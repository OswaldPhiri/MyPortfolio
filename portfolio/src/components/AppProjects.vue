<template>
  <section class="projects-section">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">
      <!-- Project 1 -->
      <div class="project-item">
        <img src="@/assets/images/faithful.png" alt="Project 1 Logo" class="project-logo" />
        <div class="project-details">
          <h3 class="project-title">Faithful Flock</h3>
          <p class="project-duration">April 2024 - Present</p>
          <p class="project-description">
            Developed a church member management system using the Laravel PHP framework.
          </p>
          <a href="#" class="project-link">View Project</a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-item">
        <img src="@/assets/images/Finance.jpg" alt="Project 2 Logo" class="project-logo" />
        <div class="project-details">
          <h3 class="project-title">Finance Logger</h3>
          <p class="project-duration">July 2024 - Sept 2024</p>
          <p class="project-description">
            A small finance management app built using the Django Python framework.
          </p>
          <a href="#" class="project-link">View Project</a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-item">
        <img src="@/assets/images/face.jpg" alt="Project 3 Logo" class="project-logo" />
        <div class="project-details">
          <h3 class="project-title">Emo Analyzer</h3>
          <p class="project-duration">Aug 2024 - Present</p>
          <p class="project-description">
            An AI system that determines a person's mood based on their facial expression.
          </p>
          <a href="#" class="project-link">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2); /* Faint yellow shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 0 15px rgba(255, 255, 0, 0.3); 
  transform: translateY(-10px) rotate(1deg);
  opacity: 0.95;
}

.project-logo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-item:hover .project-logo {
  transform: scale(1.05);
}

.project-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
}

.project-item:hover .project-details {
  opacity: 1;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-duration {
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-block;
  color: #fff;
  background-color: #42b983;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #c1d606;
}
</style>
