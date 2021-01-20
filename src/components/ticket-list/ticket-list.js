import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ticket from '../ticket';
import NotFound from '../not-found';
import { getSearchId, fetchTickets, initTicketsOffset, loadMoreTickets } from '../../actions';

import getTickets from '../../selectors';

import classes from './ticket-list.module.scss';

class TicketList extends Component {
	async componentDidMount() {
		const { getSearchIdFunc, fetchTicketsFunc, initTicketsOffsetFunc } = this.props;
		initTicketsOffsetFunc();
		await getSearchIdFunc();
		await fetchTicketsFunc();
	}

	getFullDuration(segments) {
		return segments.reduce((acc, item) => acc + item.duration, 0);
	}

	getKey(ticketData) {
		return `${ticketData.price}-${ticketData.carrier}-${
			Object.values(ticketData.segments).length
		}-${this.getFullDuration(ticketData.segments)}`;
	}

	renderTicket(ticket) {
		return <Ticket key={this.getKey(ticket)} keyVal={this.getKey(ticket)} {...ticket} />;
	}

	render() {
		const { tickets, isStopTickets, ticketsPartCount, loadMoreTicketsFunc, isStopFetching, error } = this.props;

		const isSearching = !isStopFetching ? (
			<div className={classes['tickets-are-searching']}>Идет поиск билетов...</div>
		) : null;

		const loadMoreBtn =
			!isStopTickets && tickets.length > 0 ? (
				<button type="button" className={classes['load-more-btn']} onClick={loadMoreTicketsFunc}>
					Загрузить еще {ticketsPartCount} билетов
				</button>
			) : null;

		const notFoundBlock = tickets.length === 0 ? <NotFound /> : null;

		const errorBlock = error ? <div className={classes['error-block']}>Ошибка при получении данных</div> : null;

		return (
			<ul className={classes['result-items']}>
				{isSearching}
				{tickets.map((item) => this.renderTicket(item))}
				{notFoundBlock}
				{loadMoreBtn}
				{errorBlock}
			</ul>
		);
	}
}

const mapDispatchToProps = {
	fetchTicketsFunc: fetchTickets,
	getSearchIdFunc: getSearchId,
	initTicketsOffsetFunc: initTicketsOffset,
	loadMoreTicketsFunc: loadMoreTickets,
};

const mapstateToProps = (state) => {
	const ticketData = getTickets(state);
	return {
		tickets: ticketData.items,
		isStopTickets: ticketData.isStop,
		ticketsPartCount: state.ticketsPartCount,
		isStopFetching: state.isStopFetching,
		error: state.error,
	};
};

export default connect(mapstateToProps, mapDispatchToProps)(TicketList);

TicketList.propTypes = {
	fetchTicketsFunc: PropTypes.func.isRequired,
	getSearchIdFunc: PropTypes.func.isRequired,
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
	initTicketsOffsetFunc: PropTypes.func.isRequired,
	isStopTickets: PropTypes.bool.isRequired,
	ticketsPartCount: PropTypes.number.isRequired,
	loadMoreTicketsFunc: PropTypes.func.isRequired,
	isStopFetching: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
};
