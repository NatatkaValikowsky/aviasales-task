import { UPDATE_SORT } from '../actionTypes';

import { CHEAP_SORT } from '../constants';

const initialState = CHEAP_SORT;

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case UPDATE_SORT:
			return payload;
		default:
			return state;
	}
};
