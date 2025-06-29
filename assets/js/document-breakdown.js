document.addEventListener("DOMContentLoaded", function () {
  const chartData = [
    { type: "Unclassified", count: 9710, color: "#9E9E9E" },
    { type: "Αποδεικτικό AMKA", count: 423, color: "#9E9E9E" },
    { type: "Βεβαίωση Μόνιμης Κατοικίας", count: 576, color: "#9E9E9E" },
    { type: "TaxisNet Registration", count: 4216, color: "#FFA500" },
    { type: "ΔΗΛΩΣΗ ΕΙΣΟΔΗΜΑΤΟΣ E1", count: 2328, color: "#FFA500" },
    { type: "ΒΕΒΑΙΩΣΗ ΑΠΟΔΟΣΗΣ ΑΦΜ", count: 528, color: "#FFA500" },
    {
      type: "ΑΑΔΕ ΔΗΛΩΣΗ ΠΛΗΡΟΦΟΡΙΑΚΩΝ ΣΤΟΙΧΕΙΩΝ ΜΙΣΘΩΣΗΣ ΑΚΙΝΗΤΗΣ...",
      count: 467,
      color: "#9E9E9E",
    },
    { type: "ΛΟΓΑΡΙΑΣΜΟΣ ΠΑΡΟΧΟΥ ΡΕΥΜΑΤΟΣ", count: 8715, color: "#FACC15" },
    { type: "Bank Statement", count: 1116, color: "#F44336" },
    {
      type: "Έγγραφο ΔΟΥ (Μεταβολή στοιχείων φυσικού προσώπου)",
      count: 21,
      color: "#F44336",
    },
    {
      type: "ΛΟΓΑΡΙΑΣΜΟΣ ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΟΥ ΠΑΡΟΧΟΥ",
      count: 5626,
      color: "#FACC15",
    },
    { type: "Βεβαίωση κατοικίας ειδικής χρήσης", count: 0, color: "#9E9E9E" },
    {
      type: "Αποδεικτικό ασφαλιστικής ενημερότητας ΕΦΚΑ",
      count: 224,
      color: "#9E9E9E",
    },
    { type: "ΠΙΣΤΟΠΟΙΗΤΙΚΟ ΟΑΕΔ", count: 60, color: "#9E9E9E" },
    { type: "ΛΟΓΑΡΙΑΣΜΟΣ ΠΑΡΟΧΟΥ ΝΕΡΟΥ", count: 1439, color: "#FACC15" },
    { type: "TAX Document", count: 3134, color: "#FFA500" },
    { type: "", count: 0, color: "#9E9E9E" },
  ];

  Highcharts.chart("document-breakdown-chart", {
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
      height: 600,
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: { text: "", style: { fontSize: "20px", fontWeight: "bold" } },
    xAxis: {
      categories: chartData.map((d) => d.type),
      labels: {
        style: {
          fontSize: "14px",
          color: "#374151",
          fontWeight: 500,
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#E5E7EB",
    },
    yAxis: {
      min: 0,
      title: null,
      labels: {
        style: {
          fontSize: "13px",
          color: "#6B7280",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#E5E7EB",
    },
    legend: { enabled: false },
    plotOptions: {
      bar: {
        depth: 40,
        groupZPadding: 10,
        grouping: false,
        borderRadius: 8,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            color: "#222",
            fontWeight: "bold",
            fontSize: "15px",
            textOutline: "none",
          },
          align: "right",
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
        data: chartData.map((d) => ({ y: d.count, color: d.color })),
      },
    ],
  });
});
