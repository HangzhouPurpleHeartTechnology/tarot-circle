const dbname = 'tarot-circle';
module.exports = {
  mongoURI: `mongodb+srv://cluster0.aduqr.mongodb.net/${dbname}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`,
  secretOrKey: 'secretOrKey',
};
