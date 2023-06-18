(function($){
    "use strict";
    jQuery(document).ready(function(){
        $('.cart-title a, .mask-close, .close').live('click',function (e) {
            e.preventDefault();
            CartVisible();
        })

    function CartVisible() {
        $('body').toggleClass('active-cart');
        $('.widget_shopping_cart_content').toggleClass('active');
    }
    if ( typeof wc_add_to_cart_params === 'undefined' ) {
        return false;
    }
    //Ajax Remove Cart ===================================
    $('.cart-item .remove').live('click',function (event) {
        event.preventDefault();
        $('.rit-drop-wrap').addClass('loading');
        var $this = $(this);
        var product_key = $this.data('cart-item-key');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: wc_add_to_cart_params.ajax_url,
            data: {
                action: "cart_remove_product",
                product_key: product_key
            }, success: function (data) {
                console.log(data);
                var $cart = $('.cart-box');
                $this.parent().remove();
                if (data.cart_count == 0) {
                    $cart.find('.cart_list').html('<li class="empty">' + $cart.find('.wrap-cart').data('text-emptycart') + '</li>');
                    $cart.find('.cart-bottom').remove();
                } else {
                    $cart.find('.total .amount').remove();
                    $('.cart-total strong').html(data.cart_subtotal);
                }
                $('.mini-cart-items>span.total-cart').html(data.cart_count);
                $('.mini-cart-items .woocommerce-Price-amount').replaceWith(data.cart_subtotal);
                $('.rit-drop-wrap').removeClass('loading');
            }
        });
        return false;
    });

    //Ajax Add to Cart ===================================
    $(document).on('click', '.add_to_cart_button', function () {
        CartVisible();
        $('.rit-drop-wrap').addClass('loading');
    });
    //Ajax Add to Cart Detail ===================================
    $(document).on('click', '.single_add_to_cart_button', function (event) {
        CartVisible();
        $('.rit-drop-wrap').addClass('loading');
        $('#yith-quick-view-modal').removeClass('open');
        var $this = $(this);
        var $productForm = $this.closest('form');

        var data = {
            product_id: $productForm.find("input[name*='add-to-cart']").val(),
            product_variation_data: $productForm.serialize()
        };
        if (!data.product_id) {
            console.log('(Error): No product id found');
            return;
        }
        $.ajax({
            type: 'POST',
            dataType: 'html',
            url: '?add-to-cart=' + data.product_id + '& ajax-add-to-cart=1',
            data: data.product_variation_data,
            cache: false,
            headers: {'cache-control': 'no-cache'},
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('AJAX error - SubmitForm() - ' + errorThrown);
            },
            success: function (response) {
                var $response = $(response),
                    $shopNotices = $response.find('.woocommerce-message') // Shop notices
//                    Get replacement elements/values
                var fragments = {
                    '.mini-cart-items': $response.find('.mini-cart-items'), // Header menu cart count
                    '.woocommerce-message': $shopNotices,
                    '.cart-box': $response.find('.cart-box') // Widget panel mini cart
                };
                console.log(fragments);
                // Replace elements
                $.each(fragments, function (selector, $element) {
                    if ($element.length) {
                        $(selector).replaceWith($element);
                    }
                });
                $('.rit-drop-wrap').removeClass('loading');
            }
        });
        return false;
    });
})})(jQuery);