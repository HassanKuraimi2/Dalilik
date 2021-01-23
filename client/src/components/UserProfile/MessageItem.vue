<template>
  <div class="message-item" :class="Me ? 'me' : ''">
    <div
      class="generic-list-item d-flex align-items-center border-bottom-0 bg-transparent"
    >
      <div class="user-thumb flex-shrink-0">
        <img src="@/assets/images/avatar-img.jpg" alt="author-image" />
      </div>
      <div class="message-bubble ml-2 position-relative p-3 rounded">
        <p class="text-color font-size-14 font-weight-medium">
          {{ Message }}
        </p>
      </div>
    </div>
  </div>
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
    Me: Boolean,
    Message: String,
    MessageItemImage: String,
  },
};
</script>

<style></style>
