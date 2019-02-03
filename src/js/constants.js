const d3 = require('d3');
const { hsv, interpolateHsvLong } = require('d3-hsv');

const i0 = interpolateHsvLong(hsv(240, 1, 0.65), hsv(60, 0, 0.90));
const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 0.1, 0.95));
/* primary colors */
// const i0 = interpolateHsvLong(hsv(240, 0.9, 0.65), hsv(100, 0.2, 0.85));
// const i1 = interpolateHsvLong(hsv(50, 0.4, 0.90), hsv(0, 0.5, 0.95));
// const i0 = interpolateHsvLong(hsv(370, 1, 0.65), hsv(100, 0, 0.90));
/* cool one */
// const i0 = interpolateHsvLong(hsv(240, 1, 0.65), hsv(50, 0.4, 0.90));
// const i1 = interpolateHsvLong(hsv(100, 0.2, 0.85), hsv(0, 0.5, 0.95));
/* lots of colors */
// const i0 = interpolateHsvLong(hsv(200, 0.9, 0.65), hsv(800, 0.2, 0.85));

const interpolateTerrain = (t) => t < 0.5 ? 
	i0(t * 2) : i1((t - 0.5) * 2); 

const svg = d3.select('svg');
const height = +svg.attr('height');
const width = +svg.attr('width');
const bufferLength = 10560;

const $compass = document.getElementById('compass');
const $compassSm = document.getElementById('compass-sm');
const $menu = document.getElementById('menu');
const $menuSm = document.getElementById('menu-sm');
const $menuClose = document.getElementById('menu-close');
const $menuCloseSm = document.getElementById('menu-close-sm');
const $view = document.getElementById('view');
const $viewClose = document.getElementById('view-close');
const $title = document.getElementById('title');
const $home = document.getElementById('home');
const $volumeUp = document.getElementById('volume-up');
const $volumeMute = document.getElementById('volume-mute');
const $audio = document.getElementById('player');

const $buttons = {
	listen: document.getElementById('anchor-listen'),
	watch: document.getElementById('anchor-watch'),
	press: document.getElementById('anchor-press'),
	person: document.getElementById('anchor-person'),
	about: document.getElementById('anchor-about'),
	ardis: document.getElementById('anchor-ardis')
};

const $buttonsSm = {
	press: document.getElementById('anchor-press-sm'),
	person: document.getElementById('anchor-person-sm'),
	about: document.getElementById('anchor-about-sm'),
	ardis: document.getElementById('anchor-ardis-sm')
};

const $targets = {
	listen: document.getElementById('listen'),
	watch: document.getElementById('watch'),
	press: document.getElementById('press'),
	person: document.getElementById('person'),
	about: document.getElementById('about'),
	ardis: document.getElementById('ardis')
};

const $audioButtons = [
	{ 
		button: document.getElementById('veritas-in-terra'),
		src: '../../assets/audio/veritas-in-terra.mp3' 
	},
	{ 
		button: document.getElementById('i-built-utopia'),
		src: '../../assets/audio/i-built-utopia.mp3' 
	},
	{ 
		button: document.getElementById('ugly-ambitious-women'),
		src: '../../assets/audio/ugly-ambitious-women.mp3' 
	},
	{ 
		button: document.getElementById('vero'),
		src:  '../../assets/audio/vero.mp3' 
	}
];

export {
	d3,
	hsv,
	interpolateTerrain,
	svg,
	height,
	width,
	bufferLength,
	$compass,
	$compassSm,
	$menu,
	$menuSm,
	$menuClose,
	$menuCloseSm,
	$view,
	$viewClose,
	$title,
	$home,
	$volumeUp,
	$volumeMute,
	$audio,
	$buttons,
	$buttonsSm,
	$targets,
	$audioButtons
};

/*
const visualKey = {
  // domain.range
  'veritas': [90, 190], 
  'purples': [160, 320], -- ugly ambitious
  'blues': [100, 260],

  // primary rainbow colors
  const i0 = interpolateHsvLong(hsv(340, 1, 0.65), hsv(60, 1, 0.90));
  const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 1, 0.95));
}
*/