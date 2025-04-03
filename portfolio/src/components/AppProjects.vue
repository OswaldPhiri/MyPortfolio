<template>
  <section class="projects-section" ref="projectsSection">
    <h2 class="section-title" ref="sectionTitle">Featured Projects</h2>
    <div class="projects-container">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="project-item" 
        @click="selectProject(index)"
        :ref="el => { if(el) projectElements[index] = el }"
      >
        <div class="project-image-container">
          <img :src="project.logo" :alt="project.title + ' Logo'" class="project-logo" />
          <div class="project-overlay">
            <span>View Details</span>
          </div>
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-duration">{{ project.duration }}</p>
      </div>
    </div>

    <!-- Project Description Section -->
    <transition name="slide-fade">
      <div v-if="selectedProject" class="project-description-container" ref="descriptionContainer">
        <button class="close-btn" @click="selectedProject = null">&times;</button>
        <h3 class="project-title">{{ selectedProject.title }}</h3>
        <p class="project-duration">{{ selectedProject.duration }}</p>
        <p class="project-description">{{ selectedProject.description }}</p>
        <a :href="selectedProject.link" class="project-link" target="_blank">
          View Project
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </transition>
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
          logo: require('@/assets/images/aizen.png'),
          description: 'A cutting-edge technology solutions company providing innovative software solutions.',
          link: 'https://aizen-tech-g8zz.vercel.app'
        }
      ],
      selectedProject: null,
      projectElements: []
    };
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    selectProject(index) {
      this.selectedProject = this.projects[index];
      
      // Animate the description container when a project is selected
      this.$nextTick(() => {
        if (this.$refs.descriptionContainer) {
          gsap.from(this.$refs.descriptionContainer, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
          });
        }
      });
    },
    initAnimations() {
      // Section title animation
      gsap.from(this.$refs.sectionTitle, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: this.$refs.sectionTitle,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none"
        }
      });
      
      // Staggered project items animation
      const sr = ScrollReveal();
      
      this.projectElements.forEach((element, index) => {
        sr.reveal(element, {
          origin: 'bottom',
          distance: '30px',
          duration: 800,
          delay: 100 * index,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          reset: false
        });
      });
    }
  }
};
</script>

<style scoped>
.projects-section {
  padding: 6rem 1rem 4rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #2d3436;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #c1d606, #ffd700);
  border-radius: 2px;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  background: white;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 255, 0, 0.3);
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-logo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.project-item:hover .project-logo {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-overlay span {
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.project-item:hover .project-overlay {
  opacity: 1;
}

.project-item:hover .project-overlay span {
  transform: translateY(0);
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  text-align: center;
  color: #2d3436;
  padding: 0 1rem;
}

.project-duration {
  font-size: 0.9rem;
  color: #636e72;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0 1rem;
}

.project-description-container {
  margin-top: 3rem;
  padding: 2rem;
  border: none;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 10;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #636e72;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #2d3436;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #636e72;
}

.project-link {
  display: inline-flex;
  align-items: center;
  color: white;
  background: linear-gradient(45deg, #c1d606, #ffd700);
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.project-link i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.project-link:hover {
  background: linear-gradient(45deg, #b4b500, #ffc400);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

.project-link:hover i {
  transform: translateX(5px);
}

/* Transition for the project description */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.slide-fade-enter-from {
  transform: translateY(50px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
