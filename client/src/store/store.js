import Vue from "vue";
import Vuex from "vuex";
import { state } from "./state";
import { getters } from "./getters";
import { modules } from "./modules";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: state,
  getters: getters,
  modules: modules,
});
