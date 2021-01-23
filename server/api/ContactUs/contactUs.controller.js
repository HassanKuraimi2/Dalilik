const { UserMessages } = require("../../model/UserMessages");
import { CreateUserMessage } from "./contactUs.service";
module.exports = {
  CreateUserMessage: (req, res) => {
    var contact = new UserMessages();
    contact = req.body;
    CreateUserMessage(contact, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
};
