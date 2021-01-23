<template>
  <div>
    <section class="breadcrumb-area bg-gray user-bread-bg pt-3 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="breadcrumb-content d-flex flex-wrap align-items-end justify-content-between"
            >
              <div class="d-flex align-items-end">
                <div
                  class="user-thumb user-thumb-xl bread-thumb mr-3 flex-shrink-0"
                >
                  <img :src="FilesPath + UserData.ProfileImage" alt="author-image"  />
                </div>
                <div class="section-heading pb-3">
                  <h2 class="sec__title mb-0 font-size-28 line-height-30">
                    <span>{{ UserData.UserName }}</span>
                    <i
                      class="la la-check-circle ml-1 font-size-24 text-success"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Verified Account"
                    ></i>
                  </h2>
                  <p class="sec__desc pt-1 font-size-16 line-height-22">
                    Member Since {{ UserData.DateAdded }}
                  </p>
                  <p class="sec__desc pt-1 font-size-16 line-height-22">
                    <i class="la la-map-marker mr-1"></i
                    >{{ UserData.UserLocation }}
                  </p>
                </div>
              </div>
            </div>
            <!-- end breadcrumb-content -->
          </div>
          <!-- end col-lg-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <section class="user-detail-area padding-top-60px padding-bottom-100px">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="user-listing-detail-wrap">
              <AboutMe :UserAbout="UserData.UserAbout" />
              <!-- end block-card -->
            </div>
            <!-- end listing-detail-wrap -->
          </div>
          <!-- end col-lg-8 -->
          <div class="col-lg-4">
            <div class="sidebar">
              <UserContact
                :Phone="UserData.Phone"
                :Address="UserData.UserLocation"
                :Email="UserData.Email"
                :Website="UserData.Website"
              />
            </div>
            <!-- end sidebar -->
          </div>
          <!-- end col-lg-4 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </div>
</template>

<script>
import AboutMe from "@/components/Utility/AboutMe";
import UserContact from "@/components/Utility/UserContact";
import api from "../../services/api";
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      UserData: {},
      FilesPath: config.path,
    };
  },
  components: {
    AboutMe,
    UserContact,
  },
  beforeCreate() {
    api
      .get("/users/getUserById")
      .then((result) => {
        this.UserData = result.data.Refrence[0];
        this.UserData.DateAdded = new Date(
          this.UserData.DateAdded
        ).toLocaleString("default", { month: "short", year: "numeric" });
      })
      .catch((err) => {
        console.log(err.data);
      });
  },
};
</script>

<style></style>
