import watchTemplate from './watch';
import pressTemplate from './press';
import datesTemplate from './dates';
import ardisEssay from './essay';

const cms = () => {
	const endpoint = 'https://ardis-360a5.firebaseio.com/data.json?auth=aDROvVNty1cqpgu9Yijkr2Gfk6IR7BywJIHMM32n';

	const $listen = document.getElementById('content-listen');
	const $watch = document.getElementById('content-watch');
	const $press = document.getElementById('content-press');
	const $dates = document.getElementById('content-dates');
	const $about = document.getElementById('content-about');
	const $ardis = document.getElementById('content-ardis');

	const aboutHeading = `<div class="view-icons view-icons--top view-icons--about">
			<img src="assets/images/about.png" />
			</span><h2>About</h2>
			<img src="assets/images/about.png" />
		</div>`;

	const credits = '<p class="credits">website by <a class="credits" rel="noopener noreferrer" target="_blank" href="https://beatpoet2015.blogspot.com">Elsa Brown</a></p>';

	const ardisHeading = `<div class="view-icons view-icons--top view-icons--ardis">
			<img src="assets/images/whatisardis.png" />
			</span><h2>What Is Ardis?</h2>
			<img src="assets/images/whatisardis.png" />
		</div>`;

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
							$about.innerHTML = aboutHeading + page.section[0].content + credits;
							break;
							case 'ardis':
							$ardis.innerHTML = ardisHeading + page.section[0].content + ardisEssay;
							break;
						}
					})
				})
		});
};

export default cms;