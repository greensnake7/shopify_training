document.addEventListener('DOMContentLoaded', function() {
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const variantId = this.dataset.variantId;
            const buttonText = this.querySelector('.button-text');
            const spinner = this.querySelector('.spinner');

            // Show spinner and hide text
            if (buttonText) buttonText.style.display = 'none';
            if (spinner) spinner.style.display = 'block';

            try {
                const response = await fetch(window.Shopify.routes.root + 'cart/add.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        items: [
                            {
                                id: variantId,
                                quantity: 1
                            }
                        ]
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Product added to cart:', data);

                    const cart = await fetch(window.Shopify.routes.root + 'cart.js').then(res => res.json());
                    const cartItemCount = cart.item_count;

                    document.querySelectorAll('.cart-item-count').forEach(element => {
                        element.textContent = cartItemCount;
                    });

                    console.log('Cart updated. Item count:', cartItemCount);
                    showNotification('Sản phẩm đã thêm vào giỏ hàng', 'success');
                    openCartDrawer();
                }
            } catch (error) {
                console.error(error);
                showNotification('Lỗi: ' + error.message, 'error');
            } finally {
                // Hide spinner and show text
                if (spinner) spinner.style.display = 'none';
                if (buttonText) buttonText.style.display = 'inline';
            }
        });
    });

    function showNotification(message, type = 'error') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('notification--show'), 10);

        setTimeout(() => {
            notification.classList.remove('notification--show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function openCartDrawer() {
        console.log('Opening cart drawer');
        const drawer = document.querySelector('.cart-drawer');
        const overlay = document.querySelector('.cart-drawer__overlay');
        if (drawer) drawer.classList.add('is-open');
        if (overlay) overlay.classList.add('is-visible');
    }

    function closeCartDrawer() {
        const drawer = document.querySelector('.cart-drawer');
        const overlay = document.querySelector('.cart-drawer__overlay');
        if (drawer) drawer.classList.remove('is-open');
        if (overlay) overlay.classList.remove('is-visible');
    }

    const cartDrawerCloseButton = document.querySelector('.cart-drawer__close-button');
    const cartDrawerOverlay = document.querySelector('.cart-drawer__overlay');

    if (cartDrawerCloseButton) {
        cartDrawerCloseButton.addEventListener('click', closeCartDrawer);
    }

    if (cartDrawerOverlay) {
        cartDrawerOverlay.addEventListener('click', closeCartDrawer);
    }

    
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 1rem;
        right: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        max-width: 90vw;
    }

    .notification--show {
        opacity: 1;
        transform: translateX(0);
    }

    .notification--error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    .notification--success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
`;
document.head.appendChild(style);
});
