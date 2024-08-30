document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'owner' && password === 'ownerpass') {
        window.location.href = 'owner.dashboard.html';
    } else if (username === 'salesagent' && password === 'agentpass') {
        window.location.href = 'sales.agent.dashboard.html';
    } else if (username === 'manager' && password === 'managerpass') {
        window.location.href = 'manager_dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
});
