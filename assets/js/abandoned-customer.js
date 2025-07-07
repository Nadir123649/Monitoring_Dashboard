const customBarData = [
  { stage: "Upload Documents", val1: 2023, val2: 208, val3: 0 },
  { stage: "Upload ID", val1: 3688, val2: 17, val3: 0 },
  { stage: "Register", val1: 15, val2: 1, val3: 0 },
  { stage: "Info Page", val1: 1624, val2: 16, val3: 52 },
  { stage: "Upload Documents", val1: 2023, val2: 208, val3: 0 },
  { stage: "Upload ID", val1: 3688, val2: 17, val3: 0 },
  { stage: "Register", val1: 15, val2: 1, val3: 0 },
  { stage: "Info Page", val1: 1624, val2: 16, val3: 52 },
  { stage: "Upload Documents", val1: 2023, val2: 208, val3: 0 },
  { stage: "Upload ID", val1: 3688, val2: 17, val3: 0 },
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
  { name: "Verification Failure", value: 5667, grad: customGradients[2] },
  { name: "Verification Failure", value: 5667, grad: customGradients[2] },
  { name: "Verification Success", value: 15441, grad: customGradients[3] },
  { name: "Not Started", value: 465, grad: customGradients[0] },
  { name: "Not Started", value: 465, grad: customGradients[0] },
  { name: "Abandoned by Customer", value: 7644, grad: customGradients[1] },
  { name: "Verification Failure", value: 5667, grad: customGradients[2] },
  { name: "Abandoned by Customer", value: 7644, grad: customGradients[1] },
  { name: "Verification Failure", value: 5667, grad: customGradients[2] },
  { name: "Verification Success", value: 15441, grad: customGradients[3] },
];

const customTotal = customPieData.reduce((s, d) => s + d.value, 0);

const barCount = customBarData.length;
const dynamicBarHeight = 35;
const dynamicHeight = barCount > 10 ? barCount * dynamicBarHeight : 400;

Highcharts.chart("bar-containersd", {
  chart: {
    type: "bar",
    options3d: { enabled: true, alpha: 10, beta: 15, depth: 50 },
    backgroundColor: "transparent",
    height: dynamicHeight,
  },
  title: { text: "" },
  credits: { enabled: false },
  xAxis: {
    categories: customBarData.map((d) => d.stage),
    labels: {
      style: { fontSize: "clamp(12px, 1.5vw, 16px)" },
      useHTML: true,
      formatter: function () {
        return `<div style="max-width:160px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${this.value}</div>`;
      },
    },
    lineWidth: 0,
    tickLength: 0,
    gridLineWidth: 0,
  },
  yAxis: {
    min: 0,
    labels: {
      style: { fontSize: "clamp(11px, 1.5vw, 14px)" },
    },
    lineWidth: 0,
    tickLength: 0,
    gridLineWidth: 0,
  },
  plotOptions: {
    series: {
      depth: 40,
      borderRadius: 5,
      dataLabels: {
        enabled: true,
        inside: true,
        style: {
          fontSize: "clamp(10px, 1.5vw, 14px)",
          fontWeight: "bold",
          color: "#333",
        },
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
    itemStyle: { fontSize: "clamp(11px, 1.5vw, 14px)" },
  },
  series: [
    {
      name: "Val1",
      data: customBarData.map((d) => d.val1),
      color: "#B0B0B0",
    },
    {
      name: "Val2",
      data: customBarData.map((d) => d.val2),
      color: "#888888",
    },
    {
      name: "Val3",
      data: customBarData.map((d) => d.val3),
      color: "#222222",
    },
  ],
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

// Inject Dynamic Legend for pie-containersd
const legendContainer2 = document.getElementById("pieLegend2");

customPieData.forEach((d) => {
  const box = document.createElement("div");
  box.className =
    "flex items-center w-[190px] md:w-full gap-2 px-2 justify-center md:justify-start py-3 mb-2 min-w-[190px] md:min-w-[100%] max-w-[190px] md:max-w-[100%] transition-transform border border-white shadow cursor-pointer border-opacity-20 bg-white/85 rounded-xl";

  const dot = document.createElement("div");
  dot.className = "w-4 h-4 rounded-full";
  dot.style.background = d.grad.stops[d.grad.stops.length - 1][1]; // last gradient stop color
  dot.style.boxShadow = `0 0 10px ${
    d.grad.stops[d.grad.stops.length - 1][1]
  }80`;

  const label = document.createElement("span");
  label.className =
    "text-xs font-semibold text-gray-800 uppercase whitespace-pre-wrap";
  label.textContent = d.name;

  box.append(dot, label);
  legendContainer2.appendChild(box);
});
