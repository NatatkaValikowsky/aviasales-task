import * as R from 'ramda';

const applyFilters = (el, stops) => {
	const transferCount = el.segments[0].stops.length;
	return stops[transferCount];
};

export default (state) => {
	const { tickets, offset, filters, sort } = state;

	const filteredTickets = R.compose(
		R.slice(0, offset),
		sort === 'cheap' ? R.sortBy(R.prop('price')) : R.sortBy(R.path(['segments', 0, 'duration'])),
		R.filter((el) => applyFilters(el, filters.stops))
	)(tickets);

	return {
		items: filteredTickets,
		isStop: offset >= tickets.length,
	};
};
