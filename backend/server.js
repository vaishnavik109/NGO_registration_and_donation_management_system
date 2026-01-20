const express = require("express");
const app = express();

console.log("🚨 THIS SERVER.JS FILE IS RUNNING 🚨");
console.log("📂 PATH:", __filename);

app.get("/ping", (req, res) => {
  res.send("PING OK FROM THIS FILE");
});

app.listen(3000, () => {
  console.log("✅ SERVER LISTENING ON 3000");
});

