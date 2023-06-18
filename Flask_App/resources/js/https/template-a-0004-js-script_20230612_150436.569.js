var eWave = {
  'Image': {
    'Lazyload': function () {
      $(".lazyload").lazyload({
        effect: "fadeIn",
        threshold: 200,
        failurelimit: 50,
        skip_invisible: false
      });
    }
  },
  'Digg': {
    'Init': function () {
      $('body').on('click', '.ewave_digg_link', function (e) {
        var $that = $(this);
        if ($that.attr("data-id")) {
          MAC.Ajax(maccms.path + '/index.php/ajax/digg.html?mid=' + $that.attr("data-mid") + '&id=' + $that.attr("data-id") + '&type=' + $that.attr("data-type"), 'get', 'json', '', function (r) {
            if (r.code == 1) {
              if ($that.attr("data-type") == 'up') {
                $that.find('.digg_num').html(r.data.up);
              } else {
                $that.find('.digg_num').html(r.data.down);
              }
            } else {
              MAC.Pop.Msg(100, 20, r.msg, 1000);
            }
          });

        }
      });
    }
  },

  'Star': {
    'Init': function () {
      var $that = $('.ewave_star');
      if ($that.length == 0) {
        return;
      }
      MAC.Ajax(maccms.path + '/index.php/ajax/score?mid=' + $that.attr('data-mid') + '&id=' + $that.attr('data-id'), 'get', 'json', '', function (e) {
        $that.attr({
          'score': e.data.score,
          'data-star': Math.ceil(e.data.score / 2)
        });
        $(".raty-score-num").text(e.data.score);
        $(".raty-score-bar").animate({
          'width': e.data.score * 10 + '%'
        }, 300);
        if (e.data.score_num > 0) {
          $("#rating-kong").hide();
          $("#rating-main").show();
        } else {
          $("#rating-kong .loadingg").text('暂无人评分');
        }
        $that.raty({
          starType: 'li',
          number: 5,
          numberMax: 5,
          space: false,
          score: function () {
            $(".raty-score-num").text($that.attr('score'));
            $(".raty-score-bar").animate({
              'width': $that.attr('score') * 10 + '%'
            }, 300);
            return $that.attr('data-star');
          },
          hints: ['엄청 비추천', '비추천', '일반', '추천', '엄청 추천'],
          starOff: '',
          starOn: 'active',
          target: $("#ratewords"),
          targetKeep: e.data.score_num > 0 ? true : false,
          click: function (score, evt) {
            MAC.Ajax(maccms.path + '/index.php/ajax/score?mid=' + $that.attr('data-mid') + '&id=' + $that.attr('data-id') + '&score=' + (score * 2), 'get', 'json', '', function (r) {
              if (r.code == 1) {
                $that.attr({
                  'score': r.data.score,
                  'data-star': Math.ceil(r.data.score / 2)
                });
                $(".raty-score-num").text(r.data.score);
                $(".raty-score-bar").animate({
                  'width': r.data.score * 10 + '%'
                }, 300);
                if (r.data.score_num > 0) {
                  $("#rating-kong").hide();
                  $("#rating-main").show();
                } else {
                  $("#rating-kong .loadingg").text('평점한 사람이 없습니다.');
                }
                $that.raty('set', {
                  'score': Math.ceil(r.data.score / 2),
                  'targetKeep': r.data.score_num > 0 ? true : false,
                });
                MAC.Pop.Msg(100, 20, '성공', 1000);
              } else {
                $that.raty('score', $that.attr('data-star'));
                MAC.Pop.Msg(100, 20, r.msg, 1000);
              }
            }, function () {
              $that.raty('score', $that.attr('data-star'));
              MAC.Pop.Msg(100, 20, '인터넷 연결 원할하지 않습니다.', 1000);
            });
          }
        });

      });
    }
  },
  'Comment': {
    'Login': 0,
    'Verify': 0,
    'Init': function () {
      $('body').on('click', '.comment_face_box img', function (e) {
        var obj = $(this).parent().parent().parent().find('.comment_content');
        MAC.AddEm(obj, $(this).attr('data-id'));
      });
      $('body').on('click', '.comment_face_panel', function (e) {
        // $('.comment_face_box').toggle();
        $(this).parent().find('.comment_face_box').toggle();
      });
      $('body').on('keyup', '.comment_content', function (e) {
        var obj = $(this).parent().parent().parent().parent().find('.comment_remaining');
        MAC.Remaining($(this), 200, obj)
      });
      $('body').on('focus', '.comment_content', function (e) {
        if (eWave.Comment.Login == 1 && MAC.User.IsLogin != 1) {
          MAC.User.Login();
        }
      });
      $("body").on("click", ".ewave-comment-reply-switch", function () {
        $($(this).attr("to")).slideToggle("fast");
        $(".ewave-comment-reply-form").not($(this).attr("to")).slideUp("fast");
      });
      $('body').on('click', '.comment_report', function (e) {
        var $that = $(this);
        if ($(this).attr("data-id")) {
          $.ajax({
            url: maccms.path + '/index.php/comment/report.html?id=' + $that.attr("data-id"),
            cache: false,
            dataType: 'json',
            success: function ($r) {
              $that.addClass('disabled');
              MAC.Pop.Msg(100, 20, $r.msg, 1000);
              if ($r.code == 1) {}
            }
          });
        }
      });

      $('body').on('click', '.comment_submit', function (e) {
        var $that = $(this);
        eWave.Comment.Submit($that);
      });

    },
    'Show': function ($page) {
      if ($(".ewave_comment").length > 0) {
        $.ajax({
          type: 'get',
          url: maccms.path + '/index.php/comment/ajax.html?rid=' + $('.ewave_comment').attr('data-id') + '&mid=' + $('.ewave_comment').attr('data-mid') + '&page=' + $page,
          timeout: 5000,
          error: function () {
            $(".ewave_comment").html('<a href="javascript:void(0)" onclick="eWave.Comment.Show(' + $page + ')">새로고침하여주세요...</a>');
          },
          success: function ($r) {
            $(".ewave_comment").html($r);
          }
        });
      }
    },
    'Reply': function ($o) {

    },
    'Submit': function ($o) {
      var form = $o.parents('form');
      if ($(form).find(".comment_content").val() == '') {
        MAC.Pop.Msg(100, 20, '댓글입력해주세요', 1000);
        return false;
      }
      if ($('.ewave_comment').attr('data-mid') == '') {
        MAC.Pop.Msg(100, 20, 'mid애러', 1000);
        return false;
      }
      if ($('.ewave_comment').attr('data-id') == '') {
        MAC.Pop.Msg(100, 20, 'id애러', 1000);
        return false;
      }

      $.ajax({
        type: 'post',
        url: maccms.path + '/index.php/comment/saveData',
        data: $(form).serialize() + '&comment_mid=' + $('.ewave_comment').attr('data-mid') + '&comment_rid=' + $('.ewave_comment').attr('data-id'),
        success: function ($r) {
          MAC.Pop.Msg(100, 20, $r.msg, 1000);
          if ($r.code == 1) {
            eWave.Comment.Show(1);
          } else {
            if (eWave.Comment.Verify == 1) {
              form.find(".ewave-comment-verify-img").attr('src', maccms.path + '/index.php/verify/index.html?r=' + Math.random());
            }
          }
        }
      });
    }
  },
  'Gbook': {
    'Login': 0,
    'Verify': 0,
    'Init': function () {
      $('body').on('keyup', '.gbook_content', function (e) {
        MAC.Remaining($(this), 200, '.gbook_remaining')
      });
      $('body').on('focus', '.gbook_content', function (e) {
        if (eWave.Gbook.Login == 1 && MAC.User.IsLogin != 1) {
          $(".gbook_content").blur();
          MAC.User.Login();
        }
      });
      $('body').on('click', '.gbook_submit', function (e) {
        eWave.Gbook.Submit();
      });
    },
    'Show': function ($page) {
      MAC.Ajax(maccms.path + '/index.php/gbook/index?page=' + $page, 'post', 'json', '', function (r) {
        $(".mac_gbook_box").html(r);
      }, function () {
        $(".mac_gbook_box").html('새로고침하여주세요...');
      });
    },
    'Submit': function () {
      if ($(".gbook_content").val() == '') {
        MAC.Pop.Msg(100, 20, '내용을 입력해주세요.', 1000);
        return false;
      }
      MAC.Ajax(maccms.path + '/index.php/gbook/saveData', 'post', 'json', $('.gbook_form').serialize(), function (r) {
        MAC.Pop.Msg(100, 20, r.msg, 1000);
        if (r.code == 1) {
          location.reload();
        } else {
          if (eWave.Gbook.Verify == 1) {
            $(".gbook_form").find(".ewave-comment-verify-img").attr('src', maccms.path + '/index.php/verify/index.html?r=' + Math.random());
          }
        }
      });
    },
    'Report': function (name, id) {
      MAC.Pop.Show(400, 300, '데이터애러', maccms.path + '/index.php/gbook/report.html?id=' + id + '&name=' + encodeURIComponent(name), function (r) {
        $(".gbook_content").focus();
        $(".mac_verify_img_report").click();
      });
    }
  },
  'Ulog': {
    'Init': function () {
      eWave.Ulog.Set();
      eWave.Ulog.Click();

    },
    'Get': function () {
      MAC.Ajax(maccms.path + '/index.php/user/ajax_ulog/?ac=list&limit=2000&type=2', 'get', 'json', '', function (r) {
        if (r.code == 1) {
          $.each(r['list'], function (index, row) {
            if (row.ulog_type == 2) {
              $("#detail-fav-" + row.data.id).removeAttr("data-id").html('<i class="fa fa-star"></i>즐겨찾기추가됨');
              $("#player-fav-" + row.data.id).removeAttr("data-id").children("a").text('즐겨찾기추가됨');
            }
          });
        } else {

        }
      });
    },
    'Set': function () {
      if ($(".ewave_ulog_set").attr('data-mid')) {
        var $that = $(".ewave_ulog_set");
        $.get(maccms.path + '/index.php/user/ajax_ulog/?ac=set&mid=' + $that.attr("data-mid") + '&id=' + $that.attr("data-id") + '&sid=' + $that.attr("data-sid") + '&nid=' + $that.attr("data-nid") + '&type=' + $that.attr("data-type"));
      }
    },
    'Click': function () {
      $('body').on('click', '.ewave_ulog', function (e) {

        //是否需要验证登录
        if (MAC.User.IsLogin == 0) {
          MAC.User.Login();
          return;
        }

        var $that = $(this);
        if ($that.attr("data-id")) {
          MAC.Ajax(maccms.path + '/index.php/user/ajax_ulog/?ac=set&mid=' + $that.attr("data-mid") + '&id=' + $that.attr("data-id") + '&type=' + $that.attr("data-type"), 'get', 'json', '', function (r) {
            if (r.code == 1) {
              MAC.Pop.Msg(100, 20, '즐겨찾기추가성공', 1000);
              $(".detail-ulog").removeAttr("data-id").html('<i class="fa fa-star"></i>즐겨찾기추가됨');
            } else {
              MAC.Pop.Msg(100, 20, '즐겨찾기추가성공', 1000);
            }
          });
        }
      });
    },
  },
}
$(document).ready(function () {
  eWave.Star.Init();
  eWave.Image.Lazyload();
  if ($("#qrcode").length) {
    var qrcode = new QRCode('qrcode', {
      text: location.href,
      width: 150,
      height: 150,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    $("#qrcode img").attr("class", "img-responsive");
  }

  if ($("#qrcode2").length) {
    var qrcode = new QRCode('qrcode2', {
      text: location.href,
      width: 160,
      height: 160,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    $("#qrcode2 img").attr("class", "img-responsive").css({
      "padding": "10px",
      "background-color": "#fff"
    });
  }

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (a) {
    var b = $(a.target).text();
    $(a.relatedTarget).text();
    $("span.active-tab").html(b);
  });
  if ($("#header-top").length) {
    var header = document.querySelector("#header-top");
    var headroom = new Headroom(header, {
      tolerance: 5,
      offset: 205,
      classes: {
        initial: "top-fixed",
        pinned: "top-fixed-up",
        unpinned: "top-fixed-down"
      }
    });
    headroom.init();
  }
  if ($("#ewave_history").length) {
    if ($.cookie("recente")) {
      var json = eval("(" + $.cookie("recente") + ")");
      var list = "";
      for (i = 0; i < json.length; i++) {
        list = list + "<li class='top-line'><a href='" + json[i].vod_url + "' title='" + json[i].vod_name + "'><span class='pull-right text-red'>" + json[i].vod_part + "</span>" + json[i].vod_name + "</a></li>";
      }
      $("#ewave_history").append(list);
    } else
      $("#ewave_history").append("<p style='padding: 80px 0; text-align: center'>시청기록이 없습니다.</p>");

    $(".historyclean").on("click", function () {
      $.cookie("recente", null, {
        expires: -1,
        path: '/'
      });
      $("#ewave_history").html("<p style='padding: 80px 0; text-align: center'>시청기록이 삭제되었습니다.</p>");
    });
  }

  500 < $(window).scrollTop() ? $("a.backtop").css("display", "") : $("a.backtop").css("display", "none");
  $(window).scroll(function () {
    500 < $(window).scrollTop() ? $("a.backtop").css("display", "") : $("a.backtop").css("display", "none");
  });
  $("a.backtop").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
    return !1
  });

  if ($(".copylink").length) {
    var clipboard = new Clipboard('.copylink', {
      text: function () {
        return location.href;
      }
    });
    clipboard.on('success', function (e) {
      MAC.Pop.Msg(100, 20, '주소복사성공', 1000);
    });
  }

  if ($(".nav-slide").length > 0) {
    var navSlide = new Swiper('.nav-slide', {
      freeMode: true,
      slidesPerView: 'auto',
      initialSlide: $(this).find(".active").index() - 1,
    });
  }

  if ($(".index-slide").length > 0) {
    var indexSlide = new Swiper('.index-slide', {
      loop: true, 
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false, 
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
    });
  }

  if ($(".type-slide").length > 0) {
    var typeSlide = new Swiper(".type-slide", {
      freeMode: true,
      slidesPerView: 'auto',
      on: {
        init: function () {
          this.slideTo($(this.wrapperEl).find(".active").index() - 1);
        },
      }
    });
  }

  if ($(".playlist-slide").length > 0) {
    var playlistSlide = new Swiper(".playlist-slide", {
      freeMode: true,
      slidesPerView: 'auto',
      on: {
        init: function () {
          this.slideTo($(this.wrapperEl).find(".active").index() - 1);
        },
      }
    });
  }
});
