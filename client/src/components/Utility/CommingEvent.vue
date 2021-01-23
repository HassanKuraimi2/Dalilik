<template>
  <div class="col-lg-4 responsive-column">
    <div class="card-item card-item-layout-4">
      <div class="card-image">
        <a href="listing-details.html" class="d-block">
          <img src="@/assets/images/img22.jpg" class="card__img lazy" alt="" style="" />
          <span class="badge badge-transparent">Ongoing</span>
        </a>
        <div class="card-content">
          <h4 class="card-title">
            <a href="listing-details.html">London Grammar live</a>
          </h4>
          <ul class="info-list pt-2">
            <li>
              <span class="la la-map-marker mr-2 text-white"></span
              ><a href="#">Los Angeles, United States</a>
            </li>
            <li>
              <span class="la la-calendar mr-2 text-white"></span>September 20,
              2020 12:00 AM - September 22, 2020 12:00 AM
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center p-4">
        <div class="listing-meta pt-0">
          <span class="user-thumb user-thumb-sm d-inline-block mr-1">
            <img src="@/assets/images/listing-logo.jpg" alt="author-img" />
          </span>
          <a href="#" class="listing-cat-link">TechyDevs</a>
        </div>
        <ul class="listing-action d-flex align-items-center">
          <li>
            <a
              href="#"
              class="pill mr-2"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Go to map"
              ><i class="la la-map-marker"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              class="pill"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Bookmark"
              ><i class="la la-heart-o"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end card-item -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
