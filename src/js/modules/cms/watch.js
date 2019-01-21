const watch = (videos) => {
	let videoList = `<ul class="watch-list">`
	videos.forEach(video => {
		const elem = `<li class="watch-list-item">${video.video}</li>`
		videoList += elem;
	});
	return videoList + `</ul>`;
};

export default watch;