import {combineReducers} from 'redux';

import sort from './sort';
import filters from './filters';

export default combineReducers({
    sort,
    filters
});
