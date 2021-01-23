<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item v-for="n in 10" :key="n">
      <AdsItem />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import AdsItem from "../Utility/AdsItem";
export default {
  components: {
    AdsItem,
  },
};
</script>

<style></style>
