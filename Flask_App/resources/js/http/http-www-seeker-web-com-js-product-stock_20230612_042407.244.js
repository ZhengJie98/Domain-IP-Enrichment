Colorme = Colorme || {};

// product_stock.js2
if(typeof Colorme.productStockJsAlreadyRead === 'undefined') {
  Colorme.productStockJsAlreadyRead = true;

  $(function () {
    if ($(".stock_error") == void (0) || ($(".disable_cartin") == void (0))) return;

    var $forms = $('[name=product_form]'),
      c_class = $(".stock_error"),
      dis_cart = $(".disable_cartin");

    if ($forms.find("input[name=option]").length <= 0
        && $forms.find("select[name^=option]").length <= 0)
    {
      $forms.on("submit", function(){ add_to_cart() });
      return;
    }

    if (dis_cart.children().length >= 1) {
      var dis_but = dis_cart.children();
    } else {
      var dis_but = dis_cart;
    }

    var a = function (ev) {

      form = $(this).parents('[name=product_form]');
      form.find('select[name^=option]').each(function (i, v) {
        if (this.value == 0) {
          if ($(this).parent().siblings().text() == "" || $(this).parent().siblings().length > 1) {
            var str_err = "";
          } else {
            var str_err = $(this).parent().siblings().text();
          }
          c_class.text(str_err + "").css("display", "block");
          ev.preventDefault();
          return false;
        }
      });

      return true;
    };

    dis_but.delegate($(this), 'click', a);

    $forms.find('select[name^=option],input[name=option],input[type=text][name=product_num],input[type=number][name=product_num]').change(function (e) {
      form = $(this).parents('[name=product_form]');
      checkProductStock(form, c_class, e);
    });

    $('[name=product_form]').submit(function(e) {
      checkProductStock($(this), c_class, e);

      if (typeof ga !== "undefined") {
        ga(function() {
          var trackers = ga.getAll();
          var linkerParams = [];
          trackers.forEach(function(tracker) {
            linkerParams.push(tracker.get('linkerParam'));
          });
          var action = form.attr('action');
          if (action.indexOf('?') == -1) {
            form.attr('action', action + '?' + linkerParams.join('&'));
          } else {
            form.attr('action', action + '&' + linkerParams.join('&'));
          }
        });
        add_to_cart();
      }
    });

    function add_to_cart()
    {
      if (typeof gtag !== "undefined") {
        var $productNum = $('[name=product_form]').find("input[name=product_num]");
        var productNum = convertNumFullToHalf($productNum.val());
        if (!$.isNumeric(productNum) || productNum <= 0) return;

        gtag("event", "add_to_cart", {
          currency: "JPY",
          value: Colorme.product.sales_price_including_tax,
          items: [
            {
              item_id: Colorme.product.id,
              item_name: Colorme.product.name,
              quantity: productNum
            }
          ]
        });
      }
    }
  });

  var convertNumFullToHalf = function (arg) {
    return arg.replace(/[]/g
        , function (arg) {
          var num = "".indexOf(arg);
          return (num !== -1) ? num : arg;
        }
    );
  };

  var checkProductStock = function (form, c_class, e) {
    var $productNum = form.find("input[name=product_num]");
    var productNum = convertNumFullToHalf($productNum.val());
    $productNum.val(productNum); // 
    if (!$.isNumeric(productNum) || productNum <= 0) return; // 
    var select_array = {};
    var param = location.search.split("?"),
        pid = param[1].match("pid=[0-9]*");
    if (form.find("select[name^=option]").length <= 0) {
      var checked_val = $("input[name=option]:checked").val();
      if (checked_val == void 0) return;
      var tmp = checked_val.split(",");
      var tmp_cnt = tmp.length / 2;
      for (var i = 0, x = 0; i < tmp_cnt; i++, x += 2) {
        if (tmp[x] != "" && tmp[x + 1] != "") {
          select_array['option[' + i + ']'] = tmp[x] + "," + tmp[x + 1];
        }
      }
    } else {
      form.find('select[name^=option]').each(function (i, v) {
        if (this.value == 0) return;
        select_array['option[' + i + ']'] = this.value;
      });
    }

    if ($.isEmptyObject(select_array)) return;

    $.ajax({
      type: "POST",
      data: select_array,
      dataType: "json",
      url: "?" + pid + "&mode=option_get&preOrderNum=" + productNum,
      async: false,
      success: function (option_val, req) {
        submit_flg = true;
        c_class.css("display", "none");
        if (option_val.stock_flg == 0) {
          if (option_val.stock_num == -1) {
            c_class.text("¦Ê").css("display", "block");
          } else if (option_val.stock_num == 0) {
            c_class.text("¦Ê").css("display", "block");
          } else if (option_val.stock_num < parseInt(productNum)) {
            c_class.text("¦Êª¾" + option_val.stock_num + decodeURI(option_val.unit) + "").css("display", "block");
          }
          if (c_class.css('display') == 'block') {
            e.preventDefault();
            return false;
          }
        }

        var form_status = form.find("input[type=submit]"),
            submit_name = form_status.attr("name");

        if (submit_name == "submit") {
          form_status.attr("name", "");
          var clone_submit = form_status.clone();
          $(this).replaceWith(clone_submit);
        }
      }
    });
  };
}
