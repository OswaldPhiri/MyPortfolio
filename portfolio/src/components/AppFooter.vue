<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <span>{O}</span>
      </div>

      <div class="footer-socials">
        <!-- Social Media Links -->
        <a href="https://github.com/yourprofile" target="_blank" class="social-link">
          <img src="@/assets/images/github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-link">
          <img src="@/assets/images/react.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" class="social-link">
          <img src="@/assets/images/code.jpg" alt="Twitter" />
        </a>
      </div>

      <div class="footer-copy">
        <p>© 2024 Oswald Phiri. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f7f7f7;
  color: #333;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  display: inline-block;
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.social-link:hover {
  transform: translateY(-3px); /* Slight lift effect on hover */
}

.footer-copy {
  font-size: 0.875rem;
  color: #666;
}
</style>
