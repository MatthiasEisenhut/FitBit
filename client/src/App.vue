<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <q-layout class="xs" style="background-color: #7d84b2">
    <q-page-container>
      <RouterView></RouterView>
    </q-page-container>
    <q-page-sticky position="bottom">
      <q-footer style="background-color: #7d84b2">
        <q-toolbar class="row justify-between q-px-xl">
          <q-btn to="/workout" round color="white" icon="fa-solid fa-plus" text-color="indigo-6" />
          <q-btn to="/" round color="white" icon="fa-solid fa-house" text-color="indigo-6" />
          <q-btn
            to="/statistics"
            round
            color="white"
            icon="fa-solid fa-signal"
            text-color="indigo-6"
          />
        </q-toolbar>
      </q-footer>
    </q-page-sticky>
  </q-layout>
</template>

<style scoped></style>
