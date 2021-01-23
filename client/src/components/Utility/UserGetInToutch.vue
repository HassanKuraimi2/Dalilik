<template>
  <!-- end sidebar-widget -->
  <v-card class="mx-auto sidebar-widget">
    <h3 class="widget-title">Get in Touch</h3>
    <div class="stroke-shape mb-4"></div>
    <form method="post" class="form-box">
      <div class="input-box">
        <label class="label-text">Your Name</label>
          <span class="la la-user form-icon"></span>
          <v-text-field placeholder="Your name" solo></v-text-field>
      </div>
      <div class="input-box">
        <label class="label-text">Your Email</label>
          <span class="la la-envelope form-icon"></span>
          <v-text-field
            :rules="[rules.required, rules.email]"
            placeholder="Your email"
            solo
          ></v-text-field>
      </div>
      <div class="input-box">
        <label class="label-text">Message</label>
          <span class="la la-pencil form-icon"></span>
          <v-textarea solo placeholder="Write Message"></v-textarea>
      </div>
      <div class="btn-box">
        <button type="submit" class="theme-btn gradient-btn w-100 border-0">
          Send Message <i class="la la-arrow-right ml-1"></i>
        </button>
      </div>
    </form>
  </v-card>
  <!-- end sidebar-widget -->
</template>

<script>
export default {
  data: () => {
    return {
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>

<style></style>
