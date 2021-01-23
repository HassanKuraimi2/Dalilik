<template>
  <v-container class="mt-10">
    <v-row>
      <v-col>
        <v-card class="card-item single-card">
          <div class="card-image after-none">
            <v-img
              :src="FilesPath + ListDetail.ListingImage"
              class="card__img"
              alt="blog image"
              max-height="470"
            />
          </div>
          <!-- end card-image -->
          <div class="card-content">
            <h4 class="card-title font-size-25 mb-0">
              {{ ListDetail.ListingHeader }}
            </h4>
            <div class="d-flex flex-wrap align-items-center pt-3">
              <router-link
                :to="{
                  name: 'CompanyProfile',
                  params: { id: ListDetail.CompanyId },
                }"
                class="d-flex align-items-center text-gray mr-3"
              >
                <div class="user-thumb user-thumb-sm d-inline-block mr-2">
                  <v-img :src="FilesPath + ListDetail.CompanyImage" />
                </div>
                <span class="font-weight-medium"
                  >By {{ ListDetail.CompanyName }}</span
                >
              </router-link>
              <ul class="listing-meta d-flex align-items-center pt-0">
                <li class="mr-3">
                  <i class="la la-calendar mr-1"></i>{{ ListDetail.DateAdded }}
                </li>
                <li class="mr-3">
                  <i class="la la-tags mr-1"></i>
                  <a href="#" class="listing-cat-link">Travel</a>,
                  <a href="#" class="listing-cat-link">News</a>
                </li>
                <li class="mr-3">
                  <i class="la la-comment mr-1"></i>
                  <a href="#" class="listing-cat-link">5 Comments</a>
                </li>
                <li>
                  <i class="la la-share-alt mr-1"></i>
                  <a href="#" class="listing-cat-link">55 Share</a>
                </li>
              </ul>
            </div>
            <p class="card-sub mt-3">
              {{ ListDetail.ListingData }}
            </p>
          </div>
          <!-- end card-content -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../../services/api";
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      ListDetail: {},
      FilesPath: config.path,
    };
  },
  created() {
    api
      .get("/businesses/getListingDetails", {
        params: {
          ListId: this.$route.params.id,
        },
      })
      .then((result) => {
        if (result.data.Status) {
          this.ListDetail = result.data.Refrence[0];
          this.ListDetail.DateAdded = new Date(
            this.ListDetail.DateAdded
          ).toLocaleString("default", { month: "short", year: "numeric" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.card-item .card-sub {
    font-size: 1.2rem;
}
</style>
