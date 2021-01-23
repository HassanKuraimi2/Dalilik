<template>
  <div>
    <div v-if="this.$route.name">
      <Preloader />
      <Navbar />
    </div>
    <router-view name="visitor" />
    <Footer />
    <BackTop />
  </div>
</template>
<script>
import Preloader from "@/components/HomePage/Preloader";
import Navbar from "@/components/HomePage/Navbar";
import Footer from '@/components/HomePage/Footer';
import BackTop from '@/components/HomePage/BackTop';
export default {
  components: { Preloader, Navbar , Footer , BackTop},
  data() {
    return {
      local: "",
    };
  },
  mounted() {
    if (localStorage.local) {
      this.local = localStorage.local;
    }
  },
};
</script>