function filterDogsByTemp(dogs, temperament) {
	if (temperament === 'All') {
		return dogs;
	} else {
		let filter = dogs.filter((dog) => {
			return dog.temperaments?.includes(temperament);
		});
		return filter;
	}
}

export default filterDogsByTemp;

// const fearlessDogs = filterDogsByTemp(dogs, 'Fearless');
// console.log(fearlessDogs);
