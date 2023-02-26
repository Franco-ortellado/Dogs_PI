import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
	return (
		<div className={styles.flip_card}>
			<Link to={`/home/${props.id}`}>
				<div className={styles.flip_card_inner}>
					<div className={styles.flip_card_front}>
						<img
							src={props.image}
							alt=""
							className={styles.card_image}
						/>
						<h3 className={styles.card_title}>{props.name}</h3>
						<p className={styles.card_weight}>
							Weight: {props.weight} Kls
						</p>
					</div>
					<div className={styles.flip_card_back}>
						<h2>Temperaments</h2>

						{props.temperaments?.map((t) => (
							<p key={t}>{t}</p>
						))}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Card;
