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
    <q-page-sticky position="bottom" class="q-mb-sm ">
      <div class=" full-width row justify-between items-center">
        <div class="">
          <q-btn
            to="/workout"
            round
            color="secondary"
            icon="fa-solid fa-plus"
            text-color="accent"
          />
        </div>
        <div class="">
          <q-btn to="/" round color="secondary" icon="fa-solid fa-house" text-color="accent" />
        </div>
        <div class="">
          <q-btn
            to="/statistics"
            round
            color="secondary"
            icon="fa-solid fa-signal"
            text-color="accent"
          />
        </div>
      </div>
    </q-page-sticky>
  </q-layout>
</template>

<style scoped></style>
