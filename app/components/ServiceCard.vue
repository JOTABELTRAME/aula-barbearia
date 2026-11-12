<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'

interface Props {
  title: string
  price: string
  image: string
  description?: string
  duration?: string
}

withDefaults(defineProps<Props>(), {
  description: 'Acabamento preciso na navalha, lavagem especial e modelagem com pomada artesanal.',
  duration: '45 min',
})
</script>

<template>
  <div class="rounded-2xl bg-surface-card border border-surface-border hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1.5 group shadow-xl flex flex-col overflow-hidden">
    <!-- Imagem Quadrada (1:1) do Corte -->
    <div class="aspect-square w-full overflow-hidden relative bg-charcoal-900">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
      
      <!-- Gradiente sutil na base da foto -->
      <div class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-90 pointer-events-none"></div>

      <!-- Badge de Preço Flutuante em Dourado -->
      <div class="absolute top-3.5 right-3.5 px-3.5 py-1 rounded-xl bg-charcoal-950/90 backdrop-blur-md border border-gold-500/40 text-gold-400 font-bold text-sm tracking-wide shadow-lg">
        {{ price }}
      </div>

      <!-- Duração Estimada -->
      <div class="absolute bottom-3 left-3.5 px-2.5 py-0.5 rounded-lg bg-charcoal-950/80 backdrop-blur-sm border border-surface-border text-[11px] text-content-muted font-medium flex items-center gap-1.5">
        <span>⏱</span>
        <span>{{ duration }}</span>
      </div>
    </div>

    <!-- Informações do Corte -->
    <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
      <div class="space-y-2">
        <h3 class="text-xl font-serif font-bold text-content-primary group-hover:text-gold-400 transition-colors">
          {{ title }}
        </h3>
        <p class="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-2">
          {{ description }}
        </p>
      </div>

      <!-- Botão de Agendamento do Corte -->
      <div class="pt-2 border-t border-surface-border">
        <BaseButton variant="secondary" size="sm" :full-width="true">
          Agendar Este Corte
        </BaseButton>
      </div>
    </div>
  </div>
</template>
