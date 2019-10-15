const writing = (data) => {
	let writingList = `<div class="view-icons view-icons--top view-icons--writing">
			<img src="assets/images/doyouremember.png" />
			</span><h2>Writing</h2>
			<img src="assets/images/doyouremember.png" />
		</div>
		<ul class="writing-list">`
	data.forEach(article => {
		const elem = `<li class="writing-list-item"><a target="_blank" rel="noopener noreferrer" href="${article.link}"><span>${article.title}</span>, &nbsp;${article.publication}</a></li>`;
		writingList += elem;
	});
	return writingList + `</ul>`;
};

export default writing;