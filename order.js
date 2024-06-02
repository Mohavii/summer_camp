document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    document.getElementById('plan').value = plan;

    document.getElementById('orderForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL';
        const request = new XMLHttpRequest();
        request.open("POST", webhookURL);

        request.setRequestHeader('Content-type', 'application/json');

        const plan = document.getElementById('plan').value;
        const description = document.getElementById('description').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const params = {
            username: "Order Bot",
            content: `New order received!\n\nPlan: ${plan}\nDescription: ${description}\nEmail: ${email}\nPhone: ${phone}`
        };

        request.send(JSON.stringify(params));
        
        alert('Your order has been placed.');
        window.location.href = 'index.html';
    });
});
