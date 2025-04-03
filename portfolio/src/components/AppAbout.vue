<template>
    <div class="about-container min-h-screen py-16 px-8 bg-white flex flex-col items-center">
      <header class="text-center mb-16">
        <h1 class="text-6xl font-extrabold text-yellow-900 tracking-tight" ref="aboutTitle">About Me</h1>
        <p class="mt-4 text-xl text-gray-700 leading-relaxed font-medium" ref="aboutSubtitle">
          I'm passionate about technology, coding, and always eager to learn.
        </p>
      </header>
  
      <section class="about-content flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <vue-kinesis class="about-image">
          <vue-kinesis-element :strength="20" type="depth">
            <img
              src="@/assets/images/me.jpg"
              alt="About me"
              class="rounded-full shadow-lg w-72 h-72 object-cover mx-auto transition-transform duration-300 ease-in-out hover:scale-105 outline-yellow-400 outline-2"
              ref="aboutImage"
            />
          </vue-kinesis-element>
        </vue-kinesis>
  
        <div class="about-text text-lg text-gray-800 leading-relaxed md:w-2/5">
          <p class="mt-4 text-block" ref="textBlock1">
            Hello, I'm <span class="font-semibold highlight-text">Oswald Phiri</span>, a web developer and IT technician with a strong background in Information Systems. My work revolves around creating solutions that combine technology with practical applications. I have experience building websites and apps, fixing hardware and software, and setting up networks.
          </p>
  
          <p class="mt-6 text-block" ref="textBlock2">
            I enjoy learning new things, and technology constantly offers exciting opportunities to grow. My toolkit includes <span class="font-semibold highlight-text">Laravel, Vue.js, Django</span>, and more, and I strive to deliver user-friendly interfaces and efficient back-end systems.
          </p>
  
          <p class="mt-6 text-block" ref="textBlock3">
            Beyond work, I love experimenting with new tech, helping people with technical challenges, and exploring innovations in IT service management and cloud computing.
          </p>
        </div>
      </section>
  
      <a class="download-cv mt-8" href="/CV.pdf" download ref="downloadButton">
        Download My CV
        <i class="fas fa-file-download ml-2"></i>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppAbout',
    mounted() {
      this.initAnimations();
    },
    methods: {
      initAnimations() {
        // Header animations
        gsap.from(this.$refs.aboutTitle, {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });

        gsap.from(this.$refs.aboutSubtitle, {
          y: -30,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out"
        });

        // Image animation
        gsap.from(this.$refs.aboutImage, {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "elastic.out(1, 0.6)"
        });

        // Text blocks animation with ScrollReveal
        const textBlocks = [
          this.$refs.textBlock1,
          this.$refs.textBlock2,
          this.$refs.textBlock3
        ];

        const sr = ScrollReveal();
        
        textBlocks.forEach((block, index) => {
          sr.reveal(block, {
            distance: '50px',
            origin: 'right',
            opacity: 0,
            duration: 1000,
            delay: 300 + (index * 200),
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
          });
        });

        // Button animation
        gsap.from(this.$refs.downloadButton, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 1.2,
          ease: "back.out(1.7)"
        });

        // Add shine effect to highlights
        gsap.to('.highlight-text', {
          backgroundPosition: '200% center',
          duration: 2,
          repeat: -1,
          ease: "linear",
          yoyo: true
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Container Background */
  .about-container {
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif; /* Set a common font family */
    position: relative;
    overflow: hidden;
  }
  
  /* Animated background gradient */
  .about-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 240, 200, 0.1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(240, 240, 255, 0.1) 100%);
    z-index: -1;
    animation: gradientShift 15s ease infinite alternate;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  
  /* Header Styling */
  header h1 {
    color: #000000; /* Yellow for the header */
    font-size: 4rem; /* Increased font size */
    transition: text-shadow 0.5s ease;
    position: relative;
    display: inline-block;
  }
  
  header h1::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    background: linear-gradient(90deg, transparent, rgba(255, 223, 70, 0.8), transparent);
    transform: translateX(-50%);
    transition: width 1s ease;
  }
  
  header:hover h1::after {
    width: 80%;
  }
  
  header h1:hover {
    text-shadow: 0 0 15px rgba(255, 223, 70, 0.5);
  }
  
  /* Header Paragraph Styling */
  header p {
    font-size: 1.25rem; /* Slightly larger font size for paragraph */
    transition: all 0.3s ease;
  }
  
  header:hover p {
    letter-spacing: 0.5px;
  }
  
  /* About Content Layout */
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  /* Image Styling */
  .about-image {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .about-image img {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 4px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ffdd46, #ffd700) border-box;
  }
  
  .about-image img:hover {
    box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
    transform: rotate(5deg) scale(1.05);
  }
  
  /* Text Styling */
  .about-text {
    text-align: justify;
    color: #374151; /* Slightly darker text for better readability */
    position: relative;
  }
  
  .text-block {
    position: relative;
    padding-left: 1rem;
  }
  
  .text-block::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(to bottom, #e6f74c, transparent);
  }
  
  /* Highlight styling */
  .highlight-text {
    position: relative;
    background: linear-gradient(90deg, transparent, rgba(255, 223, 70, 0.4), transparent);
    background-size: 200% 100%;
    padding: 0 5px;
    border-radius: 3px;
  }
  
  /* Download CV Button */
  .download-cv {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0.85rem 1.8rem;
    background: linear-gradient(45deg, #e6f74c, #ffd700);
    color: rgb(1, 1, 1);
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
  }
  
  .download-cv::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  .download-cv:hover {
    background: linear-gradient(45deg, #d6e72d, #ffc700);
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
  
  .download-cv:hover::before {
    left: 100%;
  }
  
  .download-cv i {
    transition: transform 0.3s ease;
  }
  
  .download-cv:hover i {
    transform: translateY(-2px);
  }
  
  @media (min-width: 768px) {
    .about-content {
      flex-direction: row;
      justify-content: center; /* Center the items */
    }
  
    .about-image {
      margin-right: 2rem;
    }
  
    .about-text {
      text-align: left; /* Left-align the text on larger screens */
    }
  }
  </style>
  