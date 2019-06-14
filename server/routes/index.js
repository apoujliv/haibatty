var express = require('express');
var router = express.Router();
var mongodb = require('../helpers/mongodb.js')

var client;

var setClient = function(db){
  client = db;
}

var getClient = function(){
  return client;
}

mongodb.createClient(setClient);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express');
});

router.get('/campaigns', function(req, res, next) {

  mongodb.getAll(getClient, "campaigns", res)

});

router.post('/campaigns', function(req, res, next) {
  req.body.forEach(function(campaign) {
    var filter = {
      "name": campaign.name
    };
    var newObject = {
      $set: {
        "name": campaign.name,
        "characters": campaign.characters
      }
    };
    var otherOptions = {
      upsert: true
    };
    res.json(mongodb.postObject(getClient, "campaigns", filter, newObject, otherOptions))

  })
});

router.delete("/campaign/:campaignName/", function(req, res){
  var filter = {
    "name": req.params.campaignName
  };

  res.send(mongodb.deleteObject(getClient, "campaigns", filter, {}));
})

module.exports = router;
