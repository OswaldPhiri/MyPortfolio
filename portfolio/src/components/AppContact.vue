<template>
  <section class="contact-section" ref="contactSection">
    <div class="contact-background"></div>
    <h2 class="section-title" ref="sectionTitle">Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm" ref="contactForm">
      <div class="form-group" ref="nameGroup">
        <label for="name" class="input-label">Name</label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name" 
          placeholder="Enter your name" 
          required 
        />
      </div>
      <div class="form-group" ref="emailGroup">
        <label for="email" class="input-label">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email" 
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div class="form-group" ref="messageGroup">
        <label for="message" class="input-label">Message</label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          rows="5" 
          placeholder="Enter your message" 
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button" ref="submitButton">
        <span class="button-text">Send Message</span>
        <i class="fas fa-paper-plane"></i>
      </button>
    </form>

    <div class="contact-info" ref="contactInfo">
      <div class="info-item">
        <i class="fas fa-envelope"></i>
        <span>oswaldphiri62@gmail.com</span>
      </div>
      <div class="info-item">
        <i class="fas fa-phone"></i>
        <span>+263 77 350 2990</span>
      </div>
      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Harare, Zimbabwe</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    async submitForm() {
      // Animate button on click
      gsap.to(this.$refs.submitButton, {
        scale: 0.95,
        duration: 0.1,
        onComplete: () => {
          gsap.to(this.$refs.submitButton, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
          });
        }
      });

      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          // Success animation
          const tl = gsap.timeline();
          tl.to(this.$refs.contactForm, {
            y: 10,
            opacity: 0.7,
            duration: 0.3
          })
          .to(this.$refs.contactForm, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            onComplete: () => {
              alert('Thank you for contacting me, ' + this.formData.name + '!');
              this.formData.name = '';
              this.formData.email = '';
              this.formData.message = '';
            }
          });
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    },
    initAnimations() {
      // Title animation
      gsap.from(this.$refs.sectionTitle, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Form animation
      gsap.from(this.$refs.contactForm, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      // Form groups staggered animation
      gsap.from([
        this.$refs.nameGroup, 
        this.$refs.emailGroup, 
        this.$refs.messageGroup,
        this.$refs.submitButton
      ], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.5,
        ease: "power3.out"
      });

      // Contact info animation
      gsap.from(this.$refs.contactInfo, {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: "power3.out"
      });

      // Input field focus/blur effects
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.2)',
            borderColor: '#ffdd46',
            duration: 0.3
          });
        });

        input.addEventListener('blur', () => {
          gsap.to(input, {
            boxShadow: 'none',
            borderColor: input.value ? '#ffdd46' : '#ddd',
            duration: 0.3
          });
        });
      });
    }
  },
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 2rem 4rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.05) 0%, transparent 70%);
  z-index: 0;
  animation: pulse 15s infinite alternate ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.5);
  }
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ffdd46, transparent);
  transition: width 0.3s ease;
}

.section-title:hover::after {
  width: 120px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 215, 0, 0.2);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 215, 0, 0.3);
}

.form-group {
  margin-bottom: 1.8rem;
  position: relative;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
  transition: color 0.3s ease;
}

input,
textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgba(255, 255, 255, 0.8);
}

input:hover,
textarea:hover {
  border-color: #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ffdd46;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
  background-color: white;
}

.submit-button {
  width: 100%;
  padding: 1.1rem;
  font-size: 1.1rem;
  color: #333;
  background: linear-gradient(45deg, #ffdd46, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15), 0 0 15px rgba(255, 215, 0, 0.3);
  background: linear-gradient(45deg, #ffd700, #ffdd46);
}

.submit-button:hover::before {
  left: 100%;
}

.button-text {
  margin-right: 8px;
}

.submit-button i {
  transition: transform 0.3s ease;
}

.submit-button:hover i {
  transform: translateX(5px);
}

.contact-info {
  margin-top: 3rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
  z-index: 1;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(255, 215, 0, 0.3);
}

.info-item i {
  margin-right: 8px;
  color: #ffdd46;
  font-size: 1.2rem;
}

/* Responsive styles */
@media (max-width: 767px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>