<template>
  <div class="contact">
    <MainBaner />
    <ContactInfo />
    <Map />
  </div>
</template>

<script>
import MainBaner from "../../components/ContactPage/MainBanner";
import ContactInfo from "../../components/ContactPage/ContactInfo";
import Map from "../../components/ContactPage/Map";
export default {
  components: { MainBaner, ContactInfo , Map},
};
</script>
