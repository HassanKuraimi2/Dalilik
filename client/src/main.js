import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import vSelect from "vue-select";
import VueToast from "vue-toast-notification";
import api from "./services/api";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "vue-toast-notification/dist/theme-sugar.css";
import "@/assets/sass/custom.scss";
import "@/assets/js/custom";
import vuetify from "@/plugins/vuetify";
import ReadMore from "vue-read-more";
Vue.use(VueToast);
import { store } from "./store/store";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ReadMore);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;

//router
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("local") == null) {
    localStorage.setItem("local", "en");
  }
  // set the current language for i18n.
  i18n.locale = localStorage.getItem("local");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("access_token") == null) {
      next({
        path: "/",
        params: { nextUrl: to.fullPath },
      });
    } else {
      //CheckUserAuthintication
      api
        .get("/users/CheckUserAuth")
        .then((result) => {
          if (result.data.auth == true) {
            next();
          } else {
            next({
              path: "/",
              params: { nextUrl: to.fullPath },
            });
          }
        })
        .catch(() => {
          next({
            path: "/",
            params: { nextUrl: to.fullPath },
          });
        });
    }
  } else {
    next();
  }
});

//axios
Vue.prototype.$http = api;

api.defaults.timeout = 10000;

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          //do something
          break;
        case 401:
          this.$toast.error("لا يوجد لديك صلاحية");
          break;
        case 403:
          this.$toast.error("لا يوجد لديك صلاحية");
          break;
        case 404:
          router.push({
            path: "/PageNotFound",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
        case 502:
          setTimeout(() => {
            router.replace({
              path: "/home",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
        case 500:
          //redirect to Page 500
          router.replace({
            path: "/PageNotFound",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
      }
      return Promise.reject(error.response);
    }
  }
);

//end of axios

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
