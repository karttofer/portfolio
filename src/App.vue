<script lang="ts">
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const gradientStyle = ref({
      background: 'radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '1'
    }) as any

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight
      const gradient = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #372c2c57 10%, rgba(0, 0, 0, 0.8) 100%)`
      gradientStyle.value.background = gradient
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)
    })

    return {
      gradientStyle
    }
  }
}
</script>

<template>
  <div>
    <RouterView />
  </div>
  <div class="mouse-gradient" ref="gradient" :style="gradientStyle"></div>
</template>

<style scoped lang="scss">
@import './assets/styles/variables.scss';

@media (max-width: $mobile-breakpoint) {
  .mouse-gradient {
    display: none !important;
  }
}
</style>
