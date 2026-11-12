<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  fullWidth: false,
})

// Estilos de variante alinhados ao Design System da barbearia
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-brand-primary-foreground font-bold shadow-gold-glow hover:shadow-gold-glow-lg transform hover:-translate-y-0.5'
    case 'secondary':
      return 'bg-surface-card hover:bg-surface-hover text-content-secondary hover:text-content-primary font-semibold border border-surface-border'
    case 'outline':
      return 'border border-gold-500/60 hover:border-gold-400 text-gold-400 hover:text-gold-300 bg-transparent hover:bg-gold-500/10 font-semibold'
    default:
      return 'bg-brand-primary text-brand-primary-foreground'
  }
})

// Tamanhos
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-xs rounded-lg'
    case 'lg':
      return 'px-8 py-4 text-base rounded-xl'
    case 'md':
    default:
      return 'px-7 py-3.5 text-sm rounded-xl'
  }
})

// Tag dinâmica: se tiver link 'to' ou 'href' usa NuxtLink, caso contrário button
const componentTag = computed(() => {
  if (props.to || props.href) return resolveComponent('NuxtLink')
  return 'button'
})
</script>

<template>
  <component
    :is="componentTag"
    :to="to || href"
    :type="!to && !href ? type : undefined"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none text-center"
    :class="[
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : 'w-full sm:w-auto',
    ]"
  >
    <slot />
  </component>
</template>
