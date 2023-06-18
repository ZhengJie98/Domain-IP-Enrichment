﻿// ng-app
var app = angular.module('portalApp', ["ui.bootstrap", "ngAnimate", "slotGame", "lobbyNav", "portalShared", "ui.router", "ui.router.state.events"]);

app.directive('customScrollbar', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.mCustomScrollbar({
                axis: 'y',
                theme: 'minimal-dark'
            });
        }
    };
});


//文案頁面折疊
$('#conts dt a').click(function () {
    $(this).parent().toggleClass('on').next('dd').toggle().parent().siblings('dl').children('dt').removeClass('on').next('dd').hide();
    $(window).trigger('resize');
    return false;
});