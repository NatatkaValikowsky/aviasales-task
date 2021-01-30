import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ticket from '../ticket';
import NotFound from '../not-found';
import { getSearchId, fetchTickets, loadMoreTickets } from '../../actions';

import { OFFSET_PART_COUNT } from '../../constants';

import getTickets from '../../selectors';

import classes from './ticket-list.module.scss';

class TicketList extends Component {
	async componentDidMount() {
		const { getSearchIdFunc, fetchTicketsFunc } = this.props;
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
		const { tickets, isStopTickets, loadMoreTicketsFunc, isStopFetching } = this.props;

		const isSearching = !isStopFetching ? (
			<div className={classes['tickets-are-searching']}>Идет поиск билетов...</div>
		) : null;

		const loadMoreBtn =
			!isStopTickets && tickets.length > 0 ? (
				<button type="button" className={classes['load-more-btn']} onClick={loadMoreTicketsFunc}>
					Загрузить еще {OFFSET_PART_COUNT} билетов
				</button>
			) : null;

		const notFoundBlock = isStopFetching && tickets.length === 0 ? <NotFound /> : null;

		return (
			<ul className={classes['result-items']}>
				{isSearching}
				{tickets.map((item) => this.renderTicket(item))}
				{notFoundBlock}
				{loadMoreBtn}
			</ul>
		);
	}
}

const mapDispatchToProps = {
	fetchTicketsFunc: fetchTickets,
	getSearchIdFunc: getSearchId,
	loadMoreTicketsFunc: loadMoreTickets,
};

const mapstateToProps = (state) => {
	const ticketData = getTickets(state);
	return {
		tickets: ticketData.items,
		isStopTickets: ticketData.isStop,
		ticketsPartCount: state.ticketsPartCount,
		isStopFetching: state.isStopFetching,
	};
};

export default connect(mapstateToProps, mapDispatchToProps)(TicketList);

TicketList.propTypes = {
	fetchTicketsFunc: PropTypes.func.isRequired,
	getSearchIdFunc: PropTypes.func.isRequired,
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
	isStopTickets: PropTypes.bool.isRequired,
	loadMoreTicketsFunc: PropTypes.func.isRequired,
	isStopFetching: PropTypes.bool.isRequired,
};
