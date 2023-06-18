$(function() {
  var favoriteButton = '[data-favorite-button-selector]';
  var maxFavoriteProductsCount = 20;
  var favoriteProducts = Cookies.getJSON('favorite_products');
  // Cookie¶Œ (Cookieè´£è´©)
  if (favoriteProducts === undefined) {
    favoriteProducts = [];
  }

  // è´‚¶Œ¶¥
  render();
  $('body').on('click', favoriteButton, function() {
    var productId = $(this).attr('data-product-id');

    if (favoriteProducts.indexOf(productId) === -1) {
      // è¢è™…èË¥è™‡¶≥
      if (favoriteProducts.length >= maxFavoriteProductsCount) {
        favoriteProducts.splice(-1, 1);
      }
      favoriteProducts.unshift(productId);
    } else {
      favoriteProducts.splice(favoriteProducts.indexOf(productId), 1);
    }

    render();
    Cookies.set('favorite_products', favoriteProducts, { expires: 365 });
  });

  // è´°
  function render() {
    $(favoriteButton).each(function() {
      var addedClass = $(this).attr('data-added-class');

      if (favoriteProducts.indexOf($(this).attr('data-product-id')) !== -1) {
        $(this).addClass(addedClass);
      } else {
        $(this).removeClass(addedClass);
      }
    });
  }

});
