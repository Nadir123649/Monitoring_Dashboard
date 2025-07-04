const dataOne = [
  {
    name: "Verification Success",
    value: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },
  {
    name: "Abandoned by Customer",
    value: 16,
    colors: ["#ff006e", "#8338ec", "#3a86ff"],
  },
  {
    name: "Verification Failure",
    value: 11,
    colors: ["#06ffa5", "#00d4aa", "#0056b3"],
  },
  {
    name: "Verification Success",
    value: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },

  {
    name: "Verification Success",
    value: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },
  {
    name: "Abandoned by Customer",
    value: 16,
    colors: ["#ff006e", "#8338ec", "#3a86ff"],
  },
  {
    name: "Verification Failure",
    value: 11,
    colors: ["#06ffa5", "#00d4aa", "#0056b3"],
  },
  { name: "Not Started", value: 1, colors: ["#ffbe0b", "#fb8500", "#ff006e"] },
  {
    name: "Verification Success",
    value: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },

  {
    name: "Verification Success",
    value: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },
  {
    name: "Abandoned by Customer",
    value: 16,
    colors: ["#ff006e", "#8338ec", "#3a86ff"],
  },
  {
    name: "Verification Failure",
    value: 11,
    colors: ["#06ffa5", "#00d4aa", "#0056b3"],
  },
  { name: "Not Started", value: 1, colors: ["#ffbe0b", "#fb8500", "#ff006e"] },
];

const total = dataOne.reduce((a, b) => a + b.value, 0);

Highcharts.chart("pieContainer", {
  chart: {
    type: "pie",
    options3d: { enabled: true, alpha: 35, depth: 45 },
    backgroundColor: "transparent",
    height: 380,
  },
  title: {
    useHTML: true,
    text: `<div style="text-align:center;padding:25px">
            <div style="font-size:48px;font-weight:900;color:#111;animation:pulse 2s infinite">${total}</div>
            <div style="font-size:11px;color:#222;font-weight:700;text-transform:uppercase;letter-spacing:4px;animation:fadeIn 3s ease-in">TOTAL DATA POINTS</div>
          </div>`,
    align: "center",
    verticalAlign: "middle",
    floating: true,
    y: 0,
  },
  credits: { enabled: false },
  plotOptions: {
    pie: {
      innerSize: "55%",
      depth: 45,
      borderRadius: 25,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%",
        style: { fontSize: "12px", fontWeight: "900", color: "#111" },
        distance: -22,
      },
      animation: { duration: 2500 },
    },
  },
  tooltip: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 0,
    shadow: true,
    style: { fontSize: "13px", fontWeight: "600", color: "#000" },
    formatter() {
      return `<div style="padding:20px;text-align:center">
                <div style="font-weight:900;color:#111;margin-bottom:10px;font-size:15px;text-transform:uppercase">${
                  this.point.name
                }</div>
                <div style="color:#222;margin-bottom:6px">Value: <span style="font-weight:800;color:#111">${
                  this.y
                }</span></div>
                <div style="color:#222">Share: <span style="font-weight:800;color:#111">${this.percentage.toFixed(
                  1
                )}%</span></div>
              </div>`;
    },
  },
  legend: { enabled: false },
  series: [
    {
      name: "Data",
      data: dataOne.map((d) => ({
        name: d.name,
        y: d.value,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: d.colors.map((c, i) => [i / (d.colors.length - 1), c]),
        },
        sliced: true,
      })),
      animation: { duration: 2500 },
    },
  ],
});

// Custom Legend
const legendEl = document.getElementById("pieLegend");
dataOne.forEach((d) => {
  const box = document.createElement("div");
  box.className =
    "flex items-center justify-center gap-2 py-4 px-2 border-white border-solid  mb-2 transition transform cursor-pointer bg-white/85 shadow  rounded-xl max-w-[220px] w-full min-w-[220px] ";

  const dot = document.createElement("div");
  dot.className = "w-4 h-4 rounded-full animate-pulse";
  dot.style.background = d.colors[d.colors.length - 1];
  dot.style.boxShadow = `0 0 10px ${d.colors[d.colors.length - 1]}80`;

  const label = document.createElement("span");
  label.className = "text-xs font-semibold text-gray-800 uppercase text-wrap text-ellipse";
  label.textContent = d.name;
 
  box.append(dot, label);
  legendEl.appendChild(box);
});

const data = [
  { name: "Between 0 And 5 Minutes", value: 84.47, color: "#2196F3" },
  { name: "Between 5 And 6 Minutes", value: 7.23, color: "#4CAF50" },
  { name: "Between 6 And 7 Minutes", value: 3.25, color: "#FF9800" },
  { name: "Between 7 And 10 Minutes", value: 3.55, color: "#FF9800" },
  { name: "More than 10 Minutes", value: 1.5, color: "#F44336" },
  { name: "Between 0 And 5 Minutes", value: 84.47, color: "#2196F3" },
  { name: "Between 5 And 6 Minutes", value: 7.23, color: "#4CAF50" },
  { name: "Between 6 And 7 Minutes", value: 3.25, color: "#FF9800" },
  { name: "Between 7 And 10 Minutes", value: 3.55, color: "#FF9800" },
  { name: "More than 10 Minutes", value: 1.5, color: "#F44336" },
  { name: "Between 0 And 5 Minutes", value: 84.47, color: "#2196F3" },
  { name: "Between 5 And 6 Minutes", value: 7.23, color: "#4CAF50" },
  { name: "Between 6 And 7 Minutes", value: 3.25, color: "#FF9800" },
];

const maxBarCount = 10;
const barHeight = 35;
const dynamicHeight = data.length > maxBarCount ? data.length * barHeight : 320;

Highcharts.chart("responseBarChartww", {
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
    height: dynamicHeight,
    style: {
      overflow: "auto",
    },
  },
  title: {
    text: "Response Time Distribution",
    align: "left",
    style: {
      fontSize: "clamp(14px, 2vw, 18px)", // responsive font
      fontWeight: "600",
      color: "#1e293b",
    },
    margin: 24,
  },
  credits: { enabled: false },
  xAxis: {
    categories: data.map((d) => d.name),
    labels: {
      style: {
        fontSize: "clamp(10px, 1.5vw, 13px)",
        color: "#64748b",
        fontWeight: "500",
      },
      useHTML: true,
      formatter: function () {
        return `<div style="max-width:160px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${this.value}</div>`;
      },
    },
    gridLineWidth: 0,
    lineColor: "#e2e8f0",
    tickLength: 0,
  },
  yAxis: {
    min: 0,
    max: 100,
    title: { text: null },
    labels: {
      style: {
        fontSize: "clamp(10px, 1.5vw, 13px)",
        color: "#64748b",
        fontWeight: "500",
      },
      formatter: function () {
        return this.value + "%";
      },
    },
    gridLineWidth: 1,
    gridLineColor: "#e2e8f0",
    lineColor: "#e2e8f0",
    tickLength: 0,
  },
  legend: { enabled: false },
  plotOptions: {
    bar: {
      depth: 40,
      grouping: false,
      borderRadius: 4,
      states: { hover: { brightness: 0.1 } },
      dataLabels: {
        enabled: true,
        format: "{y:.1f}%",
        style: {
          fontSize: "clamp(10px, 1.5vw, 12px)",
          fontWeight: "500",
          color: "#1e293b",
          textOutline: "none",
        },
        align: "center",
        verticalAlign: "top",
        y: -10,
      },
    },
  },
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderWidth: 0,
    borderRadius: 8,
    shadow: true,
    style: { fontSize: "14px", color: "#1e293b" },
    formatter: function () {
      return `<b>${this.x}</b><br/>${this.y.toFixed(1)}%`;
    },
  },
  series: [
    {
      name: "Response Time",
      data: data.map((d) => ({ y: d.value, color: d.color })),
      animation: { duration: 1000 },
    },
  ],
  animation: { duration: 1000 },
});
