import React from 'react';
import S7Logo from './S7_Logo.png';

import classes from './flight.module.scss';

const Flight = () => (
	<li className={`${classes['result-items__item']} ${classes['result-item']}`}>
		<header className={classes['result-item__header']}>
			<span className={classes.price}>13 400 &#8381;</span>
			<img src={S7Logo} alt="" className={classes['item-logo']} />
		</header>
		<div className={classes['fly-info']}>
			<ul className={classes.route}>
				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>MOW – HKT</span>
					<span className={classes['info-item__value']}>10:45 – 08:00</span>
				</li>

				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>MOW – HKT</span>
					<span className={classes['info-item__value']}>11:20 – 00:50</span>
				</li>
			</ul>

			<ul className={classes.length}>
				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>В пути</span>
					<span className={classes['info-item__value']}>21ч 15м</span>
				</li>

				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>В пути</span>
					<span className={classes['info-item__value']}>13ч 30м</span>
				</li>
			</ul>

			<ul className={classes.stops}>
				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>2 пересадки</span>
					<span className={classes['info-item__value']}>HKG, JNB</span>
				</li>

				<li className={classes['info-item']}>
					<span className={classes['info-item__title']}>1 пересадка</span>
					<span className={classes['info-item__value']}>HKG</span>
				</li>
			</ul>
		</div>
	</li>
);

export default Flight;
