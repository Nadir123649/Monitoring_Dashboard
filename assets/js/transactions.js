const chartData = {
  success: {
    stat1: {
      title: "Average Response Time per Transaction",
      value: "186 sec",
      target: "vs 360 sec",
      progress: 52,
    },
    stat2: {
      title: "% Response Time vs SLA",
      value: "55%",
      target: "vs 85%",
      progress: 55,
    },
    chart1: {
      title: "Response Time Distribution",
      categories: [
        "Between 0 And 5 Minutes",
        "Between 5 And 6 Minutes",
        "Between 6 And 7 Minutes",
        "Between 7 And 10 Minutes",
        "More than 10 Minutes",
      ],
      data: [84.47, 7.23, 3.25, 3.55, 1.5],
      colors: ["#2196F3", "#4CAF50", "#FF9800", "#FF9800", "#F44336"],
    },
    chart2: {
      title: "Document Types",
      categories: [
        "Tax Document",
        "Passport",
        "Police ID",
        "Student ID",
        "Military ID",
      ],
      data: [3134, 3434, 23946, 39, 243],
      colors: ["#2196F3", "#4CAF50", "#FF9800", "#9E9E9E", "#F44336"],
    },
  },
  monitoring: {
    stat1: {
      title: "Avg Txn Time",
      value: "152 sec",
      target: "vs 320 sec",
      progress: 65,
    },
    stat2: { title: "% SLA Hit", value: "63%", target: "vs 90%", progress: 63 },
    chart1: {
      title: "Updated Time Distribution",
      categories: ["< 5min", "5-10min", "10-15min", "15-20min", "> 20min"],
      data: [72, 18, 5, 3, 2],
      colors: ["#0284C7", "#10B981", "#F59E0B", "#F59E0B", "#EF4444"],
    },
    chart2: {
      title: "Updated Document Stats",
      categories: [
        "License",
        "Utility Bill",
        "Driving ID",
        "NADRA Card",
        "School ID",
      ],
      data: [2534, 4134, 17450, 139, 543],
      colors: ["#0284C7", "#10B981", "#F59E0B", "#9CA3AF", "#EF4444"],
    },
  },
};

let chart1, chart2;

const chartOptions = (title, categories, data, colors) => ({
  chart: {
    type: "bar",
    options3d: { enabled: true, alpha: 15, beta: 15, depth: 50 },
    backgroundColor: "transparent",
  },
  title: {
    text: title,
    align: "left",
    style: { fontSize: "18px", fontWeight: "bold" },
  },
  xAxis: {
    categories,
    labels: { style: { fontSize: "15px", color: "#64748b" } },
    gridLineWidth: 1,
    gridLineColor: "#e5e7eb",
  },
  yAxis: {
    min: 0,
    title: { text: null },
    labels: { style: { fontSize: "14px", color: "#64748b" } },
    gridLineWidth: 1,
    gridLineColor: "#e5e7eb",
  },
  legend: { enabled: false },
  plotOptions: {
    bar: {
      depth: 40,
      dataLabels: {
        enabled: true,
        format: "{point.y}",
        style: { color: "#222", fontWeight: "bold", fontSize: "15px" },
        align: "right",
        inside: false,
      },
    },
  },
  tooltip: { pointFormat: "<b>{point.y}</b>" },
  series: [
    {
      data: data.map((y, i) => ({ y, color: colors[i] })),
    },
  ],
});

function renderCharts(tabKey) {
  const d = chartData[tabKey];

  document.getElementById("stat-title-1").textContent = d.stat1.title;
  document.getElementById("stat-value-1").textContent = d.stat1.value;
  document.getElementById("stat-target-1").textContent = d.stat1.target;
  document.getElementById("progress-1").style.width = d.stat1.progress + "%";

  document.getElementById("stat-title-2").textContent = d.stat2.title;
  document.getElementById("stat-value-2").textContent = d.stat2.value;
  document.getElementById("stat-target-2").textContent = d.stat2.target;
  document.getElementById("progress-2").style.width = d.stat2.progress + "%";

  chart1.update(
    chartOptions(
      d.chart1.title,
      d.chart1.categories,
      d.chart1.data,
      d.chart1.colors
    )
  );
  chart2.update(
    chartOptions(
      d.chart2.title,
      d.chart2.categories,
      d.chart2.data,
      d.chart2.colors
    )
  );
}

document.getElementById("tab-success").addEventListener("click", () => {
  renderCharts("success");
  toggleTabs("tab-success", "tab-monitoring");
});

document.getElementById("tab-monitoring").addEventListener("click", () => {
  renderCharts("monitoring");
  toggleTabs("tab-monitoring", "tab-success");
});

function toggleTabs(activeId, inactiveId) {
  document
    .getElementById(activeId)
    .classList.add("text-blue-600", "border-b-2", "border-blue-600");
  document
    .getElementById(inactiveId)
    .classList.remove("text-blue-600", "border-b-2", "border-blue-600");
}

document.addEventListener("DOMContentLoaded", () => {
  chart1 = Highcharts.chart(
    "chart1",
    chartOptions(
      chartData.success.chart1.title,
      chartData.success.chart1.categories,
      chartData.success.chart1.data,
      chartData.success.chart1.colors
    )
  );

  chart2 = Highcharts.chart(
    "chart2",
    chartOptions(
      chartData.success.chart2.title,
      chartData.success.chart2.categories,
      chartData.success.chart2.data,
      chartData.success.chart2.colors
    )
  );

  renderCharts("success");
});
