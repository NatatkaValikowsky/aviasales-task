class ApiService {
	apiBase = 'https://front-test.beta.aviasales.ru';

	async sendRequest(url, value) {
		const sendData = value
			? {
					method: 'post',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body: JSON.stringify({
						value,
					}),
			  }
			: {};
		try {
			const res = await fetch(url, sendData);
			return await res.json();
		} catch (error) {
			throw new Error(`Could not connect to API`);
		}
	}

	async getSearchId() {
		const data = await this.sendRequest(`${this.apiBase}/search`);
		return data.searchId;
	}

	async getTicketsPart(searchId) {
		const data = await this.sendRequest(`${this.apiBase}/tickets?searchId=${searchId}`);
		if (data) {
			return {
				ok: true,
				tickets: data.tickets,
				stop: data.stop,
			};
		}

		return {
			ok: false,
		};
	}
}

export default new ApiService();
