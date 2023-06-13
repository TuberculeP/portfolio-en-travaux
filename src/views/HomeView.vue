<template>
  <div class="home">
    <h1>
        <span class="primary">
          <i class="fa fa-terminal"></i>
        </span>
      Code is
      <span class="rainbow">
          <span class="caret">.</span>Beautiful
        </span>
    </h1>
    <HeroComponent>
      <p>Bienvenue sur le WIP de Creative Dev !</p>
      <p>Si vous vous trouvez là par hasard, félicitations, ce site n'est probablement pas encore
        terminé mais vous voilà, plus déterminé que jamais !</p>
      <p>Ne désespérez pas, je suis sûr que je n'aurai pas manqué d'ajouter quelques projets...</p>
    </HeroComponent>
    <h2>En avant toute !</h2>
    <TravelComponent />
  </div>
</template>

<script>
import HeroComponent from '@/components/Home/HeroComponent.vue';
import TravelComponent from '@/components/Home/TravelComponent.vue';

export default {
  name: 'HomeView',
  components: {
    TravelComponent,
    HeroComponent,
  },
};
</script>
<style lang="scss">
span.caret {
  color: white;
  display: inline-block;
  animation: caret 1s infinite step-start;
}
i.fa-terminal {
  transform: scale(.7);
}

@keyframes caret {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
