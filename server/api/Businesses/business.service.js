import { GenerateSelect } from "../../DataAccess/DalilikDAL";
import { knex } from "../../config/database";
import { Response } from "../../model/response";

module.exports = {
  getBusinesses: (callBack) => {
    let response = new Response();
    GenerateSelect("getallbusinesses", (result) => {
      response = result;
      if (result.Status) {
        response.Description = "تم جلب البيانات بنجاح";
      } else {
        response.Description = "حصل خطاء اثناء محاولة جلب البيانات";
      }
      return callBack(response);
    });
  },
  searchBusinesses: (searchId, callBack) => {
    let response = new Response();
    knex
      .select()
      .from("getallbusinesses")
      .where("BusinessName", "like", `%${searchId}%`)
      .orWhere("CompanyName", "like", `%${searchId}%`)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  UserSearchBusinesses: (searchId, callBack) => {
    let response = new Response();
    knex
      .select()
      .from("SearchListings")
      .where("ListingHeader", "like", `%${searchId}%`)
      .orWhere("CompanyName", "like", `%${searchId}%`)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  getListingDetails: (searchId, callBack) => {
    let response = new Response();
    knex
      .select()
      .from("ListingDetails")
      .where({ ListingId: searchId })
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
};
