const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("This is my DB", db);
        db.Trip.find({}).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    },
}