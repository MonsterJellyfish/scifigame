<script setup>
import { ref } from 'vue'
import { useResourceStore } from '../stores/resourceStore'
import { useSettingsStore } from '../stores/settingsStore'
import { storeToRefs } from 'pinia'
import SettingsPanel from './SettingsPanel.vue'

const resourceStore = useResourceStore()
const settingsStore = useSettingsStore()
const { administrativeAuthority, authorityPerSecond } = storeToRefs(resourceStore)
const { showPerSecond } = storeToRefs(settingsStore)

const showSettings = ref(false)

const doPaperwork = () => {
  resourceStore.gainAuthority()
}

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}
</script>

<template>
  <main class="game-container">
    <div class="game-content">
      <div class="resources-panel">
        <div class="panel-header">
          <h3>Resources</h3>
          <button class="settings-button" @click="toggleSettings" title="Open Settings">
            ⚙️
          </button>
        </div>
        <div class="resource">
          <span class="resource-name">Administrative Authority:</span>
          <span class="resource-value">
            {{ administrativeAuthority }}
            <span v-if="showPerSecond && authorityPerSecond > 0" class="per-second">
              ({{ authorityPerSecond }}/s)
            </span>
          </span>
        </div>
      </div>
      <div class="main-panel">
        <h3>Work Area</h3>
        <div class="work-area">
          <button class="paperwork-button" @click="doPaperwork">
            Do Paperwork
          </button>
        </div>
      </div>
      <div class="upgrades-panel">
        <h3>Upgrades</h3>
        <p>Coming soon...</p>
      </div>
    </div>
    
    <SettingsPanel 
      v-if="showSettings" 
      @close="showSettings = false"
    />
  </main>
</template>

<style scoped>
.game-container {
  flex: 1;
  padding: 1rem;
}

.game-content {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  gap: 1rem;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.resources-panel,
.main-panel,
.upgrades-panel {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;
}

.resource {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2a2a2a;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.resource-name {
  color: #41b883;
}

.resource-value {
  font-weight: bold;
}

.paperwork-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.paperwork-button:hover {
  background-color: #3aa876;
  transform: scale(1.02);
}

.paperwork-button:active {
  transform: scale(0.98);
}

h3 {
  color: #41b883;
  margin-top: 0;
  margin-bottom: 1rem;
}

.main-panel {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.work-area {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.settings-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  font-size: 1.2rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.settings-button:hover {
  opacity: 1;
}

.per-second {
  font-size: 0.9em;
  color: #888;
  margin-left: 0.5rem;
}

@media (max-width: 1024px) {
  .game-content {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
</style>
