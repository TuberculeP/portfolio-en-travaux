<template>

  <div class="hero">
    <div>
      <slot>Ajouter des paragraphes ici</slot>
    </div>
    <div>
      <img :src="image" alt="Un chiengue">
      <q v-html="quote"></q>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

div.hero {
  display: grid;
  grid-template-columns: auto 200px;
  align-items: center;
  gap: 30px;
  position: relative;
  width: fit-content;
  margin: 2rem auto;
  background: $background-contrast;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba($background-contrast, 1);
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  q {
    font-size: .7rem;
    text-align: right;
  }
  p:first-of-type {
    line-height: 2;
  }
}
</style>
<script>
export default {
  name: 'HeroComponent',
  props: {
    image: {
      type: String,
      // eslint-disable-next-line global-require
      default: () => require('@/assets/home/chiengue.png')
      ,
    },
    quote: {
      type: String,
      default: 'Un chiengue trouvé sur <a href="https://www.wikiwand.com/fr/Internet">Internet</a>',
    },
  },
};
</script>
