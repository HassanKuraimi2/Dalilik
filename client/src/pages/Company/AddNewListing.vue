<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col>
        <AddListingForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddListingForm from "../../components/Company/AddListingForm";
export default {
  components: {
    AddListingForm,
  },
};
</script>

<style></style>
