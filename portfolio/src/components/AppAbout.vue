<template>
    <div class="about-container min-h-screen py-16 px-8 bg-white flex flex-col items-center">
      <header class="text-center mb-16">
        <h1 class="text-6xl font-extrabold text-yellow-900 tracking-tight">About Me</h1>
        <p class="mt-4 text-xl text-gray-700 leading-relaxed font-medium">
          I'm passionate about technology, coding, and always eager to learn.
        </p>
      </header>
  
      <section class="about-content flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div class="about-image">
          <img
            src="@/assets/images/me.jpg"
            alt="About me"
            class="rounded-full shadow-lg w-72 h-72 object-cover mx-auto transition-transform duration-300 ease-in-out hover:scale-105 outline-yellow-400 outline-2"
          />
        </div>
  
        <div class="about-text text-lg text-gray-800 leading-relaxed md:w-2/5">
          <p class="mt-4">
            Hello, I'm <span class="font-semibold">Oswald Phiri</span>, a web developer and IT technician with a strong background in Information Systems. My work revolves around creating solutions that combine technology with practical applications. I have experience building websites and apps, fixing hardware and software, and setting up networks.
          </p>
  
          <p class="mt-6">
            I enjoy learning new things, and technology constantly offers exciting opportunities to grow. My toolkit includes <span class="font-semibold">Laravel, Vue.js, Django</span>, and more, and I strive to deliver user-friendly interfaces and efficient back-end systems.
          </p>
  
          <p class="mt-6">
            Beyond work, I love experimenting with new tech, helping people with technical challenges, and exploring innovations in IT service management and cloud computing.
          </p>
        </div>
      </section>
  
      <a class="download-cv mt-8" href="/CV.pdf" download>
        Download My CV
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppAbout',
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
  }
  
  /* Header Styling */
  header h1 {
    color: #000000; /* Yellow for the header */
    font-size: 4rem; /* Increased font size */
    transition: color 0.3s ease-in-out;
  }
  
  header h1:hover {
    color: #000000; /* Darker yellow on hover */
  }
  
  /* Header Paragraph Styling */
  header p {
    font-size: 1.25rem; /* Slightly larger font size for paragraph */
  }
  
  /* About Content Layout */
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Image Styling */
  .about-image img {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Text Styling */
  .about-text {
    text-align: justify;
    color: #374151; /* Slightly darker text for better readability */
  }
  
  /* Download CV Button */
  .download-cv {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background-color: #e6f74c; /* Green Button */
    color: rgb(1, 1, 1);
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .download-cv:hover {
    background-color: #087915; /* Darker Green on Hover */
    transform: scale(1.05);
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
  