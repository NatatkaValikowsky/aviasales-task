import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import { CHEAP_SORT, FAST_SORT } from '../../constants';

import classes from './price-filter.module.scss';

const PriceFilter = ({ sort, updateSort }) => (
	<form className={classes['result-filters']}>
		<input
			className={classes['result-filters__field']}
			name="top-filter"
			type="radio"
			id={CHEAP_SORT}
			onChange={() => updateSort(CHEAP_SORT)}
			checked={sort === CHEAP_SORT}
		/>
		<label className={classes['result-filters__label']} htmlFor={CHEAP_SORT}>
			Самый дешевый
		</label>

		<input
			className={classes['result-filters__field']}
			name="top-filter"
			type="radio"
			id={FAST_SORT}
			onChange={() => updateSort(FAST_SORT)}
			checked={sort === FAST_SORT}
		/>
		<label className={classes['result-filters__label']} htmlFor={FAST_SORT}>
			Самый быстрый
		</label>
	</form>
);

const mapStateToProps = (state) => ({ sort: state.sort });

export default connect(mapStateToProps, actions)(PriceFilter);

PriceFilter.propTypes = {
	sort: PropTypes.string.isRequired,
	updateSort: PropTypes.func.isRequired,
};
