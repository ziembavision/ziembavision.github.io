const press = (data) => {
	let pressList = `<div class="view-icons view-icons--top view-icons--press">
			<img src="assets/images/press.png" />
			</span><h2>Press</h2>
			<img src="assets/images/press.png" />
		</div>
		<ul class="press-list">`
	data.forEach(article => {
		const elem = article.logo ?
			`<li class="press-list-item press-list-item--logo">
				<a href="${article.link}"><span>${article.title}</span><img src="${article.logo}" /></a>
			</li>` :
			`<li class="press-list-item"><a href="${article.link}">${article.title}</a></li>`
		pressList += elem;
	});
	return pressList + `</ul>`;
};

export default press;