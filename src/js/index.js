// import smoothscroll from 'smoothscroll-polyfill';

import volcano from './volcano';
import cms from './modules/cms';
import { d3, hsv, interpolateTerrain, svg, width, height, bufferLength, $title, $home, $volumeUp, $volumeMute, $audio, $audioButtons } from './constants';
import { buttons } from './modules';
import { debounce } from './utils';

let color,
    analyser,
    // dataLength = 5307,
    // slicedLength = 5280,
    frequencyData,
    audioCtx;

let currentData = volcano.values;
let playing = false;

// const setUpAudio = () => {
//   // audio = new Audio();
//   // audio.controls = false;
//   // audio.src = getSong();
//   // document.body.append(audio);

//   
// };

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
      .attr('fill', (d) => color(d.value))
};

let context = false;
const playAudio = () => {
  if (!context) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    audioCtx.createMediaElementSource($audio).connect(analyser);
    analyser.connect(audioCtx.destination);
    context = true;
  };

  // $volume.classList.remove('hide');
  $up.classList.remove('hide');

  $audio.play();
  playing = true;
  console.log('playing: ', playing, $volume)
  renderData();
};

const pauseAudio = () => {
  $audio.pause()
  $volume.classList.add('hide');
  currentData = volcano.values;
  playing = false;
  console.log('playing: ', playing, $volume)
};

let count = 0;
const renderData = () => {
  analyser.getByteFrequencyData(frequencyData); // Map frequency data to frequencyData typed array

  let prevData = currentData;
  currentData = prevData.map((d, i) => {
    const sliced = frequencyData.slice(0, 5307);
    let diff1 = Math.abs(d - sliced[1])/1000 + d;
    let diff2 = diff1 - 0.4;
    let diffF = (count % 100) ? diff1 : diff2;
    // let diffF = diff1;
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

const initAudio = () => {
  $audioButtons.forEach(button => {
    button.button.addEventListener('click', debounce(() => {
      $audio.src = button.src;
      playing ? pauseAudio() : playAudio();
    }, 300));
  });

  $volumeUp.addEventListener('click', debounce(() => {
    console.log('clicked volume: ', $volume, playing)
    if (playing) {
      $mute.classList.remove('hide');
      $up.classList.add('hide');
      console.log('vol ', $volume)
      $audio.pause();
      playing = false;
    } else {
      $up.classList.remove('hide');
      $mute.classList.add('hide');
      console.log('vol ', $volume)
      $audio.play();
      playing = true;
      renderData();
    }
  }, 300));
};

const init = () => {
  frequencyData = new Uint8Array(bufferLength); // array of integers

  cms();
  createSvgD3();
  buttons();
  initAudio();

  $title.addEventListener('click', () => {
    $home.scrollIntoView({behavior: 'smooth'});
    currentData = volcano.values;
  });
};

init();