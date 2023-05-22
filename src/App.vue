<template>
  <HeaderComponent/>
  <main><router-view/></main>
  <footer></footer>
</template>

<style lang="scss">
@import '@/assets/variables';

* {
  font-family: 'Inter', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  font-size: 16px;
}

body {
  background: $background;
  color: $text;
  margin: 2rem;
  position: relative;
}
::-webkit-scrollbar {
  height: 12px;
  width: 12px;
  background: $background;
  position: fixed;
  right: 0;
  z-index: 100;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  -webkit-border-radius: 1ex;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar-corner {
  background: #000;
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
}
</style>
<script setup>
import HeaderComponent from '@/components/App/HeaderComponent.vue';
</script>
