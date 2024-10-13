<template>
  <section class="contact-section">
    <h2 class="section-title">Contact Me</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" id="name" v-model="formData.name" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <input type="email" id="email" v-model="formData.email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <textarea id="message" v-model="formData.message" rows="5" placeholder="Enter your message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
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
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          alert('Thank you for contacting me, ' + this.formData.name + '!');
          this.formData.name = '';
          this.formData.email = '';
          this.formData.message = '';
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    },
  },
};
</script>
<style scoped>
.contact-section {
  padding: 4rem 1rem;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2.5rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>