const mongoose = require("mongoose");
const MongooseURL = "mongodb://localhost:27017/Login";
mongoose.connect(MongooseURL);
const UserSchema = new mongoose.Schema({
    fullName: String,
    gender: String,
    age: Number,
    email: String,
    password: String

})
module.exports = mongoose.model("User", UserSchema);