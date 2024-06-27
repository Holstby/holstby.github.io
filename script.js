document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const topUpButton = document.getElementById('top-up-btn');
    const swapButton = document.getElementById('swap-btn');
    const shopButton = document.getElementById('shop-btn');

    sendButton.addEventListener('click', () => {
        Telegram.WebApp.setItem('action', 'send', () => {
            console.log('Send action set');
            // Additional backend interaction can be placed here
        });
    });

    topUpButton.addEventListener('click', () => {
        Telegram.WebApp.setItem('action', 'topup', () => {
            console.log('Top Up action set');
            // Additional backend interaction can be placed here
        });
    });

    swapButton.addEventListener('click', () => {
        Telegram.WebApp.setItem('action', 'swap', () => {
            console.log('Swap action set');
            // Additional backend interaction can be placed here
        });
    });

    shopButton.addEventListener('click', () => {
        Telegram.WebApp.setItem('action', 'shop', () => {
            console.log('Shop action set');
            // Additional backend interaction can be placed here
        });
    });

    // Example of getting an item
    Telegram.WebApp.getItem('action', (value) => {
        console.log('Current action:', value);
        // Additional logic can be placed here based on the retrieved value
    });
});
