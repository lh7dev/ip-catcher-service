const db = require("../firestore_repo/firesotoreDB");
const requestModel = require("../models/request.model");

var getIP = require("ipware")().get_ip;

// Create Entry in firebase
const createItem = async (collection, res, itemData) => {
  const doc = itemData;
  console.log(doc);
  db.createDoc(collection, doc)
    .then(() => {
      console.log("SUCCESS: document created in collection " + collection);
      const responseData = { success: true };
      res.json(responseData);
    })
    .catch((e) => {
      console.log(
        "ERROR: document could not be created collection " + collection
      );
      console.log(e);
      const responseData = { success: false };

      res.status(500).json(responseData);
    });
};

const trackRequest = (req, res) => {
  const ipInfo = getIP(req);

  const model = requestModel.requestTrackingModel(ipInfo);
  console.log(model);
  createItem("Requests", res, model);
};

module.exports = {
  trackRequest,
};
