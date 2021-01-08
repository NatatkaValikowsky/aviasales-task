import {
	UPDATE_FILTERS,
	UPDATE_FILTERS_SET_ALL,
	UPDATE_SORT,
	FETCH_TICKETS_START,
	FETCH_TICKETS_SUCCESS,
	FETCH_TICKETS_FAILURE,
	GET_SEARCH_ID_START,
	GET_SEARCH_ID_SUCCESS,
	GET_SEARCH_ID_FAILURE,
} from '../actionTypes';

export const updateSort = (type) => (dispatch) => {
	dispatch({
		type: UPDATE_SORT,
		payload: type,
	});
};

export const updateFilters = (key, isChecked) => (dispatch) => {
	if (key === 'all') {
		dispatch({
			type: UPDATE_FILTERS_SET_ALL,
			payload: isChecked,
		});
	} else {
		dispatch({
			type: UPDATE_FILTERS,
			payload: key,
		});
	}
};

export const getSearchId = () => async (dispatch) => {
	dispatch({
		type: GET_SEARCH_ID_START,
	});

	try {
		const res = await fetch('https://front-test.beta.aviasales.ru/search');
		if (res.ok) {
			const data = await res.json();
			dispatch({
				type: GET_SEARCH_ID_SUCCESS,
				payload: data.searchId,
			});
		}
	} catch (err) {
		dispatch({
			type: GET_SEARCH_ID_FAILURE,
			error: true,
			payload: err,
		});
	}
};

export const fetchTickets = () => async (dispatch, getState) => {
	const { searchId } = getState();

	dispatch({
		type: FETCH_TICKETS_START,
	});

	try {
		const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
		if (res.ok) {
			const data = await res.json();
			dispatch({
				type: FETCH_TICKETS_SUCCESS,
				payload: data,
			});
		}
	} catch (err) {
		dispatch({
			type: FETCH_TICKETS_FAILURE,
			error: true,
			payload: err,
		});
	}
};
