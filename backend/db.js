const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",   
  user: "root",
  password: "vaish@9920",
  database: "ngo_project",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("DB CONNECTION ERROR:", err);
    return;
  }
  console.log("Database connected");
});

module.exports = db;
