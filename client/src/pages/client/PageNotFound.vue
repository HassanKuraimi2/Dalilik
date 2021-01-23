<template>
  <section class="error-area section-padding position-relative">
    <span class="circle-bg circle-bg-1 position-absolute"></span>
    <span class="circle-bg circle-bg-2 position-absolute"></span>
    <span class="circle-bg circle-bg-3 position-absolute"></span>
    <span class="circle-bg circle-bg-4 position-absolute"></span>
    <span class="circle-bg circle-bg-5 position-absolute"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="error-content text-center">
            <img
              src="@/assets/images/404-img.png"
              alt="error-image"
              class="w-100 lazy"
              style=""
            />
            <div class="section-heading padding-top-30px">
              <h3 class="sec__title">Oops! That page can’t be found.</h3>
              <p class="sec__desc">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
            </div>
            <div
              class="icon-element icon-element-white mx-auto shadow-sm after-none font-size-20"
            >
              Or
            </div>
            <div class="btn-box pt-4">
              <router-link :to="{ name: 'home' }" class="theme-btn gradient-btn"
                ><i class="la la-mail-reply mr-2"></i> Back to Home</router-link
              >
            </div>
          </div>
          <!-- end error-content -->
        </div>
        <!-- end col-lg-6 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
export default {};
</script>

<style></style>
