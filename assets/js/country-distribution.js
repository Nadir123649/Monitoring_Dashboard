const countries = [
  { country: "Greece", count: 351, percentage: 95.1 },
  { country: "Romania", count: 6, percentage: 1.6 },
  { country: "Bulgaria", count: 4, percentage: 1.1 },
  { country: "Spain", count: 2, percentage: 0.5 },
  { country: "Croatia", count: 2, percentage: 0.5 },
  { country: "Netherlands", count: 1, percentage: 0.3 },
  { country: "Estonia", count: 1, percentage: 0.3 },
  { country: "Hungary", count: 1, percentage: 0.3 },
  { country: "Poland", count: 1, percentage: 0.3 },
  { country: "Poland", count: 1, percentage: 0.4 },
  { country: "Poland", count: 1, percentage: 0.5 },
  { country: "Poland", count: 1, percentage: 0.6 },
];

let page = 1;
const pageSize = 8;
const totalPages = Math.ceil(countries.length / pageSize);

const renderTable = () => {
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginated = countries.slice(startIdx, endIdx);

  let rows = `
        <tr class="font-medium bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap">Approved verified</td>
          <td class="px-6 py-4 whitespace-nowrap">369</td>
          <td class="px-6 py-4 whitespace-nowrap">100%</td>
        </tr>
      `;

  paginated.forEach((item, index) => {
    const rowClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";
    const highlight =
      startIdx + index === 0 ? "text-green-600 font-medium" : "";
    rows += `
          <tr class="${rowClass}">
            <td class="px-6 py-4 whitespace-nowrap">${item.country}</td>
            <td class="px-6 py-4 whitespace-nowrap">${item.count}</td>
            <td class="px-6 py-4 whitespace-nowrap ${highlight}">${item.percentage.toFixed(
      1
    )}%</td>
          </tr>
        `;
  });

  document.getElementById("country-table").innerHTML = rows;
  document.getElementById(
    "pageInfo"
  ).textContent = `Page ${page} of ${totalPages}`;
  document.getElementById("prevPage").disabled = page === 1;
  document.getElementById("nextPage").disabled = page === totalPages;
};

document.getElementById("prevPage").addEventListener("click", () => {
  if (page > 1) {
    page--;
    renderTable();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (page < totalPages) {
    page++;
    renderTable();
  }
});

// Initial render
renderTable();
