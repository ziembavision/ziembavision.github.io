const dates = (dates) => {
	console.log('dates: ', dates);
	let datesList = ``;
	dates.forEach(date => {
		const elem = `<tr class="dates-list-item"><td class="dates-date">${date.date}</td><td><a href="${date.link}">${date.title}</a></td></tr>`
		datesList += elem;
	});
	return datesList;
};

export default dates;
