<template>
  <div>
    <MainPage></MainPage>
  </div>
</template>

<script>
import { fetchPosts } from "@/api";
import MainPage from "@/components/MainPage";
export default {
  components: { MainPage },
  async created() {
    const response = await fetchPosts();
    console.log(response);
  }
};
</script>

<style></style>
