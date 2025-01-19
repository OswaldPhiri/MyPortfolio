<template>
  <section class="projects-section">
    <h2 class="section-title">Projects</h2>
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
      <a :href="selectedProject.link" class="project-link">View Project</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        // {
        //   title: 'Faithful Flock',
        //   duration: 'April 2024 - Present',
        //   logo: require('@/assets/images/faithful.png'),
        //   description: 'Developed a church member management system using the Laravel PHP framework.',
        //   link: '#'
        // },
        {
          title: 'Finance Logger',
          duration: 'July 2024 - Sept 2024',
          logo: require('@/assets/images/Finance.jpg'),
          description: 'A small finance management app built using the Django Python framework.',
          link: '#'
        },
        {
          title: 'Emo Analyzer',
          duration: 'Aug 2024 - Present',
          logo: require('@/assets/images/face.jpg'),
          description: 'An AI system that determines a person\'s mood based on their facial expression.',
          link: '#'
        },
        {
          title: 'CV Creator',
          duration: 'october 2024 - Present',
          logo: require('@/assets/images/cv.png'),
          description: 'A simple Next.Js app you can use to build your resume in minutes.',
          link: 'https://cvcreator-alpha.vercel.app'
        },
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
}

.section-title {
  font-size: 4rem;
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
  cursor: pointer; /* Indicate that the item is clickable */
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 0 15px rgba(255, 255, 0, 0.3);
  opacity: 0.95;
}

.project-logo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center; /* Center text */
}

.project-duration {
  font-size: 0.9rem;
  color: #090000;
  margin-bottom: 0.5rem;
  text-align: center; /* Center text */
}

.project-description-container {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
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
