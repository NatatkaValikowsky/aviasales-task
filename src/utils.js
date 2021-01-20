export const getDurationString = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration - hours * 60;
	return `${hours}ч ${minutes}м`;
};

export const getEnding = (count) => {
	switch (count) {
		case 0:
			return `Без пересадок`;
		case 1:
			return `${count} пересадка`;
		default:
			return `${count} пересадки`;
	}
};

export const getSegmentTime = (start, duration) => {
	const startDate = new Date(start);
	const endDate = new Date(start);
	endDate.setMinutes(endDate.getMinutes() + duration);
	return `${startDate.getHours() < 10 ? '0' : ''}${startDate.getHours()}:${
		startDate.getMinutes() < 10 ? '0' : ''
	}${startDate.getMinutes()} - 
				${endDate.getHours() < 10 ? '0' : ''}${endDate.getHours()}:${
		endDate.getMinutes() < 10 ? '0' : ''
	}${endDate.getMinutes()}`;
};
