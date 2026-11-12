<script setup lang="ts">
// Componente de apresentação do espaço / fachada da barbearia
</script>

<template>
  <section class="relative w-full py-16 sm:py-20 lg:py-28 bg-surface-card border-t border-surface-border text-content-primary px-4 sm:px-8 lg:px-16 overflow-hidden">
    
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
      
      <!-- 1. LADO ESQUERDO: Texto de Apresentação da Barbearia -->
      <div class="flex flex-col space-y-6 text-left">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-gold-400">
          Nosso Espaço & Conforto
        </span>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-content-primary leading-tight">
          Um ambiente exclusivo pensado para o seu bem-estar.
        </h2>

        <p class="text-base sm:text-lg text-content-secondary leading-relaxed">
          Nossa estrutura foi planejada nos mínimos detalhes para proporcionar uma experiência marcante. Desde a nossa fachada até as poltronas clássicas de couro reclináveis, você encontra um refúgio acolhedor onde a tradição da barbearia de época se une à modernidade e ao conforto de alto padrão.
        </p>

        <!-- Diferenciais / Destaques do Espaço -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-charcoal-900/80 border border-surface-border flex items-start gap-3">
            <span class="text-2xl">☕</span>
            <div>
              <h3 class="font-bold text-sm text-content-primary">Lounge & Bar</h3>
              <p class="text-xs text-content-muted mt-0.5">Café expresso e cervejas especiais cortesia.</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-charcoal-900/80 border border-surface-border flex items-start gap-3">
            <span class="text-2xl">🛋️</span>
            <div>
              <h3 class="font-bold text-sm text-content-primary">Poltronas Vintage</h3>
              <p class="text-xs text-content-muted mt-0.5">Conforto absoluto em couro legítimo reclinável.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. LADO DIREITO: Imagem na Proporção 3x4 (Altura maior que Largura) -->
      <div class="flex items-center justify-center md:justify-end">
        <div class="w-full max-w-[300px] sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl border-2 border-surface-border bg-charcoal-900 overflow-hidden shadow-2xl relative group">
          <img 
            src="/images/frente.jpg" 
            alt="Fachada e ambiente da barbearia" 
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          
          <!-- Efeito de sombra sutil na base da foto -->
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
</template>
