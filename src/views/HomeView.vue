<script setup>
import Title from "../components/elements/Title.vue";
import CubeButton from "../components/ui/cubeButton.vue";
import ButtonContainer from "../components/elements/ButtonContainer.vue";
</script>

<template>
  <Title />
  <ButtonContainer>
    <CubeButton>New Language Pack</CubeButton>
    <CubeButton>Open Language Pack</CubeButton>
    <CubeButton disabled>Explore Language Packs</CubeButton>
  </ButtonContainer>
</template>
