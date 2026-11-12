<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'

// Lista de cortes com as 3 imagens da pasta public/images/
const servicos = [
  {
    id: 1,
    title: 'Degradê Fade Clássico',
    price: 'R$ 60,00',
    image: '/images/corte-1.jpg',
    description: 'Transição suave na navalha e máquina, contorno alinhado e finalização com pomada modeladora.',
    duration: '45 min',
  },
  {
    id: 2,
    title: 'Corte Social com Tesoura',
    price: 'R$ 55,00',
    image: '/images/corte-2.jpg',
    description: 'Técnica avançada de tesoura e máquina para um visual elegante, limpo e atemporal.',
    duration: '40 min',
  },
  {
    id: 3,
    title: 'Estilo Pompadour / Freestyle',
    price: 'R$ 70,00',
    image: '/images/corte-3.jpg',
    description: 'Design moderno com volume estruturado, linhas desenhadas e fixação de alta durabilidade.',
    duration: '50 min',
  },
]
</script>

<template>
  <section id="servicos" class="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-charcoal-950 to-surface-root border-t border-surface-border text-content-primary px-4 sm:px-8 lg:px-16 overflow-hidden">
    <!-- Luzes de fundo sutis -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-gold-600/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-7xl mx-auto relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-gold-400">
          Tabela de Serviços
        </span>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-content-primary leading-tight">
          Cortes com Estilo, Precisão e Identidade
        </h2>

        <p class="text-sm sm:text-base text-content-secondary leading-relaxed">
          Cada corte é executado com visagismo personalizado, produtos de primeira linha e acabamento impecável na lâmina descartável.
        </p>
      </div>

      <!-- Grid com os Cards de Serviços (3 Colunas no Desktop) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        <ServiceCard
          v-for="item in servicos"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :image="item.image"
          :description="item.description"
          :duration="item.duration"
        />
      </div>

    </div>
  </section>
</template>
