const { MongoClient } = require('mongodb');
const fs = require('fs');
const credentials = fs.readFileSync('./config/credentials/cert.pem');
const dbname = 'tarot-circle';
const user = 'user';
const client = new MongoClient(
  `mongodb+srv://cluster0.aduqr.mongodb.net/${dbname}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&ssl=true`,
  {
    sslKey: credentials,
    sslCert: credentials,
    useUnifiedTopology: true,
  }
);

module.exports = async function run() {
  try {
    await client.connect();
    const database = client.db(dbname);
    const collection = database.collection(user);
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    console.log('mongodb connected');
  } finally {
    await client.close();
  }
};
