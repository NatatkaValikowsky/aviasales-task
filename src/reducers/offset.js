import { LOAD_MORE_TICKETS, UPDATE_SORT } from '../actionTypes';

import { OFFSET_PART_COUNT } from '../constants';

const initialState = OFFSET_PART_COUNT;

export default (state = initialState, { type }) => {
	switch (type) {
		case UPDATE_SORT:
			return OFFSET_PART_COUNT;
		case LOAD_MORE_TICKETS:
			return state + OFFSET_PART_COUNT;
		default:
			return state;
	}
};
