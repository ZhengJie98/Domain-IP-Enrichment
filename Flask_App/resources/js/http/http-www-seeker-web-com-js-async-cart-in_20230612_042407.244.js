$(function() {
  var $productForm = $('form[name="product_form"]');

  var $cartViewLink = $('.cart_view_with_async');
  var $cartViewForm = $('form[name="cart_view_with_async"]');
  var $succeedModal = $('.cart_in_modal');
  var $closingModalButton = $('.cart_modal__close');
  var $notBubblingElements = $('.not_bubbling');
  var $cartCountElement = $('.cart_count');
  var $showConnectingElements = $('.show_while_cart_in_connecting');
  var $hideConnectingElements = $('.hide_while_cart_in_connecting');
  var $isCartInAsyncMode = $('input[name="is_async_cart_in"]');

  var $cartInErrorModal = $('.cart_in_error_modal');
  var $cartInErrorMessage = $('.cart_in_error_message');
  var $closingErrorModalButton = $('.cart_in_error__close');

  $cartViewLink.on('click', function() {
    if (typeof ga !== "undefined") {
      ga(function() {
        var trackers = ga.getAll();
        var linkerParams = [];
        trackers.forEach(function(tracker) {
          linkerParams.push(tracker.get('linkerParam'));
        });
        var action = $cartViewForm.attr('action');
        if (action.indexOf('?') == -1) {
          $cartViewForm.attr('action', action + '?' + linkerParams.join('&'));
        } else {
          $cartViewForm.attr('action', action + '&' + linkerParams.join('&'));
        }
      });
    }
    $cartViewForm.submit();
    return false;
  });

  $closingModalButton.on('click', function() {
    $succeedModal.hide();
    return false;
  });

  $closingErrorModalButton.on('click', function() {
    $cartInErrorModal.hide();
    return false;
  });

  $notBubblingElements.on('click', function(e) {
    e.stopPropagation();
  });

  $productForm.on('submit', function(e) {
    if( $isCartInAsyncMode.length === 0 ) return;

    if(!$productForm.attr('action').match(/\/add(\?.*=.*)*$/)) {
      return;
    }

    if( ($succeedModal.length === 0) || ($cartInErrorModal.length === 0) ) return;

    e.preventDefault();
    var cartInUrl = $(this).attr('action').replace(/\/add(\?.*=.*)*$/, '/add_async');

    $showConnectingElements.show();
    $hideConnectingElements.hide();

    $.ajax({
      type: 'POST',
      url: cartInUrl,
      data: $(this).serialize(),
      success: function(response) {
        $succeedModal.show();
        $cartCountElement.text(response.total_quantity);
      },
      error: function(e) {
        var responseJSON = JSON.parse(e.responseText);
        if(responseJSON.errors) {
          var errorMessage = '';
          responseJSON.errors.forEach(function(error) {
            errorMessage += error.message + ' ';
          });
          $cartInErrorMessage.text(errorMessage);
        } else {
          $cartInErrorMessage.text('');
        }
        $cartInErrorModal.show();
      },
      complete: function() {
        $showConnectingElements.hide();
        $hideConnectingElements.show();
      }
    });
  });
});
