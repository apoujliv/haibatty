var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://haibatty_admin:v3zMsqtCCWWoR6cn@haibatty-onpxb.mongodb.net/test?retryWrites=true";

module.exports.createClient = function(callback) {
  var client = new MongoClient(uri, {
    useNewUrlParser: true
  });

  client.connect((err, db) => {
    if (!err) {
      console.log("We are connected");
      return callback(db);
    }
  });

}

module.exports.postObject = function(getClient, collection, filter, newObject, otherOptions) {
  var client = getClient();
    client.db("haibatty").collection(collection).updateOne(
      filter, newObject, otherOptions
    );
}

module.exports.deleteObject = async function(getClient, collection, filter, otherOptions, res) {
  var client = getClient();

  return await client.db("haibatty").collection(collection).deleteOne(
      filter, otherOptions
    ).then(function(result){
      return {status:"Success", deletedRecords: result.deletedCount};
    }).catch(function(err) {
       return {status:"Failure", deletedRecords: 0, error:err};
    });

}

module.exports.getAll = function(getClient, collection, res) {
  var client = getClient();
  client.db("haibatty").collection(collection).find().toArray(function(err, result) {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.json(result);
    }
  });
};


module.exports.closeClient = function(client) {
  client.close();

}

module.exports.returnResponse = function(results, res) {
  console.log("Results:" + results)
  res.json(results)
}
