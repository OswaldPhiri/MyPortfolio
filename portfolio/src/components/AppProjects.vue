<template>
  <section class="work-experience">
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
.work-experience {
  background-color: #f7f7f7;
  padding: 3rem 1rem;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
  gap: 2rem;
}

.project-item {
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project-logo {
  width: 64px; /* Larger logo for better visibility */
  height: 64px;
  margin-right: 1.5rem;
  border-radius: 8px;
}

.project-details {
  text-align: left;
  flex-grow: 1; /* Allow project details to take up remaining space */
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.project-duration {
  font-size: 0.9rem;
  color: #007BFF;
  margin-bottom: 0.5rem;
}

.project-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-block;
  color: #fff;
  background-color: #007BFF;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #0056b3;
}
</style>
