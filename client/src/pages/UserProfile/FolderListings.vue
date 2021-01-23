<template>
  <v-container class="pt-10">
    <v-row>
      <v-col cols="12">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
          :key="i"
          v-for="(post, i) in UserPosts"
        >
          <PostCard
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
      </v-col>
      <v-col>
        <v-col v-if="bottom" cols="12">
          <h1 class="no-more-listing ">No More Listing</h1>
        </v-col>
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
import PostCard from "@/components/Utility/PostCard";
import api from "../../services/api";
export default {
  data: () => ({
    UserPosts: [],
    isActive: false,
    bottom: false,
    offset: 0,
    dialogm1: 0,
    dialog: false,
    Folders: [],
    CurrentPostId: 0,
  }),
  components: {
    PostCard,
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addPosts();
    this.getUserFaivorits();
  },
  methods: {
    addPosts() {
      api
        .get("/users/getUserFaivoritPosts", {
          params: {
            offset: this.offset,
            FolderId: this.$route.params.id,
          },
        })
        .then((result) => {
          this.UserPosts.push(...result.data.Refrence);
          
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
            this.UserPosts.filter(
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
      this.UserPosts.filter((p) => p.ListingId === postId)[0].Faiv = faiv;
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.offset += 5;
        this.addPosts();
      }
    },
  },
};
</script>

<style scoped>
.load-progress {
  width: 100% !important;
  margin-bottom: 200px;
}
</style>
