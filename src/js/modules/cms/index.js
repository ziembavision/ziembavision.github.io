import aboutTemplate from './about';

const cms = () => {
	const endpoint = 'https://ardis-360a5.firebaseio.com/data.json?auth=aDROvVNty1cqpgu9Yijkr2Gfk6IR7BywJIHMM32n';

	const $listen = document.getElementById('content-listen');
	const $watch = document.getElementById('content-watch');
	const $press = document.getElementById('content-press');
	const $dates = document.getElementById('content-dates');
	const $about = document.getElementById('content-about');
	const $ardis = document.getElementById('content-ardis');

	fetch(endpoint)
		.then(res => res.json())
		.then(data => {
			Promise.all(data)
				.then(pages => {
					pages.forEach(page => {
						switch(page.title) {
							case 'listen':
							$listen.innerHTML = page.section[0].content;
							break;
							case 'watch':
							$watch.innerHTML = page.section[0].content;
							break;
							case 'press':
							$press.innerHTML = page.section[0].content;
							break;
							case 'dates':
							$dates.innerHTML = page.section[0].content;
							break;
							case 'about':
							$about.innerHTML = page.section[0].content;
							break;
							case 'ardis':
							// $ardis.innerHTML = page.section[0].content;
							break;
						}
					})
				})
		});
};

export default cms;