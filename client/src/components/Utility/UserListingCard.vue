<template>
  <div class="responsive-column">
    <v-card class="mx-auto card-item border border-color" max-width="400">
      <div class="card-image">
        <router-link
          :to="{ name: 'ListingDetails', params: { id: PostCard.ListingId } }"
          class="d-block"
        >
          <img
            :src="FilesPath + PostCard.ListingImage"
            class="card__img lazy"
            alt=""
            style="min-height: 300px;"
          />
          <span class="badge">{{ PostCard.CompanyName }}</span>
        </router-link>
      </div>
      <div class="card-content">
        <router-link
          :to="{ name: 'CompanyProfile', params: { id: PostCard.CompanyId } }"
          class="user-thumb d-inline-block"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="TechyDevs"
        >
          <img :src="FilesPath + PostCard.CompanyImage" alt="author-img" />
        </router-link>
        <h4 class="card-title pt-3">
          <router-link
            :to="{ name: 'ListingDetails', params: { id: PostCard.ListingId } }"
            >{{ PostCard.ListingHeader }}</router-link
          >
          <i
            class="la la-check-circle ml-1"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Claimed"
          ></i>
        </h4>
        <p class="card-sub">
          <a href="#"
            ><i class="la la-map-marker mr-1 text-color-2"></i
            >{{ PostCard.Location }}</a
          >
        </p>
        <ul class="listing-meta d-flex align-items-center">
          <li class="d-flex align-items-center">
            <span class="rate flex-shrink-0">4.7</span>
            <span class="rate-text">5 Ratings</span>
          </li>
          <li>
            <span
              class="price-range"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Pricey"
            >
              <strong class="font-weight-medium">$</strong>
              <strong class="font-weight-medium">$</strong>
              <strong class="font-weight-medium">$</strong>
            </span>
          </li>
          <li class="d-flex align-items-center">
            <i class="la la-music mr-1 listing-icon"></i
            ><a href="#" class="listing-cat-link">Event</a>
          </li>
        </ul>
        <ul class="info-list padding-top-20px">
          <li>
            <span class="la la-link icon"></span>
            <a href="#"> www.techydevs.com</a>
          </li>
          <li>
            <span class="la la-calendar-check-o icon"></span>
            Opened {{ PostCard.DateAdded }}
          </li>
        </ul>
      </div>
    </v-card>
    <!-- end card-item -->
  </div>
</template>

<script>
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      FilesPath: config.path,
    };
  },
  props: {
    PostCard: Object,
  },
};
</script>

<style></style>
