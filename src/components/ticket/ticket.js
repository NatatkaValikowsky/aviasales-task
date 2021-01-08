import React from 'react';
import PropTypes from 'prop-types';

import classes from './ticket.module.scss';
import { getDurationString, getEnding, getSegmentTime } from '../../utils';

const Ticket = ({ price, carrier, segments, keyVal }) => {
	const renderFlySegment = ({ origin, destination, duration, stops, date }, index) => (
		<div key={`${keyVal}-${index}`} className={classes['fly-info']}>
			<ul className={classes.route}>
				<li key={`${keyVal}-${index}-info-route`} className={classes['info-item']}>
					<span className={classes['info-item__title']}>{`${origin} - ${destination}`}</span>
					<span className={classes['info-item__value']}>{getSegmentTime(date, duration)}</span>
				</li>
			</ul>

			<ul className={classes.length}>
				<li key={`${keyVal}-${index}-info-length`} className={classes['info-item']}>
					<span className={classes['info-item__title']}>В пути</span>
					<span className={classes['info-item__value']}>{getDurationString(duration)}</span>
				</li>
			</ul>

			<ul className={classes.stops}>
				<li key={`${keyVal}-${index}-info-stops`} className={classes['info-item']}>
					<span className={classes['info-item__title']}>{getEnding(stops.length)}</span>
					<span className={classes['info-item__value']}>{stops.join(', ')}</span>
				</li>
			</ul>
		</div>
	);

	return (
		<li key={`${keyVal}-item`} className={`${classes['result-items__item']} ${classes['result-item']}`}>
			<header className={classes['result-item__header']}>
				<span className={classes.price}>{price.toLocaleString()} &#8381;</span>
				<img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} className={classes['item-logo']} />
			</header>
			{segments.map((item, index) => renderFlySegment(item, index))}
		</li>
	);
};

export default Ticket;

Ticket.propTypes = {
	price: PropTypes.number.isRequired,
	carrier: PropTypes.string.isRequired,
	segments: PropTypes.arrayOf(PropTypes.object).isRequired,
	keyVal: PropTypes.string.isRequired,
};
