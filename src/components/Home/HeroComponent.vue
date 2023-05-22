<template>
<div class="hero">
  <div>
    <h1>
      <span class="primary">
        <i class="fa fa-terminal"></i>
      </span>
      Code is
      <span class="rainbow">
        <span class="caret">.</span>Beautiful
      </span>
    </h1>
  </div>
  <div>
  </div>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

div.hero {
  i.fa-terminal {
    transform: scale(.7);
  }
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: fit-content;
  margin: 2rem auto;
  span.caret {
    color: white;
    display: inline-block;
    animation: caret 1s infinite step-start;
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
}
</style>
<script setup>
</script>
