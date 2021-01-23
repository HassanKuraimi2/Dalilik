<template>
  <div
    class="modal fade modal-container signup-form"
    id="signUpModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="signUpModalTitle"
    style="display: none;"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header align-items-center mh-bg-2">
          <h5 class="modal-title" id="signUpModalTitle">
            Welcome! create your listhub account
          </h5>
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
          <form @submit.prevent="registerUser" class="form-box">
            <div class="input-box">
              <label class="label-text">Username</label>
              <div class="form-group">
                <span class="la la-user form-icon"></span>
                <input
                  class="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Username"
                  v-model="UserName"
                  required
                />
              </div>
            </div>
            <div class="input-box">
              <label class="label-text">Email</label>
              <div class="form-group">
                <span class="la la-envelope form-icon"></span>
                <input
                  class="form-control form-control-styled"
                  type="email"
                  name="email"
                  placeholder="Email address"
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
                  name="text"
                  placeholder="Enter password"
                  v-model="Password"
                  required
                />
              </div>
              <p class="font-size-14 mt-n2">
                Your password must be at least 6 characters long and must
                contain letters, numbers and special characters. Cannot contain
                whitespace.
              </p>
            </div>
            <div class="input-box py-4 user-action-meta">
              <div class="custom-checkbox">
                <input type="checkbox" id="agreeChb" />
                <label for="agreeChb" class="font-size-14"
                  >By signing up, you agree to our
                  <a href="privacy-policy.html" class="text-color-2"
                    >Privacy Policy.</a
                  ></label
                >
              </div>
            </div>
            <div class="btn-box">
              <button
                :disabled="disabled"
                type="submit"
                class="theme-btn gradient-btn w-100"
              >
                <i class="la la-user-plus mr-1"></i> Register Account
              </button>
              <p
                class="sub-text-box text-right pt-1 font-weight-medium font-size-14"
              >
                Already on Listhub?
                <a
                  class="text-color-2 login-btn"
                  href="#"
                  @click.prevent="showModal"
                  >Log in</a
                >
              </p>
            </div>
          </form>
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
      UserName: "",
      Password: "",
      Email: "",
      disabled: false,
    };
  },
  methods: {
    closeModal() {
      // get modal
      const modal = document.getElementById("signUpModal");
      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("modal-open");
      // change state like in hidden modal
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
    },
    showModal() {
      this.closeModal();
      const modal = document.getElementById("loginModal");
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("modal-open");
      // change state like in hidden modal
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      modal.setAttribute("style", "display: block");
    },
    registerUser() {
      this.disabled = true;
      api
        .post("/Users/Register", {
          userName: this.UserName,
          password: this.Password,
          email: this.Email,
          groupId: 1,
          profileImage: "",
          userState: false,
          userType: 1,
        })
        .then((result) => {
          this.UserName = "";
          this.Password = "";
          this.Email = "";
          this.$toast.success(result.data.Description);
          localStorage.removeItem("access_token");
          localStorage.setItem("access_token", result.data.Refrence2);
          this.$router.push({ name: "UserHomePage" });
        })
        .catch((err) => {
          this.$toast.success(err.data.Description);
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
