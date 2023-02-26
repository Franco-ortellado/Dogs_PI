import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {getTemperaments, postDog} from '../../redux/actions';
import validate from './validate';
import validateEmpty from './validateEmpty';
import styles from './DogCreate.module.css';
import dog from './dog.png';

const imageDogDefault =
	'https://imagenes.t13.cl/images/original/2018/01/1515518836-perro.jpg';

function DogCreate() {
	let dispatch = useDispatch();
	let temperaments = useSelector((state) => state.temperaments);

	let [input, setInput] = useState({
		name: '',
		max_height: 2,
		min_height: 1,
		max_weight: 2,
		min_weight: 1,
		max_life: 2,
		min_life: 1,
		image: '',
		temperaments: [],
	});

	let [errors, setError] = useState({
		name: '',
		height: '',
		weight: '',
		life_span: '',
		image: '',
		temperaments: [],
	});

	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	let handleChange = (e) => {
		setError(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);

		setInput({
			...input,
			[e.target.name]: e.target.value,
		});

		// if (input.temperaments.length === 0) {
		// 	setError({
		// 		...errors,
		// 		temperaments: 'Seleccione al menos 1 temperamento',
		// 	});
		// }
	};

	let handleSelect = (e) => {
		setInput({
			...input,
			temperaments: [...input.temperaments, e.target.value],
		});
	};

	let handleSubmit = (e) => {
		e.preventDefault();

		let weight = `${input.min_weight} - ${input.max_weight}`;
		let height = `${input.min_height} - ${input.max_height}`;
		let life_span = `${input.min_life} - ${input.max_life} years`;

		let obj = {
			name: input.name,
			weight,
			height,
			life_span,
			image: input.image,
			temperaments: input.temperaments,
		};
		if (obj.image.length === 0) {
			obj.image = imageDogDefault;
		}

		if (
			Object.keys(errors).length === 0 &&
			validateEmpty(input) &&
			input.temperaments.length > 0
		) {
			dispatch(postDog(obj));
			alert('Perro Creado!!!');

			setInput({
				name: '',
				max_height: 0,
				min_height: 0,
				max_weight: 0,
				min_weight: 0,
				max_life: 0,
				min_life: 0,
				image: '',
				temperaments: [],
			});
		} else {
			alert('Complete el formulario');
		}
	};

	let handleDelete = (temperament) => {
		setInput({
			...input,
			temperaments: input.temperaments.filter(
				(temp) => temp !== temperament
			),
		});
	};

	return (
		<div className={styles.formContainer}>
			{/* <img src={dog} alt="" /> */}

			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.titulo_form}>
					<Link to="/home">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-arrow-bar-left"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="4" y1="12" x2="14" y2="12" />
							<line x1="4" y1="12" x2="8" y2="16" />
							<line x1="4" y1="12" x2="8" y2="8" />
							<line x1="20" y1="4" x2="20" y2="20" />
						</svg>
					</Link>
					<h1>Create Dog</h1>
				</div>
				<div className={styles.inputGroup}>
					<input
						type="text"
						value={input.name}
						placeholder="Name"
						name="name"
						onChange={(e) => handleChange(e)}
					/>

					{errors.name && <p>{errors.name}</p>}
				</div>
				<hr />
				<div>
					<label htmlFor="">Height: </label>

					<input
						name="min_height"
						type="number"
						value={input.min_height}
						onChange={(e) => handleChange(e)}
					/>
					<input
						name="max_height"
						type="number"
						value={input.max_height}
						onChange={(e) => handleChange(e)}
					/>
					{errors.height && <p>{errors.height}</p>}
				</div>
				<div>
					<label htmlFor="">Weight: </label>

					<input
						name="min_weight"
						type="number"
						value={input.min_weight}
						onChange={(e) => handleChange(e)}
					/>
					<input
						name="max_weight"
						type="number"
						value={input.max_weight}
						onChange={(e) => handleChange(e)}
					/>
					{errors.weight && <p>{errors.weight}</p>}
				</div>
				<div>
					<label htmlFor="">Life Span: </label>
					<input
						name="min_life"
						type="number"
						placeholder="min life"
						value={input.min_life}
						onChange={(e) => handleChange(e)}
					/>
					<input
						name="max_life"
						type="number"
						placeholder="max life"
						value={input.max_life}
						onChange={(e) => handleChange(e)}
					/>
					{errors.life_span && <p>{errors.life_span}</p>}
				</div>
				<hr />
				<div className={styles.formImage}>
					<label htmlFor="">Dog Image: </label>
					<input
						name="image"
						type="text"
						placeholder="ejemplo: https://perrito.jpg"
						value={input.image}
						onChange={(e) => handleChange(e)}
					/>
					{input.image && <img src={input.image} alt="dog" />}
					{/* <img src={input.image} alt="imagen" /> */}
				</div>
				<hr />
				<div className={styles.temp}>
					<h3>SELECT TEMPERAMENT/S:</h3>
					<label>Temperaments: </label>
					<select
						name="temperaments"
						id=""
						onChange={(e) => handleSelect(e)}
					>
						{temperaments?.map((t) => {
							return <option value={t.name}>{t.name}</option>;
						})}
					</select>

					{/* <p>{input.temperaments?.map((t) => t + ', ')}</p> */}

					<div className={styles.tempsInput}>
						{/* {errors.temperaments && <p>{errors.temperaments}</p>} */}
						{input.temperaments.map((temp) => (
							<span key={temp}>
								{temp}{' '}
								<button
									type="button"
									onClick={() => handleDelete(temp)}
								>
									X
								</button>{' '}
							</span>
						))}
					</div>
				</div>
				<button className={styles.btn} type="submit">
					Create
				</button>
			</form>
		</div>
	);
}

export default DogCreate;
