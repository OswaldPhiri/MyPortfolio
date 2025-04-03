<template>
  <header class="hero-section">
    <div class="hero-content">
      <!-- Logo with kinesis effect -->
      <vue-kinesis>
        <vue-kinesis-element :strength="10" type="depth">
          <img class="hero-logo" src="@/assets/images/pic.jpg" alt="Logo" ref="heroLogo" />
        </vue-kinesis-element>
      </vue-kinesis>

      <!-- Main Title and Description with animations -->
      <h1 class="hero-title" ref="heroTitle">Software Engineer & IT Technician</h1>
      <p class="hero-subtitle" ref="heroSubtitle">
        I'm Oswald Phiri, a dedicated developer passionate about crafting innovative software solutions that make a positive impact.
      </p>

      <!-- Skills Section with scroll animations -->
      <section class="skills-section">
        <h2 class="section-title" ref="skillsTitle">Skills</h2>
        <div class="skills-container">
          <div class="skill-item" v-for="(skill, index) in skills" :key="index" :ref="el => { if(el) skillElements[index] = el }">
            <i :class="skill.icon"></i> {{ skill.name }}
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHome',
  data() {
    return {
      skillElements: [],
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Laravel (PHP)', icon: 'fab fa-laravel' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'LAN (Networking)', icon: 'fas fa-network-wired' },
        { name: 'React JS, Vue JS', icon: 'fab fa-react' },
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'WordPress', icon: 'fab fa-wordpress' },
        { name: 'SQL', icon: 'fas fa-database' },
        { name: 'Hardware/Software Troubleshooting', icon: 'fas fa-tools' }
      ]
    };
  },
  mounted() {
    // Initialize GSAP animations
    this.initAnimations();
    
    // Initialize ScrollReveal for skills
    this.initScrollReveal();
  },
  methods: {
    initAnimations() {
      // Hero content animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(this.$refs.heroLogo, { 
          duration: 1.2, 
          y: 100, 
          opacity: 0,
          rotation: 360,
          scale: 0.5
        })
        .from(this.$refs.heroTitle, { 
          duration: 0.8, 
          y: 50, 
          opacity: 0,
          stagger: 0.1
        }, "-=0.5")
        .from(this.$refs.heroSubtitle, { 
          duration: 0.8, 
          y: 30, 
          opacity: 0 
        }, "-=0.3")
        .from(this.$refs.skillsTitle, { 
          duration: 0.6, 
          y: 20, 
          opacity: 0 
        }, "-=0.2");
    },
    initScrollReveal() {
      // Configure ScrollReveal
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 100
      });
      
      // Apply to skill items with staggered delay
      this.skillElements.forEach((element, index) => {
        sr.reveal(element, {
          delay: 200 + (index * 100)
        });
      });
    }
  }
};
</script>

<style scoped>
.hero-section {
  background-color: #ffffff;
  padding: 8rem 2rem 5rem; /* Increased top padding for better spacing */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  color: #333;
  background-image: linear-gradient(120deg, #f9f9f9, #e6e6e6, #f0f0f0);
  overflow: hidden; /* Prevent any animations from causing scrollbars */
  position: relative;
}

/* Add subtle background animation */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 223, 70, 0.05) 0%, transparent 80%);
  animation: pulse 15s infinite alternate ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
}

.hero-logo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto 2rem;
  box-shadow: 0 0 25px rgba(255, 223, 70, 0.7);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
              box-shadow 0.5s ease;
  cursor: pointer;
}

.hero-logo:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 35px rgba(255, 223, 70, 0.9), 0 0 55px rgba(255, 223, 70, 0.4);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.hero-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(255, 223, 70, 0.8), transparent);
  transform: translateX(-50%);
  animation: underlineExpand 1.5s ease-in-out forwards 1s;
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 80%; }
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Skills Section */
.skills-section {
  padding: 3rem 1rem;
  text-align: center;
  border-top: 3px solid rgba(255, 223, 70, 0.5);
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: #4a4a4a;
  text-shadow: 1px 1px 5px rgba(255, 223, 70, 0.3);
  position: relative;
  display: inline-block;
}

.section-title::before, 
.section-title::after {
  content: '';
  position: absolute;
  height: 3px;
  bottom: -10px;
  background: linear-gradient(90deg, transparent, rgba(255, 223, 70, 0.8));
}

.section-title::before {
  left: -20px;
  width: 40px;
  transform: rotate(-45deg);
}

.section-title::after {
  right: -20px;
  width: 40px;
  transform: rotate(45deg);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  perspective: 1000px;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  color: #4a4a4a;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(255, 223, 70, 0.3);
  position: relative;
  overflow: hidden;
  min-width: 120px;
}

.skill-item i {
  margin-right: 0.8rem;
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: all 0.6s ease;
}

.skill-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(255, 223, 70, 0.3);
  border-color: rgba(255, 223, 70, 0.8);
}

.skill-item:hover::before {
  left: 100%;
}

.skill-item:hover i {
  transform: rotate(360deg) scale(1.2);
}
</style>
