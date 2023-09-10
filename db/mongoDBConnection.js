const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.TMS_ATLAS_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

async function connectToDatabase() {
  try {
    /**
     * mongoClient and database was set to globally
     */
    if (mongoClient && database) {
      return { mongoClient, database };
    }

    /**
     * mongoClient and database set to globally
     * when environment is local/development
     */
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      /**
       * when production environment
       */
      mongoClient = await new MongoClient(uri, options).connect();
    }

    /**
     * Finally connect to the database
     */

    database = await mongoClient.db(process.env.TMS_ATLAS_DB);

    return { mongoClient, database };
  } catch (err) {
    console.log("Database Error", err);
  }
}

module.exports = { connectToDatabase };
