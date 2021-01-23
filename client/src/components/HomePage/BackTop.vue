<template>
  <div id="back-to-top" class="btn-active" @click="backToTheTop">
    <i class="la la-arrow-up" title="Go top"></i>
  </div>
</template>

<script>
export default {
  methods: {
    backToTheTop: () => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
