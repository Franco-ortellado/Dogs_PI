import React from 'react';
import style from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import reload from './img/reload.png';
import order from './img/order.png';
import filter from './img/filter.png';
import {Link} from 'react-router-dom';

function Navbar(props) {
	return (
		<nav className={style.navbar}>
			<SearchBar />
			<hr />

			<div className={style.filters}>
				<img
					className={style.reload}
					src={reload}
					alt=""
					onClick={(e) => props.handleClick(e)}
				/>

				<img src={order} alt="" />
				<select onChange={(e) => props.handleOrder(e)}>
					<optgroup label="Name">
						<option value="asc">Ascending (A-Z)</option>
						<option value="des">Descending (Z-A)</option>
					</optgroup>
					<optgroup label="Weight">
						<option value="min">MIN-MAX</option>
						<option value="max">MAX-MIN</option>
					</optgroup>
				</select>

				<img src={filter} alt="" />
				<select
					name="temp"
					id=""
					onChange={(e) => props.handleFilterTemperament(e)}
				>
					<option value="All">Temperaments</option>
					{props.temperaments?.map((t) => (
						<option key={t.id} value={t.name}>
							{t.name}
						</option>
					))}
				</select>
				<select
					name="origin"
					id=""
					className="card-grid"
					onChange={(e) => props.hanfleFilterCreated(e)}
				>
					<option value="all">All/Origen</option>
					<option value="db">Created</option>
					<option value="api">Api</option>
				</select>
			</div>
		</nav>
	);
}

export default Navbar;
