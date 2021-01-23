const {
  getBusinesses,
  searchBusinesses,
  UserSearchBusinesses,
  getListingDetails
} = require("./business.service");

module.exports = {
  getAllBusinesses: (req, res) => {
    getBusinesses((result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  searchBusinesses: (req, res) => {
    var searchId = req.body.searchId;
    searchBusinesses(searchId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  UserSearchBusinesses: (req, res) => {
    var searchId = req.query.searchId;
    UserSearchBusinesses(searchId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  },
  getListingDetails:(req, res) =>{
    var listId = req.query.ListId;
    getListingDetails(listId, (result) => {
      if (!result.Status) res.status(500);
      return res.json(result);
    });
  }
};
