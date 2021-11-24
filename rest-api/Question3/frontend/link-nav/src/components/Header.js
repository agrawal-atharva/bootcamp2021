import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
	const [homePage, setHomePage] = useState();

	const homePageHandler = () => {
		fetch('/home')
			.then((response) => response.text())
			.then((html) => {
				const parser = new DOMParser();
				let doc = parser.parseFromString(html, 'text/html');
				setHomePage(doc);
				console.log(doc);
				return homePage;
			});
	};

	return (
		<div className={styles.header}>
			<ul className={styles.list}>
				<li className={styles.item} onClick={homePageHandler}>
					Home
				</li>
				<li className={styles.item}>About</li>
				<li className={styles.item}>Contact Us</li>
			</ul>
		</div>
	);
};

export default Header;
