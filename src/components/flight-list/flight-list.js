import React from 'react';
import Flight from '../flight';

import classes from './flight-list.module.scss';

const FlightList = () => (
	<ul className={classes['result-items']}>
		<Flight />
	</ul>
);

export default FlightList;
