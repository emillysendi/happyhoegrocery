document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let produceName = document.getElementById('produceName').value;
    let tonnage = document.getElementById('tonnage').value;
    let amountPaid = document.getElementById('amountPaid').value;
    let buyerName = document.getElementById('buyerName').value;
    let salesAgentName = document.getElementById('salesAgentName').value;
    let saleDate = document.getElementById('saleDate').value;
    let saleTime = document.getElementById('saleTime').value;

    // Validate the amount paid
    if (amountPaid.length < 5) {
        alert('Amount Paid must be at least 5 characters long.');
        return;
    }

    // Validate the buyer's name and sales agent's name
    if (buyerName.length < 2 || salesAgentName.length < 2) {
        alert('Buyer\'s Name and Sales Agent\'s Name must be at least 2 characters long.');
        return;
    }

    // Display the result
    document.getElementById('result').innerText = `Sale recorded successfully for ${produceName}.`;

    // Optionally, you can reset the form
    document.getElementById('salesForm').reset();
});
