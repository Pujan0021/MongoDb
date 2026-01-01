const express = require("express");
const app = express();
const userDetails = require("./userModel.js"); // Mongoose model
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get("/create", async (req, res) => {
//     const newUser = await userDetails.create({
//         name: "Buddhi",
//         nickname: "Bh",
//         email: "pujan@23gmail.com",
//         age: 67,
//     });

//     res.status(201).json(newUser);

// });

// app.get("/update", async (req, res) => {

//     const users = await userDetails.findOneAndUpdate(
//         { name: "Buddhi" },
//         { nickname: "Bhojey" },
//         { new: true });
//     res.status(200).json(users);

// });
app.get("/", (req, res) => {
    res.send(`
        <form action="/create" method="POST">
  <!-- Name -->
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>
  <br><br>

  <!-- Email -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br><br>

  <!-- Nickname -->
  <label for="nickname">Nickname:</label>
  <input type="text" id="nickname" name="nickname">
  <br><br>

  <!-- Age -->
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="1" max="120" required>
  <br><br>

  <!-- Submit -->
  <button type="submit">Submit</button>
</form>`)

})
app.post("/create", async (req, res) => {
    const user = await userDetails.create(req.body);
    res.status(200).send(user);

});
/**app.get("/users", async (req, res) => {

    const users = await userDetails.findOneAndDelete(
        { name: "Buddhi" }

    )
});*/

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});