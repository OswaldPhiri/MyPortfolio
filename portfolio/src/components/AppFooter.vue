<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2024 OswaldPortfolio. All rights reserved.</p>
      <div class="social-media">
        <a href="https://www.facebook.com/allswerd.phiri.9" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com/Alswerd1?t=hJmbhFh1BTPTH1UDT1rc1g&s=09" class="social-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/oswald-phiri-282b88246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/OswaldPhiri" class="social-icon">
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 0, 0.2);
  /* Position it at the bottom */
  position: relative;
  width: 100%;
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
