import { Register, Login } from "./login.service";
import { User } from "../../model/user";
import { sign, destroy } from "jsonwebtoken";
import config from "../../auth/config";
module.exports = {
  Register: (req, res) => {
    var user = new User();
    user.UserName = req.body.userName;
    user.Password = req.body.password;
    user.Email = req.body.email;
    user.ProfileImage = req.body.profileImage;
    user.UserState = 0;
    user.GroupId = 1;
    user.UserType = req.body.userType;
    user.DateAdded = Date.now().toLocaleString();
    Register(user, (result) => {
      if (result.Status) {
        var token = sign({ id: result.Refrence[0] }, config.secret, {
          expiresIn: 86400, // expires in 24 hours
        });
        result.Refrence2 = token;
      }
      return res.json(result);
    });
  },
  Login: (req, res) => {
    var user = new User();
    user.Email = req.body.email;
    user.Password = req.body.password;
    Login(user, (result) => {
      if (result.Status) {
        var token = sign({ id: result.Refrence2.Id }, config.secret, {
          expiresIn: 86400, // expires in 24 hours
        });
        result.Refrence2 = token;
      }else{

      }
      return res.json(result);
    });
  },
  logout: (req, res) => {
    res.status(200).send({ auth: false, token: null });
  },
};
