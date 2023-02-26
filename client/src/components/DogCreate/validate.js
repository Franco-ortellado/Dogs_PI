let validate = (inputs) => {
	let errors = {};
	const regex = /[^a-zA-Z ]/;

	const min_height = parseInt(inputs.min_height);
	const max_height = parseInt(inputs.max_height);
	const max_weight = parseInt(inputs.max_weight);
	const min_weight = parseInt(inputs.min_weight);
	const max_life = parseInt(inputs.max_life);
	const min_life = parseInt(inputs.min_life);

	if (inputs.name.length < 3)
		errors.name = 'El nombre del perro debe tener almenos 3 caracteres';
	else if (inputs.name.length > 30)
		errors.name = 'El nomre del perro no puede tener mas de 20 caracteres';
	else if (regex.test(inputs.name))
		errors.name = 'El nombre del perro solo debe que contener letras';

	if (min_height >= max_height)
		errors.height = 'La altura maxima debe ser mayor a la altura minima';
	else if (min_height <= 0 || max_height <= 0)
		errors.height = 'Las alturas deben ser numeros positivos';
	else if (max_height > 100)
		errors.height = 'La altura no puede ser mayor a 100';

	if (min_weight >= max_weight)
		errors.weight = 'El peso maximo debe ser mayor al peso minimo';
	else if (min_weight <= 0 || max_weight <= 0)
		errors.weight = 'Los pesos deben ser numeros positivos';
	else if (max_weight > 100)
		errors.weight = 'El peso no puede ser mayor a 100 Kilos';

	if (min_life >= max_life)
		errors.life_span = 'El año maximo debe ser mayor al año minimo';
	else if (min_life <= 0 || max_life <= 0)
		errors.life_span = 'Los años deben ser numeros positivos';

	return errors;
};

export default validate;
