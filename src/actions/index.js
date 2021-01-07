import {
    UPDATE_FILTERS,
    UPDATE_FILTERS_SET_ALL,
    UPDATE_SORT
} from '../actionTypes';

export const updateSort = type => dispatch => {
    dispatch({
        type: UPDATE_SORT,
        payload: type
    });
};

export const updateFilters = (key, isChecked) => dispatch => {
    if(key === 'all'){
        dispatch({
            type: UPDATE_FILTERS_SET_ALL,
            payload: isChecked
        });
    } else{
        dispatch({
            type: UPDATE_FILTERS,
            payload: key
        });
    }
};
