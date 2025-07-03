document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    "More than 5 Minutes",
    "Between 0 And 5 Minutes",
    "More than 5 Minutes",
    "Between 0 And 5 Minutes",
    "testing ",
    "testing",
  ];
  const chartHeight = categories.length > 2 ? categories.length * 60 : 350;

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
      height: chartHeight,
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: { text: "" },
    xAxis: {
      categories: categories,
      labels: {
        style: {
          fontSize: "clamp(12px, 1.5vw, 16px)",
          color: "#64748b",
        },
        useHTML: true,
        formatter: function () {
          return `<div style="max-width:180px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${this.value}</div>`;
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
          fontSize: "clamp(11px, 1.5vw, 14px)",
          color: "#64748b",
        },
        formatter: function () {
          return this.value + "%";
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#e5e7eb",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontSize: "clamp(11px, 1.5vw, 14px)",
      },
    },
    plotOptions: {
      bar: {
        depth: 50,
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
            fontSize: "clamp(11px, 1.5vw, 16px)",
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
        data: [5.03, 94.97, 999, 949, 899, 849],
        color: "#ffffff",
        borderColor: "#60A5FA",
        borderWidth: 2,
      },
    ],
  });
});
