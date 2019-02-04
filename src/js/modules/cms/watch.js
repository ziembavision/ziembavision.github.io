const watch = (videos) => {
	let videoList = `<div class="view-icons view-icons--top view-icons--watch">
			<img src="assets/images/watch.png" />
			</span><h2>Watch</h2>
			<img src="assets/images/watch.png" />
		</div>
		<ul class="watch-list">`
	videos.forEach(video => {
		const elem = `<li class="watch-list-item">${video.video}</li>`
		videoList += elem;
	});
	return videoList + `</ul>`;
};

export default watch;