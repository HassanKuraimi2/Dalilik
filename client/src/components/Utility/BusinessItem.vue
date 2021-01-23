<template>
  <div class="col-lg-4 responsive-column">
    <div class="card-item">
      <div class="card-image">
        <a href="listing-details.html" class="d-block">
          <img src="@/assets/images/img1.jpg" class="card__img lazy" alt="" />
        </a>
      </div>
      <div class="card-content">
        <a
          href="#"
          class="user-thumb d-inline-block"
          data-toggle="tooltip"
          data-placement="top"
          title="TechyDevs"
        >
          <img src="@/assets/images/photoshop.png" alt="author-img" />
        </a>
        <h4 class="card-title pt-3">
          <a href="listing-details.html">{{ BusinessInfo.BusinessName }}</a>
          <i
            class="la la-check-circle ml-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Claimed"
          ></i>
        </h4>
        <p class="card-sub">
          <a href="#"
            ><i class="la la-map-marker mr-1 text-color-2"></i
            >{{ BusinessInfo.Location }}</a
          >
        </p>
        <ul class="listing-meta d-flex align-items-center">
          <li class="d-flex align-items-center">
            <span class="rate flex-shrink-0">4.7</span>
            <span class="rate-text">5 reviews</span>
          </li>
          <li>
            <span
              class="price-range"
              data-toggle="tooltip"
              data-placement="top"
              title="Pricey"
            >
              <strong class="font-weight-medium">$</strong>
              <strong class="font-weight-medium">$</strong>
              <strong class="font-weight-medium">$</strong>
            </span>
          </li>
          <li class="d-flex align-items-center">
            <i class="la la-cutlery mr-1 listing-icon"></i
            ><a href="#" class="listing-cat-link">{{
              BusinessInfo.CatigoryName
            }}</a>
          </li>
        </ul>
        <ul class="info-list padding-top-20px">
          <li>
            <span class="la la-calendar-check-o icon"></span>
            Opened a few days ago
          </li>
        </ul>
      </div>
    </div>
    <!-- end card-item -->
  </div>
</template>

<script>
export default {
  props: {
    BusinessInfo: {
      type: Object,
      default: () => {
        return {
          BusinessName: "CIS",
          CatigoryName: "Real Estate",
          Location: "Sana'a Yemen",
        };
      },
    },
  },
};
</script>

<style></style>
