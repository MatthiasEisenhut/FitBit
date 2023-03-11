<script setup>
import { useQuasar } from 'quasar';
import { RouterView } from 'vue-router';

const $q = useQuasar();

$q.dark.set(true);
</script>

<template>
  <q-layout class="xs">
    <q-page-container>
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
