<template>
  <div class="starry-background text-white font-sans scroll-smooth min-h-screen">
    <NavBar />

    <main class="flex flex-col items-center">
      <section id="profile"><ProfileSection /></section>
      <section id="technology"><TechStack /></section>
      <section id="experience"><MyExperience /></section>
      <section id="projects"><MyProjects /></section>
      <section id="contact"><ContactMe /></section>
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import ProfileSection from './components/ProfileSection.vue';
import MyExperience from './components/MyExperience.vue';
import MyProjects from './components/MyProjects.vue';
import ContactMe from './components/ContactMe.vue';
import TechStack from './components/TechStack.vue';
import '@/assets/stars.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 200,
    easing: 'ease-in-out',
  });
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>


#FUTURE ADDINs / Updates
- 