<script setup>
import { ref } from 'vue'
import GameHeader from './components/GameHeader.vue'
import GameContainer from './components/GameContainer.vue'

const gameStarted = ref(false)

const startGame = () => {
  gameStarted.value = true
}
</script>

<template>
  <GameHeader />
  <main class="main-container">
    <div v-if="!gameStarted" class="start-screen">
      <h2>Welcome to C.R.A.M.</h2>
      <p>Your journey into cosmic bureaucracy begins here</p>
      <button class="start-button" @click="startGame">Start Game</button>
    </div>
    <GameContainer v-else />
  </main>
</template>

<style scoped>
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.start-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.start-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #3aa876;
}

h2 {
  color: #41b883;
  margin-bottom: 1rem;
}

p {
  color: #888;
  margin-bottom: 2rem;
}
</style>
