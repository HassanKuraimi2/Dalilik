<template>
  <!-- ================================
       START BLOG AREA
================================= -->
  <section class="blog-area section-padding overflow-hidden">
    <div class="svg-bg svg-bg-2 gradient-bg-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="svg-gradient-2">
            <stop offset="5%" stop-color="#e8eef9" />
            <stop offset="95%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,144C560,139,640,181,720,170.7C800,160,880,96,960,96C1040,96,1120,160,1200,197.3C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <div class="section-icon gradient-icon mb-3 mx-auto">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="svg-gradient8">
                    <stop offset="5%" stop-color="#ff6b6b" />
                    <stop offset="95%" stop-color="#ffbb3d" />
                  </linearGradient>
                </defs>
                <path d="m8 10h2v2h-2z" />
                <path d="m12 10h2v2h-2z" />
                <path d="m16 10h2v2h-2z" />
                <path
                  d="m21 20h-12a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-10a1 1 0 0 0 -1-1zm-1 10h-10v-8h10z"
                />
                <path d="m26 20h4v2h-4z" />
                <path d="m32 20h16v2h-16z" />
                <path d="m26 24h22v2h-22z" />
                <path d="m26 28h10v2h-10z" />
                <path d="m38 28h6v2h-6z" />
                <path d="m8 36h14v2h-14z" />
                <path d="m8 40h14v2h-14z" />
                <path d="m8 44h14v2h-14z" />
                <path d="m8 48h14v2h-14z" />
                <path
                  d="m59 19.091a4.866 4.866 0 0 0 -5 .022v-10.113a3 3 0 0 0 -3-3h-46a3 3 0 0 0 -3 3v46a3 3 0 0 0 3 3h46a3 3 0 0 0 3-3v-17.249l6.83-11.83a5.005 5.005 0 0 0 -1.83-6.83zm-20.155 28.909h-10.845v-10h14.309l-2.639 4.572a.994.994 0 0 0 -.132.564l.212 3.3zm1.289 1.768 1-1.732 1.732 1-1 1.732a1 1 0 0 1 -1.732-1zm4.135-2.232-2.538-1.465-.154-2.4 4.846 2.8zm3.329-2.7-1.732-1 7.5-12.99-1.732-1-7.5 12.99-1.732-1 8.5-14.722 5.2 3zm4.3-19.454.5-.865 5.2 3-.5.866zm-46.898-17.382h46a1 1 0 0 1 1 1v5.032h-48v-5.032a1 1 0 0 1 1-1zm47 47a1 1 0 0 1 -1 1h-46a1 1 0 0 1 -1-1v-38.968h48v5.184l-8.536 14.784h-16.464a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h11.02a3 3 0 0 0 5.58 1.768l1.348-2.336 2.96-1.464a1 1 0 0 0 .423-.4l3.669-6.353zm7.1-30.079-.5.866-5.2-3 .5-.866a3 3 0 0 1 5.2 3z"
                />
              </svg>
            </div>
            <h2 class="sec__title">{{ $t('headlines.trendingBlogs') }}</h2>
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
        <div class="col-lg-12">
          <div class="card-carousel owl-trigger-action">
            <carousel
              :perPage="3"
              :autoplay="true"
              :autoplayTimeout="4000"
              paginationColor="rgba(51, 63, 87, 0.1)"
              paginationActiveColor="#7b68ee"
            >
              <slide :key="n" v-for="n in 10" class="p-2">
                <BlogCardItem />
              </slide>
            </carousel>
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="more-btn-box pt-5 text-center">
        <a href="blog-grid.html" class="theme-btn gradient-btn"
          ><i class="la la-list-alt mr-2"></i>{{ $t('links.viewBlogs') }}</a
        >
      </div>
    </div>
    <!-- end container -->
  </section>
  <!-- end blog-area -->
  <!-- ================================
       START BLOG AREA
================================= -->
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import BlogCardItem from "../Utility/BlogCardItem";
export default {
  components: { Carousel, Slide, BlogCardItem },
};
</script>

<style scoped>
.blog-area {
  padding-top: 0;
}
</style>
