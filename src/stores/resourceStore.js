import { defineStore } from 'pinia'

export const useResourceStore = defineStore('resources', {
  state: () => ({
    administrativeAuthority: 0,
    authorityPerSecond: 0, // We'll use this later for automation
  }),
  
  actions: {
    gainAuthority(amount = 1) {
      this.administrativeAuthority += amount
    }
  }
})