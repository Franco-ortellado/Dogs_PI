let validateEmpty = (input) => {
	if (
		input ===
		{
			name: '',
			max_height: 0,
			min_height: 0,
			max_weight: 0,
			min_weight: 0,
			max_life: 0,
			min_life: 0,
			image: '',
			temperaments: [],
		}
	) {
		return false;
	}

	return true;
};

export default validateEmpty;
