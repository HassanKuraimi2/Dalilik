<template>
  <div>
    <div
      class="modal fade modal-container login-form"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModalTitle"
      style="display: none;"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header align-items-center mh-bg">
            <h5 class="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent="closeModal"
            >
              <span aria-hidden="true" class="la la-times-circle"></span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="loginUser" method="post" class="form-box">
              <div class="input-box">
                <label class="label-text">Email</label>
                <div class="form-group">
                  <span class="la la-user form-icon"></span>
                  <input
                    class="form-control form-control-styled"
                    type="email"
                    placeholder="Username or email address"
                    v-model="Email"
                    required
                  />
                </div>
              </div>
              <div class="input-box">
                <label class="label-text">Password</label>
                <div class="form-group">
                  <span class="la la-lock form-icon"></span>
                  <input
                    class="form-control form-control-styled"
                    type="password"
                    placeholder="Enter password"
                    v-model="Password"
                    required
                  />
                </div>
              </div>
              <div
                class="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta"
              >
                <div class="custom-checkbox">
                  <input type="checkbox" id="keepMeSignedChb" />
                  <label for="keepMeSignedChb" class="font-size-14"
                    >Keep me signed in</label
                  >
                </div>
                <a
                  href="javascript:void(0)"
                  class="margin-bottom-10px lost-pass-btn font-size-14"
                  >Lost Password?</a
                >
              </div>
              <div class="btn-box">
                <button
                  :disabled="disabled"
                  type="submit"
                  class="theme-btn gradient-btn w-100"
                >
                  <i class="la la-sign-in mr-1"></i> Login to Account
                </button>
                <p
                  class="sub-text-box text-right pt-1 font-weight-medium font-size-14"
                >
                  New to Listhub?
                  <a
                    class="text-color-2 signup-btn"
                    href="#"
                    @click.prevent="showModal"
                    >Create account</a
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../services/api";
export default {
  data: () => {
    return {
      Email: "",
      Password: "",
      disabled: false,
    };
  },
  methods: {
    closeModal() {
      // get modal
      const modal = document.getElementById("loginModal");
      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("modal-open");
      // change state like in hidden modal
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
    },
    showModal() {
      this.closeModal();
      // get modal
      const modal = document.getElementById("signUpModal");
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("modal-open");
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("style", "display: block");
    },
    loginUser() {
      this.disabled = true;
      api
        .post("/Users/Login", {
          password: this.Password,
          email: this.Email,
        })
        .then((result) => {
          if (result.data.Status) {
            this.$toast.success(result.data.Description);
            localStorage.removeItem("access_token");
            localStorage.setItem("access_token", result.data.Refrence2);
            this.$router.push({ name: "UserHomePage" });
          } else this.$toast.warning(result.data.Description);
        })
        .catch((err) => {
          this.$toast.error(err.data.Description);
        })
        .finally(() => {
          this.disabled = false;
        });
    },
  },
};
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.3);
}
</style>
