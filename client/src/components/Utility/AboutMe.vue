<template>
  <v-card class="mx-auto block-card mb-5">
    <div class="block-card-header">
      <h2 class="widget-title pb-0">About Me</h2>
    </div>
    <!-- end block-card-header -->
    <div class="block-card-body">
      <p class="pb-3 font-weight-medium line-height-30">
        {{ UserAbout }}
      </p>
    </div>
    <!-- end block-card-body -->
  </v-card>
</template>

<script>
export default {
  props:{
    UserAbout:{
      type: String
    }
  }
};
</script>

<style></style>
