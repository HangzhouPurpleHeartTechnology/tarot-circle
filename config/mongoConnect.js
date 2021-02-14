const mongoose = require('mongoose');
const fs = require('fs');
const dbname = 'tarot-circle';
const uri = `mongodb+srv://cluster0.aduqr.mongodb.net/${dbname}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&ssl=true`;

module.exports = async function run() {
  const credentials = fs.readFileSync('./config/credentials/cert.pem');
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslKey: credentials,
    sslCert: credentials,
  });
};
