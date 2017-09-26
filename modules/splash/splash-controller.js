let d3 = require("d3");

export default /**@ngInject*/($scope) => {

  let svg = d3.select("svg");
  let width = +svg.attr("height");
  let height = +svg.attr("height");
  let angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

  let path = svg.append("g")
    .attr("transform", "translate(" + window.innerWidth / 2 + "," + window.innerHeight / 1.5 + ")")
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke-linejoin", "round").selectAll("path").data(["cyan", "magenta", "yellow"])
    .enter().append("path").attr("stroke", d => d)
    .style("mix-blend-mode", "lighten")
    .datum((d, i) => {
      return d3.radialLine()
        .curve(d3.curveBasisClosed)
        .angle(a => a)
        .radius(a => {
          let t = d3.now() / 1000;
          return (width / 1) + Math.cos(a * 6 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 2) * 32;
        });
    });

  d3.timer(() => {
    path.attr("d", d => d(angles));
  });

};