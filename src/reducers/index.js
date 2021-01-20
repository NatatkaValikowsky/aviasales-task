import { combineReducers } from 'redux';

import sort from './sort';
import filters from './filters';
import searchId from './search-id';
import tickets from './tickets';
import offset from './offset';
import ticketsPartCount from './tickets-part-count';
import isStopFetching from './is-stop-fetching';
import error from './error';

export default combineReducers({
	sort,
	filters,
	searchId,
	tickets,
	offset,
	ticketsPartCount,
	isStopFetching,
	error,
});
