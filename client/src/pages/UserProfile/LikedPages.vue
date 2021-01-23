<template>
  <v-container class="mt-10">
    <v-row>
      <CompanyCard :key="i" v-for="(company , i) in companyInfo" :companyData="company" />
    </v-row>
  </v-container>
</template>

<script>
import CompanyCard from "../../components/UserProfile/CompanyCard";
import api from "../../services/api";
export default {
  data: () => {
    return {
      companyInfo: [],
    };
  },
  components: { CompanyCard },
  beforeCreate() {
    api
      .get("/users/getUserLikedPages")
      .then((result) => {
        this.companyInfo = result.data.Refrence;
      })
      .catch((error) => {
        this.$toast.error(error.data.Description);
      });
  },
};
</script>

<style></style>
