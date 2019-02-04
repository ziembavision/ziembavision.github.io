const press = (data) => {
	let pressList = `<div class="view-icons view-icons--top view-icons--press">
			<img src="assets/images/press.png" />
			</span><h2>Press</h2>
			<img src="assets/images/press.png" />
		</div>
		<ul class="press-list">`
	data.forEach(article => {
		const elem = `<li class="press-list-item"><a href="${article.link}">${article.title}</a> -&nbsp;${article.logoAlt}</li>`
		pressList += elem;
	});
	return pressList + `</ul>`;
};

export default press;