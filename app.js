const express = require("express");
const app = express();
const userDetails = require("./userModel.js"); // Mongoose model

const PORT = 3000;

app.get("/create", async (req, res) => {
    const newUser = await userDetails.create({
        name: "Buddhi",
        nickname: "Bh",
        email: "pujan@23gmail.com",
        age: 67,
    });

    res.status(201).json(newUser);

});


app.get("/users", async (req, res) => {

    const users = await userDetails.findOneAndUpdate(
        { name: "Buddhi" },
        { nickname: "Bhojey" },
        { new: true });
    res.status(200).json(users);

});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});