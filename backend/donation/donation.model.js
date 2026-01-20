const db = require("../db");

exports.createDonation = (data, callback) => {
  const query = `
    INSERT INTO donations (user_id, amount, status, created_at)
    VALUES (?, ?, ?, NOW())
  `;
  db.query(
    query,
    [data.user_id, data.amount, "PENDING"],
    callback
  );
};

exports.getDonationsByUser = (userId, callback) => {
  const query = `
    SELECT * FROM donations WHERE user_id = ?
  `;
  db.query(query, [userId], callback);
};

exports.getAllDonations = (callback) => {
  const query = `
    SELECT * FROM donations
  `;
  db.query(query, callback);
};
