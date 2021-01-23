<template>
  <v-col cols="12" lg="4" class="responsive-column">
    <v-card class="user-card">
      <div class="user-bio margin-bottom-30px">
        <router-link
          :to="{
            name: 'CompanyProfile',
            params: { id: companyData.CompanyId },
          }"
          class="d-flex align-items-center"
        >
          <div class="user-thumb user-thumb-md mr-3">
            <img :src="FilesPath + companyData.CompanyImage" alt="author-image" />
          </div>
          <div class="user-inner-bio">
            <h4 class="author__title">
              {{ companyData.CompanyName }}
            </h4>
            <p class="author__meta">{{ companyData.Location }}</p>
          </div>
        </router-link>
      </div>
      <!-- end user-bio -->
      <div class="user-module text-center">
        <ul
          class="user-module-list d-flex align-items-center justify-content-between"
        >
          <li class="flex-grow-1">
            <span class="user-module-text">Listings</span
            >{{ companyData.Listings }}
          </li>
          <li class="flex-grow-1">
            <span class="user-module-text">Events</span>{{ companyData.Events }}
          </li>
        </ul>
      </div>
      <!-- end user-module -->
      <div class="btn-box padding-top-35px" v-if="!HideFollowButton">
        <button
          @click.prevent="unFollow"
          :disabled="disabled"
          type="button"
          class="theme-btn btn-transparent border-0 w-100"
        >
          <i class="la mr-2" :class="FollowStatusClass"></i>{{ FollowStatus }}
        </button>
      </div>
      <!-- end btn-box -->
    </v-card>
  </v-col>
</template>

<script>
import api from "../../services/api";
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      FollowStatus: "UnFollow",
      FollowStatusClass: "la-minus",
      disabled: false,
      FilesPath: config.path,
    };
  },
  props: {
    companyData: Object,
    HideFollowButton: Boolean,
  },
  methods: {
    unFollow() {
      this.disabled = true;
      const status = !(this.FollowStatus == "UnFollow");
      api
        .post("/users/changeCompanyFollowState", {
          CompanyId: this.companyData.CompanyId,
          State: status,
        })
        .then((result) => {
          if (result.data.Status) {
            var message = "";
            if (!status) {
              this.FollowStatus = "Follow";
              this.FollowStatusClass = "la-plus";
              message = "تم إلغاء متابعه الشركة بنجاح";
            } else {
              this.FollowStatus = "UnFollow";
              this.FollowStatusClass = "la-minus";
              message = "تم متابعه الشركة بنجاح";
            }
            this.$toast.success(message);
          }
        })
        .catch((error) => {
          this.$toast.error(error.data.Description);
        })
        .finally(() => {
          this.disabled = false;
        });
    },
  },
};
</script>

<style></style>
