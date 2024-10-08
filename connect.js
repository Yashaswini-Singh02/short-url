const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo error", err));
}

module.exports = {
  connectToMongoDB,
};
