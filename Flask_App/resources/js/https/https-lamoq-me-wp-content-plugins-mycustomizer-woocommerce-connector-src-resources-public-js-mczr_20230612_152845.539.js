var kickflipActivateRedirect = false;
function receivedAddToCartResponse(event)
{
    if (!(event.data.eventName === "mczrAddToCart" 
        && MCZR_BASE_HOST === event.origin      )
    ) {
        return;
    }

    var productId = jQuery("#mczrMainIframe").data("product-id");
    var details = event.data.detail;

    var props = {
        shopProductId: productId,
        shopDomain: MCZR_SHOP_DOMAIN,
        brand: MCZR_BRAND_NAME,
        mczrStoreId: details.store,
        designId: details.id,
        image: details.designImage.url,
        title: "Customization #" + details.designId,
        customizationNumber: details.designId,
        summary_v2: details.summary ? details.summary : [],
    };

    jQuery(document.body).trigger("adding_to_cart", [null, {}]),
    jQuery.ajax(
        {
            url: ajaxFrontObj.ajax_url,
            method: "POST",
            crossDomain: true,
            dataType: "json",
            data: {
                action: "addToCart",
                productId: productId,
                props: props,
            },
            success: (json) => {
                if (!json.success) {
                    return;
                }
                kickflipActivateRedirect = json.data.redirect;
                jQuery( document.body ).trigger( 'added_to_cart', [ json.data.fragments, json.data.cart_hash, null ] );
                jQuery( document.body ).trigger( 'wc_fragment_refresh');
            },
        }
    );
};

jQuery(document).ready(
  function () {
    window.addEventListener("message", receivedAddToCartResponse, false);
    jQuery(document.body).on("added_to_cart", function () {
      if (kickflipActivateRedirect){
        window.setTimeout(function(){window.location = kickflipActivateRedirect;},1000);
      }
    });
  }
);