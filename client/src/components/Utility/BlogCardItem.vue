<template>
  <div class="card-item card-item-layout-2">
    <div class="card-image">
      <a href="blog-single.html" class="d-block">
        <img src="@/assets/images/img10.jpg" class="card__img" alt="blog image" />
        <span class="badge">January 15, 2020</span>
      </a>
      <div class="post-share">
        <span class="la la-share-alt share-icon"></span>
        <div class="post-share-social">
          <a href="#" class="post-share-social-icon"
            ><i class="lab la-facebook-f"></i
          ></a>
          <a href="#" class="post-share-social-icon"
            ><i class="lab la-twitter"></i
          ></a>
          <a href="#" class="post-share-social-icon"
            ><i class="lab la-instagram"></i
          ></a>
        </div>
      </div>
    </div>
    <!-- end card-image -->
    <div class="card-content">
      <a
        href="#"
        class="user-thumb d-inline-block"
        data-toggle="tooltip"
        data-placement="top"
        title="Kamran Adi"
      >
        <img src="@/assets/images/avatar-img.jpg" alt="author-img" />
      </a>
      <ul class="listing-meta d-flex justify-content-center align-items-center">
        <li>
          <a href="#" class="listing-cat-link">Travel</a>,
          <a href="#" class="listing-cat-link">News</a>
        </li>
      </ul>
      <h4 class="card-title pt-2">
        <a href="blog-single.html">Five Of Nature’s Swimming Pools</a>
      </h4>
      <p class="card-sub mt-3">
        Have you ever seen an elephant fly? Early Wednesday morning, Walt Disney
        Studios Motion Pictures released
      </p>
      <ul
        class="listing-action d-flex justify-content-around align-items-center border-top border-top-color mt-4 pt-4"
      >
        <li class="pill"><i class="la la-share mr-1"></i>275</li>
        <li class="pill"><i class="la la-eye mr-1"></i>319</li>
        <li class="pill"><i class="la la-comment mr-1"></i>24</li>
      </ul>
    </div>
    <!-- end card-content -->
  </div>
  <!-- end card-item -->
</template>

<script>
export default {};
</script>

<style></style>
