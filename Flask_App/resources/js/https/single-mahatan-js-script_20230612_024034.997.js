/* jslint browser: true */
/* global  $,jQuery */
function Document() {
    'use strict';
    var self = this;
    this.obj = $(document);
}
Document.prototype.bodyScrollingClass = function (scrollTop = 0) {
    var self = this;
    self.obj.on('scroll', function () {
        if (self.obj.scrollTop() > scrollTop) {
            $('body').addClass('scrolling');
        } else {
            $('body').removeClass('scrolling');
        }
    });
};

function Contact(id) {
    'use strict';
    var self = this;
    this.obj = $(id);
}
Contact.prototype.number = function() {
    var self = this;
}
function Global() {
    'use strict';
    var self = this;
    this.doc = new Document();
    self.bodyScrollingTop();
    
}
Global.prototype.bodyScrollingTop = function (scrollTop = 0) {
    var self = this;
    self.doc.bodyScrollingClass(scrollTop);
}

$(document).ready(function(){
    var global = new Global();
    var offset = $(document).scrollTop();
    $(document).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        var scrollBottom = $(window).scrollTop() + $(window).height();
        // $('#wrapper > section').each(function(){
        //     var offsetTop = $(this).offset().top;
        //     if (scrollTop + $(window).height() > offsetTop) {
        //         $(this).addClass('inview');
        //     } else {
        //         $(this).removeClass('inview');
        //     }
        // });
        if (scrollTop > $(window).height() / 4) {
            $('#toTop').addClass('showUp');
            $('#toTop2').addClass('showUp');
        } else {
            $('#toTop').removeClass('showUp');
            $('#toTop2').removeClass('showUp');
        }
        // menu mobile
            // if ($(document).scrollTop() == 0) {
            //     $('#header').removeClass('mobile-hiden');
            // }else if ($(document).scrollTop() > offset){
            //     $('#fixedBottomBlock').addClass('mobile-hiden-b');
            //     $('#header').removeClass('mobile-hiden');
            // } else {
            //     $('#header').addClass('mobile-hiden');
            //     $('#fixedBottomBlock').removeClass('mobile-hiden-b');
            // }
            offset = $(document).scrollTop();
            

    });


    $('#header-contact-btn').click(function(){
        var target = $(this).data('target'), road;
        if (typeof target !== 'undefined' && target !== '' && typeof $(target) !== 'undefined') {
            road = $(target).offset().top - $(document).scrollTop();
            $('html, body').animate({
                scrollTop: road
            }, 2500);
        }
    });
    $('#toTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $('#toTop2').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });
 

    $('#fixed-right-block').find('a.block-toggle').click(function(){
      $('#fixed-right-block').toggleClass('showUp');
      $(document).on('click', function(e) {
        if (!$('#fixed-right-block').is(e.target) && $('#fixed-right-block').has(e.target).length === 0) {
          $('#fixed-right-block').removeClass('showUp');
        }
      });
      return false;
    });


    // $(document).find('[oversize="collapse"]').each(function() {
    //     var current = $(this), childs = current.children(), itemWidth = 0, countWidth = 0, more = $(childs[0]).clone(), moreText = 'More', count = 0, show = '', hide = '';
    //     if ($(window).width() < 1201) {
    //         if ( typeof current.attr('expanded-text') !== 'undefined' && current.attr('expanded-text') !== '') {
    //             moreText = current.attr('expanded-text');
    //         }
    //         more.addClass('dropdown more').find('a').text(moreText).addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    //         for (var i = 0; i < childs.length; i += 1) {
    //             if (itemWidth < $(childs[i]).outerWidth()) {
    //                 itemWidth = $(childs[i]).outerWidth();
    //             }
    //             count += $(childs[i]).outerWidth();
    //         }
    //         countWidth = itemWidth;
    //         if (current.parent().width() < count) {
    //             for (var i = 0; i < childs.length; i += 1) {
    //                 if (countWidth < current.parent().width() - 100) {
    //                     countWidth += $(childs[i]).width();
    //                     show += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 } else {
    //                     hide += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 }
    //             }
    //             more.append('<ul class="dropdown-menu">' + hide + '</ul>');
    //             show += more.clone().wrap('<p>').parent().html();
    //             current.html(show);
    //         }
    //     }
    //     if($(window).width() > 767 && $(window).width() < 1025 && $(window).width() > $(window).height()) {
    //         if ( typeof current.attr('expanded-text') !== 'undefined' && current.attr('expanded-text') !== '') {
    //             moreText = current.attr('expanded-text');
    //         }
    //         more.addClass('dropdown more').find('a').text(moreText).addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    //         for (var i = 0; i < childs.length; i += 1) {
    //             if (itemWidth < $(childs[i]).outerWidth()) {
    //                 itemWidth = $(childs[i]).outerWidth();
    //             }
    //             count += $(childs[i]).outerWidth();
    //         }
    //         countWidth = itemWidth;
    //         if (current.parent().width() < count) {
    //             for (var i = 0; i < childs.length; i += 1) {
    //                 if (countWidth < current.parent().width() - 200) {
    //                     countWidth += $(childs[i]).width();
    //                     show += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 } else {
    //                     hide += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 }
    //             }
    //             more.append('<ul class="dropdown-menu">' + hide + '</ul>');
    //             show += more.clone().wrap('<p>').parent().html();
    //             current.html(show);
    //         }
    //     }if($(window).width() > 767 && $(window).width() < 1025) {
    //         if ( typeof current.attr('expanded-text') !== 'undefined' && current.attr('expanded-text') !== '') {
    //             moreText = current.attr('expanded-text');
    //         }
    //         more.addClass('dropdown more').find('a').text(moreText).addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    //         for (var i = 0; i < childs.length; i += 1) {
    //             if (itemWidth < $(childs[i]).outerWidth()) {
    //                 itemWidth = $(childs[i]).outerWidth();
    //             }
    //             count += $(childs[i]).outerWidth();
    //         }
    //         countWidth = itemWidth;
    //         if (current.parent().width() < count) {
    //             for (var i = 0; i < childs.length; i += 1) {
    //                 if (countWidth < current.parent().width() - 400) {
    //                     countWidth += $(childs[i]).width();
    //                     show += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 } else {
    //                     hide += $(childs[i]).clone().wrap('<p>').parent().html();
    //                 }
    //             }
    //             more.append('<ul class="dropdown-menu">' + hide + '</ul>');
    //             show += more.clone().wrap('<p>').parent().html();
    //             current.html(show);
    //         }
    //     }
    // });


});


$('a#enquiry').click(function(){
    var target = $(this).attr('href');
    if (typeof $(target) === 'object') {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    }
    return false;
});
