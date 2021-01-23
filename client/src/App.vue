<template>
  <div id="app">
    <ClientApp v-if="$route.meta.pageType == 1" />
    <UserApp v-else-if="$route.meta.pageType == 2" />
    <CompanyApp v-else-if="$route.meta.pageType == 3" />
    <router-view v-else></router-view>
  </div>
</template>
<script>
import ClientApp from "./views/ClientApp";
import UserApp from "./views/UserApp";
import CompanyApp from "./views/CompanyApp";
export default {
  components: { ClientApp, UserApp , CompanyApp },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "DALILIK - Kuwait ultimate directory";
      },
      immediate: true,
    },
    local(newLocal) {
      let app = document.getElementById("app");
      if (newLocal == "ar") {
        app.classList.add("rtl-layout");
      } else {
        app.classList.remove("rtl-layout");
      }
    },
  },
};
</script>
