<script>
import { projectName } from '@/components/Projects/TriminoComponent.vue';

export default {
  name: 'TravelComponent',
  data() {
    return {
      languages: [
        'php',
        'vuejs',
        'jquery',
        'javascript',
        'python',
        'django',
      ],
    };
  },
};
</script>

<template>
<div class="travel">
  <div class="languages">
    <i
      :class="`devicon-${language}-plain`"
      v-for="language in languages"
      :key="language"
      @mouseenter="$event.target.classList.toggle('colored')"
      @mouseleave="$event.target.classList.toggle('colored')"
      @focus="$event.target.classList.toggle('colored')"
      @blur="$event.target.classList.toggle('colored')"
    ></i>
  </div>
  {{projectName}}
</div>
</template>

<style scoped lang="scss">
@import "@/assets/variables";
div.languages {
  display: flex;
  justify-content: center;
  color: $background-contrast;
  text-shadow: 0 0 20px $primary;
  & > i {
    font-size: 5rem;
    margin: 0 1rem;
    transition: color .2s ease-in-out;
  }
}
</style>
