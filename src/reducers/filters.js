import {
    UPDATE_FILTERS,
    UPDATE_FILTERS_SET_ALL
} from "../actionTypes";

const initialState = {
    stops: {
        0: false,
        1: false,
        2: false,
        3: false,
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_FILTERS:
            return {
                stops: {...state.stops, [payload]: !state.stops[payload]}
            };
        case UPDATE_FILTERS_SET_ALL:
            return {
                stops: {
                    0: payload,
                    1: payload,
                    2: payload,
                    3: payload,
                }
            };
        default:
            return state;
    }
}
