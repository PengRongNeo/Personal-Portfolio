<template>
  <div
    class="p-4 w-28 h-28 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center justify-center shadow-md shadow-yellow-500/5 hover:border-yellow-400 hover:shadow-yellow-400/30 transition duration-300"
  >
    <img :src="icon" :alt="name" class="w-10 h-10 object-contain mb-2" />
    <span class="text-sm text-center text-gray-200">{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  icon: String,
});
</script>
