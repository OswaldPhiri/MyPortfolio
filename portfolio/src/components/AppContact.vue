<template>
    <section class="contact-section">
      <h2 class="section-title">Contact Me</h2>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
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
      submitForm() {
        // Placeholder for form submission logic (e.g., sending data to an API)
        alert('Thank you for contacting me, ' + this.formData.name + '!');
        // Reset form
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-section {
    background-color: #f7f7f7;
    padding: 4rem 1rem;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    color: #333;
  }
  
  .contact-form {
    max-width: 600px; /* Increased width for better alignment */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem; /* Add some padding for spacing */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight shadow for better focus */
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input,
  textarea {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    width: 100%;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
  }
  
  .submit-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px); /* Slight lift effect on hover */
  }
  
  .submit-button:active {
    transform: translateY(1px); /* Subtle press effect */
  }
  </style>
  