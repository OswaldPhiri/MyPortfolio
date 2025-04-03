<template>
  <footer class="footer" ref="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">Oswald Phiri</h3>
        <p class="footer-description">Software Engineer & IT Technician</p>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">Social Links</h3>
        <div class="social-links">
          <a href="https://github.com/Oswaldphiri62" target="_blank" class="social-link" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/oswald-phiri-b7a95a299" target="_blank" class="social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" class="social-link" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="copyright">
      <p>&copy; 2024 Oswald Phiri. All Rights Reserved.</p>
    </div>
    
    <button class="scroll-top-btn" @click="scrollToTop" ref="scrollBtn">
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      showScrollButton: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.initAnimations();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      // Button press animation
      gsap.to(this.$refs.scrollBtn, {
        scale: 0.9,
        duration: 0.1,
        onComplete: () => {
          gsap.to(this.$refs.scrollBtn, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
          });
        }
      });
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      // Show/hide scroll button based on scroll position
      const scrollY = window.scrollY;
      const showButton = scrollY > 500;
      
      if (showButton !== this.showScrollButton) {
        this.showScrollButton = showButton;
        
        gsap.to(this.$refs.scrollBtn, {
          opacity: showButton ? 1 : 0,
          visibility: showButton ? 'visible' : 'hidden',
          duration: 0.3
        });
      }
    },
    initAnimations() {
      // Use ScrollReveal for footer
      const sr = ScrollReveal();
      
      sr.reveal(this.$refs.footer, {
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
      });
    }
  }
};
</script>

<style scoped>
.footer {
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  color: #333;
  padding: 3rem 0 2rem;
  position: relative;
  border-top: 3px solid rgba(255, 215, 0, 0.3);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  margin-bottom: 2rem;
  min-width: 250px;
  text-align: center;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  color: #444;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, transparent);
}

.footer-description {
  color: #666;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  color: #333;
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.social-link:hover {
  transform: translateY(-5px);
  color: #ffd700;
  box-shadow: 0 8px 16px rgba(255, 215, 0, 0.3);
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #777;
  font-size: 0.9rem;
}

.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700, #ffec99);
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 999;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
}

.scroll-top-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-section {
    margin-bottom: 2.5rem;
    text-align: center;
  }
  
  .footer-title::after {
    left: 20%;
    width: 60%;
  }
}
</style>
