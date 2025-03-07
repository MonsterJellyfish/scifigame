<script setup>
import GameHeader from './components/GameHeader.vue'
import GameContainer from './components/GameContainer.vue'
</script>

<template>
  <div class="app-container">
    <GameHeader />
    <GameContainer />
  </div>
</template>

<style>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
