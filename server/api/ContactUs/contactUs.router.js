import { CreateUserMessage } from "./contactUs.controller";
const router = require("express").Router();
router.post("/api/contact/CreateUserMessage", CreateUserMessage);
module.exports = router;
