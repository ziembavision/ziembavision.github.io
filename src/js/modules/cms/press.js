const press = (data) => {
	let pressList = `<ul class="press-list">`
	data.forEach(article => {
		const elem = `<li class="press-list-item"><a href="${article.link}">${article.title}</a> - ${article.logoAlt}</li>`
		pressList += elem;
	});
	return pressList + `</ul>`;
};

export default press;