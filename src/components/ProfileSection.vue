<template>
  <section
    id="profile"
    data-aos="fade-up"
    data-aos-offset="120"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    class="pt-0 pb-30 text-white border-b border-gray-700"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">
      
      <!-- Text Content -->
      <div
        class="flex-1 text-center md:text-left"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h1 class="text-6xl md:text-7xl font-extrabold mb-6">Neo Peng Rong</h1>
        <h2 class="text-2xl md:text-3xl text-yellow-400 mb-6">
          Business Analytics @ NUS
        </h2>
        <p class="text-lg leading-relaxed text-gray-300 mb-4">
          Hi everyone, welcome to my portfolio! I’m a third-year Business Analytics student at the National University of Singapore (NUS), School of Computing.
          I have a strong passion for leveraging data to inform impactful business decisions.
          Though I began with limited experience in programming and analytics, my commitment to learning has helped me grow into a confident problem-solver with proficiency in Python, Java, MySQL, and R.
          I also have a solid foundation in data structures, algorithms, and applied machine learning.
        </p>
        <p class="text-lg leading-relaxed text-gray-300">
          I approach challenges with a growth mindset, viewing each obstacle as an opportunity to improve.
          Whether tackling complex data problems or mastering new technologies, I bring adaptability, enthusiasm, and a collaborative spirit.
          I'm eager to contribute meaningfully in dynamic environments while continuing to develop my technical and analytical capabilities through hands-on experience.
        </p>
      </div>

      <!-- Image & Resume Button (Stacked) -->
      <div
        class="flex-1 flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img
          src="/profile.jpg"
          alt="Neo Peng Rong"
          class="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl border-4 border-white shadow-yellow-500/40 shadow-xl"
        />

        <!-- Resume Button -->
        <a
          href="/Neo_Peng_Rong_Resume.pdf"
          download
          class="mt-8 flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-400 text-black font-medium text-sm hover:bg-yellow-300 transition shadow-xl shadow-yellow-500/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8.75 12c.69 0 1.25.56 1.25 1.25S9.44 14.5 8.75 14.5H8V15h.75a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75v-3A.75.75 0 018 12h.75zm3.25 0c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-1.5c0-.69.56-1.25 1.25-1.25zm0 1.5v1.5h.5v-1.5h-.5zm3.75-1.5a.75.75 0 01.75.75v.75h.5a.75.75 0 010 1.5h-.5v.75a.75.75 0 01-1.5 0v-3c0-.41.34-.75.75-.75z"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>
