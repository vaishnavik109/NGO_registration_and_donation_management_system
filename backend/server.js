const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

// ---- ROUTES ----

// Auth routes (Person 1)
app.use("/auth", require("./auth/auth.routes"));

// User registration routes (Person 1)
app.use("/users", require("./users/user.routes"));



// ---- SERVER ----
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
