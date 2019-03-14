const router = require('express').Router();

const restricted = require('../../middleware/restricted/restrictedMiddleware');

const Donations = require('./donationsModel');

router.get('/', restricted, (req, res) => {
	Donations.find()
		.then(donation => {
			res.json({ donation });
		})
		.catch(err => res.send(err));
});

module.exports = router;
