const responseTimeData1 = Array.from({ length: 120 }, (_, i) => ({
  hour: i + 1,
  "0-50": Math.floor(Math.random() * 100),
  "50-100": Math.floor(Math.random() * 50),
  "100-150": Math.floor(Math.random() * 30),
  "150-200": Math.floor(Math.random() * 20),
  "200-250": Math.floor(Math.random() * 10),
  "250-300": Math.floor(Math.random() * 5),
  "300-350": Math.floor(Math.random() * 3),
  "350-400": Math.floor(Math.random() * 2),
  "400-450": Math.floor(Math.random() * 1),
  "450-500": Math.floor(Math.random() * 1),
}));

const responseTimeData2 = Array.from({ length: 120 }, (_, i) => ({
  hour: i + 1,
  "0-50": Math.floor(Math.random() * 80),
  "50-100": Math.floor(Math.random() * 40),
  "100-150": Math.floor(Math.random() * 25),
  "150-200": Math.floor(Math.random() * 15),
  "200-250": Math.floor(Math.random() * 10),
  "250-300": Math.floor(Math.random() * 7),
  "300-350": Math.floor(Math.random() * 5),
  "350-400": Math.floor(Math.random() * 3),
  "400-450": Math.floor(Math.random() * 2),
  "450-500": Math.floor(Math.random() * 1),
}));

const seriesKeys = [
  "0-50",
  "50-100",
  "100-150",
  "150-200",
  "200-250",
  "250-300",
  "300-350",
  "350-400",
  "400-450",
  "450-500",
];
const colors = [
  "#22c55e",
  "#eab308",
  "#a3e635",
  "#fde047",
  "#38bdf8",
  "#818cf8",
  "#f472b6",
  "#fca5a5",
  "#a3a3a3",
  "#d4d4d4",
];

let chart;

function initChart(responseTimeData) {
  const series = seriesKeys.map((key, idx) => ({
    name: key,
    data: responseTimeData.map((d) => d[key]),
    color: colors[idx],
    stack: "response",
    type: "area",
    marker: { enabled: false },
  }));

  chart = Highcharts.chart("response-time-chart", {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 60,
        viewDistance: 25,
      },
    },
    title: {
      text: "Response Time per Document",
      style: { fontSize: "16px" },
    },
    xAxis: {
      categories: responseTimeData.map((d) => d.hour),
      labels: { enabled: false },
      title: { text: "Hour" },
      gridLineColor: "#e5e7eb",
    },
    yAxis: {
      min: 0,
      title: { text: null },
      gridLineColor: "#e5e7eb",
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "bottom",
      itemStyle: { fontSize: "13px" },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        depth: 60,
        marker: { enabled: false },
        lineWidth: 1,
        fillOpacity: 0.7,
      },
    },
    tooltip: {
      shared: true,
    },
    series,
  });
}

function updateChartData(responseTimeData) {
  seriesKeys.forEach((key, idx) => {
    if (chart.series[idx]) {
      chart.series[idx].setData(
        responseTimeData.map((d) => d[key]),
        false
      );
    }
  });

  chart.xAxis[0].setCategories(
    responseTimeData.map((d) => d.hour),
    false
  );
  chart.redraw();
}

function setActiveTab(id) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active-tab", "bg-white", "border-gray-700");
    btn.classList.add("bg-gray-100", "border-transparent");
  });
  const tab = document.getElementById(id);
  tab.classList.add("active-tab", "bg-white", "border-gray-700");
  tab.classList.remove("bg-gray-100", "border-transparent");
}

document.getElementById("tab-success").addEventListener("click", () => {
  setActiveTab("tab-success");
  updateChartData(responseTimeData1);
  updatePercentageBoxes(responseTimeData1);
});

document.getElementById("tab-transactions").addEventListener("click", () => {
  setActiveTab("tab-transactions");
  updateChartData(responseTimeData2);
  updatePercentageBoxes(responseTimeData2);
});

// Initialize chart
initChart(responseTimeData1);
updatePercentageBoxes(responseTimeData1);

function updatePercentageBoxes(data) {
  let total = 0;
  let bucket0_50 = 0;
  let bucket50_100 = 0;

  data.forEach((row) => {
    for (let key in row) {
      if (key !== "hour") total += row[key];
    }
    bucket0_50 += row["0-50"];
    bucket50_100 += row["50-100"];
  });

  const remaining = total - (bucket0_50 + bucket50_100);

  const p0 = ((bucket0_50 / total) * 100).toFixed(1);
  const p50 = ((bucket50_100 / total) * 100).toFixed(1);
  const prem = ((remaining / total) * 100).toFixed(1);

  document.querySelector("#box-0-50 span.text-lg").textContent = `${p0}%`;
  document.querySelector("#box-50-100 span.text-lg").textContent = `${p50}%`;
  document.querySelector(
    "#box-remaining span.text-lg"
  ).textContent = `${prem}%`;
}
