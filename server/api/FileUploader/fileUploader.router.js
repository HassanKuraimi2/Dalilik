import { upload, download, getListFiles } from "./fileUploader.controller";
const router = require("express").Router();
router.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});
router.get("/files", getListFiles);
router.get("/files/:name", download);
module.exports = router;
