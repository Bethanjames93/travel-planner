const db = require("../models/trip.model");

module.exports = {
    findAll: function(req, res) {
        db.Trip
            .find({})
            .then(dbTrip => res.json(dbTrip))
            .catch(err => res.status(422).json(err));
    },
}