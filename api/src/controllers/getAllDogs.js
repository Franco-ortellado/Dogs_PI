const {getApiInfo, getDatainfo} = require('./controllers');

let getAllDogs = async (name) => {
	let api_info = await getApiInfo();
	let db_info = await getDatainfo();

	let all_info = api_info.concat(db_info);

	if (name) {
		const dogs = all_info.filter((e) =>
			e.name.toLowerCase().includes(name.toLowerCase())
		);
		if (dogs.length) {
			return dogs;
		} else {
			return [];
		}
	}

	return all_info;
};

module.exports = {getAllDogs};
