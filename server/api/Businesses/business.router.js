import { getAllBusinesses, searchBusinesses , UserSearchBusinesses , getListingDetails} from "./business.controller";
const router = require("express").Router();
router.get("/api/businesses/getAllBusinesses", getAllBusinesses);
router.post("/api/businesses/SearchBusinesses", searchBusinesses);
router.get("/api/businesses/UserSearchBusinesses", UserSearchBusinesses);
router.get("/api/businesses/getListingDetails", getListingDetails);
module.exports = router;
