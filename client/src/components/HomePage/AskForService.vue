<template>
  <section class="cat-area position-relative section--padding overflow-hidden">
    <span class="circle-bg position-absolute circle-bg-1"></span>
    <span class="circle-bg position-absolute circle-bg-2"></span>
    <span class="circle-bg position-absolute circle-bg-3"></span>
    <div class="svg-bg svg-bg-3 gradient-bg-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 118"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="svg-gradient-4">
            <stop offset="15%" stop-color="#F8F9FA"></stop>
            <stop offset="95%" stop-color="#b9caf1"></stop>
          </linearGradient>
        </defs>
        <path
          opacity="0.2"
          d="M0,112 C400.666667,36 800.666667,-0.666666667 1200,2 C1200,41.3333333 1200,80 1200,118 L0,118 L0,112 Z"
        ></path>
      </svg>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="card-heading-content mt-0">
            <div class="section-heading">
              <h2 class="sec__title">
                {{ $t("headlines.askForService") }}
              </h2>
              <p class="sec__desc">
                Explore most popular destination and places, Morbi convallis
                bibendum urna ut viverra. Maecenas, quis consequat libero, a
                feugiat eros.
              </p>
              <br />
              <div class="comments-list reviews-list">
                <div class="comment">
                  <div class="user-thumb user-thumb-lg flex-shrink-0">
                    <img
                      src="@/assets/images/avatar-img.jpg"
                      alt="author-img"
                    />
                  </div>
                  <div class="comment-body">
                    <div
                      class="meta-data d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h4 class="comment__title">
                          <span>Tell Us More About Your Requirments</span>
                        </h4>
                      </div>
                    </div>
                    <p class="comment-desc mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi at aut consequuntur debitis dicta dolor ducimus
                      eaque eum, illo ipsa labore,
                    </p>
                  </div>
                </div>
                <!-- end comment -->
                <div class="comment">
                  <div class="user-thumb user-thumb-lg flex-shrink-0">
                    <img
                      src="@/assets/images/avatar-img.jpg"
                      alt="author-img"
                    />
                  </div>
                  <div class="comment-body">
                    <div
                      class="meta-data d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h4 class="comment__title">
                          <span>We Connect With the Right Service Providr</span>
                        </h4>
                      </div>
                    </div>
                    <p class="comment-desc mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi at aut consequuntur debitis dicta dolor ducimus
                      eaque eum, illo ipsa labore,
                    </p>
                  </div>
                </div>
                <!-- end comment -->
                <div class="comment">
                  <div class="user-thumb user-thumb-lg flex-shrink-0">
                    <img
                      src="@/assets/images/avatar-img.jpg"
                      alt="author-img"
                    />
                  </div>
                  <div class="comment-body">
                    <div
                      class="meta-data d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h4 class="comment__title">
                          <span>Happy with Our Service</span>
                        </h4>
                      </div>
                    </div>
                    <p class="comment-desc mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi at aut consequuntur debitis dicta dolor ducimus
                      eaque eum, illo ipsa labore,
                    </p>
                  </div>
                </div>
                <!-- end comment -->
              </div>
            </div>
            <!-- end section-heading -->
          </div>
        </div>
        <!-- end col-lg-5 -->
        <div class="col-lg-5">
          <div class="sidebar-widget">
            <h3 class="widget-title">Get in Touch</h3>
            <div class="stroke-shape mb-4"></div>
            <form @submit.prevent="MessageSubmitted" class="form-box">
              <div class="input-box">
                <label class="label-text">Your Name</label>
                <div class="form-group">
                  <span class="la la-user form-icon"></span>
                  <input
                    class="form-control"
                    type="text"
                    name="text"
                    placeholder="Your name"
                    v-model="UserName"
                    required
                  />
                </div>
              </div>
              <div class="input-box">
                <label class="label-text">Your Email</label>
                <div class="form-group">
                  <span class="la la-envelope form-icon"></span>
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    v-model="Email"
                    required
                  />
                </div>
              </div>
              <div class="input-box">
                <label class="label-text">Message</label>
                <div class="form-group">
                  <span class="la la-pencil form-icon"></span>
                  <textarea
                    class="message-control form-control"
                    name="message"
                    placeholder="Write Message"
                    v-model="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="btn-box">
                <button
                type="submit"
                  class="theme-btn gradient-btn w-100 border-0"
                >
                  {{ $t("links.sendMsg") }}
                  <i class="la la-arrow-right ml-1"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- end col-lg-7 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import api from "../../services/api";
export default {
  data() {
    return {
      UserName: "",
      Email: "",
      Message: "",
    };
  },
  methods: {
    MessageSubmitted() {
      api
        .post("/contact/CreateUserMessage", {
          userName: this.UserName,
          email: this.Email,
          message: this.Message,
        })
        .then((response) => {
          this.UserName = null;
          this.Email = null;
          this.Message = null;
          this.$toast.success(response.data.Description);
        })
        .catch((err) => {
          this.$toast.error(err.data.Description);
        });
    },
  }
};
</script>

<style></style>
