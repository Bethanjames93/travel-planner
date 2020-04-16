const router = require('express').Router();
let Trip = require('../../models');
const tripController = require("../../controllers/tripController");

router.route("/")
    .get(tripController.findAll);

// router
//     .route("/:id")
//     .get(tripController.findById);

router.route('/add').post((req, res) => {
    const location = req.body.location;
    const landmark = req.body.landmark;
    const viewpoint = req.body.viewpoint;
    const photospot = req.body.photospot;
    const cafe = req.body.cafe;

    const newTrip = new Trip({
        location,
        landmark,
        viewpoint,
        photospot,
        cafe,
    });

    newTrip.save()
    .then(() => res.json('New Trip Added!'))
    .catch(err => res.status(400).json("Error: " + err));
});

// router.route('/:id').get((req, res) => {
//     Trip.findById(req.params.id)
//     .then(trip => res.json(trip))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     Trip.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Trip deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Trip.findById(req.params.id)
//     .then(trip => {
//         trip.location = req.body.location;
//         trip.landmark = req.body.landmark;
//         trip.viewpoint = req.body.viewpoint; 
//         trip.photospot = req.body.photospot;
//         trip.cafe = req.body.cafe;

//         trip.save()
//         .then(trip => res.json(trip))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });



module.exports = router;