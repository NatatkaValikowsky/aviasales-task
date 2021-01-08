import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateSort } from '../../actions';
import classes from './price-filter.module.scss';

const PriceFilter = ({ sort, updateSortFunc }) => (
	<form className={classes['result-filters']}>
		<input
			className={classes['result-filters__field']}
			name="top-filter"
			type="radio"
			id="cheap"
			onChange={() => updateSortFunc('cheap')}
			checked={sort === 'cheap'}
		/>
		<label className={classes['result-filters__label']} htmlFor="cheap">
			Самый дешевый
		</label>

		<input
			className={classes['result-filters__field']}
			name="top-filter"
			type="radio"
			id="faster"
			onChange={() => updateSortFunc('fast')}
			checked={sort === 'fast'}
		/>
		<label className={classes['result-filters__label']} htmlFor="faster">
			Самый быстрый
		</label>
	</form>
);

const mapDispatchToProps = {
	updateSortFunc: updateSort,
};

const mapStateToProps = (state) => ({ sort: state.sort });

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);

PriceFilter.propTypes = {
	sort: PropTypes.string.isRequired,
	updateSortFunc: PropTypes.func.isRequired,
};
