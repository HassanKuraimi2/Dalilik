<template>
  <section class="card-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="filter-bar d-flex flex-wrap justify-content-between align-items-center margin-bottom-30px"
          >
            <p class="result-text font-weight-medium">
              Showing 1 to 6 of 30 entries
            </p>
            <!-- end filter-bar-action -->
          </div>
          <!-- end filter-bar -->
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->
      <div class="row">
        <BussinessCard
          :BusinessInfo="n"
          :key="n.Id"
          v-for="n in BussinessList"
        />
      </div>
      <!-- end row -->
      <div class="row">
        <div class="col-lg-12 pt-3 text-center">
          <div class="pagination-wrapper d-inline-block">
            <div class="section-pagination">
              <nav aria-label="Page navigation">
                <ul class="pagination flex-wrap justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true"
                        ><i class="la la-angle-left"></i
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item">
                    <a class="page-link page-link-active" href="#">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true"
                        ><i class="la la-angle-right"></i
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- end section-pagination -->
            <ul
              class="pagination-simple d-flex align-items-center justify-content-center pt-3"
            >
              <li class="mr-4">
                <a href="#" class="pagination-simple-nav first-nav"
                  ><i class="la la-long-arrow-left mr-1"></i>First</a
                >
              </li>
              <li>
                <a href="#" class="pagination-simple-nav last-nav active"
                  >Last<i class="la la-long-arrow-right ml-1"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import BussinessCard from "../Utility/BusinessItem";
import api from "../../services/api";
export default {
  data: () => {
    return {
      BussinessList: [],
    };
  },
  components: {
    BussinessCard,
  },
  mounted() {
    if (this.$store.state.searchedBusinesses.length != 0) {
      this.BussinessList = this.$store.state.searchedBusinesses;
    } else {
      api
        .get("/businesses/getAllBusinesses")
        .then((result) => {
          this.BussinessList = result.data.Refrence;
        })
        .catch(() => {
          this.$toast.error("حصل خطاء اثناء محاولة جلب البيانات");
        });
      //getAllBusinesses
    }
  },
};
</script>

<style></style>
