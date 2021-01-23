<template>
  <v-container class="pt-10">
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="Folders"
          :loading="loading"
          loading-text="Loading... Please wait"
          sort-by="FolderContains"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>My Faivorits</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.FloderName"
                            label="Folder Name"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="previewItems(item)">
              mdi-face
            </v-icon>
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../../services/api";
export default {
  data: () => ({
    loading: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "File Name",
        align: "center",
        sortable: false,
        value: "FloderName",
      },
      {
        text: "File Contains (Listings)",
        value: "FolderContains",
        align: "center",
      },
      { text: "Actions", value: "actions", sortable: false },
    ],
    Folders: [],
    editedIndex: -1,
    editedItem: {
      FloderName: "",
      FolderContains: 0,
    },
    defaultItem: {
      FloderName: "",
      FolderContains: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      api
        .get("/users/getUserFaivoritFolders")
        .then((result) => {
          this.Folders = result.data.Refrence;
        })
        .catch((error) => {
          console.log(error.data);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    editItem(item) {
      this.editedIndex = this.Folders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    previewItems(item) {
      this.$router.push({
        name: "UserFolderListings",
        params: { id: item.id },
      });
    },
    deleteItem(item) {
      this.editedIndex = this.Folders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      const item = this.Folders[this.editedIndex];
      api
        .post("/users/DeleteUserFolder", {
          FolderId: item.id,
        })
        .then((result) => {
          if (result.data.Status) {
            this.$toast.success("تم حذف الملف بنجاح");
            this.Folders = this.Folders.filter((folder) => folder.id !== item.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        const item = Object.assign({}, this.editedItem);
        const index = this.editedIndex;
        api
          .post("/users/updateUserFolder", {
            FolderId: this.editedItem.id,
            FolderName: this.editedItem.FloderName,
          })
          .then((result) => {
            if (result.data.Status) {
              this.$toast.success("تم تعديل الملف بنجاح");
              Object.assign(this.Folders[index], item);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});
      } else {
        const savedItem = this.editedItem;
        api
          .post("/users/addUserFolder", {
            FolderName: this.editedItem.FloderName,
          })
          .then((result) => {
            if (result.data.Status) {
              this.$toast.success("تم حفظ الملف بنجاح");
              savedItem.id = result.data.Refrence[0];
              this.Folders.push(savedItem);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.close();
    },
  },
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td {
  font-size: 1.1rem !important;
  font-weight: 500;
}
</style>
