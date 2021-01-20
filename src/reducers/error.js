import { FETCH_TICKETS_FAILURE, HIDE_ERROR } from '../actionTypes';

const initialState = false;

export default (state = initialState, { type, error }) => {
	switch (type) {
		case FETCH_TICKETS_FAILURE:
			return error;
		case HIDE_ERROR:
			return initialState;
		default:
			return state;
	}
};
