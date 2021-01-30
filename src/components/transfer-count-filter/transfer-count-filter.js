import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateFilters } from '../../actions';

import { FILTER_MAP } from '../../constants';

import classes from './transfer-count-filter.module.scss';

const TransferCountFilter = ({ stops, updateFiltersFunc }) => {
	const checkedCount = Object.values(stops).reduce((acc, value) => (value ? acc + 1 : acc), 0);

	return (
		<aside className={`${classes['content-block__filters']} ${classes['filters-block']}`}>
			<form action="" className={classes['aside-filters']}>
				<h3 className={classes['aside-filters__title']}>Количество пересадок</h3>

				<fieldset className={classes['aside-filters__group']}>
					<input
						className={classes['aside-filters__field']}
						type="checkbox"
						id="transfer-var-all"
						onChange={(event) => updateFiltersFunc('all', event.target.checked)}
						checked={checkedCount === Object.keys(stops).length}
					/>
					<label className={classes['aside-filters__label']} htmlFor="transfer-var-all">
						Все
					</label>
				</fieldset>

				{FILTER_MAP.map((el) => (
					<fieldset className={classes['aside-filters__group']}>
						<input
							className={classes['aside-filters__field']}
							type="checkbox"
							id={el.inputId}
							onChange={() => updateFiltersFunc(el.id)}
							checked={stops[el.id]}
						/>
						<label className={classes['aside-filters__label']} htmlFor={el.inputId}>
							{el.text}
						</label>
					</fieldset>
				))}
			</form>
		</aside>
	);
};

const mapStateToProps = (state) => ({
	stops: state.filters.stops,
});

const mapDispatchToProps = {
	updateFiltersFunc: updateFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferCountFilter);

TransferCountFilter.propTypes = {
	stops: PropTypes.objectOf(PropTypes.bool).isRequired,
	updateFiltersFunc: PropTypes.func.isRequired,
};
