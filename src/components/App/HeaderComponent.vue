<template>
    <header class="main-header">
      <router-link :to="{name: 'home'}">
        <h1 class="creative"><span class="rainbow">Creative Dev</span></h1>
      </router-link>
      <nav>
        <router-link :to="{name: 'about'}">Historique</router-link>
        <router-link :to="{name: 'projects'}">Projets</router-link>
      </nav>
    </header>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from 'jquery';

export default {
  name: 'HeaderComponent',
  mounted() {
    this.$nextTick(() => {
      let previousScrollPosition = document.documentElement.scrollTop;
      let isScrollingDown = false;
      function handleScroll() {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > previousScrollPosition && !isScrollingDown) {
          isScrollingDown = true;
          $('header')[0].style.transform = 'translateY(-150%)';
        } else if (currentScrollPosition < previousScrollPosition && isScrollingDown) {
          isScrollingDown = false;
          $('header')[0].style.transform = 'translateY(0)';
        }
        previousScrollPosition = currentScrollPosition;
      }
      window.addEventListener('scroll', handleScroll);
    });
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/variables';

@keyframes bgAnim {
  0% {
    width: 0;
    margin: 0;
  }
  50% {
    width: 100%;
    margin: 0;
  }
  100% {
    width: 0;
    margin: 0 100%;
  }
}

header {
  position: sticky;
  z-index: 10;
  top: 2rem;
  background: $background-contrast;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  border-radius: 10px;
  transition: transform .2s ease-in-out;
  a {
    text-decoration: none;
    color: $text;
    text-underline: none;
    appearance: none;
  }
  nav  {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a {
      color: $text;
      text-decoration: none;
      transition: transform .2s ease-in-out, box-shadow .2s ease-in-out;
      padding: 1rem 2rem;
      &:hover {
        transform: translateY(-.3rem);
      }
      &.router-link-active {
        background: $primary;
        color: $background;
        border-radius: 10px;
        font-weight: 300;
        &:hover {
          transform: translateY(0);
          box-shadow: 0 0 20px 0 rgba($primary, .5);
        }
      }
    }
  }
}
</style>
