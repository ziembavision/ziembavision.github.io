import watchTemplate from './watch';
import pressTemplate from './press';
import datesTemplate from './dates';

const cms = () => {
	const endpoint = 'https://ardis-360a5.firebaseio.com/data.json?auth=aDROvVNty1cqpgu9Yijkr2Gfk6IR7BywJIHMM32n';

	const $listen = document.getElementById('content-listen');
	const $watch = document.getElementById('content-watch');
	const $press = document.getElementById('content-press');
	const $dates = document.getElementById('dates-list');
	const $about = document.getElementById('content-about');
	const $ardis = document.getElementById('content-ardis');

	fetch(endpoint)
		.then(res => res.json())
		.then(data => {
			Promise.all(data)
				.then(pages => {
					pages.forEach(page => {
						switch(page.title) {
							case 'watch':
							$watch.innerHTML = watchTemplate(page.section);
							break;
							case 'press':
							$press.innerHTML = pressTemplate(page.section);
							break;
							case 'dates':
							$dates.innerHTML = datesTemplate(page.section);
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