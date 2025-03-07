import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    showPerSecond: true,
  }),
  
  actions: {
    togglePerSecond() {
      this.showPerSecond = !this.showPerSecond
    }
  }
})