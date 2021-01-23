<template>
  <v-col cols="12" lg="4">
    <v-card class="card-item">
      <div class="card-content">
        <h4 class="card-title pt-3">
          <router-link
            :to="{
              name: 'UserFolderListings',
              params: { id: FolderObject.id },
            }"
          >
            {{ FolderObject.FloderName }}
          </router-link>
        </h4>
        <p class="card-sub pb-3">
          Folder Contains : {{ FolderObject.FolderContains }} Listing
        </p>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    FolderObject: Object,
  },
  mounted(){
    console.log(this.FolderObject)
  }
};
</script>

<style></style>
