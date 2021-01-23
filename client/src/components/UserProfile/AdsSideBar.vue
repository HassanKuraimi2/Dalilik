<template>
  <div class="sideAds overflow-y-auto" style="max-height: 800px">
    <EventAds :key="n" v-for="n in 20" />
  </div>
</template>

<script>
import EventAds from "./EventAds";
export default {
  components: {
    EventAds,
  },
};
</script>

<style scpoed>
.sideAds::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.sideAds:hover::-webkit-scrollbar {
  display: block; /* Safari and Chrome */
}
.sideAds {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  position: fixed;
}
</style>
