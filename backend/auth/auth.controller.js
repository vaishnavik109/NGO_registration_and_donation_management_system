function signup(req, res) {
  console.log("REGISTER HIT:", req.body);
  res.json({ message: "Auth route working" });
}

module.exports = { signup };
