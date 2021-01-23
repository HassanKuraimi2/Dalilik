import {
  GetCompanyById,
  GetCompanyPosts,
  GetCompanyListings,
  GetCatigories,
  CreateNewListing,
  GetCompanyByRoutedId,
  checkCompanyAuth,
} from "./company.controller";
import { VerifyToken } from "../../auth/auth.controller";
const router = require("express").Router();
router.get("/api/company/GetCompanyById", VerifyToken, GetCompanyById);
router.get(
  "/api/company/GetCompanyByRoutedId",
  VerifyToken,
  GetCompanyByRoutedId
);
router.get("/api/company/GetCompanyPosts", VerifyToken, GetCompanyPosts);
router.get("/api/company/GetCompanyListings", VerifyToken, GetCompanyListings);
router.get("/api/GetCompanyListings", GetCatigories);
router.get(
  "/api/comapny/CheckCompanyLinkedToUser",
  VerifyToken,
  checkCompanyAuth
);
router.post("/api/company/CreateNewListing", VerifyToken, CreateNewListing);
module.exports = router;
