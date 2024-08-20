document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Define credentials for manager and sales agent
    const managerCredentials = {
        username: "manager",
        password: "manager123"
    };

    const salesAgentCredentials = {
        username: "salesagent",
        password: "sales123"
    };
    
    // Check credentials
    if (username === managerCredentials.username && password === managerCredentials.password) {
        window.location.href = "manager_dashboard.html";
    } else if (username === salesAgentCredentials.username && password === salesAgentCredentials.password) {
        window.location.href = "sales.agent.dashboard.html";
    } else {
        document.getElementById("message").textContent = "Invalid credentials!";
    }
});
