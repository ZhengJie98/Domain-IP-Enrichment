
$('.zuui-currency-select').val(window.oemcart_currency.standard_code)
$(".zuui-currency-select").change(function (params) {
  location.href = moi.setUrlParams(location.href, { currency: $(this).val() });
});