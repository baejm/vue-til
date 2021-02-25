<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
  created() {
    console.log("하이");
  }
};
</script>

<style></style>
