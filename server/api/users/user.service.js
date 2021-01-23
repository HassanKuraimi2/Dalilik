import pool from "../../config/database";
import {
  GenerateSelectWithWhere,
  GenerateSelectWithWhereLimitOffSet,
  GenerateUpdate,
  GenerateInsert,
  GenerateDelete,
  ExecuteDeleteTransactionTransaction,
  GenerateSelectWithWhereOrWhere,
} from "../../DataAccess/DalilikDAL";
import config from "../../auth/config";
import { verify } from "jsonwebtoken";
import { Response } from "../../model/response";
module.exports = {
  checkUserAuth: (req, res) => {
    var token = req.get("authorization");
    if (!token)
      return res
        .status(200)
        .send({ auth: false, message: "No token provided." });
    else token = token.slice(7);
    verify(token, config.secret, (err, decoded) => {
      if (err)
        return res
          .status(200)
          .send({ auth: false, message: "Failed to authenticate token." });
      res.status(200).send({ auth: true, message: "User Veryfied" });
    });
  },
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO test(col1,col2,col3,col4) VALUES (?,?,?,?)`,
      [data.col1, data.col2, data.col3, data.col4],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, result);
        }
      }
    );
  },
  getUsers: (callBack) => {
    pool.query("Select * From test", [], (error, result, fields) => {
      if (error) {
        console.log(error);
        return;
      }
      return callBack(null, result);
    });
  },
  getUserById: (userId, Callback) => {
    GenerateSelectWithWhere("systemuser", { Id: userId }, (result) => {
      Callback(result);
    });
  },
  getUserListings: (userId, offset, Callback) => {
    GenerateSelectWithWhereLimitOffSet(
      "UserPosts",
      { UserId: userId },
      5,
      offset,
      (result) => {
        Callback(result);
      }
    );
  },
  updateUser: (userId, user, callBack) => {
    let response = new Response();
    GenerateUpdate("systemuser", { Id: userId }, user, (result) => {
      response = result;
      if (result.Status) {
        response.Description = "تم تعديل المستخدم بنجاح";
      } else {
        response.Description = "حصل خطاء اثناء محاولة تعديل المستخدم";
      }
      return callBack(response);
    });
  },
  getUserLikedPages: (userId, Callback) => {
    GenerateSelectWithWhere("CompanyList", { UserId: userId }, (result) => {
      Callback(result);
    });
  },
  changeCompanyFollowState: (state, userId, companyId, Callback) => {
    const userLikedCompany = {
      UserId: userId,
      CompanyId: companyId,
    };
    if (state) {
      GenerateInsert("userlikedcompanies", userLikedCompany, (result) => {
        Callback(result);
      });
    } else {
      GenerateDelete("userlikedcompanies", userLikedCompany, (result) => {
        Callback(result);
      });
    }
  },
  changePostSavedState: (state, userId, listingId, Callback) => {
    const userSavedListings = {
      UserId: userId,
      ListingId: listingId,
    };
    if (state) {
      GenerateInsert("savedlists", userSavedListings, (result) => {
        Callback(result);
      });
    } else {
      GenerateDelete("savedlists", userSavedListings, (result) => {
        Callback(result);
      });
    }
  },
  getUserSavedPosts: (userId, offset, Callback) => {
    GenerateSelectWithWhereLimitOffSet(
      "UserPosts",
      { UserId: userId, Saved: 0 },
      5,
      offset,
      (result) => {
        Callback(result);
      }
    );
  },
  getUserFaivoritFolders: (userId, Callback) => {
    GenerateSelectWithWhere(
      "UserFaivoritFolders",
      { UserId: userId },
      (result) => {
        Callback(result);
      }
    );
  },
  getUserFaivoritPosts: (userId, folderId, offset, Callback) => {
    GenerateSelectWithWhereLimitOffSet(
      "UserFaivoritPosts",
      { UserId: userId, FolderId: folderId },
      5,
      offset,
      (result) => {
        Callback(result);
      }
    );
  },
  addUserFolder: (userId, folderName, callback) => {
    const UserFolder = {
      UserId: userId,
      FloderName: folderName,
    };
    GenerateInsert("userfolders", UserFolder, (result) => {
      callback(result);
    });
  },
  updateUserFolder: (userId, folderId, model, callBack) => {
    let response = new Response();
    GenerateUpdate(
      "userfolders",
      { id: folderId, UserId: userId },
      model,
      (result) => {
        response = result;
        if (result.Status) {
          response.Description = "تم تعديل الملف بنجاح";
        } else {
          response.Description = "حصل خطاء اثناء محاولة الملف المستخدم";
        }
        return callBack(response);
      }
    );
  },
  DeleteUserFolder: (userId, folderId, callback) => {
    let response = new Response();
    const userFolder = {
      UserId: userId,
      id: folderId,
    };
    ExecuteDeleteTransactionTransaction(
      "userfaivorits",
      "userfolders",
      { FolderId: folderId },
      userFolder,
      (result) => {
        response = result;
        if (result.Status) {
          response.Description = "تم تعديل الملف بنجاح";
        } else {
          response.Description = "حصل خطاء اثناء محاولة الملف المستخدم";
        }
        return callback(response);
      }
    );
  },
  SavePostToFaivorit: (folderId, postId, callback) => {
    const UserFaiv = {
      FolderId: folderId,
      PostId: postId,
    };
    GenerateInsert("userfaivorits", UserFaiv, (result) => {
      callback(result);
    });
  },
  DeleteFaivoritPost: (userId, postId, callback) => {
    GenerateSelectWithWhere(
      "UsersFoldersByUserId",
      { UserId: userId, PostId: postId },
      (result) => {
        if (result.Status) {
          const UserFaiv = {
            FolderId: result.Refrence[0].FolderId,
            PostId: postId,
          };
          GenerateDelete("userfaivorits", UserFaiv, (result) => {
            callback(result);
          });
        }
      }
    );
  },
  GetUserChatContent: (userId, callback) => {
    GenerateSelectWithWhere("ChatContact", { UserIdTo: userId }, (result) => {
      callback(result);
    });
  },
  GetUserChatMessages: (userId, userFrom, callback) => {
    GenerateSelectWithWhereOrWhere(
      "UserChatMessages",
      { UserIdTo: userId, UserIdFrom: userFrom },
      { UserIdTo: userFrom, UserIdFrom: userId },
      (result) => {
        callback(result);
      }
    );
  },
  SendChatMessage: (userId, userTo, message, IsCompany, callback) => {
    const UserChat = {
      UserIdFrom: userId,
      UserIdTo: userTo,
      Message: message,
      IsCompany: IsCompany,
    };
    GenerateInsert("userschat", UserChat, (result) => {
      callback(result);
    });
  },
  UpdateUserImage: (userId, Img, callback) => {
    let response = new Response();
    const model = {
      ProfileImage: Img,
    };
    GenerateUpdate("systemuser", { Id: userId }, model, (result) => {
      response = result;
      if (result.Status) {
        response.Description = "تم تعديل الصورة بنجاح";
      } else {
        response.Description = "حصل خطاء اثناء محاولة تعديل الصورة ";
      }
      return callback(response);
    });
  },
};
