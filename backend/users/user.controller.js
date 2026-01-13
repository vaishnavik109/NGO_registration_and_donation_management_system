const User = require("./user.model");

exports.registerDetails = (req, res) => {
  const { user_id, phone, address } = req.body;

  User.saveDetails({ user_id, phone, address }, (err) => {
    if (err) {
      return res.status(500).json({ message: "Registration failed" });
    }
    res.json({ message: "Registration saved successfully" });
  });
};
