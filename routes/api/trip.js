const router = require('express').Router();
const tripController = require("../../controllers/tripController");

router.route("/")
    .post(tripController.create);


module.exports = router;