(function ($) {
    $.fn.handleGetData = function (options) {
        let settings = $.extend({
            modalId: null,
            valuesId: {},
            ReturnFromApi:'',
            imagePrev: false,
            cloudImagePrev: false,
            dbImgColName:'',
            imagePath:''
        }, options);
        let url = $(this).val();
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: url,
            success: function (response) {
                if(settings.imagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="'+ imagePath + response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="prev_image" class="prev_image w-100">\
                    ');
                }
                if(settings.cloudImagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="prev_image" class="prev_image w-100">\
                    ');
                }
                for (let key in settings.valuesId) {
                    if (settings.valuesId.hasOwnProperty(key) && response[settings.ReturnFromApi].hasOwnProperty(key)) {
                        $('#' + settings.valuesId[key]).val(response[settings.ReturnFromApi][key]);
                    }
                }
            }
        });
    };
})(jQuery);

(function ($) {
    $.fn.handleEdit = function (options) {
        let settings = $.extend({
            modalId: null,
            valuesId: {},
            ReturnFromApi:'',
            imagePrev: false,
            cloudImagePrev: false,
            dbImgColName:''
        }, options);
        let url = $(this).val();
        $('#'+ settings.modalId).modal('show');
        $.ajax({
            type: "GET",
            url: url,
            success: function (response) {
                if(settings.imagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="/uploads/banner/'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="" class="prev_banner_image w-100">\
                    ');
                }
                if(settings.cloudImagePrev == true){
                    $('.prev_image_view').html("");
                    $('.prev_image_view').append('\
                        <img src="'+ response[settings.ReturnFromApi][settings.dbImgColName] +'" alt="" class="prev_banner_image w-100">\
                    ');
                }
                for (let key in settings.valuesId) {
                    if (settings.valuesId.hasOwnProperty(key) && response[settings.ReturnFromApi].hasOwnProperty(key)) {
                        $('#' + settings.valuesId[key]).val(response[settings.ReturnFromApi][key]);
                    }
                }
            }
        });
    };
})(jQuery);

(function ($) {
    $.fn.handlesubmit = function (formData,options) {
        let settings = $.extend({
            modalId: null,
            listName: null,
        }, options);
        let url = $(this).attr('action');
        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(response) {
                $('.error_message').text('');
                if (response.status === 200) {
                    $('#'+settings.modalId).modal('hide');
                    $(document).sami_Toast_Append({
                        cus_toast_status : 'success',
                        cus_toast_time: 3000,
                        cus_toast_msg: response.msg
                    });
                    $('#' + settings.modalId).load(location.href + " #" + settings.modalId + ">*","");
                    $('.' + settings.listName).load(location.href + " ." + settings.listName + ">*","");

                } else {
                    $.each(response.error, function (key, value) {
                        $('.' + key + '_error').text(value);
                    });
                }
            },
        });
    };
})(jQuery);

(function ($) {
    $.fn.handleDelete = function (options) {
        let settings = $.extend({
            url: '',
            modalId: null,
            msg: null,
        }, options);
        let showValue = $(this).val();

        let showMsg;

        if (settings.msg === null) {
            showMsg = 'Are You Sure To Delete ' + showValue + ' ?';
        } else {
            showMsg = settings.msg + ' ' + showValue + ' ?';
        }

        $('#' + settings.modalId).modal('show');

        $('.delete_alert_div').html("");
        $('.delete_alert_div').append('\
                <h6 class="text-danger mb-3">' + showMsg + '</h6>\
                <button type="button" class="btn btn-secondary delete_alert" data-bs-dismiss="modal">No, Close</button>\
                <a href="' + settings.url + '" class="btn btn-danger">Yes, Delete</a>\
            ');
    };
})(jQuery);
