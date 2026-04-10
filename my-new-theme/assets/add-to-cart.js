// document.addEventListener('DOMContentLoaded', function() {
    
//     const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', async function() {
//             const variantId = this.dataset.variantId;
//             const buttonText = this.querySelector('.button-text');
//             const spinner = this.querySelector('.spinner');

//             if (buttonText) buttonText.style.display = 'none';
//             if (spinner) spinner.style.display = 'block';

            // try {
            //     const response = await fetch(window.Shopify.routes.root + 'cart/add.js' + '?sections=cart,items-on-cart,header', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Accept': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             items: [
            //                 {
            //                     id: variantId,
            //                     quantity: 1
            //                 }
            //             ]
            //         })
            //     });
            //     console.log('Add to cart response:', response);

            //     if (response.ok) {
            //         const data = await response.json();
            //         console.log('Product added to cart:', data);
            //         const header = document.querySelector('#header');
            //         if (header) {
            //             header.outerHTML = data.sections.header;
            //         }

            //         const itemOnCart = document.querySelector('.cart-drawer__content');
            //         console.log('Cart drawer element:', itemOnCart);
            //         if (itemOnCart) {
            //             itemOnCart.outerHTML = data.sections['items-on-cart'];
                        
            //         }
            //         // const cart = await fetch(window.Shopify.routes.root + 'cart.js').then(res => {const cartData = res.json(); console.log('Cart data:', cartData); return cartData;});
            //         // const cartItemCount = cart.item_count;

            //         // document.querySelectorAll('.cart-item-count').forEach(element => {
            //         //     element.textContent = cartItemCount;
            //         // });

            //         showNotification('Sản phẩm đã thêm vào giỏ hàng', 'success');
            //         openCartDrawer();
            //     }
            // } catch (error) {
            //     console.log(error);
            //     showNotification('Lỗi: ' + error.message, 'error');
            // } finally {
            //     if (spinner) spinner.style.display = 'none';
            //     if (buttonText) buttonText.style.display = 'inline';
            // }
//         });
//     });

