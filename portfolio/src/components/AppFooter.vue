<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <div class="social-media">
        <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="social-icon">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 1rem;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2); /* Faint yellow shadow */
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-media {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #007bff;
}
</style>
