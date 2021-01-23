<template>
  <div class="col-lg-6">
    <div class="block-card dashboard-card mb-4">
      <div class="block-card-header">
        <h2 class="widget-title pb-0">Profile Details</h2>
      </div>
      <div class="block-card-body">
        <ImageFileUploader v-model="avatar">
          <div slot="activator">
            <v-avatar
              size="150px"
              v-ripple
              v-if="!avatar"
              class="grey lighten-3 mb-3"
            >
              <span>Click to add avatar</span>
            </v-avatar>
            <v-avatar size="150px" v-ripple v-else class="mb-3">
              <img :src="avatar.imageURL" alt="avatar" />
            </v-avatar>
          </div>
        </ImageFileUploader>
        <v-slide-x-transition>
          <div v-if="avatar && saved == false">
            <v-btn class="primary" @click="uploadImage" :loading="saving"
              >Save Avatar</v-btn
            >
          </div>
        </v-slide-x-transition>
        <!-- end edit-profile-photo -->
        <form
          @submit.prevent="UpdateUser"
          class="form-box row pt-4 MultiFile-intercepted"
        >
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Your Name</label>
              <div class="form-group">
                <span class="la la-user form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  v-model="UserData.UserName"
                  required
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Your Email</label>
              <div class="form-group">
                <span class="la la-envelope-o form-icon"></span>
                <input
                  class="form-control"
                  type="email"
                  v-model="UserData.Email"
                  required
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Phone Number</label>
              <div class="form-group">
                <span class="la la-phone form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  v-model="UserData.Phone"
                  required
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Address</label>
              <div class="form-group">
                <span class="la la-map-marker form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  v-model="UserData.UserLocation"
                  required
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Website</label>
              <div class="form-group">
                <span class="la la-globe form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  v-model="UserData.Website"
                  required
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Notes</label>
              <div class="form-group">
                <span class="la la-pencil form-icon"></span>
                <textarea
                  class="message-control form-control"
                  v-model="UserData.UserAbout"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Facebook</label>
              <div class="form-group">
                <span class="la la-facebook form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="www.facebook.com"
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Twitter</label>
              <div class="form-group">
                <span class="la la-twitter form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  name="text"
                  placeholder="www.twitter.com"
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="input-box">
              <label class="label-text">Instagram</label>
              <div class="form-group">
                <span class="la la-instagram form-icon"></span>
                <input
                  class="form-control"
                  type="text"
                  name="text"
                  placeholder="www.instagram.com"
                />
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-12">
            <div class="btn-box pt-1">
              <button class="theme-btn gradient-btn border-0">
                Save Changes<i class="la la-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <!-- end col-lg-12 -->
        </form>
      </div>
      <!-- end block-card-body -->
    </div>
    <!-- end block-card -->
  </div>
  <!-- end col-lg-6 -->
</template>

<script>
import api from "../../services/api";
import ImageFileUploader from "./ImageFileUploader";
import config from "../../plugins/FileDirectory";
export default {
  components: {
    ImageFileUploader,
  },
  data: () => {
    return {
      UserData: {},
      avatar: {},
      saving: false,
      saved: false,
    };
  },
  beforeCreate() {
    api
      .get("/users/getUserById")
      .then((result) => {
        this.UserData = result.data.Refrence[0];
        this.UserData.DateAdded = new Date(
          this.UserData.DateAdded
        ).toLocaleString("default", { month: "short", year: "numeric" });
        this.avatar.imageURL = config.path + this.UserData.ProfileImage;
        this.saved = true;
      })
      .catch(() => {
        this.$toast.error("حصل خطأ اثناء محاولة جلب البيانات");
      });
  },
  methods: {
    UpdateUser() {
      api
        .post("/users/updateUser", {
          UserName: this.UserData.UserName,
          Email: this.UserData.Email,
          UserAbout: this.UserData.UserAbout,
          UserLocation: this.UserData.UserLocation,
          Website: this.UserData.Website,
          Phone: this.UserData.Phone,
        })
        .then((result) => {
          if (result.data.Status)
            this.$toast.success("تم تعديل المستخدم بنجاح");
          else this.$toast.console.error("حصل خطأ اثناء محاولة تعديل المستخدم");
        })
        .catch(() => {
          this.$toast.console.error("حصل خطأ اثناء محاولة تعديل المستخدم");
        });
    },
    uploadImage() {
      this.saving = true;
      setTimeout(() => this.savedAvatar(), 1000);
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
      api
        .post("/upload", this.avatar.formData)
        .then((result) => {
          api
            .post("/users/UpdateUserImage", {
              ProfileImage: result.data.file.filename,
            })
            .then((res) => {
              if (res.data.Status) {
                this.$toast.success(res.data.Description);
              }
            })
            .catch((error) => {
              console.log(error.data);
            });
        })
        .catch((error) => {
          this.$toast.warning(error.data.Message);
        });
    },
  },
  watch: {
    avatar: {
      handler: function() {
        this.saved = false;
      },
      deep: true,
    },
  },
};
</script>

<style></style>
