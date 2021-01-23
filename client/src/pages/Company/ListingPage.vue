<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="CompanyListings"
          :search="search"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Listings</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                dark
                class="mb-2"
                @click.prevent="AddNewListing"
              >
                New Listing
              </v-btn>
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
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Listing Title",
        align: "center",
        sortable: false,
        value: "ListingHeader",
      },
      { text: "User Name", value: "UserName", align: "center" },
      { text: "Date", value: "DateAdded", align: "center" },
      { text: "Actions", value: "actions", sortable: false, align: "center" },
    ],
    CompanyListings: [],
    editedIndex: -1,
    editedItem: {
      ListingHeader: "",
      UserName: "",
      DateAdded: "",
    },
    defaultItem: {
      ListingHeader: "",
      UserName: "",
      DateAdded: "",
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
        .get("/company/GetCompanyListings")
        .then((result) => {
          if (result.data.Status) {
            this.CompanyListings = result.data.Refrence;
            this.CompanyListings.forEach(
              (company) =>
                (company.DateAdded = new Date(company.DateAdded).toLocaleString(
                  "default",
                  {
                    month: "short",
                    year: "numeric",
                  }
                ))
            );
          } else {
            this.$toast.error(result.data.Description);
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    previewItems(item) {
      this.$router.push({
        name: "CompanyListingDetails",
        params: { id: item.Id },
      });
    },
    AddNewListing() {
      this.$router.push({ name: "CompanyAddNewListing" });
    },
    editItem(item) {
      this.$router.push({
        name: "ComapnyEditListing",
        params: { id: item.Id },
        query: { data: item },
      });
    },
    deleteItem(item) {
      this.editedIndex = this.CompanyListings.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.CompanyListings.splice(this.editedIndex, 1);
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
        Object.assign(this.CompanyListings[this.editedIndex], this.editedItem);
      } else {
        this.CompanyListings.push(this.editedItem);
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
