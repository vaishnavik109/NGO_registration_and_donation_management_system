const bcrypt = require("bcrypt");
const Auth = require("./auth.model");

// Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
    role: "USER"
  };

  Auth.createUser(user, (err) => {
    if (err) {
      return res.status(400).json({ message: "User already exists" });
    }
    res.status(201).json({ message: "Signup successful" });
  });
};

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  Auth.findByEmail(email, async (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user_id: user.id,
      role: user.role
    });
  });
};
