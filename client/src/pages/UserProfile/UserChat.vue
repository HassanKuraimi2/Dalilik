<template>
  <v-container class="mb-150 pt-10">
    <v-row>
      <v-col clos="12" lg="4">
        <v-card class="block-card dashboard-card mb-4 px-0 pb-0">
          <div class="block-card-header px-4">
            <h2 class="widget-title pb-0">Chats</h2>
          </div>
          <div class="block-card-body">
            <div class="online-user-box">
              <form action="#" class="form-box px-4 MultiFile-intercepted">
                <div class="form-group">
                  <span class="la la-search form-icon"></span>
                  <label class="mb-0 d-block">
                    <input
                      type="text"
                      class="form-control font-size-14"
                      placeholder="Search for messages or users..."
                    />
                  </label>
                </div>
              </form>
              <div class="online-user-list">
                <div
                  class="generic-list chat-list scrollable-content scrollbar-hidden"
                >
                  <ChatContact
                    :key="i"
                    v-for="(contact, i) in UserChatContacts"
                    :Contact="contact"
                    @GetChatContact="ChatContactCliecked"
                  />
                </div>
                <!-- end generic-list -->
              </div>
              <!-- end online-user-list -->
            </div>
          </div>
          <!-- end block-card-body -->
        </v-card>
        <!-- end block-card -->
      </v-col>
      <v-col clos="12" lg="8" v-if="UserName.length > 0">
        <v-card class="block-card dashboard-card mb-4 px-0 pb-3">
          <div class="block-card-header">
            <div
              class="generic-list-item d-flex align-items-center py-0 border-bottom-0 bg-transparent"
            >
              <div class="user-thumb flex-shrink-0">
                <img :src="FilesPath + UserChatIcon" alt="author-image" />
              </div>
              <div class="ml-2 flex-grow-1 position-relative">
                <p class="text-color font-size-14 font-weight-medium">
                  {{ UserName }}
                </p>
                <div class="action-buttons position-absolute top-0 right-0">
                  <v-btn icon @click.prevent="RefreshChat">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="block-card-body pt-2">
            <div id="chatMenu" class="message-body scrollable-content mb-4">
              <MessageItem
                :key="i"
                v-for="(message, i) in UserChatContactMessages"
                :Message="message.Message"
                :Me="message.Me"
              />
              <br />
            </div>
            <v-row>
              <v-col cols="10">
                <v-text-field
                  class="ml-10"
                  placeholder="Type your Message..."
                  single-line
                  v-model="UserMessage"
                  @keydown.enter="SendMessage"
                ></v-text-field>
              </v-col>
              <v-col cols="1">
                <v-btn
                  @click.prevent="SendMessage"
                  :disabled="disabled"
                  icon
                  class="mt-7"
                >
                  <v-icon>mdi-send-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <!-- end block-card-body -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../../services/api";
import ChatContact from "../../components/UserProfile/ChatContact";
import MessageItem from "../../components/UserProfile/MessageItem";
import config from "../../plugins/FileDirectory";
export default {
  components: {
    ChatContact,
    MessageItem,
  },
  data: () => {
    return {
      UserChatContacts: [],
      UserChatContactMessages: [],
      UserName: "",
      CurrentUserId: 0,
      disabled: false,
      UserMessage: "",
      UserChatIcon: "",
      FilesPath: config.path,
    };
  },
  methods: {
    InitializeChatContacts() {
      api
        .get("/users/GetUserChatContent")
        .then((result) => {
          if (result.data.Status) {
            this.UserChatContacts = result.data.Refrence;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    ChatContactCliecked(value) {
      this.CurrentUserId = value;
      const userItem = this.UserChatContacts.filter(
        (user) => user.UserId == this.CurrentUserId
      )[0];
      this.UserName = userItem.UserName;
      this.UserChatIcon = userItem.ProfileImage;
      api
        .get("/users/GetUserChatMessages", {
          params: {
            UserFrom: this.CurrentUserId,
          },
        })
        .then((result) => {
          this.UserChatContactMessages = result.data.Refrence;
          this.UserChatContactMessages.forEach((element) => {
            if (element.UserIdFrom != this.CurrentUserId) {
              element.Me = true;
            } else {
              element.Me = false;
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    RefreshChat() {
      if (this.CurrentUserId != 0) {
        this.disabled = true;
        this.ChatContactCliecked(this.CurrentUserId);
        this.disabled = false;
      }
    },
    SendMessage() {
      if (this.UserMessage.length > 0) {
        api
          .post("/users/SendChatMessage", {
            UserIdTo: this.CurrentUserId,
            Message: this.UserMessage,
          })
          .then((result) => {
            if (result.data.Status) {
              const message = {
                Message: this.UserMessage,
                Me: true,
                UserIdTo: this.CurrentUserId,
                UserIdFrom: 0,
              };
              this.UserChatContactMessages.push(message);
              this.UserMessage = "";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    this.InitializeChatContacts();
  },
};
</script>

<style scoped>
.mb-150 {
  margin-bottom: 150px;
}
</style>
