<template>
  <nav class="navbar" ref="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <span class="brand-text">Oswald</span>
        <span class="brand-accent">Phiri</span>
      </router-link>
      
      <button class="mobile-toggle" @click="toggleMobileMenu" ref="mobileToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="navbar-nav" :class="{ 'active': mobileMenuOpen }">
        <li class="nav-item" v-for="(link, index) in navLinks" :key="index" ref="navItems">
          <router-link :to="link.path" class="nav-link" @click="mobileMenuOpen = false">
            <i :class="link.icon"></i>
            <span>{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      mobileMenuOpen: false,
      navLinks: [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'About', path: '/about', icon: 'fas fa-user' },
        { name: 'Projects', path: '/projects', icon: 'fas fa-code' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
      ],
      lastScrollY: 0
    };
  },
  mounted() {
    this.initAnimations();
    this.initScrollListener();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      
      // Animate the toggle button
      const spans = this.$refs.mobileToggle.querySelectorAll('span');
      gsap.to(spans[0], {
        rotation: this.mobileMenuOpen ? 45 : 0,
        translateY: this.mobileMenuOpen ? 8 : 0,
        duration: 0.3
      });
      gsap.to(spans[1], {
        opacity: this.mobileMenuOpen ? 0 : 1,
        duration: 0.3
      });
      gsap.to(spans[2], {
        rotation: this.mobileMenuOpen ? -45 : 0,
        translateY: this.mobileMenuOpen ? -8 : 0,
        duration: 0.3
      });
    },
    initAnimations() {
      // Navbar animation on page load
      gsap.from(this.$refs.navbar, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      // Nav items staggered animation
      if (this.$refs.navItems) {
        gsap.from(this.$refs.navItems, {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out"
        });
      }
    },
    initScrollListener() {
      this.lastScrollY = window.scrollY;
      window.addEventListener('scroll', this.handleScroll);
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      
      // Add/remove scroll class based on scroll direction
      if (currentScrollY > 100) {
        // If scrolling down, add compact class
        if (currentScrollY > this.lastScrollY) {
          this.$refs.navbar.classList.add('navbar-compact');
        } 
        // If scrolling up significantly, remove compact class
        else if (this.lastScrollY - currentScrollY > 50) {
          this.$refs.navbar.classList.remove('navbar-compact');
        }
      } else {
        // At top of page, remove compact class
        this.$refs.navbar.classList.remove('navbar-compact');
      }
      
      this.lastScrollY = currentScrollY;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 215, 0, 0.15);
  border-bottom: 2px solid rgba(255, 215, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(10px);
}

.navbar-compact {
  padding: 0;
  transform: translateY(-100%);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  transition: padding 0.3s ease;
}

.navbar-brand {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
}

.brand-text {
  color: #333;
}

.brand-accent {
  color: #ffd700;
  margin-left: 5px;
  position: relative;
}

.brand-accent::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  transition: width 0.3s ease;
}

.navbar-brand:hover .brand-accent::after {
  width: 100%;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.navbar-nav {
  list-style: none;
  display: flex;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover {
  color: #ffd700;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, transparent);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #ffd700;
}

.router-link-active::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.mobile-toggle span {
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  transform-origin: center;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
  
  .navbar-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: right 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    backdrop-filter: blur(10px);
  }
  
  .navbar-nav.active {
    right: 0;
  }
  
  .nav-item {
    opacity: 0;
    transform: translateX(20px);
    animation: slideIn 0.4s forwards;
    animation-delay: calc(0.1s * var(--i));
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .nav-link {
    font-size: 1.2rem;
  }
  
  .navbar-nav.active .nav-item:nth-child(1) { --i: 1; }
  .navbar-nav.active .nav-item:nth-child(2) { --i: 2; }
  .navbar-nav.active .nav-item:nth-child(3) { --i: 3; }
  .navbar-nav.active .nav-item:nth-child(4) { --i: 4; }
}
</style>
