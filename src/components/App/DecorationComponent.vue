<script>

export default {
  name: 'DecorationComponent',
  mounted() {
    this.$gsap.to('.cubes .cube', {
      scale: 0.8,
      duration: 0.8,
      repeat: -1,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: 'power1.inOut',
    });
  },
};
</script>

<template>
<div class="cubes top left">
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube void"></div>
</div>
<div class="cubes bottom right">
  <div class="cube void"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
</template>

<style scoped lang="scss">
div.cubes {
  display: grid;
  grid-template-columns: auto auto;
  width: fit-content;
  gap: 5px;
  opacity: .2;
  position: fixed;
  z-index: -1;
  div.cube {
    border-radius: 5px;
    width: 50px;
    height: 50px;
    background: #fff;
    &.void{
      background: transparent;
    }
  }
  &.top.left {
    top: 10px;
    left: 10px;
  }
  &.bottom.right {
    bottom: 10px;
    right: 10px;
  }
}
</style>
