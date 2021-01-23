<template>
  <div class="about">
    <MainBanner />
    <FirstBlogs />
    <WhoAreWe />
    <WhyUs />
    <GrowYourBussiness />
  </div>
</template>

<script>
import FirstBlogs from "../../components/AboutPage/FirstBlogs";
import MainBanner from "../../components/AboutPage/MainBanner";
import WhoAreWe from "../../components/AboutPage/WhoAreWe";
import WhyUs from "../../components/AboutPage/WhyUs";
import GrowYourBussiness from "../../components/AboutPage/GrowYourBussiness";

export default {
  components: { FirstBlogs, MainBanner, WhoAreWe, WhyUs, GrowYourBussiness },
};
</script>

<style scoped>
.breadcrumb--area {
  padding-top: 450px;
}
</style>
