const Donation = require("./donation.model");

exports.createDonation = (req, res) => {
  Donation.createDonation(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Donation created",
      status: "PENDING"
    });
  });
};

exports.getUserDonations = (req, res) => {
  Donation.getDonationsByUser(req.params.userId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getAllDonations = (req, res) => {
  Donation.getAllDonations((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
