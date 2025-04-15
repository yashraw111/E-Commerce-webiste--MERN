const { default: mongoose } = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/ecommerce-full-stack";
// const MONGODB_URL =
//   "mongodb+srv://ecommerceweb:ecommerce$123@ecommerce-web.6lcxr.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web";

exports.main = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.error("error connecting to db", err);
    });
};
