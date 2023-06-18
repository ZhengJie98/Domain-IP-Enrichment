function switchNightMode() {
  "0" == (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0") ? (document.cookie = "night=1;path=/", document.documentElement.setAttribute("data-theme", 1), localStorage.theme = 1, console.log("\u591c\u95f4\u6a21\u5f0f\u5f00\u542f")) : (document.cookie = "night=0;path=/", document.documentElement.setAttribute("data-theme", 0), localStorage.theme = 0, console.log("\u591c\u95f4\u6a21\u5f0f\u5173\u95ed"))
}(function () {
  if ($(".wb-switch").length > 0) { //后台开启自动黑夜模式下，定时触发
    if ("" === document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1")) 21 < (new Date).getHours()
      || 6 > (new Date).getHours() ? (document.cookie =
        "night=1;path=/", document.documentElement.setAttribute("data-theme", 1), localStorage.theme = 1, console.log("\u591c\u95f4\u6a21\u5f0f\u5f00\u542f")) : (document.cookie = "night=0;path=/", document.documentElement.setAttribute("data-theme", 0), localStorage.theme = 0, console.log("\u591c\u95f4\u6a21\u5f0f\u5173\u95ed"));
    else { //后台关闭自动下，当前为固定模式，判断此时属于黑夜，白天后触发
      var a = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
      "0" == a ? (document.documentElement.setAttribute("data-theme", 0)) : "1" == a
    }
  }
})();

//社交分享
function shareys(a, c, b, e, d) {
  switch (a) {
    case "sina":
      c = "http://service.weibo.com/share/share.php?title=" + encodeURIComponent(d + "\u300c" + b + "\u300d \u70b9\u8fd9\u91cc" + c) + " pic=" + e;
      window.open(c);
      break;
    case "tqq":
      c = "https://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(c) + " title=" + encodeURIComponent(b) + " pics=" + e;
      window.open(c);
      break;
    case "qzone":
      c = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(c) + " title="
        + encodeURIComponent(b) + " site= pics=" + encodeURIComponent(e) + " desc=" + encodeURIComponent(d) + " summary=" + encodeURIComponent(d);
      window.open(c);
      break;
    case "ren":
      c = "http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(c) + " srcUrl=" + e + " title=" + encodeURIComponent(b), NaN + d, window.open(c)
  }
}

function Share(pType) {
  var pTitle = share_title;
  var pImage = share_pic;
  var pContent = share_text;
  var pUrl = window.location.href;
  shareys(pType, pUrl, pTitle, pImage, pContent);
}

$(function () {
  if (localStorage.theme > 0) {
    $(".wb-switch").prop("checked", true);
  } else {
    $(".wb-switch").prop("checked", false);
  }
  //回顶部
  $("#scroll-to-top").on("ontouchstart" in window ? "touchstart" : "click", function (e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: 0
    }, 500);
  });
  $("#soStats").click(function () {
    $(this).find("#soico").toggleClass("fa-search fa-times-circle");
    $("#navbar-search").toggleClass("soopen sooff");
  });
  $(".navbar-search-close").click(function () {
    $("#soStats").find("#soico").removeClass("fa-times-circle").addClass("fa-search");
    $("#navbar-search").removeClass("soopen sooff");
  });
  $("#soblur").focus(function () {
    $(".top_so").addClass("top_ac");
  });
  $("#soblur").blur(function () {
    $(".top_so").removeClass("top_ac");
  });
  $(".menu-item").click(function () {
    $(this).children("ul").slideToggle("fast");
    $(this).find(".top-type-icon").toggleClass("fa-caret-right fa-caret-down");
    $(this).siblings().children("ul").slideUp("fast");
    $(".menu-item-overlay").css({
      left: 25 * $(this).prevAll().length + "%"
    });
  });
  $('.ewave-history-text').click(function () {
    $(this).siblings(".ewave-history-box").toggleClass("active");
  });
  $(".detail-info .ewave-collapse-toggle").click(function () {
    $(".detail-info .detail-info-actor").toggleClass("text-row-2");
  });
  $(".entry-content p img").each(function () {
    if (!$(this).hasClass("biaoqing")) {
      var image_title = $(this).parents(".entry-content p").find("img").attr("alt");
      if (image_title != undefined && image_title != '') {
        $("<figcaption class='image_title' ></figcaption >").insertAfter(this);
        $(this).siblings(".image_title").html('<i class="icon iconfont icon-huatifuhao" ></i > ' + image_title);
      }
    }
  });
  $("footer").removeClass("fixed-bottom");
  document.body.scrollHeight > window.innerHeight ? $("footer").removeClass("fixed-bottom") : $("footer").addClass("fixed-bottom");
  var regx = /\.(jpe?g|png)(?=\?|$)/i;
  $(".entry-content").find("a").each(function () {
    var a = $(this).attr("href");
    regx.test(a) || $(this).attr("rel", "external")
  });
  $('[data-toggle="offcanvas"], .mobile-overlay').click(function () {
    $(".mobile-overlay").toggleClass("active");
    $("body").toggleClass("active");
    $(".sidebar-offcanvas").toggleClass("active");
    $(".navbar-toggle").toggleClass("collapsed");
    $(".navbar-collapse").addClass("transition");
    $(".collapse").toggleClass("navss");
    $(".m_nav-list").toggleClass("m_nav-close");
  });
  $(".empty-box").each(function () {
    var $that = $(this);
    if ($that.find(".empty-list").children().length == 0) {
      $that.remove();
      if ($that.hasClass("empty-box-tab")) {
        $(".empty-box-" + $that.attr("data-tab") + ",.tab-toggle-" + $that.attr("data-tab")).hide().removeClass("tab-toggle");
      }
    }
  });
  $(".link-empty").each(function () {
    if ($(this).attr("href") == '') {
      $(this).attr("href", "javascript:;");
    }
  });
});

$(window).resize(function () {
  $("footer").removeClass("fixed-bottom");
  document.body.scrollHeight > window.innerHeight ? $("footer").removeClass("fixed-bottom") : $("footer").addClass("fixed-bottom");
});
$("#scroll-to-top")[100 < $(window).scrollTop() ? "removeClass" : "addClass"]("hide");
$(window).scroll(function () {
  $("#scroll-to-top")[100 < $(window).scrollTop() ? "removeClass" : "addClass"]("hide");
});


//点击搜索访问外触发关闭
$(document).on("click", function (e) {
  var target = $(e.target);
  if (target.closest(".search-warp").length == 0) { //点击id为parentId之外的地方触发
    $(".top_so").removeClass("top_ac");
  }
  if (target.closest(".ewave-history-text,.ewave-history-box").length == 0) {
    $(".ewave-history-box").removeClass("active");
  }
});
