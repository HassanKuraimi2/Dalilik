import { Response } from "../../model/response";
import {
  GenerateSelect,
  GenerateSelectWithWhere,
  GenerateSelectWithWhereLimitOffSet,
  GenerateInsert,
} from "../../DataAccess/DalilikDAL";
module.exports = {
  checkCompanyAuth: (userId, Callback) => {
    let response = new Response();
    GenerateSelectWithWhere("systemuser", { Id: userId }, (result) => {
      if (result.Refrence[0].CompanyId) {
        response = result;
        response.Status = true;
      } else {
        response = result;
        response.Status = false;
        response.Description = "ليس لديك صلاحية للعنصر المطلوب";
      }
      Callback(response);
    });
  },
  GetCompanyById: (CompanyId, Callback) => {
    GenerateSelectWithWhere("GetCompanies", { Id: CompanyId }, (result) => {
      Callback(result);
    });
  },
  GetCompanyPosts: (CompanyId, offset, Callback) => {
    GenerateSelectWithWhereLimitOffSet(
      "UserPosts",
      { CompanyId: CompanyId },
      5,
      offset,
      (result) => {
        Callback(result);
      }
    );
  },
  GetCompanyListings: (CompanyId, Callback) => {
    GenerateSelectWithWhere(
      "CompanyProfilePostedListings",
      { CompanyId: CompanyId },
      (result) => {
        Callback(result);
      }
    );
  },
  GetCatigories: (Callback) => {
    GenerateSelect("catigory", (result) => {
      Callback(result);
    });
  },
  CreateNewListing: (Modal, Callback) => {
    GenerateInsert("listings", Modal, (result) => {
      Callback(result);
    });
  },
};
