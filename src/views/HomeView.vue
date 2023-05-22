<template>
  <div class="home">
    <HeroComponent/>
  </div>
</template>

<script>
import HeroComponent from '@/components/Home/HeroComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
  },
};
</script>
