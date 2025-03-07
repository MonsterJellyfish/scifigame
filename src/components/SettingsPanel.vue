<script setup>
import { useSettingsStore } from '../stores/settingsStore'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()
const { showPerSecond } = storeToRefs(settingsStore)

const emit = defineEmits(['close'])

const closeSettings = () => {
  emit('close')
}
</script>

<template>
  <div class="settings-overlay">
    <div class="settings-panel">
      <div class="settings-header">
        <h3>Settings</h3>
        <button class="close-button" @click="closeSettings">×</button>
      </div>
      <div class="settings-content">
        <div class="setting-item">
          <label>
            <input 
              type="checkbox" 
              v-model="showPerSecond"
            > Show resources per second
          </label>
        </div>
        <!-- Add more settings here later -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.settings-panel {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  min-width: 300px;
  max-width: 500px;
  width: 90%;
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.settings-header h3 {
  margin: 0;
  color: #41b883;
}

.close-button {
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.close-button:hover {
  color: #fff;
}

.setting-item {
  padding: 0.75rem 0;
  color: #fff;
}

.setting-item label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

input[type="checkbox"] {
  cursor: pointer;
}
</style>