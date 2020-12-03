google.charts.load('current');
google.charts.setOnLoadCallback(barChart);


function barChart() {
    var BarChartwrapper = new google.visualization.ChartWrapper({
        chartType: 'BarChart',
        dataTable: [
            ["Element", "Observations of Chalybion californicum"],
            ["JAN", 4, "#CCEBFF"],
            ["FEB", 4, "#CCEBFF"],
            ["MAR", 12, "#B2E1FF"],
            ["APR", 69, "#66C4FF"],
            ["MAY", 307, "#33B0FF"],
            ["JUN", 879, "#008DE5"],
            ["JUL", 969, "#007DCC"],
            ["AUG", 874, "#009DFF"],
            ["SEPT", 409, "#19A6FF"],
            ["OCT", 122, "#4CBAFF"],
            ["NOV", 39, "#7FCEFF"],
            ["DEC", 18, "#99D7FF"],
        ],

        options = {
            title: "Number of Chalybion californicum observed in a year",
            width: 900,
            height: 400,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },

        },
        containerId: 'columnchart_values',
    });
    BarChartwrapper.draw();
    // var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));chart.draw(view, options);
}