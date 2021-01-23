<template>
  <div>
    <div class="notFound" v-if="CompanyData == undefined">
      <h1>No Company Found</h1>
    </div>
    <div v-else>
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
                    <img
                      :src="FilesPath + CompanyData.CompanyImage"
                      alt="author-image"
                    />
                  </div>
                  <div class="section-heading pb-3">
                    <h2 class="sec__title mb-0 font-size-28 line-height-30">
                      <span>{{ CompanyData.CompanyName }}</span>
                      <i
                        class="la la-check-circle ml-1 font-size-24 text-success"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Verified Account"
                      ></i>
                    </h2>
                    <p class="sec__desc pt-1 font-size-16 line-height-22">
                      Member Since {{ CompanyData.DateAdded }}
                    </p>
                    <p class="sec__desc pt-1 font-size-16 line-height-22">
                      <i class="la la-map-marker mr-1"></i
                      >{{ CompanyData.Location }}
                    </p>
                  </div>
                </div>
                <div class="btn-box bread-btns d-flex align-items-center pb-3">
                  <span class="btn-gray mr-2"
                    ><i class="la la-file-text-o mr-1"></i
                    ><span class="text-color font-weight-semi-bold mr-1"
                      >12</span
                    >Events</span
                  >
                  <span class="btn-gray mr-2"
                    ><i class="la la-star-o mr-1"></i
                    ><span class="text-color font-weight-semi-bold mr-1">{{
                      CompanyData.ListingCount
                    }}</span
                    >Listing</span
                  >
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
                <AboutMe :UserAbout="CompanyData.Description" />
                <!-- end block-card -->
                <div class="section-heading pb-1">
                  <h2 class="sec__title font-size-24 line-height-30">
                    {{ CompanyData.CompanyName }} Listings
                  </h2>
                </div>
                <!-- end section-heading -->
                <div class="row pb-3">
                  <v-lazy
                    v-model="isActive"
                    :options="{
                      threshold: 0.5,
                    }"
                    min-height="200"
                    transition="fade-transition"
                    :key="i"
                    v-for="(post, i) in CompanyPosts"
                  >
                    <PostCard
                      ref="child"
                      :PostId="post.ListingId"
                      :PostData="post.ListingData"
                      :PostDate="post.DateAdded"
                      :CompanyName="post.CompanyName"
                      :PostImage="post.ListingImage"
                      :Saved="post.Saved"
                      :Faiv="post.Faiv"
                      :CompanyId="post.CompanyId"
                      @toggle="toggleDialog"
                      @UpdateMyFaiv="updateFaiv"
                    />
                  </v-lazy>
                </div>
                <!-- end row -->
              </div>
              <!-- end listing-detail-wrap -->
            </div>
            <!-- end col-lg-8 -->
            <div class="col-lg-4">
              <div class="sidebar">
                <!-- <UserContact
                :Phone="CompanyData.Phone"
                :Address="CompanyData.UserLocation"
                :Email="CompanyData.Email"
                :Website="CompanyData.Website"
              /> -->
                <v-card class="mx-auto sidebar-widget">
                  <h3 class="widget-title">Get in Touch</h3>
                  <div class="stroke-shape mb-4"></div>
                  <form @submit.prevent="SendMessage" class="form-box">
                    <div class="input-box">
                      <label class="label-text">Message</label>
                      <span class="la la-pencil form-icon"></span>
                      <v-textarea
                        v-model="UserMessage"
                        solo
                        placeholder="Write Message"
                      ></v-textarea>
                    </div>
                    <div class="btn-box">
                      <button
                        type="submit"
                        class="theme-btn gradient-btn w-100 border-0"
                      >
                        Send Message <i class="la la-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </form>
                </v-card>
              </div>
              <!-- end sidebar -->
            </div>
            <!-- end col-lg-4 -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>
      <v-dialog v-model="dialog" scrollable max-width="400px">
        <v-card>
          <v-card-title>Select Folder</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 200px;">
            <v-radio-group v-model="dialogm1" column>
              <v-radio
                :key="i"
                v-for="(folder, i) in Folders"
                :label="folder.FloderName"
                :value="folder.id"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click.prevent="savePostToFaivorit"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import AboutMe from "@/components/Utility/AboutMe";
import PostCard from "@/components/Utility/PostCard";
import api from "../../services/api";
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      CompanyData: {},
      CompanyPosts: [],
      bottom: false,
      offset: 0,
      FilesPath: config.path,
      dialogm1: 0,
      dialog: false,
      Folders: [],
      CurrentPostId: 0,
      isActive: false,
      UserMessage: "",
      CurrentUserId: 0,
      FollowStatus: "UnFollow",
      FollowStatusClass: "la-minus",
      disabled: false,
    };
  },
  components: {
    AboutMe,
    PostCard,
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.InitializeCompanyData();
    this.InitializeCompanyPosts();
    this.getUserFaivorits();
  },
  methods: {
    InitializeCompanyData() {
      api
        .get("/company/GetCompanyById", {
          params: {
            CompanyId: this.$route.params.id,
          },
        })
        .then((result) => {
          this.CompanyData = result.data.Refrence[0];
          this.CompanyData.DateAdded = new Date(
            this.CompanyData.DateAdded
          ).toLocaleString("default", { month: "short", year: "numeric" });
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    InitializeCompanyPosts() {
      api
        .get("/company/GetCompanyPosts", {
          params: {
            CompanyId: this.$route.params.id,
            offset: this.offset,
          },
        })
        .then((result) => {
          this.CompanyPosts.push(...result.data.Refrence);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    bottomVisible() {
      const scrollY = window.scrollY + 2000;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    toggleDialog(value) {
      this.dialog = !this.dialog;
      this.CurrentPostId = value;
    },
    getUserFaivorits() {
      api
        .get("/users/getUserFaivoritFolders")
        .then((result) => {
          this.Folders = result.data.Refrence;
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    savePostToFaivorit() {
      if (this.dialogm1 == 0 || this.CurrentPostId == 0) {
        this.$toast.warning("يرجى تحديد الملف اولا قبل الحفظ");
        return;
      }
      api
        .post("/users/SavePostToFaivorit", {
          FolderId: this.dialogm1,
          PostId: this.CurrentPostId,
        })
        .then((result) => {
          if (result.data.Status) {
            this.$toast.success("تم حفظ العنصر في المفضلة");
            this.CompanyPosts.filter(
              (p) => p.ListingId === this.CurrentPostId
            )[0].Faiv = 0;
            this.dialogm1 = 0;
            this.CurrentPostId = 0;
            this.dialog = false;
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    updateFaiv(faiv, postId) {
      this.CompanyPosts.filter((p) => p.ListingId === postId)[0].Faiv = faiv;
    },
    SendMessage() {
      if (this.UserMessage.length > 0) {
        api
          .post("/users/SendChatMessage", {
            IsCompany: true,
            UserIdTo: this.$route.params.id,
            Message: this.UserMessage,
          })
          .then((result) => {
            if (result.data.Status) {
              this.$toast.success("تم إرسال الرسالة بنجاح");
              this.UserMessage = "";
            } else {
              this.$toast.error("حصل خطأ اثناء محاولة إرسال الرسالة");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.offset += 5;
        this.InitializeCompanyPosts();
      }
    },
  },
};
</script>

<style scoped>
.notFound {
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
}
</style>
