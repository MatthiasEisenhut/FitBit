<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div class="row justify-between q-pa-xl">
      <div>
        <p class="text-white">Welcome Matthias!</p>
        <p class="text-white">Wednesday, 15th Febuary, 2023</p>
      </div>
      <q-img src="/65.jpg" width="20vw" style="border-radius: 100%"></q-img>
    </div>
    <div class="row justify-center">
      <q-card class="myCard q-ma-sm"
        ><q-card-section
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod alias non aspernatur
          distinctio cumque laboriosam officia dolor voluptatum, quidem adipisci corrupti, porro
          iste in, id eius voluptas. Quas, doloremque!</q-card-section
        ></q-card
      >
      <q-card class="myCard q-ma-sm"
        ><q-card-section
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod alias non aspernatur
          distinctio cumque laboriosam officia dolor voluptatum, quidem adipisci corrupti, porro
          iste in, id eius voluptas. Quas, doloremque!</q-card-section
        ></q-card
      >
      <q-card class="myCard q-ma-sm"
        ><q-card-section
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod alias non aspernatur
          distinctio cumque laboriosam officia dolor voluptatum, quidem adipisci corrupti, porro
          iste in, id eius voluptas. Quas, doloremque!</q-card-section
        ></q-card
      >
      <q-card class="myCard q-ma-sm"
        ><q-card-section
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod alias non aspernatur
          distinctio cumque laboriosam officia dolor voluptatum, quidem adipisci corrupti, porro
          iste in, id eius voluptas. Quas, doloremque!</q-card-section
        ></q-card
      >
    </div>
  </div>
</template>

<style scoped>
.myCard {
  width: 50vw;
  max-width: 100%;
}
</style>
