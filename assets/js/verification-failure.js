// Gradient stops used by FutureGradients
const FG = [
  ["#00d4ff", "#006eff", "#0047ff"],
  ["#ff006e", "#8338ec", "#3a86ff"],
  ["#06ffa5", "#00d4aa", "#0056b3"],
  ["#ffbe0b", "#fb8500", "#ff006e"],
];
// Data
const barData = [
  { reason: "Unclassified", percentage: 31.09, count: 9665 },
  { reason: "User is under 21 years old", percentage: 1.25, count: 389 },
  { reason: "Document date is older than XXX", percentage: 11.29, count: 3510 },
  { reason: "Expired Document", percentage: 8.2, count: 2552 },
  { reason: "Missing mandatory document files", percentage: 0.05, count: 16 },
  { reason: "Possible fraud", percentage: 6.08, count: 1891 },
  {
    reason: "The document is not in complete view",
    percentage: 11.59,
    count: 3602,
  },
  {
    reason: "All necessary data are not visible",
    percentage: 2.66,
    count: 828,
  },
];
const pieData = [
  { name: "Verification Success", value: 72, colors: FG[0] },
  { name: "Abandoned by Customer", value: 16, colors: FG[1] },
  { name: "Verification Failure", value: 11, colors: FG[2] },
  { name: "Not Started", value: 1, colors: FG[3] },
];

function thousand(x) {
  return x.toLocaleString();
}

// Configure Bar Chart
Highcharts.chart("bard-chart", {
  chart: {
    type: "bar",
    options3d: { enabled: true, alpha: 10, beta: 15, depth: 50 },
    backgroundColor: "transparent",
    height: 420,
  },
  xAxis: {
    categories: barData.map((d) =>
      d.reason.length > 28 ? d.reason.slice(0, 28) + "..." : d.reason
    ),
    labels: { style: { fontSize: "14px", fontWeight: "500" } },
  },
  yAxis: {
    min: 0,
    max: 35,
    labels: {
      formatter() {
        return this.value + "%";
      },
    },
    gridLineDashStyle: "Dash",
  },
  plotOptions: {
    series: {
      depth: 40,
      dataLabels: {
        enabled: true,
        inside: true,
        style: { fontSize: "13px", fontWeight: "bold" },
        formatter() {
          return this.series.name === "percentage"
            ? this.y + "%"
            : thousand(this.y);
        },
      },
    },
  },
  series: [
    {
      name: "percentage",
      data: barData.map((d) => d.percentage),
      color: "#FACC15",
      borderRadius: 5,
    },
    {
      name: "count",
      data: barData.map((d) => d.count),
      color: "#A3A3A3",
      borderRadius: 5,
    },
  ],
  legend: {
    align: "center",
    verticalAlign: "bottom",
    layout: "horizontal",
    labelFormatter() {
      if (this.name === "percentage") return "Failure Rate %";
      if (this.name === "count") return "Count";
      return this.name;
    },
  },
});

// Configure Pie Chart
Highcharts.chart("pies-chart", {
  chart: {
    type: "pie",
    options3d: { enabled: true, alpha: 35, beta: 0, depth: 45 },
    backgroundColor: "transparent",
    height: 380,
    animation: { duration: 2500, easing: "easeOutElastic" },
  },
  title: {
    useHTML: true,
    floating: true,
    align: "center",
    verticalAlign: "middle",
    y: 0,
    text: `<div style="text-align:center;padding:25px;">
                <div style="font-size:48px;font-weight:900;color:#111;animation:pulse 2s infinite;">${pieData.reduce(
                  (s, d) => s + d.value,
                  0
                )}</div>
                <div style="font-size:11px;color:#222;font-weight:700;text-transform:uppercase;letter-spacing:4px;animation:fadeIn 3s ease-in;">TOTAL TRANSACTIONS</div>
              </div>`,
  },
  plotOptions: {
    pie: {
      innerSize: "55%",
      depth: 45,
      borderRadius: 25,
      slicedOffset: 12,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%",
        style: { fontSize: "12px", fontWeight: "900", color: "#111" },
        distance: -22,
      },
    },
  },
  tooltip: {
    backgroundColor: "white",
    borderRadius: 20,
    shadow: {
      color: "rgba(0,212,255,0.3)",
      offsetY: 10,
      opacity: 0.3,
      width: 25,
    },
    formatter() {
      return `<div style="padding:20px;text-align:center;"><div style="font-weight:900;color:#111;font-size:15px;text-transform:uppercase;letter-spacing:1px;">${
        this.point.name
      }</div><div style="color:#222;margin-bottom:6px;">Value: <span style="font-weight:800;color:#111;">${this.y.toLocaleString()}</span></div><div style="color:#222;">Share: <span style="font-weight:800;color:#111;">${this.percentage.toFixed(
        1
      )}%</span></div></div>`;
    },
  },
  series: [
    {
      name: "Data",
      data: pieData.map((d) => ({
        name: d.name,
        y: d.value,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: d.colors.map((c, i) => [i / (d.colors.length - 1), c]),
        },
        sliced: true,
      })),
    },
  ],
  credits: { enabled: false },
});
