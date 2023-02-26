import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {getDogById} from '../../redux/actions';
import styles from './Detail.module.css';
import home from './img/home.png';
import nofound from './img/punch.gif';

function Detail() {
	let {id} = useParams();

	const [showText, setShowText] = useState(true);

	let dispatch = useDispatch();

	let mydog = useSelector((state) => state.dogDetail);

	useEffect(() => {
		dispatch(getDogById(id));
		const timer = setTimeout(() => {
			setShowText(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, [dispatch, id]);

	return (
		<div className={styles.container}>
			{mydog.length > 0 ? (
				<>
					<div className={styles.imageContainer}>
						<img src={mydog[0].image} alt={mydog[0].name} />
					</div>
					<div className={styles.detailsContainer}>
						<Link to="/home">
							<img src={home} alt="" />
						</Link>
						<h1>{mydog[0].name}</h1>

						<h2>ID: {mydog[0].id}</h2>
						<h2>Weight: {mydog[0].weight} Kls.</h2>
						<h2>Height: {mydog[0].height} Cm</h2>
						<h2>Life span: {mydog[0].life_span}</h2>
						<h2>Temperaments:</h2>
						<div className={styles.temperaments}>
							{mydog[0].temperaments?.map((t, i) => (
								<span className={styles.temperament} key={i}>
									{t}
								</span>
							))}
						</div>
					</div>
				</>
			) : (
				<div>
					{showText ? (
						<p className={styles.loading}>Loading...</p>
					) : (
						<div>
							<div>
								<Link to="/home">
									<img src={home} alt="" />
								</Link>
							</div>
							<img src={nofound} alt="GIF animado" />
							<h2>Perro no encontrado</h2>
						</div>
					)}
				</div>

				// <p className={styles.loading}>Loading...</p>
			)}
		</div>
	);
}

export default Detail;
