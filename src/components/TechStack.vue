<template>
  <section id="tech" data-aos="fade-up" class="pt-0 pb-40 text-white border-b border-gray-700">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-semibold mb-12">Technology</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <!-- Database -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-gray-600 pb-1">Data Management & Visualisation</h3>
          <div class="flex gap-4 flex-wrap">
            <TechCard name="MySQL" icon="/icons/mysql.png" />
            <TechCard name="Firebase" icon="/icons/firebase.png" />
            <TechCard name="R" icon="/icons/r.png" />
            <TechCard name="Tableau" icon="/icons/tableau.png" />
            <TechCard name="TablePlus" icon="/icons/tableplus.png" />
          </div>
        </div>

        <!-- Programming -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-gray-600 pb-1">Programming</h3>
          <div class="flex gap-4 flex-wrap">
            <TechCard name="Python" icon="/icons/python.png" />
            <TechCard name="Java" icon="/icons/java.png" />
            <TechCard name="JavaScript" icon="/icons/javascript.png" />
            <TechCard name="Vue.js" icon="/icons/vue.png" />
            <TechCard name="CSS" icon="/icons/css.png" />
            <TechCard name="HTML" icon="/icons/html.png" />
          </div>
        </div>

        <!-- Office Productivity -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-gray-600 pb-1">Office Productivity</h3>
          <div class="flex gap-4 flex-wrap">
            <TechCard name="Microsoft Word" icon="/icons/word.png" />
            <TechCard name="PowerPoint" icon="/icons/powerpoint.png" />
            <TechCard name="Canva" icon="/icons/canva.png" />
            <TechCard name="Figma" icon="/icons/figma.png" />
            <TechCard name="Teams" icon="/icons/teams.png" />
            <TechCard name="Lark" icon="/icons/lark.png" />
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b border-gray-600 pb-1">Tools</h3>
          <div class="flex gap-4 flex-wrap">
            <TechCard name="React" icon="/icons/react.png" />
            <TechCard name="Git" icon="/icons/git.png" />
            <TechCard name="Node.js" icon="/icons/node.png" />
            <TechCard name="dbt" icon="/icons/dbt.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TechCard from '@/components/TechCard.vue';
</script>
