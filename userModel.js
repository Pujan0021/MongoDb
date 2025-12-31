const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/");
const userSchema = mongoose.Schema({
    name: String,
    nickname: String,
    email: String,
    age: Number
})
module.exports = mongoose.model("UserDetails", userSchema);
