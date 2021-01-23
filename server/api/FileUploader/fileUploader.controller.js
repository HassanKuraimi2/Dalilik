const multer = require("multer");
const fs = require("fs");
const port = process.env.PORT || 5000;
const host = process.env.HOST || localhost;
const getListFiles = (req, res) => {
  const directoryPath = "./uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: host + ":" + port + '/files/' + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = "./uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
        console.log(err);
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.mimetype)) {
    const err = new Error("Incorrect File");
    err.code("INCORRECT_FILETYPE");

    return cb(err, false);
  }

  return cb(null, true);
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({
  dest: "./uploads",
  fileFilter,
  storage: storage,
  limits: {
    fileSize: 500000,
  },
});
module.exports = {
    upload ,
    download,
    getListFiles
};