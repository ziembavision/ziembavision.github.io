import smoothscroll from 'smoothscroll-polyfill';

import getSong from './utils';
import volcano from './volcano';

const d3 = require('d3');
const { hsv, interpolateHsvLong } = require('d3-hsv');

/*
const visualKey = {
  // domain.range
  'veritas': [90, 190], 
  'purples': [160, 320],
  'blues': [100, 260],

  // primary rainbow colors
  const i0 = interpolateHsvLong(hsv(340, 1, 0.65), hsv(60, 1, 0.90));
  const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 1, 0.95));
}
*/

let svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    color,
    analyser,
    bufferLength = 10560,
    dataLength = 5307,
    frequencyData,
    timeData,
    audio,
    audioCtx;

let currentData = volcano.values;
let playing = false;

const setUpAudio = () => {
  audio = new Audio();
  audio.controls = false;
  audio.src = getSong();
  document.body.append(audio);

  frequencyData = new Uint8Array(bufferLength); // array of integers
};

const i0 = interpolateHsvLong(hsv(240, 1, 0.65), hsv(60, 0, 0.90));
const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 0, 0.95));
    
const interpolateTerrain = (t) => { 
  return t < 0.5 ? 
    i0(t * 2) : i1((t - 0.5) * 2); 
};

const createSvgD3 = () => {     
  color = d3.scaleSequential(interpolateTerrain)
    .domain([90, 190]);

  svg.selectAll("path")
    .data(d3.contours()
      .size([ volcano.width, volcano.height ])
      .thresholds(d3.range(90, 195, 5))
      (volcano.values)
    )
    .enter().append("path")
      .attr('d', d3.geoPath(
        d3.geoIdentity()
          .scale(width / volcano.width)
      ))
      .attr('fill', (d) => color(d.value));
};

let context = false;
const playAudio = () => {
  console.log('playing audio')

  if (!context) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    audioCtx.createMediaElementSource(audio).connect(analyser);
    analyser.connect(audioCtx.destination);
    context = true;
  };

  audio.play();
  playing = true;
  renderData();
};

const pauseAudio = () => {
  audio.pause()
  // currentData = volcano.values;
  playing = false;
};

let count = 0;
const renderData = () => {
  analyser.getByteFrequencyData(frequencyData); // Map frequency data to frequencyData typed array

  let prevData = currentData;
  currentData = prevData.map((d, i) => {
    const sliced = frequencyData.slice(0, 5280);
    let diff1 = Math.abs(d - sliced[1])/1000 + d;
    let diff2 = diff1 - 0.1;
    let diffF = (count % 100) ? diff1 : diff2;
    if (count % 300 === 0) diffF = diff1 - 10.01;
    return diffF;
  });

  if (currentData !== prevData) {
    // Update d3 visual with new data
    svg.selectAll("path")
      .data(
        d3.contours()
        .size([ volcano.width, volcano.height ])
        .thresholds(d3.range(90, 195, 5))
        (currentData)
      )
      .attr('d', d3.geoPath(
        d3.geoIdentity()
          .scale(width / volcano.width)
      ));
  }

  count++
  if (playing) requestAnimationFrame(renderData);
};


let menuIsVisible = false;
let viewIsVisible = false;
const addButtonListeners = () => {
  const compass = document.getElementById('compass');
  const menu = document.getElementById('menu');

  const hideMenu = () => {
    menu.classList.add('hide');
    menu.classList.remove('show');
    menuIsVisible = false;
  };

  const showMenu = () => {
    menu.classList.add('show');
    menu.classList.remove('hide');
    menuIsVisible = true;
  };

  compass.addEventListener('click', () => menuIsVisible ? hideMenu() : showMenu());

  const aboutButton = document.getElementById('anchor-about');
  const aboutTarget = document.getElementById('about');

  aboutButton.addEventListener('click', () => {
    aboutTarget.scrollIntoView({behavior: "smooth"});
  });

  const hideView = () => {
    view.classList.add('hide');
    view.classList.remove('show');
    viewIsVisible = false;
  };

  const showView = () => {
    view.classList.add('show');
    view.classList.remove('hide');
    viewIsVisible = true;
    if (menuIsVisible) hideMenu();
  };

  const view = document.getElementById('view');

  aboutTarget.addEventListener('click', () => viewIsVisible ? hideView() : showView());
  view.addEventListener('click', () => hideView());

  const title = document.querySelector('.title');
  const home = document.getElementById('home');

  title.addEventListener('click', () => {
    home.scrollIntoView({behavior: 'smooth'});
  })

  const playButton = document.getElementById('veritas-in-terra');
  playButton.addEventListener('click', () => {
    console.log('clikced')
    !playing ? playAudio() : pauseAudio();
  });
}

const init = () => {
  createSvgD3();
  setUpAudio();
  addButtonListeners();
};

init();