document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("id-breakdown-chart", {
    chart: {
      type: "column",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 60,
        viewDistance: 30,
      },
      backgroundColor: "transparent",
      height: 600,
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: {
      text: "ID Breakdown",
      style: { fontWeight: "bold", fontSize: "20px" },
    },
    xAxis: {
      categories: [
        "Student Identity Card ASEI-SSY",
        "Army  Identity Card",
        "NEW GREEK CITIZEN IDENTITY",
        "ARMED FORCES IDENTITY (GEA) - MONIMOU",
        "ΤΑΥΤΟΤΗΤΑ ΕΝΟΠΛΩΝ ΔΥΝΑΜΕΩΝ (ΓΕΝ) - ΜΟΝΙΜΟΥ",
        "ΤΑΥΤΟΤΗΤΑ ΕΝΟΠΛΩΝ ΔΥΝΑΜΕΩΝ (ΓΕΣ) - ΜΟΝΙΜΟΥ",
        "ΤΑΥΤΟΤΗΤΑ ΕΥΡΩΠΑΪΚΗΣ ΕΝΩΣΗΣ - EU ID",
        "ΤΑΥΤΟΤΗΤΑ ΣΩΜΑΤΩΝ ΑΣΦΑΛΕΙΑΣ ΕΛΛΗΝΙΚΗ",
        "ΤΑΥΤΟΤΗΤΑ ΕΝΟΠΛΩΝ ΔΥΝΑΜΕΩΝ (ΓΕΑ) - ΕΦΕΔΡΟΥ",
        "ΤΑΥΤΟΤΗΤΑ ΕΝΟΠΛΩΝ ΔΥΝΑΜΕΩΝ (ΓΕΣ) - ΕΦΕΔΡΟΥ",
        "ΤΑΥΤΟΤΗΤΑ ΟΜΟΓΕΝΩΝ",
        "ΔΕΛΤΙΟ ΑΣΤΥΝΟΜΙΚΗΣ ΤΑΥΤΟΤΗΤΑΣ",
        "ΤΑΥΤΟΤΗΤΑ ΕΝΟΠΛΩΝ ΔΥΝΑΜΕΩΝ (ΓΕΝ) - ΕΦΕΔΡΟΥ",
        "ΤΑΥΤΟΤΗΤΑ ΣΩΜΑΤΩΝ ΑΣΦΑΛΕΙΑΣ ΛΙΜΕΝΙΚΟ",
        "ΔΙΑΒΑΤΗΡΙΟ - PASSPORT",
      ],
      labels: {
        rotation: -30,
        style: {
          fontSize: "14px",
          color: "#374151",
          fontWeight: 500,
        },
      },
      gridLineWidth: 0,
      lineColor: "#E5E7EB",
      tickColor: "#E5E7EB",
    },
    yAxis: {
      min: 0,
      title: null,
      labels: {
        style: { fontSize: "13px", color: "#6B7280" },
      },
      gridLineWidth: 1,
      gridLineColor: "#E5E7EB",
    },
    legend: { enabled: false },
    plotOptions: {
      column: {
        depth: 60,
        borderRadius: 8,
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(59,130,246,0.95)"],
            [1, "rgba(96,165,250,0.85)"],
          ],
        },
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            color: "#374151",
            fontWeight: "bold",
            fontSize: "14px",
            textOutline: "none",
          },
          inside: false,
        },
      },
    },
    tooltip: {
      backgroundColor: "#fff",
      borderColor: "#E5E7EB",
      borderRadius: 8,
      style: {
        color: "#374151",
        fontSize: "14px",
      },
      pointFormat: "<b>{point.y}</b> documents",
    },
    series: [
      {
        name: "Amount",
        data: [
          39, 243, 3659, 106, 80, 352, 483, 251, 14, 107, 21, 23946, 15, 34,
          3434,
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            chart: { height: 400 },
            xAxis: {
              labels: { style: { fontSize: "10px" }, rotation: 0 },
            },
            yAxis: {
              labels: { style: { fontSize: "10px" } },
            },
            plotOptions: {
              column: {
                dataLabels: { style: { fontSize: "10px" } },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
            },
          },
        },
      ],
    },
  });
});
