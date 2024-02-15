const mongoose = require('mongoose');

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
};

mongoose.set('strictQuery', true);

module.exports = connectDb;
