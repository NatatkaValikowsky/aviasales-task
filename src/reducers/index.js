import { combineReducers } from 'redux';

import sort from './sort';
import filters from './filters';
import searchId from './search-id';
import tickets from './tickets';
import offset from './offset';
import isStopFetching from './is-stop-fetching';

export default combineReducers({
	sort,
	filters,
	searchId,
	tickets,
	offset,
	isStopFetching,
});
