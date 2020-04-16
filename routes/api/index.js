const router = require("express").Router();
const tripRoutes = require("./trip");

router.use("/trip", tripRoutes);

module.exports = router;