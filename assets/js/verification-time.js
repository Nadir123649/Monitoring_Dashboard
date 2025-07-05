document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { name: "More than 10 Minutes", value: 1.5 },
    { name: "Between 7 And 10 Minutes", value: 3.55 },
    { name: "Between 6 And 7 Minutes", value: 3.25 },
    { name: "Between 5 And 6 Minutes", value: 7.23 },
  ];

  const chartHeight = data.length > 5 ? data.length * 50 : 400;

  Highcharts.chart("verification-chart", {
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
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    title: { text: "" },
    xAxis: {
      categories: data.map((d) => d.name),
      labels: {
        style: {
          fontSize: "clamp(12px, 1.5vw, 15px)",
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
            fontSize: "clamp(11px, 1.5vw, 15px)",
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
        name: "",
        data: data.map((d) => d.value),
        color: "#ffffff",
        borderColor: "#60A5FA",
        borderWidth: 2,
      },
    ],
  });
});
