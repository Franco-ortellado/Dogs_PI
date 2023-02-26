import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchDog} from '../../redux/actions';
import style from './SearchBar.module.css';
import {Link} from 'react-router-dom';
import Logo from './img/Logo.png';
import logoCreate from './img/icoperro.png';
import plus from './img/icoplus.png';

function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const handleInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handleInputSubmit = (e) => {
		e.preventDefault();
		dispatch(searchDog(name));
	};

	return (
		<div className={style.searchContainer}>
			<div className={style.search}>
				<input
					onChange={(e) => handleInputChange(e)}
					type="text"
					className={style.search__input}
					placeholder="Search..."
				/>
				<button
					type="submit"
					className={style.search__button}
					onClick={(e) => handleInputSubmit(e)}
				>
					<svg
						className={style.search__icon}
						aria-hidden="true"
						viewBox="0 0 24 24"
					>
						<g>
							<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
						</g>
					</svg>
				</button>
			</div>
			<Link to="/">
				<img className={style.logo} src={Logo} alt="Logo" />
			</Link>

			<Link to="/dogs" className={style.search__link}>
				<img src={plus} alt="" />
				<img src={logoCreate} alt="" />
			</Link>
		</div>
	);
}

export default SearchBar;
