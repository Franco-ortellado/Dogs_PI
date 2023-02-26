function transformTemperaments(dogs) {
	return dogs.map((dog) => {
		if (dog.temperaments) {
			const transformedTemperaments = dog.temperaments.map((temp) => {
				if (typeof temp === 'object') {
					return temp.name;
				}
				return temp;
			});
			return {
				...dog,
				temperaments: transformedTemperaments,
			};
		}

		return dog;
	});
}

export default transformTemperaments;
