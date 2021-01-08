import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ticket from '../ticket';
import { getSearchId, fetchTickets } from '../../actions';

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
		const { tickets } = this.props;
		return <ul className={classes['result-items']}>{tickets.map((item) => this.renderTicket(item))}</ul>;
	}
}

const mapDispatchToProps = {
	fetchTicketsFunc: fetchTickets,
	getSearchIdFunc: getSearchId,
};

const mapstateToProps = (state) => ({ tickets: state.tickets });

export default connect(mapstateToProps, mapDispatchToProps)(TicketList);

TicketList.propTypes = {
	fetchTicketsFunc: PropTypes.func.isRequired,
	getSearchIdFunc: PropTypes.func.isRequired,
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
