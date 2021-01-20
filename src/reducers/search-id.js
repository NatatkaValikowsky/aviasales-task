import { GET_SEARCH_ID_SUCCESS } from '../actionTypes';

const initialState = '';

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_SEARCH_ID_SUCCESS:
			return payload;
		default:
			return state;
	}
};
