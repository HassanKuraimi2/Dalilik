import api from "../services/api";
const state = {
  newBusinesses: [],
};

const actions = {
  async getNewlyAddedBusinesses({ commit }) {
    api
      .get("/businesses/getAllBusinesses")
      .then((response) => {
        commit("setNewlyAddedBusinesses", response.data.Refrence);
      }).catch(() =>{
        return;
      });
  },
};

const getters = {
  NewlyBusinessesList: (state) => state.newBusinesses,
};

const mutations = {
  setNewlyAddedBusinesses: (state, newBusinesses) =>
    (state.newBusinesses = newBusinesses),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
