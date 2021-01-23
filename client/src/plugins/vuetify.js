import Vue from "vue";
import Vuetify from "vuetify";
const opts = {
  rtl: false,
  theme: {
    themes: {
      light: {
        primary: "#5e6884", // #E53935
        secondary: "#ff6b1a", // #FFCDD2
        accent: "#ff6b1a", // #3F51B5
      },
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
};
Vue.use(Vuetify);

export default new Vuetify(opts);
