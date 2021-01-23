import { hashSync, compareSync } from "bcrypt";
import { Response } from "../../model/response";
import { GenerateInsert } from "../../DataAccess/DalilikDAL";
import { knex } from "../../config/database";
// var hashedPassword = bcrypt.hashSync(req.body.password, 8);
//var passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
// res.status(200).send({ auth: false, token: null }); //LogOut
module.exports = {
  Register: (user, callBack) => {
    let response = new Response();
    user.Password = hashSync(user.Password, 8);
    //Check User Type to Enable Or Disable It
    GenerateInsert("systemuser", user, (result) => {
      response = result;
      if (result.Status) {
        response.Description = "تم تسجيل المستخدم بنجاح";
      } else {
        response.Description = "حصل خطاء اثناء محاولة تسجيل المستخدم";
      }
      return callBack(response);
    });
  },
  Login: (user, callBack) => {
    let response = new Response();
    knex
      .select()
      .table("systemuser")
      .where("email", user.Email)
      .first()
      .then((result) => {
        var passwordIsValid = compareSync(user.Password, result.Password);
        response.Refrence = 200;
        if (passwordIsValid) {
          response.Status = true;
          response.Description = "تم تسجيل الدخول بنجاح";
          response.Refrence2 = result;
        } else {
          response.Status = false;
          response.Description = "إسم المستخدم او كلمة المرور غير صحيحة";
        }
      })
      .catch((err) => {
        response.Refrence = 500;
        response.Status = false;
        response.Description = "إسم المستخدم او كلمة المرور غير صحيحة";
      })
      .finally(() => {
        callBack(response);
      });
  },
};
