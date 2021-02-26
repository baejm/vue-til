<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">password</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import { login } from "@/api";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async submitForm() {
      const user = {
        username: this.username,
        password: this.password
      };
      const { data } = await login(user);
      console.log(data);
      this.$router.push("/main");
      this.$store.commit("setUser", data);
    }
  }
};
</script>

<style></style>
