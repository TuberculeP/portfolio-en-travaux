<template>
  <HeaderComponent/>
  <main><router-view/></main>
  <footer></footer>
  <DecorationComponent/>
</template>

<style lang="scss">
@import '@/assets/variables';

* {
  font-family: 'Deckard-Regular', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4 {
  font-family: 'Inter', 'Open Sans', sans-serif;
}

:root {
  font-size: 16px;
  // anti-aliasing
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: $background;
  color: $text;
  margin: 2rem;
  position: relative;
}
.primary {
  color: $primary;
}
.rainbow {
  background: linear-gradient(to right, $primary, $accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  text-shadow: inherit;
  span {
    background: inherit;
    -webkit-background-clip: inherit;
    -webkit-text-fill-color: inherit;
  }
}
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  &.creative {
    margin-bottom: 0;
    font-weight: lighter;
    font-family: 'Moonies', 'Inter', 'Open Sans', sans-serif;
  }
}
p {
  font-family: 'Deckard-Regular', sans-serif;
  font-weight: 100;
  font-size: 1.1rem;
  margin:  1rem 0;
  max-width: 600px;
}
h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background-color: $background-contrast;
  width: fit-content;
  padding: 10px 30px 5px 10px;
  border-top-right-radius: 25px;
  &::after {
    position: absolute;
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    margin-top: 5px;
    margin-left: -10px;
    background: $background-contrast;
    transition: width .2s ease-in-out;
  }
}
main {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  a {
    color: $primary;
    text-decoration: none;
    &::before {
      content: '🔗';
    }
  }
}
</style>
<script setup>
import HeaderComponent from '@/components/App/HeaderComponent.vue';
import DecorationComponent from '@/components/App/DecorationComponent.vue';
</script>
