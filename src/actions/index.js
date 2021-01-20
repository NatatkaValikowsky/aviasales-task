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
	INIT_TICKETS_OFFSET,
	RESET_TICKETS_OFFSET,
	LOAD_MORE_TICKETS,
	FETCH_TICKETS_STOPPED,
	HIDE_ERROR,
} from '../actionTypes';

export const updateSort = (type) => (dispatch, getState) => {
	const { ticketsPartCount } = getState();

	dispatch({
		type: UPDATE_SORT,
		payload: type,
	});

	dispatch({
		type: RESET_TICKETS_OFFSET,
		payload: ticketsPartCount,
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

const getTicketPart = async (dispatch, searchId) => {
	try {
		const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
		if (res.ok) {
			const data = await res.json();
			dispatch({
				type: FETCH_TICKETS_SUCCESS,
				payload: data.tickets,
			});

			if (data.stop) {
				dispatch({
					type: FETCH_TICKETS_STOPPED,
				});
				return;
			}

			setTimeout(async () => {
				await getTicketPart(dispatch, searchId);
			}, 100);
		} else if (res.status === 500) {
			throw new Error('Server Error');
		}
	} catch (err) {
		dispatch({
			type: FETCH_TICKETS_FAILURE,
			error: true,
			payload: err,
		});

		setTimeout(() => {
			dispatch({
				type: HIDE_ERROR,
			});
		}, 5000);
	}
};

export const fetchTickets = () => async (dispatch, getState) => {
	const { searchId } = getState();

	dispatch({
		type: FETCH_TICKETS_START,
	});

	await getTicketPart(dispatch, searchId);
};

export const initTicketsOffset = () => async (dispatch, getState) => {
	const { ticketsPartCount } = getState();

	dispatch({
		type: INIT_TICKETS_OFFSET,
		payload: ticketsPartCount,
	});
};

export const loadMoreTickets = () => (dispatch, getState) => {
	const { ticketsPartCount, offset } = getState();

	dispatch({
		type: LOAD_MORE_TICKETS,
		payload: offset + ticketsPartCount,
	});
};
