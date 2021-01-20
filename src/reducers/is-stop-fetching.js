import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_STOPPED } from '../actionTypes';

const initialState = false;

export default (state = initialState, { type }) => {
	switch (type) {
		case FETCH_TICKETS_STOPPED:
			return true;
		case FETCH_TICKETS_FAILURE:
			return true;
		default:
			return state;
	}
};
