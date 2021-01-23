<template>
  <section class="cta-area padding-top-120px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <carousel
            :perPage="1"
            :autoplay="true"
            :autoplayTimeout="4000"
            paginationColor="rgba(51, 63, 87, 0.1)"
            paginationActiveColor="#7b68ee"
          >
            <slide :key="n" v-for="n in 10" class="p-2">
              <AdsItem />
            </slide>
          </carousel>
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import AdsItem from "../Utility/AdsItem";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { Carousel, Slide, AdsItem },
};
</script>

<style></style>
