var BarChart = {};
var barSvg, margin, width, height;

BarChart.InitSize = function (svgWidth, svgHeight, sel) {
    // 给svg设置 高度， 宽度
    $(sel).attr({ width: svgWidth, height: svgHeight });

    barSvg = d3.select(sel),
    margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = svgWidth - margin.left - margin.right,
    height = svgHeight - margin.top - margin.bottom;
}