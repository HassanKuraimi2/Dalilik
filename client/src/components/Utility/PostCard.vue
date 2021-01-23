<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="800">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        :src="FilesPath + PostImage"
        lazy-src="https://picsum.photos/id/11/100/60"
        max-height="300"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-title
        ><router-link
          :to="{ name: 'ListingDetails', params: { id: PostId } }"
          ><h3>{{ CompanyName }}</h3></router-link
        ></v-card-title
      >
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            style="margin: 6px;"
          ></v-rating>

          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <read-more
          style="font-size:16px"
          more-str="read more"
          :text="PostData"
          link="#"
          less-str="read less"
          :max-chars="200"
        ></read-more>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          :disabled="disabled"
          @click.prevent="changeSavedState"
          icon
          :class="savedColor"
        >
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn @click.prevent="toggleDialog" icon :class="faivColor">
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import api from "../../services/api";
import config from "../../plugins/FileDirectory";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    savedColor: "",
    disabled: false,
    faivColor: "",
    FilesPath: config.path,
  }),
  props: {
    PostId: Number,
    PostData: String,
    PostImage: String,
    PostDate: String,
    CompanyName: String,
    Saved: Number,
    Faiv: Number,
    CompanyId: Number,
  },
  methods: {
    changeSavedState() {
      this.disabled = true;
      const status = !(this.savedColor == "saved");
      api
        .post("/users/changePostSavedState", {
          PostId: this.PostId,
          State: status,
        })
        .then((result) => {
          if (result.data.Status) {
            var message = "";
            if (status) {
              this.savedColor = "saved";
              message = "تم حفظ المنشور بنجاح";
            } else {
              this.savedColor = "";
              message = "تم إلغاء حفظ المنشور بنجاح";
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
    toggleDialog() {
      if (this.Faiv == 0) {
        this.changeFaivState();
        return;
      } else {
        this.$emit("toggle", this.PostId);
      }
    },
    changeFaivState() {
      this.disabled = true;
      api
        .post("/users/DeleteFaivoritPost", {
          PostId: this.PostId,
        })
        .then((result) => {
          if (result.data.Status) {
            this.$toast.success("تم حذف العنصر من قائمة المفضلة");
            this.faivColor = "";
            let myFaiv = this.Faiv;
            myFaiv = 1;
            this.$emit("UpdateMyFaiv", myFaiv, this.PostId);
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
  mounted() {
    if (this.Saved == 0) {
      this.savedColor = "saved";
    }
    if (this.Faiv == 0) {
      this.faivColor = "saved";
    }
  },
  watch: {
    Faiv(faive) {
      if (faive == 0) {
        this.faivColor = "saved";
      }
    },
  },
};
</script>

<style scoped>
.saved {
  color: #ff6b1a !important;
}
.c-name {
  right: -7px;
  position: relative;
  bottom: 0;
  top: -9px;
  font-weight: bold;
  font-size: 13px;
}
.date-span {
  position: relative;
  top: 10px;
  left: -154px;
}
.content {
  font-size: 16px;
}
</style>
