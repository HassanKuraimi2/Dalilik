import { Register , Login , logout} from "./login.controller";
const router = require("express").Router();
router.post("/api/Users/Register", Register);
router.post("/api/Users/Login", Login);
router.post("/api/Users/Logout", logout);
module.exports = router;
