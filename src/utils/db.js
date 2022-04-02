const mongoose = require('mongoose');

const dbConnect = (uri = process.env.DB_URI, opts = {}) => {
  if (process.env.NODE_ENV === 'development')
    mongoose.set('debug', (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
    });

  return mongoose.connect(uri, { ...opts, useNewUrlParser: true });
};

module.exports = { dbConnect };
