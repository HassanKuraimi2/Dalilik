import {
  createUser,
  getAllUsers,
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
  UpdateUserImage
} from "./user.controller";
import { VerifyToken } from "../../auth/auth.controller";
const router = require("express").Router();
router.post("/api/users/createUser", createUser);
router.get("/api/users/getUsers", getAllUsers);
router.get("/api/users/CheckUserAuth", checkUserAuth);
router.get("/api/users/getUserById", VerifyToken, getUserById);
router.get("/api/users/getUserListings", VerifyToken, getUserListings);
router.get(
  "/api/users/getUserFaivoritFolders",
  VerifyToken,
  getUserFaivoritFolders
);
router.get(
  "/api/users/getUserFaivoritPosts",
  VerifyToken,
  getUserFaivoritPosts
);
router.get("/api/users/getUserSavedPosts", VerifyToken, getUserSavedPosts);
router.post("/api/users/updateUser", VerifyToken, updateUser);
router.get("/api/users/getUserLikedPages", VerifyToken, getUserLikedPages);
router.post(
  "/api/users/changeCompanyFollowState",
  VerifyToken,
  changeCompanyFollowState
);
router.post(
  "/api/users/changePostSavedState",
  VerifyToken,
  changePostSavedState
);
router.post("/api/users/updateUserFolder", VerifyToken, updateUserFolder);
router.post("/api/users/DeleteUserFolder", VerifyToken, DeleteUserFolder);
router.post("/api/users/addUserFolder", VerifyToken, addUserFolder);
router.post("/api/users/SavePostToFaivorit", VerifyToken, SavePostToFaivorit);

router.post("/api/users/DeleteFaivoritPost", VerifyToken, DeleteFaivoritPost);

router.get("/api/users/GetUserChatContent", VerifyToken, GetUserChatContent);

router.get("/api/users/GetUserChatMessages", VerifyToken, GetUserChatMessages);

router.post("/api/users/SendChatMessage", VerifyToken, SendChatMessage);
router.post("/api/users/UpdateUserImage", VerifyToken, UpdateUserImage);

module.exports = router;
