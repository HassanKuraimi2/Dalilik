<template>
  <v-card class="block-card mb-4">
    <div class="block-card-header">
      <h2 class="widget-title">Listing Information</h2>
      <div class="stroke-shape"></div>
    </div>
    <!-- end block-card-header -->
    <div class="block-card-body">
      <form
        @submit.prevent="SaveListing"
        class="form-box row MultiFile-intercepted"
      >
        <v-col cols="12" md="6" sm="12">
          <v-col cols="12">
            <div class="input-box">
              <label class="label-text">Listing Title </label>
              <v-text-field
                solo
                clearable
                required
                v-model="ListingTitle"
              ></v-text-field>
            </div>
          </v-col>
          <!-- end col-lg-12 -->
          <v-col cols="12">
            <div class="input-box">
              <label class="label-text">Catigory </label>
              <v-combobox
                v-model="SelectedCatigory"
                :items="Catigories"
                item-text="CatigoryName"
                item-value="Id"
                solo
                hide-no-data
                required
                @keydown="vCatigoryKeyDown"
                @change="SelectedValueChanged"
              >
              </v-combobox>
            </div>
          </v-col>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-card class="mt-10">
            <v-img
              :src="imageURL"
              height="150"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              <v-file-input
                :rules="rules"
                :name="uploadFieldName"
                required
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                @change="onFileChange"
                @click:clear="clearInput"
              ></v-file-input>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="input-box">
            <label class="label-text">Listing Content </label>
            <v-textarea
              solo
              name="input-7-4"
              v-model="ListingContent"
            ></v-textarea>
          </div>
        </v-col>
        <div class="btn-box mt-4">
          <button type="submit" class="theme-btn gradient-btn border-0">
            Save &amp; Preview
          </button>
        </div>
      </form>
    </div>
    <!-- end block-card-body -->
  </v-card>
</template>

<script>
import api from "../../services/api";
export default {
  data: () => ({
    Catigories: [],
    SelectedCatigory: null,
    search: null,
    rules: [
      (value) =>
        !value ||
        value.size < 500000 ||
        "Avatar size should be less than 500 KB!",
    ],
    imageURL: "",
    errorDialog: null,
    errorText: "",
    uploadFieldName: "file",
    maxSize: 1024,
    ListingTitle: "",
    ListingContent: "",
    ImageFormData: null,
  }),
  methods: {
    onFileChange(file) {
      const { maxSize } = 500000;
      let imageFile = file;
      if (file != undefined) {
        let size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          // check whether the upload is an image
          this.errorDialog = true;
          this.errorText = "Please choose an image file";
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.errorDialog = true;
          this.errorText =
            "Your file is too big! Please select an image under 1MB";
        } else {
          // Append file into FormData and turn file into image URL
          let formData = new FormData();
          let imageURL = URL.createObjectURL(imageFile);
          this.imageURL = imageURL;
          formData.append("file", imageFile);
          this.ImageFormData = formData;
        }
      }
    },
    initializeCatigories() {
      api
        .get("/GetCompanyListings")
        .then((result) => {
          if (result.data.Status) {
            this.Catigories = result.data.Refrence;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initializeFormData() {
      const data = this.$route.query.data;
      this.ListingTitle = data.ListingHeader;
      this.imageURL = data.ListingImage;
      this.ListingContent = data.ListingData;
      this.SelectedCatigory = 1;
    },
    SelectedValueChanged(value) {
      if (value.Id == undefined) {
        this.SelectedCatigory = undefined;
      }
    },
    SaveListing() {
      if (this.checkValues()) {
        api
          .post("/upload", this.ImageFormData)
          .then((result) => {
            api
              .post("/company/CreateNewListing", {
                ListingData: this.ListingContent,
                ListingImage: result.data.file.filename,
                ListingHeader: this.ListingTitle,
              })
              .then((res) => {
                if (res.data.Status) {
                  this.ListingTitle = "";
                  this.ListingContent = "";
                  this.imageURL = "";
                  this.ImageFormData = null;
                  this.SelectedCatigory = null;
                  this.$toast.success(res.data.Description);
                }
              })
              .catch((error) => {
                console.log(error.data);
              });
          })
          .catch((error) => {
            this.$toast.warning(error.data.Message);
          });
      } else {
        this.$toast.warning("يرجى ملىء الحقول قبل المتابعة");
      }
    },
    clearInput() {
      this.imageURL = "";
    },
    vCatigoryKeyDown(key) {
      key.preventDefault();
    },
    checkValues() {
      if (
        this.SelectedCatigory &&
        this.ListingTitle &&
        this.ListingContent &&
        this.ImageFormData
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.initializeCatigories();
    this.initializeFormData();
  },
};
</script>

<style></style>
