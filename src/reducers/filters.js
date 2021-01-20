import { UPDATE_FILTERS, UPDATE_FILTERS_SET_ALL } from '../actionTypes';

const initialState = {
	stops: {
		0: true,
		1: true,
		2: true,
		3: true,
	},
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case UPDATE_FILTERS:
			return {
				stops: { ...state.stops, [payload]: !state.stops[payload] },
			};
		case UPDATE_FILTERS_SET_ALL:
			return {
				stops: {
					0: payload,
					1: payload,
					2: payload,
					3: payload,
				},
			};
		default:
			return state;
	}
};
