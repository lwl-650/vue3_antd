<script setup lang="ts">
import { ref } from "vue";
import "./index.scss";
import router from "@/router/index";
const name = ref("zs");

const go = () => {
  router.push("/login");
};
const got = () => {
  router.push("/texts");
};
</script>

<template>
  <div>
    <h1 @click="go">index {{ name }}</h1>
    <h1 @click="got">texts</h1>
  </div>
</template>
