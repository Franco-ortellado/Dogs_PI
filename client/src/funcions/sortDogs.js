function sortDogs(dogs, order) {
	if (order === 'asc') {
		dogs.sort((a, b) => a.name.localeCompare(b.name));
	} else if (order === 'des') {
		dogs.sort((a, b) => b.name.localeCompare(a.name));
	}
	return dogs;
}

export default sortDogs;
