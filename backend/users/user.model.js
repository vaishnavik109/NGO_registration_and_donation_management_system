const db = require("../db");

exports.saveDetails = (data, callback) => {
  const query = `
    INSERT INTO user_details (user_id, phone, address)
    VALUES (?, ?, ?)
  `;
  db.query(query, [data.user_id, data.phone, data.address], callback);
};
