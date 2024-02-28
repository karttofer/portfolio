<script lang="ts">
import type { PropType } from 'vue'

interface IConfig {
  label: String
  size: Number
}
export default {
  name: 'ChipsComponent',
  props: {
    config: {
      type: Object as PropType<IConfig>,
      required: true
    }
  }
}
</script>
<template>
  <div :style="{ width: `${config.size}px` }"  data-cy="chips">
    <p data-cy="chips-text">{{ config?.label }}</p>
  </div>
</template>
<style scoped lang="scss">
@import '../assets/styles/variables.scss';

div {
  padding: 6px;
  border: 2px solid;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;

  &:hover {
    border-color: $-dates-shapes;
    color: $-dates-shapes;
    background: $-user-contact-info;
    font-weight: bold;
  }

  p {
    font-size: $-profile-skills;
  }
}
</style>
