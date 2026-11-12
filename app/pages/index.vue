<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactSection from '~/components/ContactSection.vue'
</script>

<template>
  <main class="w-full min-h-screen bg-surface-root overflow-x-hidden flex flex-col">
    <!-- 1. Seção Hero -->
    <HeroSection />

    <!-- 2. Seção Apresentação / Fachada -->
    <AboutSection />

    <!-- 3. Seção de Serviços e Cortes -->
    <ServicesSection />

    <!-- 4. Seção de Contato & Localização -->
    <ContactSection />
  </main>
</template>
