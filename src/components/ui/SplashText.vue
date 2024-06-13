<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "hope i finish this...",
  },
});
</script>

<template>
  <div class="absolute w-fit translate-x-[50%]">
    <div
      class="font-minecraft text-yellow-300 animate-splash minecraft-text relative top-[100px] -right-[75%]"
    >
      {{ props.text }}
    </div>
  </div>
</template>
