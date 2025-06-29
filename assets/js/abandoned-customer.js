const customBarData = [
  { stage: "Upload Documents", val1: 2023, val2: 208, val3: 0 },
  { stage: "Upload ID", val1: 3688, val2: 17, val3: 0 },
  { stage: "Register", val1: 15, val2: 1, val3: 0 },
  { stage: "Info Page", val1: 1624, val2: 16, val3: 52 },
];

const customGradients = [
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

const customPieData = [
  { name: "Not Started", value: 465, grad: customGradients[0] },
  { name: "Abandoned by Customer", value: 7644, grad: customGradients[1] },
  { name: "Verification Failure", value: 5667, grad: customGradients[2] },
  { name: "Verification Success", value: 15441, grad: customGradients[3] },
];

const customTotal = customPieData.reduce((s, d) => s + d.value, 0);

Highcharts.chart("bar-containersd", {
  chart: {
    type: "bar",
    options3d: { enabled: true, alpha: 10, beta: 15, depth: 50 },
    backgroundColor: "transparent",
    height: 400,
  },
  xAxis: {
    categories: customBarData.map((d) => d.stage),
    labels: { style: { fontSize: "16px" } },
    lineWidth: 0,
    tickLength: 0,
    gridLineWidth: 0,
  },
  yAxis: {
    min: 0,
    labels: { style: { fontSize: "14px" } },
    lineWidth: 0,
    tickLength: 0,
    gridLineWidth: 0,
  },
  plotOptions: {
    series: {
      depth: 40,
      dataLabels: {
        enabled: true,
        inside: true,
        style: { fontSize: "14px", fontWeight: "bold", color: "#333" },
        formatter() {
          return Highcharts.numberFormat(this.y, 0, ".", ".");
        },
      },
    },
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
    itemStyle: { fontSize: "14px" },
  },
  series: [
    {
      name: "Val1",
      data: customBarData.map((d) => d.val1),
      color: "#B0B0B0",
      borderRadius: 5,
    },
    {
      name: "Val2",
      data: customBarData.map((d) => d.val2),
      color: "#888888",
      borderRadius: 5,
    },
    {
      name: "Val3",
      data: customBarData.map((d) => d.val3),
      color: "#222222",
      borderRadius: 5,
    },
  ],
  title: { text: "" },
  credits: { enabled: false },
});

Highcharts.chart("pie-containersd", {
  chart: {
    type: "pie",
    options3d: { enabled: true, alpha: 35, depth: 45 },
    backgroundColor: "transparent",
    height: 380,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 45,
      innerSize: "55%",
      borderRadius: 25,
      borderColor: "rgba(255,255,255,0.1)",
      borderWidth: 1,
      slicedOffset: 12,
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%",
        connectorWidth: 0,
        connectorColor: "transparent",
        distance: -30,
        style: {
          fontSize: "12px",
          fontWeight: "900",
          color: "#111",
          textOutline: "none",
        },
      },
      connectorWidth: 0,
      animation: { duration: 2500 },
    },
  },
  tooltip: {
    useHTML: true,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 0,
    style: { fontSize: "13px", fontWeight: "600" },
    formatter() {
      return `<div style="padding:20px;text-align:center">
                            <div style="font-size:15px;font-weight:900;color:#111;margin-bottom:10px;">${
                              this.point.name
                            }</div>
                            <div>Value: <strong>${this.y.toLocaleString()}</strong></div>
                            <div>Share: <strong>${this.percentage.toFixed(
                              1
                            )}%</strong></div>
                        </div>`;
    },
  },
  title: {
    useHTML: true,
    verticalAlign: "middle",
    floating: true,
    y: 0,
    text: `<div class="text-center">
                        <div style="font-size:48px;font-weight:900;color:#111;animation:pulse 2s infinite">${customTotal}</div>
                        <div style="font-size:11px;color:#222;font-weight:700;letter-spacing:4px;margin-top:8px;animation:fadeIn 3s ease-in">
                            TOTAL DATA POINTS
                        </div>
                    </div>`,
  },
  series: [
    {
      name: "Data",
      data: customPieData.map((d) => ({
        name: d.name,
        y: d.value,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: d.grad.stops,
        },
        sliced: true,
      })),
      animation: { duration: 2500 },
    },
  ],
  credits: { enabled: false },
  legend: { enabled: false },
});
