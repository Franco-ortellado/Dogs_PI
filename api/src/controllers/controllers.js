const axios = require('axios');
const {Sequelize, Op} = require('sequelize');
const {API_KEY} = process.env;

const {Dog, Temperament} = require('../db');

let getApiInfo = async () => {
	let alldogs = await axios
		.get('https://api.thedogapi.com/v1/breeds')
		.then((res) => res.data);

	const apiInfo = await alldogs.map((e) => {
		let tempArr = e.temperament?.split(', ');
		return {
			id: e.id,
			name: e.name,
			image: e.image.url,
			height: e.height.metric,
			weight: e.weight.metric,
			life_span: e.life_span,
			temperaments: tempArr,
		};
	});
	return apiInfo;
};

let getDatainfo = async () => {
	return await Dog.findAll({
		include: {
			model: Temperament,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

module.exports = {getApiInfo, getDatainfo};
