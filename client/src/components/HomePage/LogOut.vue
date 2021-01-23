<template>
  <div></div>
</template>

<script>
export default {
  created() {
    localStorage.removeItem("access_token");
    this.$router.push({ name: "home" });
  },
};
</script>

<style></style>
