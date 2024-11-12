(function ($) {
    $.fn.cus_toast_auto = function (options) {
        let settings = $.extend(
            {
                cus_toast_time: 5000,
                cus_toast_top: "25px",
                cus_toast_bg: "#f2f2f2",
                cus_toast_border: "#008080",
                cus_toast_check_bg: "#198754",
                cus_toast_check_icon: "#ffffff",
                cus_toast_error_bg: "#dc3545",
                cus_toast_error_icon: "#ffffff",
                cus_toast_text: "#666666",
            },
            options
        );

        let progress_time = 300;
        let end_time = settings.cus_toast_time + progress_time;
        let progress_css_time = settings.cus_toast_time / 1000;
        $(".cus_toast").toggleClass("active");
        $(".progress").toggleClass("active");

        $(":root").css({
            "--cus_toast_time": progress_css_time + "s",
            "--cus_toast_top": settings.cus_toast_top,
            "--cus_toast_bg": settings.cus_toast_bg,
            "--cus_toast_border": settings.cus_toast_border,
            "--cus_toast_check_bg": settings.cus_toast_check_bg,
            "--cus_toast_check_icon": settings.cus_toast_check_icon,
            "--cus_toast_error_bg": settings.cus_toast_error_bg,
            "--cus_toast_error_icon": settings.cus_toast_error_icon,
            "--cus_toast_text": settings.cus_toast_text,
        });
        let action_class = $(".cus_toast");
        let timer1, timer2;
        timer1 = setTimeout(() => {
            $(".cus_toast").removeClass("active");
        }, settings.cus_toast_time); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            $(".progress").removeClass("active");
            $(".progress").remove();
            $(".cus_toast").remove();
        }, end_time);

        $(".cus_toast").mouseover(function () {
            clearTimeout(timer1);
            clearTimeout(timer2);
            $(".progress").removeClass("active");

        });

        $(".cus_toast").mouseout(function () {
            $(".progress").addClass("active");
            timer1 = setTimeout(() => {
                $(".cus_toast").removeClass("active");
            }, settings.cus_toast_time); //1s = 1000 milliseconds

            timer2 = setTimeout(() => {
                $(".progress").removeClass("active");
                $(".progress").remove();
                $(".cus_toast").remove();
            }, end_time);
        });

        $(".sami_close").on("click", function () {
            action_class.removeClass("active");
            setTimeout(() => {
                $(".progress").removeClass("active");
                $(".progress").remove();
                $(".cus_toast").remove();
            }, progress_time);

            clearTimeout(timer1);
            clearTimeout(timer2);
        });
    };
})(jQuery);

(function ($) {
    $.fn.sami_Toast_Append = function (options) {
        let settings = $.extend(
            {
                cus_toast_status : 'success',
                cus_toast_time: 5000,
                cus_toast_msg: "Hello",
            },
            options
        );
        if(settings.cus_toast_status == 'success'){
            $("body").prepend(
                '\
                    <div class="cus_toast1">\
                        <div class="cus_toast-content">\
                            <i class="fas fa-solid fa-check check"></i>\
                            <div class="message">\
                                <span class="cus_success">Success</span>\
                                <span class="text text-2">' +settings.cus_toast_msg+'</span>\
                            </div>\
                        </div>\
                        <i class="fa-solid fa-xmark sami_close1"></i>\
                        <div class="progress"></div>\
                    </div>\
                '
            );
        }else{
            $("body").prepend(
                '\
                    <div class="cus_toast1">\
                        <div class="cus_toast-content">\
                            <i class="fas fa-solid fa-xmark error"></i>\
                            <div class="message">\
                                <span class="cus_error">Error</span>\
                                <span class="text text-2">' +settings.cus_toast_msg+'</span>\
                            </div>\
                        </div>\
                        <i class="fa-solid fa-xmark sami_close1"></i>\
                        <div class="progress"></div>\
                    </div>\
                '
            );
        }
        $(".cus_toast1").toggleClass("active");
        $(".progress").toggleClass("active");

        let progress_time = 300;
        let end_time = settings.cus_toast_time + progress_time;
        let progress_css_time = settings.cus_toast_time / 1000;

        $(":root").css({
            "--cus_toast_time": progress_css_time + "s",
        });
        let t_timer1, t_timer2;
        t_timer1 = setTimeout(() => {
            $(".cus_toast1").removeClass("active");
            $(".cus_toast1").remove();
        }, settings.cus_toast_time); //1s = 1000 milliseconds

        t_timer2 = setTimeout(() => {
            $(".progress").removeClass("active");
            $(".progress").remove();
            $(".cus_toast1").remove();
        }, end_time);

        $(".cus_toast1").mouseover(function () {
            clearTimeout(t_timer1);
            clearTimeout(t_timer2);
            $(".progress").removeClass("active");
        });

        $(".cus_toast1").mouseout(function () {
            $(".progress").addClass("active");
            t_timer1 = setTimeout(() => {
                $(".cus_toast1").removeClass("active");
                $(".cus_toast1").remove();
            }, settings.cus_toast_time); //1s = 1000 milliseconds

            t_timer2 = setTimeout(() => {
                $(".progress").removeClass("active");
                $(".progress").remove();
                $(".cus_toast1").remove();
            }, end_time);
        });

        $(".sami_close1").on("click", function () {
            $(".cus_toast1").removeClass("active");
            $(".cus_toast1").remove();
            setTimeout(() => {
                $(".progress").removeClass("active");
                $(".progress").remove();
                $(".cus_toast1").remove();
            }, progress_time);

            clearTimeout(t_timer1);
            clearTimeout(t_timer2);
        });
    };
})(jQuery);