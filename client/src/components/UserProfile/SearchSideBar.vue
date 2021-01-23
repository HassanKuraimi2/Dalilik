<template>
  <v-card class="sidebar-widget">
    <h3 class="widget-title">Search</h3>
    <div class="stroke-shape mb-4"></div>
    <form action="#" class="form-box">
      <div class="form-group">
        <span class="la la-search form-icon"></span>
        <input
          class="form-control form-control-styled"
          type="search"
          placeholder="What are you looking for?"
        />
        <p class="font-size-13">Press enter or click to search now button</p>
      </div>
      <div class="form-group mb-0">
        <button type="submit" class="theme-btn gradient-btn border-0 w-100">
          <i class="la la-search mr-2"></i>Search Now
        </button>
      </div>
      <!-- end form-group -->
    </form>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
