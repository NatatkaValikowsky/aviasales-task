import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateFilters } from '../../actions';
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

				<fieldset className={classes['aside-filters__group']}>
					<input
						className={classes['aside-filters__field']}
						type="checkbox"
						id="transfer-var-without"
						onChange={() => updateFiltersFunc(0)}
						checked={stops[0]}
					/>
					<label className={classes['aside-filters__label']} htmlFor="transfer-var-without">
						Без пересадок
					</label>
				</fieldset>

				<fieldset className={classes['aside-filters__group']}>
					<input
						className={classes['aside-filters__field']}
						type="checkbox"
						id="transfer-var-one"
						onChange={() => updateFiltersFunc(1)}
						checked={stops[1]}
					/>
					<label className={classes['aside-filters__label']} htmlFor="transfer-var-one">
						1 пересадка
					</label>
				</fieldset>

				<fieldset className={classes['aside-filters__group']}>
					<input
						className={classes['aside-filters__field']}
						type="checkbox"
						id="transfer-var-two"
						onChange={() => updateFiltersFunc(2)}
						checked={stops[2]}
					/>
					<label className={classes['aside-filters__label']} htmlFor="transfer-var-two">
						2 пересадки
					</label>
				</fieldset>

				<fieldset className={classes['aside-filters__group']}>
					<input
						className={classes['aside-filters__field']}
						type="checkbox"
						id="transfer-var-three"
						onChange={() => updateFiltersFunc(3)}
						checked={stops[3]}
					/>
					<label className={classes['aside-filters__label']} htmlFor="transfer-var-three">
						3 пересадки
					</label>
				</fieldset>
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
