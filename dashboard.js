// Dummy data for demonstration purposes
const stockData = [
  { name: "Beans", tonnage: 500, branch: "Maganjo" },
  { name: "Maize", tonnage: 300, branch: "Matugga" },
  { name: "Cowpeas", tonnage: 150, branch: "Maganjo" }
];

const salesData = [
  { produce: "Beans", tonnage: 100, amount: 50000, buyer: "John Doe", date: "2024-08-21" },
  { produce: "Maize", tonnage: 50, amount: 30000, buyer: "Jane Smith", date: "2024-08-20" }
];

const deferredPaymentsData = [
  { buyer: "Alex Brown", amountDue: 150000, dueDate: "2024-09-01", produce: "Soybeans", tonnage: 200 }
];

function loadStockDetails() {
  const stockSection = document.getElementById('stock-details');
  stockData.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.name} - ${item.tonnage}kg at ${item.branch} branch`;
      stockSection.appendChild(div);
  });
}

function loadSalesDetails() {
  const salesSection = document.getElementById('sales-details');
  salesData.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.produce} - ${item.tonnage}kg sold to ${item.buyer} for Ugx ${item.amount} on ${item.date}`;
      salesSection.appendChild(div);
  });
}

function loadDeferredPaymentsDetails() {
  const deferredPaymentsSection = document.getElementById('deferred-payments-details');
  deferredPaymentsData.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.buyer} owes Ugx ${item.amountDue} for ${item.produce} (${item.tonnage}kg), due on ${item.dueDate}`;
      deferredPaymentsSection.appendChild(div);
  });
}

// Load all sections on page load
window.onload = function() {
  loadStockDetails();
  loadSalesDetails();
  loadDeferredPaymentsDetails();
};
