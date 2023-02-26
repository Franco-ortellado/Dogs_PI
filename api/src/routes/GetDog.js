const Router = require('express');
const axios = require('axios');

const {Dog, Temperament, Op} = require('../db');

const {getAllDogs} = require('../controllers/getAllDogs');
const {getDogById} = require('../controllers/getDogById');
const {createDog} = require('../controllers/setDog');

const router = Router();

router.get('/', async (req, res) => {
	let name = req.query.name;

	if (name) {
		try {
			let dogs = await getAllDogs(name);

			res.status(200).json(dogs);
		} catch (err) {
			res.status(404).json({error: err.message});
		}
	} else {
		let alldogs = await getAllDogs();
		res.status(200).json(alldogs);
	}
});

router.get('/:idRaza', async (req, res) => {
	let {idRaza} = req.params;
	try {
		let dog = await getDogById(idRaza);
		res.status(200).json(dog);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
});

router.post('/', async (req, res) => {
	let {name, image, height, weight, life_span, temperaments} = req.body;

	try {
		res.status(200).send(
			await createDog(
				name,
				image,
				height,
				weight,
				life_span,
				temperaments
			)
		);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
});

module.exports = router;
