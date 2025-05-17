<template>
  <footer class="bg-black/50 backdrop-blur-md text-gray-400 text-sm py-8 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      
      <!-- Left Text -->
      <p>&copy; {{ year }} Neo Peng Rong. All rights reserved.</p>

      <!-- Contact Links -->
      <div class="flex gap-5 text-lg items-center">
        <a
          href="https://github.com/PengRongNeo"
          target="_blank"
          class="hover:text-white transition"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pengrongneo/"
          target="_blank"
          class="hover:text-blue-500 transition"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:e1121487@u.nus.edu"
          class="hover:text-white transition"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://wa.me/6596508879"
          target="_blank"
          class="hover:text-green-400 transition"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
