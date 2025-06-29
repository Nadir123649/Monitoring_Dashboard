document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("video-waiting-chart", {
    chart: {
      type: "bar",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
      backgroundColor: "transparent",
      height: 350,
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: { text: "" },
    xAxis: {
      categories: ["More than 5 Minutes", "Between 0 And 5 Minutes"],
      labels: {
        style: {
          fontSize: "16px",
          color: "#64748b",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#e5e7eb",
    },
    yAxis: {
      min: 0,
      max: 100,
      title: null,
      labels: {
        style: {
          fontSize: "14px",
          color: "#64748b",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#e5e7eb",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
    },
    plotOptions: {
      bar: {
        depth: 40,
        groupZPadding: 10,
        grouping: false,
        edgeColor: "#60A5FA",
        edgeWidth: 2,
        color: "#ffffff",
        borderColor: "#60A5FA",
        borderWidth: 2,
        dataLabels: {
          enabled: true,
          format: "{point.y:.2f}",
          style: {
            color: "#222",
            fontWeight: "bold",
            fontSize: "16px",
          },
          align: "right",
          inside: false,
        },
      },
    },
    tooltip: {
      pointFormat: "<b>{point.y:.2f}%</b>",
    },
    series: [
      {
        name: "% Rate",
        data: [5.03, 94.97],
        color: "#ffffff",
        borderColor: "#60A5FA",
        borderWidth: 2,
      },
    ],
  });
});
