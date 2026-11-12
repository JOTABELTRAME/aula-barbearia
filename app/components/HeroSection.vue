<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'
</script>

<template>
  <section class="relative w-full md:min-h-[80vh] md:flex md:items-center bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-leather-950 text-content-primary px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
    <!-- Degradê de fundo com iluminação sutil nas cores do site -->
    <div class="absolute inset-0 bg-radial-vignette from-gold-500/10 via-transparent to-charcoal-950/80 pointer-events-none"></div>

    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
      
      <!-- 1. LADO ESQUERDO: Texto de Apresentação e Botões Reutilizáveis -->
      <div class="flex flex-col space-y-5 sm:space-y-6 text-left">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-gold-400">
          Barbearia Tradicional & Moderna
        </span>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-content-primary leading-tight">
          Estilo, precisão e a melhor experiência para o seu corte.
        </h1>
        
        <p class="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed">
          Bem-vindo à nossa barbearia. Oferecemos um atendimento exclusivo focado no estilo, precisão e bem-estar masculino. Nossos barbeiros combinam técnicas tradicionais de navalha e toalha quente com cortes modernos e visagismo personalizado para cada cliente.
        </p>

        <!-- Botões de Ação utilizando o componente reutilizável BaseButton -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
          <BaseButton variant="primary" href="#contato">
            Agendar Meu Horário
          </BaseButton>
          
          <BaseButton variant="secondary" href="#servicos">
            Ver Serviços
          </BaseButton>
        </div>
      </div>

      <!-- 2. LADO DIREITO: Imagem Quadrada (1:1) do Barbeiro Cortando Cabelo -->
      <div class="flex items-center justify-center md:justify-end pt-4 md:pt-0">
        <div class="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square rounded-2xl border-2 border-surface-border bg-surface-card overflow-hidden shadow-2xl relative group">
          <img 
            src="/images/hero.jpg" 
            alt="Barbeiro profissional cortando o cabelo do cliente" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
</template>
