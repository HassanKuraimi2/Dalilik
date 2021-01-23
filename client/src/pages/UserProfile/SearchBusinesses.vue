<template>
  <v-container class="pt-10 mb-15">
    <v-row>
      <v-col cols="12">
        <div class="hero-heading text-center">
          <div class="section-heading">
            <h1 class="cd-headline slide search-title">
              {{ $t("search.lookFor") }}
            </h1>
          </div>
        </div>
        <!-- end hero-heading -->
        <div class="main-search-input">
          <div class="main-search-input-item w-100">
            <form action="#" class="form-box">
              <div class="form-group mb-0">
                <span class="la la-search form-icon"></span>
                <input
                  class="form-control"
                  type="search"
                  :placeholder="$t('search.palceholder')"
                  v-model="searchId"
                />
              </div>
            </form>
          </div>
          <!-- end main-search-input-item -->
          <div class="main-search-input-item">
            <button
              class="theme-btn gradient-btn border-0 w-100"
              type="submit"
              @click.prevent="searchBusiness"
            >
              <i class="la la-search mr-2"></i>{{ $t("search.search") }}
            </button>
          </div>
          <!-- end main-search-input-item -->
        </div>
        <!-- end main-search-input -->
      </v-col>
      <v-col cols="12">
        <v-tabs @change="tabChanges" v-model="tab" centered>
          <v-tab href="#tab-1">
            Businesses
          </v-tab>
          <v-tab href="#tab-2">
            Listings
          </v-tab>
          <v-tab href="#tab-3">
            Events
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="mt-10">
          <v-tab-item value="tab-1">
            <v-container class="mt-10">
              <v-row>
                <CompanyCard
                  :key="i"
                  v-for="(company, i) in Businesses"
                  :companyData="company"
                  HideFollowButton
                />
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" :key="i" v-for="(post, i) in Listing">
                  <v-lazy
                    v-model="isActive"
                    :options="{
                      threshold: 0.5,
                    }"
                    min-height="200"
                    transition="fade-transition"
                  >
                    <UserListingCard :PostCard="post" />
                  </v-lazy>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
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
          <v-btn color="blue darken-1" text @click.prevent="savePostToFaivorit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import UserListingCard from "../../components/Utility/UserListingCard";
import CompanyCard from "../../components/UserProfile/CompanyCard";
import api from "../../services/api";
export default {
  components: {
    UserListingCard,
    CompanyCard,
  },
  data: () => {
    return {
      isActive: false,
      searchId: "",
      Businesses: [],
      Listing: [],
      Events: [],
      tab: null,
      dialogm1: 0,
      dialog: false,
      Folders: [],
      CurrentPostId: 0,
    };
  },
  methods: {
    searchBusiness() {
      if (this.searchId == "") {
        this.$toast.warning("يرجى ملىء الحقل اولا", {
          position: "top",
        });
        return;
      }
      api
        .get("/businesses/UserSearchBusinesses", {
          params: {
            searchId: this.searchId,
          },
        })
        .then((result) => {
          if (result.data.Refrence.length > 0) {
            const data = result.data.Refrence;
            data.forEach(
              (d) =>
                (d.DateAdded = new Date(d.DateAdded).toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                }))
            );
            this.Businesses = Array.from(
              new Set(data.map((d) => d.CompanyId))
            ).map((id) => {
              return data.find((s) => s.CompanyId == id);
            });
            this.Listing = data;
          } else
            this.$toast.warning("لا يوجد بيانات للعرض", {
              position: "top",
            });
        })
        .catch((err) => {
          this.$toast.error(err);
        });
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
            this.Listing.filter(
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
      this.Listing.filter((p) => p.ListingId === postId)[0].Faiv = faiv;
    },
    tabChanges(value) {
      console.log(value);
    },
  },
  created() {
    this.getUserFaivorits();
  },
};
</script>

<style></style>
