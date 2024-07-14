(function ($) {
    $.fn.image_preview = function () {
        this.on("click", function (options) {
            $("body,html").append(
                '\
                <div id="FullImageView">\
                    <img id="FullImage" />\
                    <span id="CloseBtn">&times;</span>\
                </div>\
            '
            );
            let img_src = $(this).attr("src");
            $("#FullImage").attr("src", img_src);
            $("#FullImageView").css("display", "flex");

            $("#CloseBtn").on("click", function () {
                $("#FullImageView").css("display", "none");
            });
        });
    };
})(jQuery);

(function ($) {
    $.fn.modal_image_preview = function () {
        $("body,html").append(
            '\
            <div id="FullImageView">\
                <img id="FullImage" />\
                <span id="CloseBtn">&times;</span>\
            </div>\
        '
        );
        let img_src = $(this).attr("src");
        $("#FullImage").attr("src", img_src);
        $("#FullImageView").css("display", "flex");

        $("#CloseBtn").on("click", function () {
            $("#FullImageView").css("display", "none");
        });
    };
})(jQuery);