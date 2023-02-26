const {getAllDogs} = require('./getAllDogs');

const {Dog, Temperament, Op} = require('../db');

let createDog = async (
	name,
	image,
	height,
	weight,
	life_span,
	temperaments
) => {
	let newDog = await Dog.create({
		name,
		image,
		height,
		weight,
		life_span,
	});

	let tempersDB = await Temperament.findAll({
		where: {name: temperaments},
	});

	newDog.addTemperament(tempersDB);

	return newDog;
};
module.exports = {createDog};
