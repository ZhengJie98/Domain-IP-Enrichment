$(window["document"])["on"]('ready', function() {
    $(".center")["slick"]({
        slidesToShow: 5,
        slidesToScroll: 3
    });
    $(".regularls")["slick"]({
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $(".lazy")["slick"]({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
    });
    $(".lazye")["slick"]({
        dots: true,
        lazyLoad: 'ondemand',
    });
});
$(".regularbanner")["slick"]({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
var t$HIk1 = $(window)["width"]();
if (t$HIk1 < 768) {
    $(".regular")["slick"]({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    $(".regularnew")["slick"]({
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $(".regularcate")["slick"]({
        slidesToShow: 2,
        slidesToScroll: 2
    });
}
var t$HIk1 = $(window)["width"]();
if (t$HIk1 < 1025 && t$HIk1 >= 768) {
    $(".regular")["slick"]({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".regularnew")["slick"]({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });
    $(".regularcate")["slick"]({
        slidesToShow: 5,
        slidesToScroll: 5
    });
}
if (t$HIk1 > 1024) {
    $(".regular")["slick"]({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });
    $(".regularnew")["slick"]({
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });
    $(".regularcate")["slick"]({
        slidesToShow: 6,
        slidesToScroll: 6
    });
}