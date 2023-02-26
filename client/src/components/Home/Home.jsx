import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './Home.module.css';
import nofound from './img/punch.gif';

import {
	getDog,
	filterByTemperament,
	getTemperaments,
	filerCreated,
	orderByName,
	orderByWeight,
} from '../../redux/actions';
import {Link} from 'react-router-dom';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
// import FiltersAndSorting from '../FiltersAndSorting/FiltersAndSorting';
import Paginado from '../Paginado/Paginado';
import Navbar from '../Navbar/Navbar';

function Home() {
	let dispatch = useDispatch();

	let allDogs = useSelector((state) => state.dogs);
	let temperaments = useSelector((state) => state.temperaments);

	let [currentPage, setCurrentPage] = useState(1);
	let [dogsPerPage, setDogsPerPage] = useState(8);
	let [order, setOrder] = useState('');
	let [filter, setFilter] = useState(allDogs);
	let [showText, setShowText] = useState(true);

	let IndexLastDog = currentPage * dogsPerPage;
	let IndexFirstDog = IndexLastDog - dogsPerPage;
	let currentDogs = allDogs.slice(IndexFirstDog, IndexLastDog);

	let paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getDog());
		dispatch(getTemperaments());
		const timer = setTimeout(() => {
			setShowText(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, [dispatch]);

	let handleClick = (e) => {
		e.preventDefault();
		dispatch(getDog());
	};

	let handleFilterTemperament = (e) => {
		e.preventDefault();
		setCurrentPage(1);
		dispatch(filterByTemperament(e.target.value));
	};

	let hanfleFilterCreated = (e) => {
		e.preventDefault();
		setCurrentPage(1);
		dispatch(filerCreated(e.target.value));
	};

	let handleOrder = (e) => {
		setCurrentPage(1);
		let order = e.target.value;

		if (order === 'asc' || order === 'des') {
			dispatch(orderByName(e.target.value));
			setOrder(`Ordenado ${e.target.value}`);
		} else {
			dispatch(orderByWeight(e.target.value));
			setOrder(`Ordenado ${e.target.value}`);
		}
	};

	return (
		<div className={style.Home}>
			<Navbar
				handleClick={handleClick}
				handleFilterTemperament={handleFilterTemperament}
				hanfleFilterCreated={hanfleFilterCreated}
				handleOrder={handleOrder}
				temperaments={temperaments}
			/>

			<Paginado
				allDogs={allDogs.length}
				dogsPerPage={dogsPerPage}
				paginado={paginado}
			/>

			<div className={style.card_grid}>
				{currentDogs.length > 0 ? (
					currentDogs?.map((d) => {
						return (
							<Card
								image={d.image}
								name={d.name}
								temperaments={d.temperaments}
								weight={d.weight}
								createdInDb={d.createdInDb}
								id={d.id}
							/>
						);
					})
				) : (
					<div>
						{showText ? (
							<div className={style.spinner}>
								<div className={style.spinner1}></div>
							</div>
						) : (
							<div className={style.load}>
								<h2>Dog not found</h2>
								<img src={nofound} alt="GIF" />
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
export default Home;
