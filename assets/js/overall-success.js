document.addEventListener("DOMContentLoaded", () => {
  const futuristicGradients = [
    {
      stops: [
        ["0", "#00d4ff"],
        ["0.5", "#006eff"],
        ["1", "#0047ff"],
      ],
    },
    {
      stops: [
        ["0", "#ff006e"],
        ["0.5", "#8338ec"],
        ["1", "#3a86ff"],
      ],
    },
    {
      stops: [
        ["0", "#06ffa5"],
        ["0.5", "#00d4aa"],
        ["1", "#0056b3"],
      ],
    },
    {
      stops: [
        ["0", "#ffbe0b"],
        ["0.5", "#fb8500"],
        ["1", "#ff006e"],
      ],
    },
  ];

  const pieData = [
    { name: "Not Started", y: 465, grad: futuristicGradients[0] },
    { name: "Abandoned by Customer", y: 7644, grad: futuristicGradients[1] },
    { name: "Verification Failure", y: 5667, grad: futuristicGradients[2] },
    { name: "Verification Success", y: 35400, grad: futuristicGradients[3] },
  ];

  const total = pieData.reduce((sum, item) => sum + item.y, 0);

  Highcharts.chart("pie-chart-container", {
    chart: {
      type: "pie",
      options3d: { enabled: true, alpha: 35, beta: 0, depth: 45 },
      backgroundColor: "transparent",
      height: 380,
    },
    title: {
      text: `
                    <div style="text-align: center;">
                        <div style="font-size: 48px; font-weight: 900; color: #333;">${total.toLocaleString()}</div>
                        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 4px; font-weight: 700; color: #666;">Total Data Points</div>
                    </div>
                `,
      useHTML: true,
      align: "center",
      verticalAlign: "middle",
      floating: true,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 45,
        innerSize: "55%",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        slicedOffset: 12,
        shadow: false,
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.0f}%",
          style: {
            fontSize: "12px",
            fontWeight: "900",
            color: "#111",
            textOutline: "none",
            textShadow: "none",
          },
          distance: -22,
          connectorWidth: 0,
        },
        animation: {
          duration: 2500,
        },
      },
    },
    series: [
      {
        name: "Data",
        data: pieData.map((d) => ({
          name: d.name,
          y: d.y,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: d.grad.stops,
          },
          sliced: true,
        })),
      },
    ],
    credits: { enabled: false },
    legend: { enabled: false },
  });
});
