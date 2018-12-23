import getSong from './utils';
import volcano from './volcano';

const d3 = require('d3');
const { hsv, interpolateHsvLong } = require('d3-hsv');

let svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    color,
    analyser,
    bufferLength = 8192,
    dataLength = 5307,
    frequencyData,
    timeData;

let currentData = volcano.values;
let playing = false;

const interweave = (a, b) => {
  return Array.apply(null, Array(dataLength)).reduce((result, value, index) => {
    result.push(a[index], b[index]);
    return result;
  }, []).concat((a.length > dataLength ? a : b).slice(dataLength));
};

const setUpAudio = () => {
  console.log('in setUpAudio')
  console.log('making audio. song: ', getSong())
  const audio = new Audio()
  audio.controls = true;
  audio.src = getSong();
  document.body.append(audio);

  audio.onplaying = () => {
    console.log('playing!');
    if (!playing) {
      playing = true;
      renderData();
    }
  };

  audio.onpause = () => {
    console.log('paused!');
    if (playing) playing = false;
  };

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();

  frequencyData = new Uint8Array(bufferLength); // array of integers
  timeData = new Uint8Array(bufferLength);
  console.log('frequencyData: ', frequencyData, 'timeData: ', timeData, 'values: ', volcano.values.length);

  // Load Web Audio
  window.addEventListener('load', () => {
    audioCtx.createMediaElementSource(audio).connect(analyser);
    analyser.connect(audioCtx.destination);
  }, false);

  createSvgD3();
};

const i0 = interpolateHsvLong(hsv(120, 1, 0.65), hsv(60, 1, 0.90));
const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 0, 0.95));
    
const interpolateTerrain = (t) => { 
  // console.log('t: ', t)
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

  // renderData();
};

let toggle = true;
let count = 0;
const renderData = () => {
  console.log('rendering data: ', playing)

  // Map frequency data to frequencyData typed array
  analyser.getByteFrequencyData(frequencyData);
  analyser.getByteTimeDomainData(timeData);

  let prevData = currentData;
  // if (!(count % 200)) {
    // currentData = interweave(prevData, frequencyData);
  // currentData = prevData.map(d => toggle ? d + 0.5 : d - 0.12345);
  // console.log('count: ', count, count % 2)
  // } else {
    currentData = prevData.map((d, i) => {
      const sliced = frequencyData.slice(0, 5308);
      let diff1 = Math.abs(d - sliced[1])/1000 + d;
      let diff2 = Math.abs(sliced[i] - d)/1000 + volcano.values[i];
      let diffF = (count % 2) ? diff1 : (diff1 + diff2)/2;
      return diff1;
    })
  // }
  // currentData = frequencyData;
  toggle = !toggle
  console.log('toggle: ', toggle);
  count++
  console.log('count: ', count)
  console.log('currentData: ', currentData);

  // console.log('frequencyData: ', frequencyData, 'timeData: ', timeData);

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
      ))
      .attr('fill', (d) => color(d.value));
  }

  if (playing) requestAnimationFrame(renderData);
};

const init = () => {
  setUpAudio();
};

init();