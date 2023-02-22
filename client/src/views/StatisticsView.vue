<script setup>
import { ref } from 'vue';
import monthlyWeightChart from '../components/monthlyWeightChart.vue';

const tab = ref('month');

const date = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let weekday = weekdays[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();

let currentDate = `${weekday}, ${day}.${month}.${year}, ${hour}:${minutes}`;

const todaysWeight = 57;
</script>

<template>
  <q-layout>
    <q-page-container>
      <div class="q-ma-md">
        <p class="text-white text-h5 q-mt">{{ currentDate }}</p>
        <p class="text-white text-h5">Body Measurements</p>
        <p class="text-white text-h6">Todays Weight</p>
        <p class="text-white text-h6">{{ todaysWeight }} kg</p>

        <q-tabs v-model="tab" class="text-white">
          <q-tab name="month" label="Month"></q-tab>
          <q-tab name="year" label="Year"></q-tab>
        </q-tabs>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="month"><monthlyWeightChart></monthlyWeightChart></q-tab-panel>
          <q-tab-panel name="year">Year</q-tab-panel>
        </q-tab-panels>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
