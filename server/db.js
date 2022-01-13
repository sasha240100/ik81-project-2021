const {MongoClient} = require('mongodb');

const DB_NAME = "ik81app1";

const DB_URI =
  "mongodb+srv://admin:admin@ik81-project-db.jvffm.mongodb.net/" + DB_NAME;

const connection = MongoClient.connect(DB_URI)

// Connect to the db
module.exports = async () => {
  const client = await connection;

  return client.db(DB_NAME);
};