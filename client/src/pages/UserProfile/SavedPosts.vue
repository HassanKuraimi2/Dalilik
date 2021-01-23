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
            :Saved="post.Saved"
          />
        </v-lazy>
      </v-col>
      <v-col>
        <v-progress-circular
          v-if="bottom"
          :size="70"
          :width="7"
          color="purple"
          indeterminate
          class="load-progress"
        ></v-progress-circular>
      </v-col>
    </v-row>
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
  }),
  components: {
    PostCard,
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addPosts();
  },
  methods: {
    addPosts() {
      api
        .get("/users/getUserSavedPosts", {
          params: {
            offset: this.offset,
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
