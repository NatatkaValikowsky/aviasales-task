import { FETCH_TICKETS_SUCCESS } from '../actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_TICKETS_SUCCESS:
			return [...state, ...payload];
		default:
			return state;
	}
};
