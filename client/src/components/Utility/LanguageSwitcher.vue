<template>
  <b-nav-item-dropdown :text="SelectedValue" right>
    <template v-slot:button-content>
      <img :src="SelectedFlag" /> {{ SelectedValue }}
    </template>
    <b-dropdown-item @click.prevent="setLocale('en')"
      ><img
        src="https://www.countryflags.io/gb/flat/24.png"
      />EN</b-dropdown-item
    >
    <b-dropdown-item @click.prevent="setLocale('ar')"
      ><img
        src="https://www.countryflags.io/kw/flat/24.png"
      />AR</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
export default {
  data() {
    return {
      Langs: ["Ar", "En"],
      SelectedValue: "",
      SelectedFlag: "https://www.countryflags.io/kw/flat/24.png",
    };
  },
  methods: {
    setLocale(locale) {
      if (locale != this.SelectedValue.toLowerCase()) {
        localStorage.setItem('local' ,locale);
        this.$i18n.locale = locale;
        this.SelectedValue = locale.replace(/^\w/, (c) => c.toUpperCase());

        if (locale == "ar") {
          this.SelectedFlag = `https://www.countryflags.io/kw/flat/24.png`;
          this.addRTLStyle();
        } else {
          this.SelectedFlag = `https://www.countryflags.io/gb/flat/24.png`;
          this.removeRTLStyle();
        }
      }
    },
    addRTLStyle() {
      let app = document.getElementById("app");
      app.classList.add("rtl-layout");
    },
    removeRTLStyle() {
      let app = document.getElementById("app");
      app.classList.remove("rtl-layout");
    },
  },
  created() {
    if (this.$i18n.locale == "en") {
      this.SelectedValue = "En";
      this.SelectedFlag = `https://www.countryflags.io/gb/flat/24.png`;
      this.removeRTLStyle();
    } else {
      this.SelectedValue = "Ar";
      this.SelectedFlag = `https://www.countryflags.io/kw/flat/24.png`;
      this.addRTLStyle();
    }
  },
};
</script>

<style scoped>
::v-deep .nav-link {
  display: inline !important;
  padding: 0 !important;
}
</style>
