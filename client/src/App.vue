<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <q-layout class="xs bg-primaryq">
    <q-page-container class="bg-primary">
      <RouterView></RouterView>
    </q-page-container>
    <q-page-sticky position="bottom" class="q-mb-sm">
      <div class="row justify-between">
        <q-btn to="/workout" round color="white" icon="fa-solid fa-plus" text-color="secondary" />
        <q-btn to="/" round color="white" icon="fa-solid fa-house" text-color="secondary" />
        <q-btn
          to="/statistics"
          round
          color="white"
          icon="fa-solid fa-signal"
          text-color="secondary"
        />
      </div>
    </q-page-sticky>
  </q-layout>
</template>

<style scoped></style>
