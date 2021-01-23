<template>
  <section
    class="footer-area bg-dark pattern-bg before-none padding-top-20px padding-bottom-30px"
  >
    <div class="container">
      <div class="section-block-2 margin-top-30px margin-bottom-40px"></div>
      <div class="row">
        <div class="col-lg-3 responsive-column">
          <div class="footer-item footer-item-2">
            <div class="footer-logo">
              <a href="/" class="foot-logo"
                ><img src="@/assets/images/logo.png" alt="logo"
              /></a>
            </div>
            <!-- end footer-logo -->
            <ul class="social-profile social-profile-colored">
              <li>
                <a href="#" class="facebook-bg"
                  ><i class="lab la-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="#" class="twitter-bg"
                  ><i class="lab la-twitter"></i
                ></a>
              </li>
              <li>
                <a href="#" class="instagram-bg"
                  ><i class="lab la-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
          <!-- end footer-item -->
        </div>
        <!-- end col-lg-3 -->
        <div class="col-lg-3 responsive-column">
          <div class="footer-item footer-item-2">
            <router-link :to="{ name: 'contact' }"
              ><h4 class="text-white">Contact</h4></router-link
            >
            <router-link :to="{ name: 'about' }"
              ><h4 class="text-white">About</h4></router-link
            >
            <router-link :to="{ name: 'faq' }"><h4 class="text-white">FAQ</h4></router-link>
          </div>
          <!-- end footer-item -->
        </div>
        <!-- end col-lg-3 -->
        <div class="col-lg-3 responsive-column">
          <div class="footer-item footer-item-2">
            <a href="#"><h4 class="text-white">Terms & Condations</h4></a>
            <a href="#"><h4 class="text-white">Privacy Policy</h4></a>
          </div>
          <!-- end footer-item -->
        </div>
        <!-- end col-lg-3 -->
        <div class="col-lg-3 responsive-column">
          <div class="footer-item footer-item-2">
            <a href="#"><h4 class="text-white">Sign In/Up</h4></a>
            <a href="#"><h4 class="text-white">Add Business</h4></a>
          </div>
          <!-- end footer-item -->
        </div>
        <!-- end col-lg-3 -->
      </div>
      <!-- end row -->
      <div class="section-block-2 margin-top-30px margin-bottom-30px"></div>
      <div class="row">
        <div class="col-lg-12">
          <div class="copy-right">
            <h4 class="text-white text-center mb-3">
              Copyright © Dalilik
              {{ new Date().getFullYear() }}. All Rights Resived
            </h4>
            <h6 class="text-white text-center">
              Powerd By
              <a href="#" class="text-white">Contact For information System</a>
            </h6>
          </div>
          <!-- end copy-right -->
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-dark {
  background-color: #9ba5b2 !important;
}
.social-profile li a {
  margin-left: 5px;
}
</style>
