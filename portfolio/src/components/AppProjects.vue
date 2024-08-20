<template>
    <section class="bg-black text-white py-16">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-8 text-center">All Creative Works.</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-gray-800 p-6 rounded">
            <h4 class="text-2xl font-bold">{{ project.title }}</h4>
            <p class="mt-2">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="text-blue-400 hover:underline mt-4 block">Explore →</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AppProjects',
    data() {
      return {
        projects: [
          { id: 1, title: 'Opinionmeter', description: 'A web app to analyze opinions on specific topics.', link: '#' },
          { id: 2, title: 'Creative@Home', description: 'A website providing roadmaps for programming.', link: '#' },
          { id: 3, title: 'Prayer Time API', description: 'An API to get today\'s prayer times.', link: '#' },
        ],
      };
    },
  };
  </script>
  
