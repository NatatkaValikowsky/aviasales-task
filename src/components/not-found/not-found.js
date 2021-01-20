import React from 'react';
import airplane from '../../img/airplane.svg';

import classes from './not-found.module.scss';

const NotFound = () => (
	<div className={classes['not-found']}>
		<img className={classes['not-found__img']} src={airplane} alt="Самолет" />
		<p className={classes['not-found__text']}>Рейсов, подходящих под заданные фильтры, не найдено</p>
	</div>
);

export default NotFound;
