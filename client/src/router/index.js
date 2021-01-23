import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const DEFAULT_TITLE = "DALILIK - Kuwait ultimate directory";
const routes = [
  {
    path: "/",
    name: "home",
    components: {
      visitor: () => import("@/pages/client/HomePage.vue"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Home`,
      pageType: 1,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      visitor: () => import("@/pages/client/About.vue"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - About`,
      pageType: 1,
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      visitor: () => import("@/pages/client/Contact.vue"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Contact`,
      pageType: 1,
    },
  },
  {
    path: "/faq",
    name: "faq",
    components: {
      visitor: () => import("@/pages/client/FAQ.vue"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - FAQ`,
      pageType: 1,
    },
  },
  {
    path: "/listing-list",
    name: "listings",
    components: {
      visitor: () => import("@/pages/client/ListingList"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - FAQ`,
      pageType: 1,
    },
  },
  {
    path: "/dashboard/userprofile",
    name: "UserProfile",
    components: {
      UserProfile: () => import("@/pages/UserProfile/Dashboard"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - UserProfile`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/chat",
    name: "UserChat",
    components: {
      UserProfile: () => import("@/pages/UserProfile/UserChat"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - UserChat`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/index",
    name: "UserHomePage",
    components: {
      UserProfile: () => import("@/pages/UserProfile/HomePage"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - UserProfile`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/SavedPosts",
    name: "UserSavedPostPage",
    components: {
      UserProfile: () => import("@/pages/UserProfile/SavedPosts"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Saved Posts`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/LikedPages",
    name: "UserLikedPages",
    components: {
      UserProfile: () => import("@/pages/UserProfile/LikedPages"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Liked Pages`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/userprofile/edit",
    name: "UserProfileEdit",
    components: {
      UserProfile: () => import("@/pages/UserProfile/UserProfileEdit"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - User Profile`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/Faivorits",
    name: "UserFaivorits",
    components: {
      UserProfile: () => import("@/pages/UserProfile/Faivorits"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Faivorits`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/Faivorits/Listings/:id",
    name: "UserFolderListings",
    components: {
      UserProfile: () => import("@/pages/UserProfile/FolderListings"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Folder Listings`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/Listings/:id",
    name: "ListingDetails",
    components: {
      UserProfile: () => import("@/components/HomePage/ListingDetails"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Folder Listings`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/Company/:id",
    name: "CompanyProfile",
    components: {
      UserProfile: () => import("@/pages/UserProfile/CompanyProfile"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Company Profile`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/SearchBusinesses",
    name: "SearchBusinesses",
    components: {
      UserProfile: () => import("@/pages/UserProfile/SearchBusinesses"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Search Businesses`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/logout",
    name: "logOut",
    components: {
      UserProfile: () => import("@/components/HomePage/LogOut"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Logout`,
      pageType: 2,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/index",
    name: "CompanyHomePage",
    components: {
      CompanyProfile: () => import("@/pages/Company/HomePage"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Company Profile`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/Listings",
    name: "CompanyListings",
    components: {
      CompanyProfile: () => import("@/pages/Company/ListingPage"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Listings`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/Events",
    name: "CompanyEvents",
    components: {
      CompanyProfile: () => import("@/pages/Company/ListingPage"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Events`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/Blogs",
    name: "CompanyBlogs",
    components: {
      CompanyProfile: () => import("@/pages/Company/ListingPage"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Blogs`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/Listings/:id",
    name: "CompanyListingDetails",
    components: {
      CompanyProfile: () => import("@/components/HomePage/ListingDetails"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Listing Details`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/AddListing",
    name: "CompanyAddNewListing",
    components: {
      CompanyProfile: () => import("@/pages/Company/AddNewListing"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Add New Listing`,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/CompanyProfile/EditListing/:id",
    name: "ComapnyEditListing",
    components: {
      CompanyProfile: () => import("@/pages/Company/EditListing"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Edit Listing `,
      pageType: 3,
      requiresAuth: true,
    },
  },
  {
    path: "*",
    components: {
      default: () => import("@/pages/client/PageNotFound"),
    },
    meta: {
      title: `${DEFAULT_TITLE} - Page Not Found`,
    },
    hidden: true,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
