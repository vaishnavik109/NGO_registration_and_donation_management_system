const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("REGISTER ROUTE HIT", req.body);
  res.json({ message: "REGISTER OK" });
});

module.exports = router;
