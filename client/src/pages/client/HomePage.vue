<template>
  <div>
    <MainBaner />
    <AdsSlider />
    <TopSearchedBussiness />
    <TrendingBlog />
    <CommingEvents />
    <AskForService />
    <NewlyAddedBusinesses />
  </div>
</template>

<script>
import MainBaner from "@/components/HomePage/MainBaner";
import TopSearchedBussiness from "@/components/HomePage/TopSearchedBussiness";
import TrendingBlog from "@/components/HomePage/TrendingBlog";
import CommingEvents from "@/components/HomePage/CommingEvents";
import AskForService from "@/components/HomePage/AskForService";
import NewlyAddedBusinesses from "@/components/HomePage/NewlyAddedBusinesses";
import AdsSlider from '@/components/HomePage/AdsSlider';

export default {
  name: "Home",
  components: {
    MainBaner,
    TopSearchedBussiness,
    TrendingBlog,
    CommingEvents,
    AskForService,
    NewlyAddedBusinesses,
    AdsSlider
  }
};
</script>
<style lang="scss" scoped></style>
