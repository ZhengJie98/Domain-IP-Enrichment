$(function() {
  var favoriteButton = '[data-favorite-button-selector]';
  var maxFavoriteProductsCount = 20;
  var favoriteProducts = Cookies.getJSON('favorite_products');
  // Cookie�� (Cookie������)
  if (favoriteProducts === undefined) {
    favoriteProducts = [];
  }

  // ���Φ�
  render();
  $('body').on('click', favoriteButton, function() {
    var productId = $(this).attr('data-product-id');

    if (favoriteProducts.indexOf(productId) === -1) {
      // �����ɏ贏�঳
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

  // ���
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
