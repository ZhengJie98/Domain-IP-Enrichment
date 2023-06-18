//Get the button
var goTop = document.getElementById("goTop");

var tl = new TimelineLite();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (screen.width < 768)
            goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.querySelector('#goTop').addEventListener('click', function(e) {

    // e.preventDefault();
    // document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
    // var $body = document.body.scrollTop;
    // var $document = document.documentElement.scrollTop;
    // tl.to($body, 1, {
    //     scrollTo: { y: 0 }
    // });
    // tl.to($document, 1, {
    //     scrollTo: { y: 0 }
    // });
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});

function moreKeywords() {
    var moreText = document.getElementById("more-keywords");
    var moreBtn = document.getElementById("more-keywords-btn");
    console.log(moreText.style.display + "sdfsdf");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        moreBtn.innerHTML = "";
    } else {
        moreText.style.display = "none";
        moreBtn.innerHTML = "";
    }
}

$('.fv-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            centerPadding: '0',
        }
    }, ]
});

$('.common-slide').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    adaptiveHeight: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 768,
    }, ]
});


$('.company-slide').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    adaptiveHeight: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            variableWidth: false,
            slidesToShow: 1,
        }
    }, ]
});

$('.ranking .c-keywords a span').click(function() {
    var keywords = $('.ranking .c-keywords a span');
    keywords.removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr("data-id");
    $('.ranking-content').removeClass("active");
    $("#rank_keyword" + id).addClass("active");
});

$('.ranking .ranking__keywords a span').click(function() {
    var keywords = $('.ranking .ranking__keywords a span');
    keywords.removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr("data-id");
    $('.ranking-content').removeClass("active");
    $("#rank_keyword" + id).addClass("active");
});

$(".sp-menu, .c-overlay__close").click(function() {
    console.log("sdfsd");
    $(".c-overlay").toggleClass("change");
    $("body").toggleClass("change");
    $(".overlay-bg").toggleClass("change");

});


$('.search__tab a').click(function() {
    var keywords = $('.search__tab a');
    keywords.removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr("data-id");
    $('.c-imgGroup').removeClass("active");
    $("#search-content" + id).addClass("active");
});