<template>
  <div class="container-fluid dashboard-inner-body-container pt-10">
    <div class="row">
      <ProfileDetailsEdit />
      <div class="col-lg-6">
        <div class="block-card dashboard-card mb-4">
          <div class="block-card-header">
            <h2 class="widget-title pb-0">Change Password</h2>
          </div>
          <div class="block-card-body">
            <form method="post" class="form-box row MultiFile-intercepted">
              <div class="col-lg-12">
                <div class="input-box">
                  <label class="label-text">Current Password</label>
                  <div class="form-group">
                    <span class="la la-lock form-icon"></span>
                    <input
                      class="form-control"
                      type="text"
                      name="text"
                      placeholder="Current password"
                    />
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="col-lg-12">
                <div class="input-box">
                  <label class="label-text">New Password</label>
                  <div class="form-group">
                    <span class="la la-lock form-icon"></span>
                    <input
                      class="form-control"
                      type="text"
                      name="text"
                      placeholder="New password"
                    />
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="col-lg-12">
                <div class="input-box">
                  <label class="label-text">Confirm New Password</label>
                  <div class="form-group">
                    <span class="la la-lock form-icon"></span>
                    <input
                      class="form-control"
                      type="text"
                      name="text"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="col-lg-12">
                <div class="btn-box pt-1">
                  <button class="theme-btn gradient-btn border-0">
                    Change Password<i class="la la-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
              <!-- end col-lg-12 -->
            </form>
          </div>
          <!-- end block-card-body -->
        </div>
      </div>
      <!-- end col-lg-6 -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import ProfileDetailsEdit from "@/components/UserProfile/ProfileDetailesEdit";
export default {
  components: { ProfileDetailsEdit },
};
</script>

<style></style>
