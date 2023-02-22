import { defineStore } from 'pinia';
import weight from '../assets/data/weight.js';

export const useWeightStore = defineStore('weight', {
  state: () => {
    return {
      weight,
    };
  },
});
