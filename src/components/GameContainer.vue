<script setup>
</script>

<template>
  <main class="game-container">
    <div class="placeholder-content">
      <p>Game under development</p>
      <small>Coming soon...</small>
    </div>
  </main>
</template>

<style scoped>
.game-container {
  flex: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
  padding: 2rem;
  border: 2px dashed #41b883;
  border-radius: 8px;
}

p {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

small {
  color: #888;
}
</style>