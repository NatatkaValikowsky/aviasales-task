import React from 'react';
import Header from '../header';
import './app.css';
import TransferCountFilter from '../transfer-count-filter';
import PriceFilter from '../price-filter';
import FlightList from '../flight-list';

const App = () => (
	<div className="wrapper">
		<Header />
		<main className="content-block">
			<TransferCountFilter />

			<section className="content-block__results results-block">
				<PriceFilter />

				<FlightList />
			</section>
		</main>
	</div>
);

export default App;
