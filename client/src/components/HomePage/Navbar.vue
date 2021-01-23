<template>
  <header class="header-area">
    <!-- end header-top-bar -->
    <div
      class="header-menu-wrapper padding-right-30px padding-left-30px header-fixed"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="menu-full-width">
              <div class="logo">
                <a href="index.html"
                  ><img src="@/assets/images/logo.png" alt="logo"
                /></a>
                <div class="d-flex align-items-center">
                  <div class="menu-toggle" @click="filter">
                    <span class="menu__bar"></span>
                    <span class="menu__bar"></span>
                    <span class="menu__bar"></span>
                  </div>
                  <!-- end menu-toggle -->
                </div>
              </div>
              <!-- end logo -->
              <div class="main-menu-content ml-auto">
                <nav class="main-menu">
                  <ul>
                    <li>
                      <router-link :to="{ name: 'home' }">{{
                        $t("nav.catigories")
                      }}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about' }">{{
                        $t("nav.addBussniess")
                      }}</router-link>
                    </li>
                    <li>
                      <a
                        data-toggle="modal"
                        data-target="#loginModal"
                        href="#"
                        @click.prevent="showModal"
                        >{{ $t("nav.signInUp") }}</a
                      >
                    </li>
                    <li>
                      <LanguageSwitcher />
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- end main-menu-content -->
            </div>
            <!-- end menu-full-width -->
          </div>
          <!-- end col-lg-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container-fluid -->
    </div>
    <!-- end header-menu-wrapper -->
    <Login />
    <Register />
  </header>
</template>

<script>
import LanguageSwitcher from "../Utility/LanguageSwitcher";
import Login from "./Login";
import Register from "./Register";
export default {
  components: { LanguageSwitcher, Login, Register },
  data() {
    return {
      Languages: [
        { LangName: "English", Code: "En" },
        { LangName: "Arabic", Code: "Ar" },
      ],
    };
  },
  methods: {
    filter: () => {
      const elementClicked = document.querySelector(".menu-toggle");
      const content = document.querySelector(".main-menu-content");
      elementClicked.classList.toggle("active");
      content.classList.toggle("display-block");
    },
    showModal: () => {
      // get modal
      const modal = document.getElementById("loginModal");
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("modal-open");
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("style", "display: block");
    },
  },
};
</script>

<style scoped>
.display-block {
  display: block;
}
</style>
