<template>
  <v-card class="mx-auto sidebar-widget">
    <h3 class="widget-title">User Contact</h3>
    <div class="stroke-shape mb-4"></div>
    <ul class="list-items list--items list--items-2 list-items-style-2">
      <li>
        <span class="text-color mr-1"
          ><i class="la la-map-marker mr-2 text-color-2 font-size-18"></i
          >Address:</span
        >{{ Address }}
      </li>
      <li>
        <span class="text-color mr-1"
          ><i class="la la-phone mr-2 text-color-2 font-size-18"></i
          >Phone:</span
        ><a href="tel:+7(123)987654">{{ Phone }}</a>
      </li>
      <li>
        <span class="text-color mr-1"
          ><i class="la la-envelope mr-2 text-color-2 font-size-18"></i
          >Mail:</span
        ><a href="mailto:markhardson@gmail.com">{{ Email }}</a>
      </li>
      <li>
        <span class="text-color mr-1"
          ><i class="la la-globe mr-2 text-color-2 font-size-18"></i
          >Website:</span
        ><a href="#">{{ Website }}</a>
      </li>
    </ul>
    <ul
      class="social-profile social-profile-colored border-top border-top-color py-4 mt-4"
    >
      <li>
        <a href="#" class="facebook-bg"><i class="lab la-facebook-f"></i></a>
      </li>
      <li>
        <a href="#" class="twitter-bg"><i class="lab la-twitter"></i></a>
      </li>
      <li>
        <a href="#" class="instagram-bg"><i class="lab la-instagram"></i></a>
      </li>
      <li>
        <a href="#" class="behance-bg"><i class="lab la-behance"></i></a>
      </li>
      <li>
        <a href="#" class="dribbble-bg"><i class="lab la-dribbble"></i></a>
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
  props: {
    Address: String,
    Email: String,
    Phone: String,
    Website: String,
  },
};
</script>

<style></style>
