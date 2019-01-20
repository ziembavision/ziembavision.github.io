import volcano from './volcano';

const d3 = require('d3');
const { hsv, interpolateHsvLong } = require('d3-hsv');

const i0 = interpolateHsvLong(hsv(240, 1, 0.65), hsv(60, 0, 0.90));
const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 0, 0.95));
const interpolateTerrain = (t) => t < 0.5 ? 
	i0(t * 2) : i1((t - 0.5) * 2); 

const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const bufferLength = 10560;

const $compass = document.getElementById('compass');
const $menu = document.getElementById('menu');
const $view = document.getElementById('view');
const $viewClose = document.getElementById('view-close');
const $title = document.getElementById('title');
const $home = document.getElementById('home');
const $buttons = {
	listen: document.getElementById('anchor-listen'),
	watch: document.getElementById('anchor-watch'),
	press: document.getElementById('anchor-press'),
	person: document.getElementById('anchor-person'),
	about: document.getElementById('anchor-about'),
	ardis: document.getElementById('anchor-ardis')
};
const $targets = {
	listen: document.getElementById('listen'),
	watch: document.getElementById('watch'),
	press: document.getElementById('press'),
	person: document.getElementById('person'),
	about: document.getElementById('about'),
	ardis: document.getElementById('ardis')
};

let currentData = volcano.values;
let frequencyData = new Uint8Array(bufferLength);

export {
	d3,
	hsv,
	interpolateTerrain,
	svg,
	width,
	height,
	$compass,
	$menu,
	$buttons,
	$targets,
	$view,
	$viewClose,
	$title,
	$home
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