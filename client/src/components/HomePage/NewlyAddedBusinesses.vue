<template>
  <section class="card-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <div class="section-badge pb-3">
              <span class="ribbon ribbon-2 bg-2 text-white">New Bussiness</span>
            </div>
            <h2 class="sec__title">{{ $t("headlines.newAdded") }}</h2>
            <p class="sec__desc">
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
              libero, <br />
              a feugiat eros. Nunc ut lacinia tortors.
            </p>
          </div>
          <!-- end section-heading -->
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->
      <div class="row padding-top-60px">
        <BussinessCard
          :BusinessInfo="n"
          :key="n.Id"
          v-for="n in NewlyBusinessesList"
        />
      </div>
      <!-- end row -->
      <div class="more-btn-box pt-3 text-center">
        <a href="listing-grid.html" class="theme-btn gradient-btn"
          ><i class="la la-list-alt mr-1"></i
          >{{ $t("links.viewMoreBussiness") }}</a
        >
      </div>
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import BussinessCard from "../Utility/BusinessItem";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { BussinessCard },
  computed: mapGetters(["NewlyBusinessesList"]),
  methods: {
    ...mapActions(["getNewlyAddedBusinesses"]),
  },
  mounted() {
    this.getNewlyAddedBusinesses();
  },
};
</script>

<style></style>
