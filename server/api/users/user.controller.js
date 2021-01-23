import {
  create,
  getUsers,
  getUserById,
  checkUserAuth,
  getUserListings,
  updateUser,
  getUserLikedPages,
  changeCompanyFollowState,
  changePostSavedState,
  getUserSavedPosts,
  getUserFaivoritFolders,
  getUserFaivoritPosts,
  updateUserFolder,
  DeleteUserFolder,
  addUserFolder,
  SavePostToFaivorit,
  DeleteFaivoritPost,
  GetUserChatContent,
  GetUserChatMessages,
  SendChatMessage,
  UpdateUserImage,
} from "./user.service";
import { User } from "../../model/user";
import { Response } from "../../model/response";
module.exports = {
  checkUserAuth: (req, res) => {
    checkUserAuth(req, res);
  },
  createUser: (req, res) => {
    const body = req.body;
    create(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getAllUsers: (_, res) => {
    getUsers((err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: "Database Connection Error",
        });
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getUserById: (req, res) => {
    getUserById(req.userId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getUserListings: (req, res) => {
    const offset = req.query.offset;
    getUserListings(req.userId, offset, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  updateUser: (req, res) => {
    const user = new User();
    user.Email = req.body.Email;
    user.UserName = req.body.UserName;
    user.UserAbout = req.body.UserAbout;
    user.Website = req.body.Website;
    user.Phone = req.body.Phone;
    user.UserLocation = req.body.UserLocation;
    updateUser(req.userId, user, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getUserLikedPages: (req, res) => {
    getUserLikedPages(req.userId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  changeCompanyFollowState: (req, res) => {
    const companyId = req.body.CompanyId;
    const state = req.body.State;
    changeCompanyFollowState(state, req.userId, companyId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  changePostSavedState: (req, res) => {
    const postId = req.body.PostId;
    const state = req.body.State;
    changePostSavedState(state, req.userId, postId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getUserSavedPosts: (req, res) => {
    const offset = req.query.offset;
    getUserSavedPosts(req.userId, offset, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getUserFaivoritFolders: (req, res) => {
    getUserFaivoritFolders(req.userId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getUserFaivoritPosts: (req, res) => {
    const offset = req.query.offset;
    const FolderId = req.query.FolderId;
    getUserFaivoritPosts(req.userId, FolderId, offset, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  updateUserFolder: (req, res) => {
    const FolderId = req.body.FolderId;
    updateUserFolder(
      req.userId,
      FolderId,
      { FloderName: req.body.FolderName },
      (result) => {
        if (!result.Status) res.status(500);
        return res.json(result);
      }
    );
  },
  DeleteUserFolder: (req, res) => {
    const FolderId = req.body.FolderId;
    DeleteUserFolder(req.userId, FolderId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  addUserFolder: (req, res) => {
    const FolderName = req.body.FolderName;
    addUserFolder(req.userId, FolderName, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  SavePostToFaivorit: (req, res) => {
    const FolderId = req.body.FolderId;
    const PostId = req.body.PostId;
    SavePostToFaivorit(FolderId, PostId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  DeleteFaivoritPost: (req, res) => {
    const PostId = req.body.PostId;
    DeleteFaivoritPost(req.userId, PostId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  GetUserChatContent: (req, res) => {
    GetUserChatContent(req.userId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  GetUserChatMessages: (req, res) => {
    const UserFrom = req.query.UserFrom;
    GetUserChatMessages(req.userId, UserFrom, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  SendChatMessage: (req, res) => {
    const UserIdTo = req.body.UserIdTo;
    const Message = req.body.Message;
    const IsCompany = req.body.IsCompany;
    SendChatMessage(req.userId, UserIdTo, Message, IsCompany, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  UpdateUserImage: (req, res) => {
    const ProfileImage = req.body.ProfileImage;
    UpdateUserImage(req.userId, ProfileImage, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
};
