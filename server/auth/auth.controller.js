import config from "./config";
import { verify } from "jsonwebtoken";

module.exports = {
  VerifyToken: (req, res, next) => {
    var token = req.get("authorization");
    if (!token)
      return res
        .status(403)
        .send({ auth: false, message: "No token provided." });
    else token = token.slice(7);
    verify(token, config.secret, (err, decoded) => {
      if (err)
        return res
          .status(401)
          .send({ auth: false, message: "Failed to authenticate token." });
      req.userId = decoded.id;
      next();
    });
  },
};
