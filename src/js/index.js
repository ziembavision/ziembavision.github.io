import getSong from './utils';
import volcano from './volcano';

const d3 = require('d3');
const { hsv, interpolateHsvLong } = require('d3-hsv');

const init = () => {
  let svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

  const i0 = interpolateHsvLong(hsv(120, 1, 0.65), hsv(60, 1, 0.90));
  const i1 = interpolateHsvLong(hsv(60, 1, 0.90), hsv(0, 0, 0.95));
      
  const interpolateTerrain = (t) => { 
    console.log('t: ', t)
    return t < 0.5 ? 
      i0(t * 2) : i1((t - 0.5) * 2); 
  };
      
  const color = d3.scaleSequential(interpolateTerrain)
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


  // d3.json('./src/js/volcano.json', function(volcano) {
  //   console.log('in function. volcano: ', volcano)
  //   // if (error) throw error;

  //   svg.selectAll("path")
  //     .data(d3.contours()
  //         .size([volcano.width, volcano.height])
  //         .thresholds(d3.range(90, 195, 5))
  //       (volcano.values))
  //     .enter().append("path")
  //       .attr("d", d3.geoPath(d3.geoIdentity().scale(width / volcano.width)))
  //       .attr("fill", function(d) { return color(d.value); });
  // });

};

init();