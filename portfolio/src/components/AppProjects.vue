<template>
  <section class="projects-section">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-container">
      <div v-for="(project, index) in projects" :key="index" class="project-item" @click="selectProject(index)">
        <img :src="project.logo" :alt="project.title + ' Logo'" class="project-logo" />
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-duration">{{ project.duration }}</p>
      </div>
    </div>

    <!-- Project Description Section -->
    <div v-if="selectedProject" class="project-description-container">
      <h3 class="project-title">{{ selectedProject.title }}</h3>
      <p class="project-duration">{{ selectedProject.duration }}</p>
      <p class="project-description">{{ selectedProject.description }}</p>
      <a :href="selectedProject.link" class="project-link" target="_blank">View Project</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'Emo Analyzer',
          duration: 'In Progress',
          logo: require('@/assets/images/face.jpg'),
          description: 'An AI system that determines a person\'s mood based on their facial expression.',
          link: '#'
        },
        {
          title: 'CV Creator',
          duration: 'October 2024 - Present',
          logo: require('@/assets/images/cv.png'),
          description: 'A Next.js application for creating professional resumes in minutes.',
          link: 'https://cvcreator-alpha.vercel.app'
        },
        {
          title: 'AizenTech',
          duration: 'August 2024 - Present',
          logo: require('@/assets/images/office.png'),
          description: 'A cutting-edge technology solutions company providing innovative software solutions.',
          link: 'https://aizen-tech-g8zz.vercel.app'
        }
      ],
      selectedProject: null
    };
  },
  methods: {
    selectProject(index) {
      this.selectedProject = this.projects[index];
    }
  }
};
</script>

<style scoped>
.projects-section {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2d3436;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 0 15px rgba(255, 255, 0, 0.3);
}

.project-logo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #2d3436;
}

.project-duration {
  font-size: 0.9rem;
  color: #636e72;
  margin-bottom: 0.5rem;
  text-align: center;
}

.project-description-container {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #636e72;
}

.project-link {
  display: inline-block;
  color: white;
  background-color: #c1d606;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-link:hover {
  background-color: #b4b500;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}
</style>
