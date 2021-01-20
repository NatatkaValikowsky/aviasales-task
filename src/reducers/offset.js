import { INIT_TICKETS_OFFSET, LOAD_MORE_TICKETS, RESET_TICKETS_OFFSET } from '../actionTypes';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case INIT_TICKETS_OFFSET:
			return payload;
		case RESET_TICKETS_OFFSET:
			return payload;
		case LOAD_MORE_TICKETS:
			return payload;
		default:
			return state;
	}
};
