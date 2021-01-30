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
	LOAD_MORE_TICKETS,
	FETCH_TICKETS_STOPPED,
} from '../actionTypes';

import ApiService from '../services/api-service';

export const updateSort = (type) => ({
	type: UPDATE_SORT,
	payload: type,
});

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
		const res = await ApiService.getSearchId();
		dispatch({
			type: GET_SEARCH_ID_SUCCESS,
			payload: res,
		});
	} catch (err) {
		dispatch({
			type: GET_SEARCH_ID_FAILURE,
			error: true,
			payload: err,
		});
	}
};

const getTicketPart = async (dispatch, searchId) => {
	try {
		const res = await ApiService.getTicketsPart(searchId);
		if (res.ok) {
			dispatch({
				type: FETCH_TICKETS_SUCCESS,
				payload: res.tickets,
			});

			if (res.stop) {
				dispatch({
					type: FETCH_TICKETS_STOPPED,
				});
				return;
			}
			await getTicketPart(dispatch, searchId);
		}
	} catch (err) {
		dispatch({
			type: FETCH_TICKETS_FAILURE,
			error: true,
			payload: err,
		});

		await getTicketPart(dispatch, searchId);
	}
};

export const fetchTickets = () => async (dispatch, getState) => {
	const { searchId } = getState();

	dispatch({
		type: FETCH_TICKETS_START,
	});

	await getTicketPart(dispatch, searchId);
};

export const loadMoreTickets = () => (dispatch, getState) => {
	const { ticketsPartCount, offset } = getState();

	dispatch({
		type: LOAD_MORE_TICKETS,
		payload: offset + ticketsPartCount,
	});
};
