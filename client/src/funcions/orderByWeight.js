function orderByWeight(dogs, order) {
	return dogs.sort((a, b) => {
		const [aMinWeight, aMaxWeight] = a.weight.split(' - ');
		const [bMinWeight, bMaxWeight] = b.weight.split(' - ');

		if (order === 'min') {
			return (
				parseInt(aMinWeight) - parseInt(bMinWeight) ||
				parseInt(aMaxWeight) - parseInt(bMaxWeight)
			);
		} else if (order === 'max') {
			return (
				parseInt(bMinWeight) - parseInt(aMinWeight) ||
				parseInt(bMaxWeight) - parseInt(aMaxWeight)
			);
		} else {
			return 0;
		}
	});
}

export default orderByWeight;
