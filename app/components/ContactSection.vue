<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'

// Informações de contato da barbearia
const contactInfo = {
  name: 'Barbearia Nobre Corte',
  tagline: 'Tradição, estilo e o melhor atendimento para você.',
  phone: '(11) 98765-4321',
  phoneClean: '5511987654321',
  landline: '(11) 3456-7890',
  address: 'Av. Paulista, 1500 - Bela Vista, São Paulo - SP',
  cep: '01310-200',
  email: 'contato@nobrecorte.com.br',
  hours: [
    { days: 'Segunda a Sexta', time: '09:00 - 20:00' },
    { days: 'Sábado', time: '08:00 - 19:00' },
    { days: 'Domingo e Feriados', time: 'Fechado' },
  ],
  mapsUrl: 'https://maps.google.com/?q=Av.+Paulista,+1500+-+Bela+Vista,+São+Paulo+-+SP',
}
</script>

<template>
  <section id="contato" class="relative w-full py-16 sm:py-20 lg:py-28 bg-surface-card border-t border-surface-border text-content-primary px-4 sm:px-8 lg:px-16 overflow-hidden">
    <!-- Efeito de iluminação de fundo -->
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-7xl mx-auto relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="max-w-2xl mb-12 sm:mb-16 space-y-3">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-gold-400">
          Localização & Atendimento
        </span>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-content-primary leading-tight">
          Venha nos Visitar
        </h2>

        <p class="text-sm sm:text-base text-content-secondary leading-relaxed">
          Estamos prontos para recebê-lo com um café especial ou uma cerveja gelada. Agende seu horário ou venha nos conhecer.
        </p>
      </div>

      <!-- Grid de 2 Colunas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        
        <!-- 1. COLUNA ESQUERDA: Nome, Telefone, Endereço, Horários e Ações -->
        <div class="flex flex-col justify-between space-y-6">
          
          <!-- Card de Apresentação da Marca -->
          <div class="p-6 rounded-2xl bg-charcoal-900/90 border border-surface-border space-y-4">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-gold-500">Barbearia Premium</span>
              <h3 class="text-2xl font-serif font-bold text-content-primary mt-1">
                {{ contactInfo.name }}
              </h3>
              <p class="text-sm text-content-secondary mt-1">
                {{ contactInfo.tagline }}
              </p>
            </div>

            <div class="h-px w-full bg-surface-border/60"></div>

            <!-- Lista de Informações -->
            <div class="space-y-4">
              
              <!-- Endereço -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 text-gold-400 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-wider font-semibold text-content-muted">Endereço</h4>
                  <p class="text-sm font-medium text-content-primary mt-0.5 leading-snug">
                    {{ contactInfo.address }}
                  </p>
                  <p class="text-xs text-content-muted mt-0.5">CEP: {{ contactInfo.cep }} · Estacionamento conveniado no local</p>
                </div>
              </div>

              <!-- Telefones & WhatsApp -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 text-gold-400 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-wider font-semibold text-content-muted">Telefone & WhatsApp</h4>
                  <div class="flex flex-wrap items-center gap-2 mt-0.5">
                    <a :href="`https://wa.me/${contactInfo.phoneClean}`" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-gold-400 hover:text-gold-300 hover:underline transition-colors">
                      {{ contactInfo.phone }}
                    </a>
                    <span class="text-content-muted text-xs">•</span>
                    <a :href="`tel:${contactInfo.landline.replace(/\D/g, '')}`" class="text-sm text-content-secondary hover:text-content-primary transition-colors">
                      {{ contactInfo.landline }}
                    </a>
                  </div>
                  <p class="text-xs text-content-muted mt-0.5">Atendimento rápido pelo WhatsApp para agendamentos</p>
                </div>
              </div>

              <!-- Horário de Funcionamento -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 text-gold-400 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-xs uppercase tracking-wider font-semibold text-content-muted">Horário de Funcionamento</h4>
                  <ul class="mt-1 space-y-1 text-xs">
                    <li v-for="(h, idx) in contactInfo.hours" :key="idx" class="flex justify-between items-center text-content-secondary border-b border-surface-border/40 pb-1 last:border-0 last:pb-0">
                      <span>{{ h.days }}</span>
                      <span :class="h.time === 'Fechado' ? 'text-red-400/90 font-medium' : 'text-gold-400 font-semibold'">{{ h.time }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- E-mail -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 text-gold-400 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs uppercase tracking-wider font-semibold text-content-muted">E-mail Comercial</h4>
                  <a :href="`mailto:${contactInfo.email}`" class="text-sm text-content-secondary hover:text-gold-400 transition-colors">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- Botões de Ação na Coluna Esquerda -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <BaseButton
              variant="primary"
              :href="contactInfo.mapsUrl"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir no GPS / Waze
            </BaseButton>
          </div>

        </div>

        <!-- 2. COLUNA DIREITA: Mapa Interativo do Google Maps -->
        <div class="flex flex-col h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full">
          <div class="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-2xl border-2 border-surface-border bg-charcoal-900 overflow-hidden shadow-2xl relative group flex flex-col">
            
            <!-- Iframe do Mapa -->
            <iframe
              title="Localização da Barbearia"
              class="w-full h-full flex-1 border-0"
              style="min-height: 380px;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106696296001!2d-46.65390548502219!3d-23.564611184681665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>

            <!-- Barra inferior do Mapa com Ação Rápida -->
            <div class="p-4 bg-charcoal-950/95 border-t border-surface-border flex items-center justify-between gap-4">
              <div class="flex items-center gap-2 text-xs text-content-secondary">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Barbearia Aberta para Atendimento</span>
              </div>
              <a
                :href="contactInfo.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
              >
                Como Chegar
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
