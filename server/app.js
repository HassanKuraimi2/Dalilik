require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import cors from "cors";
const helmet = require("helmet");
const userRouter = require("./api/users/user.router");
const businessRouter = require("./api/Businesses/business.router");
const UserRouter = require("./api/Login&Register/login.router");
const CompanyRouter = require("./api/companies/company.router");
const ContactRouter = require("./api/ContactUs/contactUs.router");
const FilesRouter = require("./api/FileUploader/fileUploader.router");
const app = express();

//Middleware
app.use(helmet());
app.use(json());
app.use(cors());

//routers
app.use("/", userRouter);
app.use("/", businessRouter);
app.use("/", UserRouter);
app.use("/", ContactRouter);
app.use("/", FilesRouter);
app.use("/", CompanyRouter);
app.use((err, req, res, next) => {
  console.log(err);
  if (err.code === "INCORRECT_FILETYPE") {
    return res
      .status(422)
      .json({ Status: false, Message: "Only Images Allowed ! " });
  }
  if (err.code === "LIMIT_FILE_SIZE") {
    return res
      .status(422)
      .json({ Status: false, Message: "Allowed File Size is 500KB " });
  }
});

//Handel Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  //Handel SPA
  app.get(/.*/ , (req , res) =>{
    res.send(__dirname + '/public/index.html')
  });
}

const port = process.env.PORT || 5000;
const host = process.env.HOST || localhost;

app.listen(port, host, () =>
  console.log(`Server running in ${host} at prot ${port}`)
);
