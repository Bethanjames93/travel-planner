const router = require("express").Router();
const tripRoutes = require("./trip");
const tripsRoutes = require("./trips");

router.use("/trip", tripRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;