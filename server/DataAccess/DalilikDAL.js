import { knex } from "../config/database";
import { Response } from "../model/response";

module.exports = {
  GenerateSelect: (table, callBack) => {
    let response = new Response();
    knex
      .select()
      .from(table)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  GenerateSelectWithWhere: (table, Where, callBack) => {
    let response = new Response();
    knex
      .select()
      .from(table)
      .where(Where)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  GenerateInsert: (table, model, callback) => {
    let response = new Response();
    knex
      .insert(model)
      .into(table)
      .then((res) => {
        response.Status = true;
        response.Refrence = res;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callback(response);
      });
  },
  GenerateSelectWithWhereLimitOffSet: (
    table,
    Where,
    limit,
    offset,
    callBack
  ) => {
    let response = new Response();
    knex
      .select("*")
      .from(table)
      .where(Where)
      .limit(limit)
      .offset(offset)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  GenerateUpdate: (table, Where, model, callback) => {
    let response = new Response();
    knex(table)
      .where(Where)
      .update(model)
      .then((result) => {
        response.Status = true;
        response.Refrence = result;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callback(response);
      });
  },
  GenerateDelete: (table, Where, callBack) => {
    let response = new Response();
    knex
      .delete()
      .from(table)
      .where(Where)
      .then((res) => {
        response.Status = true;
        response.Refrence = res;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  },
  ExecuteDeleteTransactionTransaction:(table1 , table2 , where1 , where2 , callBack) =>{
    let response = new Response();
    knex
    .transaction((trx) => {
      trx
        .delete()
        .from(table1)
        .where(where1)
        .transacting(trx)
        .then((res) => {
          return trx
            .delete()
            .from(table2)
            .where(where2)
            .transacting(trx);
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then((res) => {
      response.Status = true;
      response.Refrence = res;
      response.Description = "تمت العملية بنجاح";
    })
    .catch((error) => {
      response.Status = false;
      response.Refrence = error;
      response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
    })
    .finally(() => {
      return callBack(response);
    });
  },
  GenerateSelectWithWhereOrWhere: (table, Where , OrWhere , callBack) => {
    let response = new Response();
    knex
      .select()
      .from(table)
      .where(Where)
      .orWhere(OrWhere)
      .then((row) => {
        response.Status = true;
        response.Refrence = row;
        response.Description = "تمت العملية بنجاح";
      })
      .catch((err) => {
        response.Status = false;
        response.Refrence = err;
        response.Description = "حصل خطأ اثناء محاولة تنفيذ العملية";
      })
      .finally(() => {
        return callBack(response);
      });
  }
};
