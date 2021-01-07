import {
    UPDATE_SORT
} from "../actionTypes";

const initialState = "cheap";

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_SORT:
            return payload;
        default:
            return state;
    }
}
