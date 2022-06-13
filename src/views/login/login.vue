<script setup lang="ts">
import "./login.scss";
import { ref } from "vue";
const name = ref<string>("zs");
</script>

<template>
  <div>
    <h1>login {{ name }}</h1>
  </div>
</template>
