<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    v-bind:disabled="props.disabled"
    class="h-[60px] w-96 bg-cubeButton-idle disabled:bg-cubeButton-active disabled:text-[#555] hover:bg-cubeButton-hover active:bg-cubeButton-active font-minecraft text-white hover:text-yellow-200 button-text flex justify-center pt-2"
  >
    <slot></slot>
  </button>
</template>

<style>
.button-text {
  text-shadow: 3px 3px #222;
  font-size: x-large;
}
</style>
