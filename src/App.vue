<script setup>
import { RouterLink, RouterView } from "vue-router";

fetch("./some.txt")
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
  })
  .catch((e) => console.error(e));
</script>

<template>
  <div
    class="text-white font-minecraft text-xl relative top-2 left-2 z-20 w-fit"
  >
    BFT Alpha 1.0_01
  </div>
  <RouterView />
</template>

<style>
.minecraft-text {
  text-shadow: 5px 5px #000;
  font-size: x-large;
}
</style>
