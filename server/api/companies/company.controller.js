import {
  checkCompanyAuth,
  GetCompanyById,
  GetCompanyPosts,
  GetCompanyListings,
  GetCatigories,
  CreateNewListing,
} from "./company.service";
import { upload } from "../FileUploader/fileUploader.controller";
module.exports = {
  GetCompanyById: (req, res) => {
    const companyId = req.query.CompanyId;
    GetCompanyById(companyId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  GetCompanyPosts: (req, res) => {
    const companyId = req.query.CompanyId;
    const offset = req.query.offset;
    GetCompanyPosts(companyId, offset, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  GetCompanyListings: (req, res) => {
    checkCompanyAuth(req.userId, (response) => {
      if (response.Status) {
        const companyId = response.Refrence[0].CompanyId;
        GetCompanyListings(companyId, (result) => {
          if (!result.Status) res.status(500);
          return res.json(result);
        });
      } else {
        return res.json(response);
      }
    });
  },
  GetCatigories: (req, res) => {
    GetCatigories((result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  CreateNewListing: (req, res) => {
    checkCompanyAuth(req.userId, (response) => {
      if (response.Status) {
        const modal = {
          CompanyId: response.Refrence[0].CompanyId,
          ListingData: req.body.ListingData,
          ListingImage: req.body.ListingImage,
          ListingHeader: req.body.ListingHeader,
          UserId: req.userId,
          DateAdded: new Date().toISOString(),
        };
        CreateNewListing(modal, (result) => {
          if (!result.Status) res.status(500);
          return res.json(result);
        });
      } else {
        return res.json(response);
      }
    });
  },
  GetCompanyByRoutedId: (req, res) => {
    checkCompanyAuth(req.userId, (response) => {
      if (response.Status) {
        const companyId = response.Refrence[0].CompanyId;
        GetCompanyById(companyId, (result) => {
          if (!result.Status) res.status(500);
          return res.json(result);
        });
      } else {
        return res.json(response);
      }
    });
  },
  checkCompanyAuth:(req, res) => {
    checkCompanyAuth(req.userId , result =>{
      result.Refrence = result.Refrence[0].CompanyId;
      return res.json(result);
    });
  }
};
