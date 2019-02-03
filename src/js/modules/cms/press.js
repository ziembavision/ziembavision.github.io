const press = (data) => {
	let pressList = `<h2>Press</h2><ul class="press-list">`
	data.forEach(article => {
		const elem = `<li class="press-list-item"><a href="${article.link}">${article.title}</a> -&nbsp;${article.logoAlt}</li>`
		pressList += elem;
	});
	return pressList + `</ul>`;
};

export default press;