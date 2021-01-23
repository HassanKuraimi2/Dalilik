<template>
  <div>
    <section class="hero-wrapper overflow-hidden">
      <div class="overlay"></div>
      <!-- end overlay -->

      <!-- End fullscreen-slide-container -->
    </section>
    <section>
      <div
        class="d-flex align-items-end justify-content-center highlight-search-desc py-5 text-center"
      ></div>
      <div class="container">
        <div class="row">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-heading text-center">
                  <div class="section-heading">
                    <h4 class="sec__title cd-headline slide search-title">
                      {{ $t("search.lookFor") }}
                    </h4>
                  </div>
                </div>
                <!-- end hero-heading -->
                <div class="main-search-input">
                  <div class="main-search-input-item w-100">
                    <form action="#" class="form-box">
                      <div class="form-group mb-0">
                        <span class="la la-search form-icon"></span>
                        <input
                          class="form-control"
                          type="search"
                          :placeholder="$t('search.palceholder')"
                          v-model="searchId"
                        />
                      </div>
                    </form>
                  </div>
                  <!-- end main-search-input-item -->
                  <div class="main-search-input-item">
                    <button
                      class="theme-btn gradient-btn border-0 w-100"
                      type="submit"
                      @click.prevent="searchBusiness"
                    >
                      <i class="la la-search mr-2"></i>{{ $t("search.search") }}
                    </button>
                  </div>
                  <!-- end main-search-input-item -->
                </div>
                <!-- end main-search-input -->
                <div class="highlighted-categories">
                  <div
                    class="highlight-lists d-flex justify-content-center mt-4"
                  >
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-building"></i
                        ></span>
                        {{ $t("mainBanner.realState") }}
                      </a>
                    </div>
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-cutlery"></i
                        ></span>
                        {{ $t("mainBanner.food&drink") }}
                      </a>
                    </div>
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-tshirt"></i
                        ></span>
                        {{ $t("mainBanner.fashion") }}
                      </a>
                    </div>
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-heartbeat"></i
                        ></span>
                        {{ $t("mainBanner.health") }}
                      </a>
                    </div>
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-plug"></i
                        ></span>
                        {{ $t("mainBanner.electronics") }}
                      </a>
                    </div>
                    <div class="hero-category-item">
                      <a href="#" class="d-block hero-cat-link hover-y">
                        <span class="icon-element bg-2 mx-auto"
                          ><i class="la la-car-side"></i
                        ></span>
                        {{ $t("mainBanner.automotive") }}
                      </a>
                    </div>
                  </div>
                </div>
                <!-- end highlighted-categories -->
              </div>
              <!-- end col-lg-12 -->
            </div>
            <!-- end row -->
          </div>
          <!-- end container -->
          <!-- end col-lg-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  data: () => {
    return {
      searchId: "",
    };
  },
  methods: {
    searchBusiness() {
      if (this.searchId == "") {
        this.$toast.warning("يرجى ملىء الحقل اولا", {
          position: "top",
        });
        return;
      }
      api
        .post("/businesses/SearchBusinesses", {
          searchId: this.searchId,
        })
        .then((result) => {
          if (result.data.Refrence.length > 0) {
            this.$store.state.searchedBusinesses = result.data.Refrence;
            this.$router.push({ name: "listings" });
          } else
            this.$toast.warning("لا يوجد بيانات للعرض", {
              position: "top",
            });
        })
        .catch((err) => {
          this.$toast.error(err);
        });
    },
  },
};
</script>

<style>
.hero-category-item a {
  color: #5e6884 !important;
}
.search-title {
  color: #5e6884 !important;
}
.main-search-input {
  background-color: rgba(0, 0, 20, 0.1) !important;
}

.hero-wrapper {
  background-image: url("../../assets/images/home-bg1.jpg");
  padding-top: 850px !important;
  margin-top: 90px;
}
.style-chooser .vs__search::placeholder {
  color: #999;
}
.vs__search {
  padding: 8px 20px !important;
}
</style>
