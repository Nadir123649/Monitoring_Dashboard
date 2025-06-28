function openMobileMenu() {
  document.getElementById("sidebar").classList.add("fixed", "left-0", "top-0");
  document.getElementById("overlay").classList.remove("hidden");
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("fixed");
  document.getElementById("overlay").classList.add("hidden");
}

document.getElementById("year").textContent = new Date().getFullYear();

let collapsed = false;
let dropdownOpen = {};

function toggleCollapse() {
  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("collapseIcon");
  const labels = document.querySelectorAll(".sidebar-label");

  collapsed = !collapsed;

  // toggle width
  sidebar.classList.toggle("w-[250px]");
  sidebar.classList.toggle("w-[70px]");

  // toggle text label visibility
  labels.forEach((label) => {
    if (collapsed) {
      label.classList.add("hidden");
    } else {
      label.classList.remove("hidden");
    }
  });

  // rotate icon
  if (icon) icon.classList.toggle("rotate-180");
}

function toggleDropdown(name) {
  const dropdown = document.getElementById("dropdown-" + name);
  const icon = document.getElementById("dropdownIcon-" + name);
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    dropdown.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("pie-chart", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 35,
        beta: 0,
      },
    },
    title: {
      text: "Verification Stats",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
      },
    },
    series: [
      {
        name: "Count",
        data: [
          ["Verification Success", 72],
          ["Abandoned by Customer", 16],
          ["Verification Failure", 11],
          ["Not Started", 1],
        ],
      },
    ],
  });

  Highcharts.chart("bar-chart", {
    chart: {
      type: "bar",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 40,
      },
    },
    title: {
      text: "Response Time Distribution",
    },
    xAxis: {
      categories: ["0-5 min", "5-6 min", "6-7 min", "7-10 min", "10+ min"],
    },
    yAxis: {
      min: 0,
      max: 100,
      title: null,
    },
    series: [
      {
        name: "Percentage",
        data: [84.47, 7.23, 3.25, 3.55, 1.5],
      },
    ],
  });
});

const data = [
  {
    name: "Verification Success",
    value: 72,
    gradient: ["#2196F3", "#1E88E5"],
  },
  {
    name: "Abandoned by Customer",
    value: 16,
    gradient: ["#AB47BC", "#8E24AA"],
  },
  {
    name: "Verification Failure",
    value: 11,
    gradient: ["#00BFA5", "#1DE9B6"],
  },
  {
    name: "Not Started",
    value: 1,
    gradient: ["#FB8C00", "#FFB74D"],
  },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

Highcharts.chart("chart", {
  chart: {
    type: "pie",
    backgroundColor: "transparent",
    height: 430,
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: `
        <div style="text-align:center;">
          <div style="font-size:48px; font-weight:900; color:#111;">${total}</div>
          <div style="font-size:11px; letter-spacing:4px; font-weight:700; text-transform:uppercase; color:#444;">Total Data Points</div>
        </div>
      `,
    align: "center",
    verticalAlign: "middle",
    floating: true,
    useHTML: true,
  },
  plotOptions: {
    pie: {
      innerSize: "65%",
      depth: 45,
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.0f}%",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#111",
          textOutline: "none",
        },
        distance: -30,
      },
    },
  },
  tooltip: {
    useHTML: true,
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderRadius: 14,
    style: {
      fontFamily: "JetBrains Mono",
      fontSize: "13px",
      color: "#111",
      fontWeight: "600",
    },
    formatter: function () {
      return `
          <div style="padding: 14px 20px;">
            <div style="font-weight:900; font-size:14px; margin-bottom:6px; text-transform:uppercase; color:#000;">${
              this.point.name
            }</div>
            <div style="color:#333;">Value: <strong>${this.y}</strong></div>
            <div style="color:#333;">Share: <strong>${this.percentage.toFixed(
              1
            )}%</strong></div>
          </div>
        `;
    },
  },
  series: [
    {
      name: "Data",
      data: data.map((d) => ({
        name: d.name,
        y: d.value,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, d.gradient[0]],
            [1, d.gradient[1]],
          ],
        },
      })),
    },
  ],
  credits: { enabled: false },
  legend: { enabled: false },
});

// Custom Legend
const legendEl = document.getElementById("legend");
data.forEach((d, i) => {
  const item = document.createElement("div");
  item.className = "legend-item";
  const dot = document.createElement("div");
  dot.className = "legend-dot";
  dot.style.background = d.gradient[1];
  item.appendChild(dot);
  item.innerHTML += `<span>${d.name}</span>`;
  legendEl.appendChild(item);
});

const responseRates = [
  { name: "Between 0 And 5 Minutes", value: 84.47, color: "#2196F3" },
  { name: "Between 5 And 6 Minutes", value: 7.23, color: "#4CAF50" },
  { name: "Between 6 And 7 Minutes", value: 3.25, color: "#FF9800" },
  { name: "Between 7 And 10 Minutes", value: 3.55, color: "#FF9800" },
  { name: "More than 10 Minutes", value: 1.5, color: "#F44336" },
];

Highcharts.chart("barChartContainer", {
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
    style: {
      fontFamily: "Inter, sans-serif",
    },
    animation: {
      duration: 1000,
    },
  },
  title: {
    text: "Response Time Distribution",
    align: "left",
    style: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1e293b",
    },
    margin: 24,
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    categories: responseRates.map((d) => d.name),
    labels: {
      style: {
        fontSize: "13px",
        color: "#64748b",
        fontWeight: "500",
      },
      useHTML: true,
      formatter: function () {
        return `<span style="max-width: 100px; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${this.value}</span>`;
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
        fontSize: "13px",
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
  legend: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      depth: 40,
      groupZPadding: 10,
      grouping: false,
      borderRadius: 4,
      states: {
        hover: {
          brightness: 0.1,
        },
      },
      dataLabels: {
        enabled: true,
        format: "{y:.1f}%",
        style: {
          fontSize: "12px",
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
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderWidth: 0,
    borderRadius: 8,
    shadow: true,
    style: {
      fontSize: "14px",
      color: "#1e293b",
    },
    formatter: function () {
      return `<b>${this.x}</b><br/>${this.y.toFixed(1)}%`;
    },
  },
  series: [
    {
      name: "Response Time",
      data: responseRates.map((d) => ({
        y: d.value,
        color: d.color,
        selected: false,
      })),
      animation: {
        duration: 1000,
      },
    },
  ],
});

document.addEventListener("DOMContentLoaded", () => {
  const fromDateInput = document.getElementById("from-date");
  const toDateInput = document.getElementById("to-date");

  // Handle date selection
  fromDateInput.addEventListener("change", (e) => {
    console.log("From Date selected:", e.target.value);
  });

  toDateInput.addEventListener("change", (e) => {
    console.log("To Date selected:", e.target.value);
  });
});

const legendContainer = document.getElementById("pie-legendss");
chartPieData.forEach((entry) => {
  const legendBox = document.createElement("div");
  legendBox.className =
    "flex items-center gap-2 px-4 py-3 transition transform rounded-lg cursor-pointer bg-white/95 backdrop-blur-lg hover:-translate-y-1 hover:scale-105";
  const dot = document.createElement("div");
  dot.className = "w-4 h-4 rounded-full animate-pulse";
  dot.style.background = entry.colors.at(-1);
  dot.style.boxShadow = `0 0 10px ${entry.colors.at(-1)}80`;
  const label = document.createElement("span");
  label.className = "text-xs font-semibold text-gray-800 uppercase";
  label.textContent = entry.name;
  legendBox.append(dot, label);
  legendContainer.append(legendBox);
});

const failureReasons = [
  "Unclassified",
  "Document date is older than XXX",
  "The document is not in complete view",
  "User is under 21 years old",
  "Missing mandatory document fields",
  "Possible fraud",
];
const failurePercentages = [31, 11.3, 11.5, 1.25, 0.05, 6.08];
const failureColors = [
  "#9E9E9E",
  "#FF9800",
  "#FF9800",
  "#F44336",
  "#F44336",
  "#F44336",
];

Highcharts.chart("bar-charted", {
  chart: {
    type: "bar",
    options3d: { enabled: true, alpha: 15, beta: 15, depth: 50 },
    backgroundColor: "transparent",
    height: 320,
  },
  title: {
    text: "Failure Reasons",
    align: "left",
    style: { fontSize: "18px", fontWeight: "bold" },
  },
  xAxis: {
    categories: failureReasons,
    labels: { style: { fontSize: "15px", color: "#64748b" } },
    gridLineWidth: 1,
    gridLineColor: "#e5e7eb",
  },
  yAxis: {
    min: 0,
    max: 35,
    title: { text: null },
    labels: { style: { fontSize: "14px", color: "#64748b" } },
    gridLineWidth: 1,
    gridLineColor: "#e5e7eb",
  },
  plotOptions: {
    bar: {
      depth: 40,
      grouping: false,
      dataLabels: {
        enabled: true,
        format: "{point.y:.2f}",
        style: { color: "#222", fontWeight: "bold", fontSize: "15px" },
        align: "right",
        inside: false,
      },
    },
  },
  tooltip: { pointFormat: "<b>{point.y:.2f}%</b>" },
  series: [
    {
      name: "value",
      data: failurePercentages.map((v, i) => ({
        y: v,
        color: failureColors[i],
      })),
    },
  ],
  credits: { enabled: false },
});


  const chartPieData = [
            { name: 'Verification Success', y: 72, colors: ['#00d4ff', '#006eff', '#0047ff'] },
            { name: 'Abandoned by Customer', y: 16, colors: ['#ff006e', '#8338ec', '#3a86ff'] },
            { name: 'Verification Failure', y: 11, colors: ['#06ffa5', '#00d4aa', '#0056b3'] },
            { name: 'Not Started', y: 1, colors: ['#ffbe0b', '#fb8500', '#ff006e'] }
        ];

        Highcharts.chart('pie-charted', {
            chart: { type: 'pie', options3d: { enabled: true, alpha: 35, depth: 45 }, backgroundColor: 'transparent', height: 380 },
            title: {
                useHTML: true,
                text: `<div style="text-align:center;padding:25px;">
                <div style="font-size:48px;font-weight:900;color:#111;animation:pulse 2s infinite;">100</div>
                <div style="font-size:11px;color:#222;font-weight:700;text-transform:uppercase;letter-spacing:4px;animation:fadeIn 3s ease-in;">TOTAL DATA POINTS</div>
              </div>`,
                align: 'center', verticalAlign: 'middle', floating: true, y: 0
            },
            credits: { enabled: false },
            plotOptions: {
                pie: {
                    innerSize: '55%', depth: 45, borderWidth: 1, borderRadius: 25, cursor: 'pointer',
                    dataLabels: { enabled: true, format: '{point.percentage:.0f}%', style: { fontSize: '12px', fontWeight: '900', color: '#111' }, distance: -22 },
                    animation: { duration: 2500 }
                }
            },
            tooltip: {
                backgroundColor: 'white', borderRadius: 20, style: { fontSize: '13px', fontWeight: '600' },
                formatter: function () {
                    return `<div style="padding:20px;text-align:center;">
          <div style="font-weight:900;color:#111;margin-bottom:10px;font-size:15px;text-transform:uppercase;letter-spacing:1px;">
            ${this.point.name}
          </div>
          <div style="color:#222;margin-bottom:6px;">Value: <span style="font-weight:800;color:#111;">${this.y}</span></div>
          <div style="color:#222;">Share: <span style="font-weight:800;color:#111;">${this.percentage.toFixed(1)}%</span></div>
        </div>`;
                }
            },
            legend: { enabled: false },
            series: [{
                name: 'Data',
                data: chartPieData.map(item => ({
                    name: item.name,
                    y: item.y,
                    color: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: item.colors.map((c, i) => [i / (item.colors.length - 1), c])
                    },
                    sliced: true
                }))
            }]
        });

      