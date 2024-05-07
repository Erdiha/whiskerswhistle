<template>
  <div class="footer bg-mainBlack text-mainWhite">aaaaaaa</div>
</template>

<script setup>
// Script logic can be added here if necessary
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6vh;
  position: fixed;
  bottom: 0;
  overflow-x: hidden;
  z-index: 99999;
  margin: 0; // Reset margins to prevent unwanted overflow
  padding: 0; // Reset padding to ensure width is contained within 100%
  box-sizing: border-box; // Include padding and border in the width and height
}
</style>
