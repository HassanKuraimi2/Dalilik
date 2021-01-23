<template>
  <a
    class="generic-list-item d-flex align-items-center"
    @click.prevent="ChatContactCliecked"
  >
    <div class="user-thumb flex-shrink-0 position-relative">
      <img :src="FilesPath + Contact.ProfileImage" alt="author-image" />
      <div class="status-indicator bg-success"></div>
    </div>
    <div class="ml-2">
      <p class="small text-gray">{{ Contact.UserName }}</p>
    </div>
  </a>
</template>

<script>
import config from "../../plugins/FileDirectory";
export default {
  data: () => {
    return {
      FilesPath: config.path,
    };
  },
  props: {
    Contact: Object,
  },
  methods: {
    ChatContactCliecked() {
      this.$emit("GetChatContact", this.Contact.UserId);
    },
  },
};
</script>

<style></style>
