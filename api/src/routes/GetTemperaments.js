const Router = require('express');
const axios = require('axios');
const {getApiInfo} = require('../controllers/controllers');
const {Temperament} = require('../db');

// const {getTemperaments} = require('../controllers/getTemperaments');
// const {getAllDogs} = require('../controllers/getAllDogs');
// const {getDogById} = require('../controllers/getDogById');

const router = Router();

router.get('/', async (req, res) => {
	let apiInfo = await getApiInfo();

	let tempArrays = apiInfo.map((e) => e.temperaments);

	let tempArr = tempArrays.flatMap((e) => e);

	tempArr.forEach((e) => {
		if (e) {
			Temperament.findOrCreate({
				where: {name: e},
			});
		}
	});

	let allTemperaments = await Temperament.findAll();
	res.status(200).send(allTemperaments);
});

module.exports = router;
