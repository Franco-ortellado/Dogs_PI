import React from 'react';
import {Link} from 'react-router-dom';
import dogImg from './img/pug.png';
import Logo from './img/Logo.png';
import styles from './LandingPage.module.css';

function LandingPage() {
	return (
		<div className={styles.container}>
			<div className={styles.dog_image}>
				<img src={dogImg} alt="dogImage" />
			</div>
			<div className={styles.home}>
				<img src={Logo} alt="logo" />
				{/* <h2>SOY HENRY PI</h2>
				<h1>Dogs</h1> */}
				<Link to="/home" className={styles.btn}>
					<button>HOME</button>
				</Link>
			</div>
		</div>
	);
}

export default LandingPage;
