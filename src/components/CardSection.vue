<template>
  <div class="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6">
    <!-- Image (optional) -->
    <div v-if="imgSrc" class="w-32 flex-shrink-0 flex justify-center md:justify-start items-start">
      <img
        :src="imgSrc"
        :alt="title"
        class="w-32 h-32 object-contain rounded-xl bg-white p-2 shadow-md"
      />
    </div>

    <!-- Text -->
    <div class="flex-1">
      <h3 class="text-xl font-semibold mb-1">{{ title }}</h3>
      <p class="text-sm text-gray-400 mb-3">{{ subtitle }}</p>

      <ul class="list-disc pl-5 text-gray-300 space-y-1 mb-3">
        <li v-for="(point, index) in bullets" :key="index">{{ point }}</li>
      </ul>

      <div v-if="links?.length" class="flex flex-wrap items-center gap-2 text-blue-400 text-sm">
        <template v-for="(link, index) in links" :key="index">
          <a :href="link.href" target="_blank" class="hover:underline">{{ link.label }}</a>
          <span v-if="index !== links.length - 1" class="text-white">•</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  imgSrc: String,         // e.g. "/projects/h4g.png"
  bullets: Array,         // e.g. ["Did X", "Built Y"]
  links: Array            // e.g. [{ label: "Live App", href: "#" }]
})
</script>
