<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn class="mr-5" icon x-large v-on="on">
        <v-avatar color="brown" size="43">
          <img :src="FilesPath + UserImage" alt="avatar" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="white--text headline">{{ UserInitials }}</span>
          </v-avatar>
          <h3>{{ UserName }}</h3>
          <p class="caption mt-1">
            {{ UserEmail }}
          </p>
          <div v-if="HasCompany">
            <div v-if="!IsCompany">
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click.prevent="goToCompanyProfile">
                Company Profile
              </v-btn>
            </div>
            <div v-else>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click.prevent="goToUserProfile">
                User Profile
              </v-btn>
            </div>
          </div>

          <div v-if="!HasCompany">
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text @click.prevent="goToEditPage">
              Edit Account
            </v-btn>
          </div>
          <div v-else>
            <v-divider class="my-3"></v-divider>
            <v-btn depressed rounded text @click.prevent="goToEditPage">
              Edit Account
            </v-btn>
          </div>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click.prevent="LogOut">
            LogOut
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import config from "../../plugins/FileDirectory";
import api from "../../services/api";
export default {
  data: () => {
    return {
      UserInitials: "",
      FilesPath: config.path,
      HasCompany: false,
    };
  },
  props: {
    UserEmail: String,
    UserName: String,
    UserImage: String,
    IsCompany: Boolean,
  },
  methods: {
    capitalizeTheFirstLetterOfEachWord(words) {
      var separateWord = words.toLowerCase().split(" ");
      for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase();
      }
      return separateWord.join("");
    },
    goToEditPage() {
      this.$router.push({ name: "UserProfileEdit" });
    },
    goToCompanyProfile() {
      this.$router.push({ name: "CompanyHomePage" });
    },
    goToUserProfile() {
      this.$router.push({ name: "UserHomePage" });
    },
    LogOut() {
      this.$router.push({ name: "logOut" });
    },
  },
  watch: {
    UserName(UserName) {
      if (UserName != undefined)
        this.UserInitials = this.capitalizeTheFirstLetterOfEachWord(UserName);
    },
  },
  created() {
    api
      .get("/comapny/CheckCompanyLinkedToUser")
      .then((result) => {
        if (result.data.Status) {
          this.HasCompany = true;
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  },
};
</script>

<style></style>
