$(function () {

    //navbar fix
    // $(document).scroll(function (e) {
    //     var scrollTop = $(document).scrollTop();
    //     if (scrollTop > 0) {
    //         $('.header').addClass('sticky');
    //         $('.lobby-header').addClass('sticky');
    //     } else {
    //         $('.header').removeClass('sticky');
    //         $('.lobby-header').removeClass('sticky')
    //     }
    // });

    //------ scroll hide nav ------ //
    var doc = document.documentElement;
    var w   = window;

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    var header = document.getElementById('site-header');
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('scrolled-down');
        }
        else if (curDirection === 1) {
            header.classList.remove('scrolled-down');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);
    // ---- scroll hide nav ---- //

    // $('.btn-left').on('click', function () {
    //     if ($('.slide-left').hasClass('hide')) {
    //         $('.slide-left').removeClass('hide');
    //         $('.slide-left .wrapper-left').addClass('wow fadeInUp animated');
    //         $(".slide-left .wrapper-left").attr("style", "visibility: visible; animation-name: fadeInUp;");
    //         $('.modal-dialog').addClass('modal-big');
    //     } else {
    //         $('.slide-left').addClass('hide');
    //         $('.modal-dialog').removeClass('modal-big');
    //         $('.slide-left .wrapper-left').removeClass('wow fadeInUp animated');
    //         $(".slide-left .wrapper-left").removeAttr("style");
    //     }
    // });
    $('#OneregisterModal').on('hide.bs.modal', function (e) {
        $('.slide-left').addClass('hide');
        $('.modal-dialog').removeClass('modal-big');
        $('.slide-left .wrapper-left').removeClass('wow fadeInUp animated');
        $(".slide-left .wrapper-left").removeAttr("style");
    });

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     e.target // newly activated tab
    //     e.relatedTarget // previous active tab
    //     //slick
    //     $('.slick-promotion-text').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         fade: true,
    //         centerMode: true,
    //         //variableWidth: true,
    //         asNavFor: '.slick-promotion-img'
    //     });
    //     $('.slick-promotion-img').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         asNavFor: '.slick-promotion-text',
    //         arrows: false,
    //         dots: true,
    //         variableWidth: true,
    //         centerMode: true,
    //         adaptiveHeight: true,
    //         responsive: [
    //             /*{
    //               breakpoint: 768,
    //               settings: {
    //               }
    //             },*/
    //             {
    //                 breakpoint: 575.98,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     centerMode: false,
    //                     variableWidth: false
    //                 }
    //             }
    //         ]
    //     });
    // });

    // nav right slide
    $('#showRight,#showRight1,#customer-balance').click(function () {
        $('.menu-right').toggleClass('right-open');
    });
    // nav left side
    $('#showLeft').click(function() {
        $('.menu-left').toggleClass('left-open');
        $('.fade-bg-sidebar').removeClass('d-none');
        $('.provider-balance').css({"z-index" : "500"});
    });
    $('.backBtn').click(function () {
        $('.menu').removeClass('top-open bottom-open right-open left-open pushleft-open pushright-open');
        $('body').removeClass('push-toleft push-toright');
        $('.fade-bg-sidebar').addClass('d-none');
    });

    $('.fade-bg-sidebar').click(function() {
        $('.fade-bg-sidebar').addClass('d-none');
        $('.menu').removeClass('top-open bottom-open right-open left-open pushleft-open pushright-open');
        $('body').removeClass('push-toleft push-toright');
    })
    $('body').addClass('push');

    $('.menu .navbar-nav a').click(function () {
        $('.menu').removeClass('top-open bottom-open right-open left-open pushleft-open pushright-open');
        $('body').removeClass('push-toleft push-toright');
    });
    $('#showRightPush').click(function () {
        $('body').toggleClass('push-toright');
        $('.push-right').toggleClass('pushright-open');
    });
});


function getBalance() {
    $.ajax({
        url: "/api/get_balance",
        type: "GET",
        datatype: "call_credit",
    }).done(function (data) {
        var current_balance = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, }).format(data['current_balance'].toFixed(2)).toString();
        $('#user_credits').html(current_balance);
        $('.balance').html(current_balance);
        $('.box-balance').html("<span>" + current_balance + " บาท</span>");

        balance = current_balance;
    }).fail(function (error) {
        console.log(error);
    });
}

function Fx_forgotpassword() {
    $("#forgotpassSubmit").attr('disabled', '');
    $("#forgotpassSubmit").html(`<div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`);

    var request_phone_number = $('#request_phoneNumber').val();
    $.ajax({
            url: "api/reset_password_request_otp",
            type: "POST",
            data: {
                request_phone_number: request_phone_number
            }
        })
        .done(function (data) {
            if (data['status'] == 'non_member') {
                Swal.fire({
                    // icon: "error",
                    // title: "เบอร์สมาชิกไม่ถูกต้อง",
                    html: '<div class="f-5">เบอร์สมาชิกไม่ถูกต้อง</div>',
                    confirmButtonText: "ตกลง",
                    customClass: {
                        container: "custom-modal",
                        popup: "modal-content-alert",
                        content: "swal-text-content",
                        title: "title-class",
                        confirmButton: "btn-confirm",
                    },
                }).then((result) => {
                    $("#forgotpassSubmit").removeAttr('disabled');
                    $("#forgotpassSubmit").html('ถัดไป');
                    // $('#forgotModal').modal('hide');
                    // $("#registerModal").modal();
                });
            } else if (data['status'] == 'wrong_number') {
                Swal.fire({
                    icon: "error",
                    // title: "เบอร์โทรศัพท์ต้องเป็นตัวเลข และมีความยาว 10 ตัวเท่านั้น",
                    html: '<div class="f-5">เบอร์โทรศัพท์ต้องเป็นตัวเลข และมีความยาว 10 ตัวเท่านั้น</div>',
                    customClass: {
                        container: "custom-modal",
                        popup: "modal-content-alert",
                        content: "swal-text-content",
                        title: "title-class",
                        confirmButton: "btn-confirm",
                    },
                }).then((result) => {
                    $("#forgotpassSubmit").removeAttr('disabled');
                    $("#forgotpassSubmit").html('ถัดไป');
                    // $('#forgotModal').modal('hide');
                    // $("#registerModal").modal();
                });
            } else {
                $('#forgotModal').modal('hide');
                
                $("#forgotpassSubmit").removeAttr('disabled');
                $("#forgotpassSubmit").html('ถัดไป');

                Swal.fire({
                    // icon: "success",
                    // title: "ส่ง OTP ไปยังเบอร์สมาชิกแล้ว",
                    html: '<div class="f-5"><i class="fas fa-check mr-2" style="color:#88E5DF"></i>รหัสได้ถูกส่งไปยังเบอร์มือถือของคุณแล้ว</div>',
                    showConfirmButton: false,
                    customClass: {
                        container: "custom-modal",
                        popup: "modal-content-alert",
                        content: "swal-text-content",
                        title: "title-class",
                        confirmButton: "btn-confirm",
                    },
                    timer: 2000
                }).then(
                    setTimeout(() => {
                        $("#resetpassword").modal();
                        showModal();
                    }, 2000)
                );

            }
            // $("#user_password").modal();registerModalBody
        })
        .fail(function (error) {
            $("#forgotpassSubmit").removeAttr('disabled');
            $("#forgotpassSubmit").html('ยืนยัน');
            // console.log(error);
        });
}

function error_alert(message) {
    Swal.fire({
        html: '<div class="f-5">' + message + '</div>',
        confirmButtonText: "ตกลง",
        customClass: {
            container: "custom-modal",
            popup: "modal-content-alert",
            content: "swal-text-content",
        },
        onBeforeOpen: function (ele) {
            $(ele).find('button.swal2-confirm.swal2-styled').toggleClass('swal2-confirm swal2-styled btn btn-primary col-4')
        }
    })
}

function confirm_alert(message) {
    Swal.fire({
        html: '<div class="f-5">' + message + '</div>',
        showCancelButton: true,
        confirmButtonColor: '#e7ac5a',
        cancelButtonColor: '#f5150',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
        customClass: {
            container: "custom-modal",
            popup: "modal-content-alert",
            content: "swal-text-content",
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        // onBeforeOpen: function (ele) {
        //     $(ele).find('button.swal2-confirm.swal2-styled').toggleClass('swal2-confirm swal2-styled btn btn-primary col-4')
        // }
    }).then((result) => {
        if (result.value) {
            cancel_deposit();
        }
    })
}

function success_alert(message, icon_code) {
    var icon = 'error';
    if (icon_code) {
        icon = 'success';
    }
    Swal.fire({
        html: '<div class="f-5">' + message + '</d>',
        icon: icon,
        confirmButtonText: 'ตกลง',
        customClass: {
            container: "custom-modal",
            popup: "modal-content-alert",
            content: "swal-text-content",
        },
    })
}

function bonus_alert(bonus) {
    Swal.fire({
        html: `<p class="f-5 bonus-header">ท่านได้รับโบนัสเงินคืนเป็นจำนวน</p><p class="f-5 bonus-message">${bonus}.00 บาท</p>`,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            container: "bonus-modal-container",
            popup: "bonus-modal-popup",
            content: "bonus-modal-content"
        }
    })
}

Object.filter = function( obj, predicate) {
    let result = {}, key;

    for (key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function Fx_refresh_credit() {
    $('#imgrefresh').addClass('rotateIn');
    setTimeout(() => {
        $('#imgrefresh').removeClass('rotateIn');
    }, 1000);
    $.ajax({
        url: "/api/get_balance",
        type: "GET",
        datatype: "call_credit",
    })
        .done(function (data) {
            var current_balance = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, }).format(data['current_balance'].toFixed(2)).toString();
            $('#user_credits').html(current_balance);
            $('.balance').html(current_balance);
            $('.box-balance').html("<span>" + current_balance + " บาท</span>");
            balance = current_balance;
        })
        .fail(function (error) {
            console.log(error);
        });
}
function Fx_refresh_credit2() {
    $('#imgrefresh2').addClass('rotateIn');
    setTimeout(() => {
        $('#imgrefresh2').removeClass('rotateIn');
    }, 1000);
    $.ajax({
        url: "/api/get_balance",
        type: "GET",
        datatype: "call_credit",
    })
        .done(function (data) {
            var current_balance = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, }).format(data['current_balance'].toFixed(2)).toString();
            $('#user_credits').html(current_balance);
            $('.balance').html(current_balance);
            $('.box-balance').html("<span>" + current_balance + " บาท</span>");
            balance = current_balance;
        })
        .fail(function (error) {
            console.log(error);
        });
}

// $(".-owl-header-promotion").owlCarousel({
//     stopOnHover : true,
//     navigation:true,
//     paginationSpeed : 1000,
//     goToFirstSpeed : 2000,
//     singleItem : true,
//     autoHeight : true,
//     items: 1,
//     lazyLoad: true,
//     loop: true,
//     center: true,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     dots: true,
//     nav: false,
//     // animateIn: 'fadeIn',
//     // animateOut: 'fadeOut'
// });

$("#tab-index,#tab-promotion,#tab-manual,#tab-event").click(function() {
    
    $('html,body').animate({
        scrollTop: $(".section-two").offset().top},
        'slow');
    // console.log('เลื่อนลงมาาาาาาาาาาาาาาาาา');

});

function activeTabGame(){
    var valueTab = parseInt(localStorage.getItem("storageValue"))
    switch(valueTab) {
        case 1:
            $('#tab-index .nav-link').tab('show')
            $('#tab-game-casino').tab('show')
            // $('html,body').animate({
            //     scrollTop: $(".section-two").offset().top},
            //     'slow');
            break;
        case 2:
            $('#tab-promotion .nav-link').tab('show')
            $('#tab-game-slot').tab('show')
            // $('html,body').animate({
            //     scrollTop: $(".section-two").offset().top},
            //     'slow');
            break;
        case 3:
            $('#tab-manual .nav-link').tab('show')
            $('#tab-game-sport').tab('show')
            // $('html,body').animate({
            //     scrollTop: $(".section-two").offset().top},
            //     'slow');
            break;
        case 4:
            $('#tab-event .nav-link').tab('show')
            $('#tab-game-Esport').tab('show')
            // $('html,body').animate({
            //     scrollTop: $(".section-two").offset().top},
            //     'slow');
            break;
        default:

    }
}
activeTabGame()

$('.balance-depWit').click(function(){
    $('.provider-balance').css({"z-index" : "1200"});
    $('.fade-bg-sidebar-2').toggleClass('d-none')
    $('.b-dep').toggleClass('addScale')
    setTimeout(function(){
        $('.b-with').toggleClass('addScale')
    },100);
})

$('#nav-btn-dps,#nav-btn-wd').click(function() {
    $('#nav-btn-dps').removeClass('addScale')
    $('#nav-btn-wd').removeClass('addScale')
    $('.fade-bg-sidebar-2').addClass('d-none')
});

$('.fade-bg-sidebar-2').click(function(){
    $('.b-dep').removeClass('addScale')
    setTimeout(function(){
        $('.b-with').removeClass('addScale')
    },100);
    $(this).toggleClass('d-none')

})
// $('.fade-bg-sidebar-2').click(function(){
    // $(this).toggleClass('d-none')
// })

    
