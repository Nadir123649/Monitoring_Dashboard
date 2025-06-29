const tabButtons = document.querySelectorAll(".tab-btn");
const viewPanes = document.querySelectorAll(".view-pane");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active", "border-blue-500"));
    btn.classList.add("active", "border-blue-500");
    const target = btn.dataset.view;
    viewPanes.forEach((v) =>
      v.id === target ? v.classList.remove("hidden") : v.classList.add("hidden")
    );
  });
});

const successRatePieData = [
  {
    name: "Verification Success",
    y: 72,
    colors: ["#00d4ff", "#006eff", "#0047ff"],
  },
  {
    name: "Abandoned by Customer",
    y: 16,
    colors: ["#ff006e", "#8338ec", "#3a86ff"],
  },
  {
    name: "Verification Failure",
    y: 11,
    colors: ["#06ffa5", "#00d4aa", "#0056b3"],
  },
  { name: "Not Started", y: 1, colors: ["#ffbe0b", "#fb8500", "#ff006e"] },
];

Highcharts.chart("successPieChartContainers", {
  chart: {
    type: "pie",
    options3d: { enabled: true, alpha: 35, depth: 45 },
    backgroundColor: "transparent",
    height: 380,
  },
  title: {
    useHTML: true,
    text: `<div style="text-align:center;padding:25px;">
              <div style="font-size:48px;font-weight:900;color:#111;animation:pulse 2s infinite;">100</div>
              <div style="font-size:11px;color:#222;font-weight:700;text-transform:uppercase;letter-spacing:4px;animation:fadeIn 3s ease-in;">TOTAL DATA POINTS</div>
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
      borderWidth: 1,
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
    style: { fontSize: "13px", fontWeight: "600" },
    formatter: function () {
      return `<div style="padding:20px;text-align:center;">
                    <div style="font-weight:900;color:#111;margin-bottom:10px;font-size:15px;text-transform:uppercase;letter-spacing:1px;">
                      ${this.point.name}
                    </div>
                    <div style="color:#222;margin-bottom:6px;">Value: <span style="font-weight:800;color:#111;">${
                      this.y
                    }</span></div>
                    <div style="color:#222;">Share: <span style="font-weight:800;color:#111;">${this.percentage.toFixed(
                      1
                    )}%</span></div>
                </div>`;
    },
  },
  legend: { enabled: false },
  series: [
    {
      name: "Data",
      data: successRatePieData.map((item) => ({
        name: item.name,
        y: item.y,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: item.colors.map((c, i) => [i / (item.colors.length - 1), c]),
        },
        sliced: true,
      })),
    },
  ],
});

const pieLegendContainer = document.getElementById("successPieLegends");
successRatePieData.forEach((entry) => {
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
  pieLegendContainer.append(legendBox);
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

Highcharts.chart("failureBarCharts", {
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
