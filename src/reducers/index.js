import { combineReducers } from 'redux';

import sort from './sort';
import filters from './filters';
import searchId from './searchId';
import tickets from './tickets';

export default combineReducers({
	sort,
	filters,
	searchId,
	tickets,
});
