$(function () {

    window.version = '202212131740'
    
    // 数字滚动
    $.fn.numberRock = function (options) {
        var defaults = {
            speed: 24,
            count: 100
        };
        var opts = $.extend({}, defaults, options);
        var div_by = 100,
            count = opts["count"],
            speed = Math.floor(count / div_by),
            sum = 0,
            $display = this,
            run_count = 1,
            int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by && speed != 0) {
                $display.text(sum = speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }


    // 节流
    $.fn.throttle = function (fn, wait) {
        let flag = false;
        return function () {
            if (flag) return;
            flag = true;
            fn.call(this, arguments);
            setTimeout(() => {
                flag = false;
            }, wait);
        }
    }
})