<template>
  <div>
    <a href="javascript:;">로고</a> |
    <template v-if="!LoginCheck">
      <router-link to="/signup">회원가입</router-link> |
      <router-link to="/login">로그인</router-link>
    </template>
    <template v-else>
      <a href="javascript:;" @click="logout">로그아웃</a>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    LoginCheck() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logout() {
      this.$store.commit("clearUser");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
