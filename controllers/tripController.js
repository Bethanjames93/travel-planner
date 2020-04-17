const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("This is my DB", db);
        db.Trip.find({}).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Trip.findById(req.params.id).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Trip.create(req.body).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Trip.findOneAndUpdate({ _is: req.params.id }, req.body).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Trip.findById({ _id: req.params.id }).then(dbTrip => dbTrip.remove()).then(dbTrip => res.json(dbTrip)).catch(err => res.status(422).json(err));
    }
};