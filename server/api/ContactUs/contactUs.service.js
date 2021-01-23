import { Response } from '../../model/response';
import {GenerateInsert} from '../../DataAccess/DalilikDAL';
module.exports = {
    CreateUserMessage : (userMessage , callback) =>{
        var response = new Response();
        GenerateInsert("usermessages" , userMessage , (result) =>{
            response = result;
            if (result.Status) {
              response.Description = "تم إرسال الرسالة بنجاح";
            } else {
              response.Description = "حصل خطاء اثناء محاولة إرسال الرسالة";
            }
            return callback(response);
        });
    }
}