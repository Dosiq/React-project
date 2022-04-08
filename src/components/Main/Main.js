import React from 'react'
import styles from './Main.css'
import Card from './Card/Card.js'
import Slider from './Slider/Slider.js'


const Main = () => {


	return (
		<div className="Main">
			<div className="Main__content">
				<Slider />
				<div>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="Main__recomendation">
				<div className="Main__header">
					<div className="Main__userLogo">
						<span class="material-icons-outlined">
							account_circle
						</span>
					</div>
					<div className="Main__userDate">
						<div className="Main__userName">Bolatov Aidos</div>
						<div className="Main__userPosition">Kazakhstan, Almaty</div>
					</div>
						<div className="Main__switch">Switch</div>
				</div>
			</div>
		</div>
	);
}
export default Main;