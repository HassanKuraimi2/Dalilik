<template>
  <div>
    <v-app>
      <v-app-bar app color="primary" dark elevation="0">
        <v-app-bar-nav-icon
          @click.stop="sidebarMenu = !sidebarMenu"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <UserAvatar
          :UserImage="UserData.CompanyImage"
          :UserEmail="UserData.CompanyEmail"
          :UserName="UserData.CompanyName"
          IsCompany
        />
        <Notifications v-if="false" />
      </v-app-bar>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
      >
        <v-list dense color="primary" dark>
          <v-list-item>
            <v-list-item-action>
              <v-icon @click.stop="sidebarMenu = !sidebarMenu"
                >mdi-chevron-left</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-img src="@/assets/images/logo.png" />
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list-item class="px-2" @click="toggleMini = !toggleMini">
          <v-list-item-avatar>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content class="text-truncate">
            {{ UserData.CompanyName }}
          </v-list-item-content>
          <v-btn icon small>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item link to="/dashboard/CompanyProfile/Listings">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-list-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Listings</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/dashboard/CompanyProfile/Events">
            <v-list-item-icon>
              <v-icon>mdi-calendar-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/dashboard/CompanyProfile/Blogs">
            <v-list-item-icon>
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Blogs</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-chat</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Chat</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-library</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Advertisments</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-youtube-subscription</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Subscriptions</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/logOut">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>

          <v-toolbar flat height="72">
            <v-switch
              v-model="$vuetify.theme.dark"
              :label="buttonText"
            ></v-switch>
          </v-toolbar>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <transition name="fade">
          <router-view name="CompanyProfile" />
        </transition>
      </v-main>
      <v-footer fixed>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Dalilik</strong>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import "vuetify/dist/vuetify.min.css";
import UserAvatar from "../components/Utility/UserAvatar";
import Notifications from "../components/Utility/Notifications";
import api from "../services/api";
export default {
  components: {
    UserAvatar,
    Notifications,
  },
  computed: {
    sideMini() {
      console.log(this.$vuetify.breakpoint.smAndDown);
      return this.$vuetify.breakpoint.smAndDown;
    },
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
    buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    },
  },
  data: () => ({
    sidebarMenu: true,
    toggleMini: false,
    UserData: {},
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  beforeCreate() {
    api
      .get("/company/GetCompanyByRoutedId")
      .then((result) => {
        if (result.data.Status) {
          this.UserData = result.data.Refrence[0];
          this.UserData.DateAdded = new Date(
            this.UserData.DateAdded
          ).toLocaleString("default", { month: "short", year: "numeric" });
        } else {
          this.$toast.error(result.data.Description);
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.theme--light.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--light.v-application ::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.theme--light.v-application ::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.theme--light.v-application ::-webkit-scrollbar-thumb:hover {
  background: black;
}

.theme--dark.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--dark.v-application ::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb:hover {
  background: white;
}
h3 {
  color: #ff6b1a;
}
.v-list--dense .v-list-item .v-list-item__content,
.v-list-item--dense .v-list-item__content {
  padding: 0 0;
}
</style>
