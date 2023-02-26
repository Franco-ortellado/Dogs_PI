import React from 'react';
import style from './Paginado.module.css';

function Paginado(props) {
	let pageNum = [];

	for (let i = 0; i < Math.ceil(props.allDogs / props.dogsPerPage); i++) {
		pageNum.push(i + 1);
	}

	return (
		<div className={style.pagination}>
			<nav>
				{pageNum &&
					pageNum.map((num) => (
						<button>
							<a
								onClick={() => {
									props.paginado(num);
								}}
							>
								{num}
							</a>
						</button>
					))}
			</nav>
		</div>
	);
}

export default Paginado;
