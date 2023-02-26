const {getAllDogs} = require('./getAllDogs');

let getDogById = async (id) => {
	let allDogs = await getAllDogs();
	let dog = allDogs.find((e) => e.id == id);

	if (dog) {
		return dog;
	} else {
		throw Error('ID no encontrado');
	}
};
module.exports = {getDogById};
