let songs = {
	'veritas-in-terra': {
		analyser: null,
		context: null,
		element: null
	},
	'i-built-utopia': {
		analyser: null,
		audioCtx: null,
		audioElement: null
	}
};


let context = {
	'veritas-in-terra': false,
};

let analyser,
		audioCtx,

let playing = false;
const playAudio = (id) => {
	console.log('playing ', id);
	songs[id].element = document.getElementById(id);

	if (!songs[id].context) {
		songs[id].context = new (window.AudioContext || window.webkitAudioContext)();
		songs[id].analyser = audioCtx.createAnalyser();
		songs[id].context.createMediaElementSource(songs[id].element).connect(songs[id].analyser);
		songs[id].analyser.connect(songs[id].context.destination);
		songs[id].context = true;
	};

	songs[id].element.play();
	playing = true;
	renderData();

	} 
};