$(document).ready(function () {
    var sliderDir;
    if ($('html').prop("dir") == 'ltr') { sliderDir = false; } else if ($('html').prop("dir") == 'rtl') { sliderDir = true; }

    if($(".custom-file-input").length != 0){
        bsCustomFileInput.init();
    }

    if ($('#DriverRate').length != 0) {
        $('#DriverRate').barrating({
            theme: 'fontawesome-stars', 
            initialRating: null,
            allowEmpty: null
        });
    }
    if ($('#ClientRate').length != 0) {
        $('#ClientRate').barrating({
            theme: 'fontawesome-stars', 
            initialRating: null,
            allowEmpty: null
        });
    }

    if ($('.choose-city').length != 0) {
        $(".choose-city").select2({
            placeholder:"إختر المدينة",
            language: "ar",
        });
    }
    if ($('.choose-region').length != 0) {
        $(".choose-region").select2({
            placeholder:"إختر المنطقة",
            language: "ar",
        });
    }
    if ($('.choose-country').length != 0) {
        $(".choose-country").select2({
            placeholder:"إختر الدولة",
            language: "ar",
        });
    }
    
    //------------------ Home Slider : Begin ----------------------

    if ($('#HomeCategoriesSlider').length != 0) {
        $('#HomeCategoriesSlider').owlCarousel({
            rtl: sliderDir,
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true,
                    autoplay: true,
                },
                600: {
                    items: 3,
                    nav: false,
                    loop: true,
                },
                900: {
                    items: 4,
                    nav: false,
                    loop: true,
                },
                1400: {
                    items: 5,
                    nav: true,
                    loop: false,
                }
            }
        });
    }
    //------------------ Home Slider : End ----------------------

    //------------------ Range Picker [Filter : Price ] : Begin ----------------------
    if ($('#pricing-div').length != 0) {
        $("#pricing-div").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 5000,
            from: 200,
            to: 1500,
            prefix: "RS "
        });
    }
    //------------------ Range Picker [Filter : Price ] : End ----------------------

    if ($('.menu-item .menu-item-container .menu-item-data p').length != 0) {
        $('.menu-item .menu-item-container .menu-item-data p').each(function (index, element) {
            $clamp(element, { clamp: 2, useNativeClamp: true });
        });
    }
    if ($('.card-menu .menu-item .menu-item-container .menu-item-data p').length != 0) {
        $('.card-menu .menu-item .menu-item-container .menu-item-data p').each(function (index, element) {
            $clamp(element, { clamp: 3, useNativeClamp: true });
        });
    }

    if ($('#MealSlider').length != 0) {
        $('#MealSlider').lightSlider({
            gallery: true,
            auto: true,
            loop: true,
            pause: 3000,
            speed: 1500,
            item: 1,
            vertical: true,
            verticalHeight: 450,
            vThumbWidth: 100,
            thumbItem: 3,
            thumbMargin: 4,
            slideMargin: 10,
            controls: false,
            
        });
    }
    if ($('.datepicker').length != 0) {
        $.fn.datepicker.defaults.format = "dd/mm/yyyy";
        $('.datepicker').datepicker({
            /*  startDate: '-3d', */
            language: 'ar',
            container: ".main-wrap",
            rtl: true,
        });
    }

    //------------------ Server Path Handler ----------------------
    if (location.href.indexOf("https://") == -1) {
        if (location.href.indexOf("localhost") == -1) {
            location.href = location.href.replace("http://", "https://");
        }
        //else {
        //    if (location.href.indexOf("G7Tatbela.Design") == -1) {
        //        location.href = location.href.replace("http://", "https://");
        //    }
        //}
    }

    if ($('#MealPhotosInput').length != 0) {
    $("#MealPhotosInput").imageuploadify({Icon:"far fa-images",IconHover:"fas fa-plus",UploadText:"قم بإلقاء الصور هنا للقيام بعملية الرفع",BtnText:"أو قم بتصفح الجهاز الخاص بك لإختيار الصور"});
    }
/* 
    if ($('#NationaLId').length != 0) {
        $("#NationaLId").imageuploadify({Icon:"far fa-images",IconHover:"fas fa-plus",UploadText:"قم بإلقاء الصور هنا للقيام بعملية الرفع",BtnText:"أو قم بتصفح الجهاز الخاص بك لإختيار الصور"});
    } */
    if ($('#MainSlider').length != 0) {
        $('#MainSlider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            rtl: sliderDir,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    }
    
    if ($('#OffersSuppliers').length != 0) {
        $('#OffersSuppliers').owlCarousel({
            rtl: sliderDir,
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true,
                    autoplay: true,
                },
                600: {
                    items: 3,
                    nav: false,
                    loop: true,
                },
                900: {
                    items: 4,
                    nav: false,
                    loop: true,
                },
                1400: {
                    items: 5,
                    nav: true,
                    loop: false,
                }
            }
        });
    }

    if ($('#Offers').length != 0) {
        $('#Offers').owlCarousel({
            rtl: sliderDir,
            loop: true,
            margin: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true,
                    autoplay: true,
                },
                992: {
                    items: 2,
                    nav: false,
                    loop: true,
                },
                1200: {
                    items: 4,
                    nav: false,
                    loop: true,
                },
                1400: {
                    items: 5,
                    nav: true,
                    loop: false,
                }
            }
        });
    }
    
    $('[data-toggle="tooltip"]').tooltip();

    if ($('#BlogSlider').length != 0) {
        $('#BlogSlider').owlCarousel({
            loop:true,
            nav:true,
            rtl: sliderDir,
            items : 1,
            margin: 0,
            responsiveClass: true,
            responsive : {
                0 : {
                    items : 1,
                },
                479 : {
                    items : 1,
                },
                768 : {
                    items : 2,
                },
                980 : {
                    items : 2,
                },
                1024 : {
                    items : 3,
                },
                1199 : {
                    items : 4,
                }
            }
        });
    }

});


$(window).on("load",function(){
    if ($('.conditions').length != 0) {
        $(".conditions").mCustomScrollbar({
            theme: "minimal-dark"
        });
    }
    if ($('.login-register-modal').length != 0) {
        $(".login-register-modal").mCustomScrollbar({
            theme: "minimal-dark"
        });
    }
});




//------- Switch Menu List Items --------------------------------
$(document).on("click", ".menu-change-layout", function () {
    var obj = $(this);
    $(".chef-menu-body").LoadingOverlay("show", {
        fade: true,
        color: "rgba(255, 255, 255, 0.5)"
    });
    setTimeout(function () {
        if ($(obj).data('layout') == "list") {
            if ($(".chef-menu").hasClass("card-menu")) {
                $(".chef-menu").removeClass("card-menu");
            }
        } else if ($(obj).data('layout') == "card") {
            if (!$(".chef-menu").hasClass("card-menu")) {
                $(".chef-menu").addClass("card-menu");
            }
        }
        $(".menu-change-layout").removeClass("active");
        $(obj).addClass("active");

        $(".chef-menu-body").LoadingOverlay("hide", {
            fade: true,
            color: "rgba(255, 255, 255, 0.5)"
        });
    }, 1200);
});

$(document).on("click", ".collapse-btn a", function () {
    var parent = $(this).closest(".chef-menu");
    var MenuBody = parent.find(".sub-data-section-body");
    if (MenuBody.hasClass('show')) {
        $(this).removeClass("rotate");
        MenuBody.collapse('hide');
    } else {
        MenuBody.collapse('show');
        $(this).addClass("rotate");
    }
});

$(document).on("click",".working-hours-available",function(){
    if($(this).is(":checked")){
        $(this).closest(".working-hours-item").addClass("active");
    }else{
        $(this).closest(".working-hours-item").removeClass("active");
    }
});

//------------------ Ingredients list Handler : Begin ----------------------
//---- Add -----
$(document).on("click",".btn-list-item a",function(){
    debugger;
    let LastListItemCount=  $(".Ingredient").length -1;
    let LastListItem = $(".Ingredient")[LastListItemCount];
    var Index = $(LastListItem).data("index") +1;
    var ListItem = '<li class="Ingredient" data-index="'+Index+'">'+
    '<input type="text" name="MealIngredient'+Index+'" class="form-control" id="MealIngredient'+Index+'" placeholder= "ادخل مكون الوجبة">'+
    '<a class="fas fa-times del-ingredient"></a>'+
    '</li>';
    $(ListItem).insertBefore($(this).closest(".btn-list-item"));
});
//---- Delete -----
$(document).on("click",".del-ingredient",function(){
    $(this).closest(".Ingredient").remove();
});
//------------------ Ingredients list Handler : End ----------------------



$(document).on("click",".collapse-link",function(){
    if($(this).closest(".order-list-container").hasClass("shown")){
        $(this).closest(".order-list-container").removeClass("shown");
    }else{
        $(this).closest(".order-list-container").addClass("shown");
    }
    $(this).closest(".order-list-container").find(".order-list-collapse-div").toggle("toggle");
});




/* $('#chefRegTabs li a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    console.log(e.target); // newly activated tab
    if($(e.target).attr("href") == "#OfficialPapers"){
        $("#NationaLId").imageuploadify({Icon:"far fa-images",IconHover:"fas fa-plus",UploadText:"قم بإلقاء الصور هنا للقيام بعملية الرفع",BtnText:"أو قم بتصفح الجهاز الخاص بك لإختيار الصور"});
    }
    console.log(e.relatedTarget); // previous active tab
 }) */

 $(document).on("click",".menu-item-tools button",function(){
     //debugger;
    if($(this).attr("data-action") == "remove-from-cart"){
        ShowNotification("تمت الإزالة من السلة","error");
    }else if($(this).attr("data-action") == "add-to-cart"){
        ShowNotification("تمت الإضافة فى السلة","success");
    }
    return false;
});

$(document).on("click","#AddToCartMealDetails",function(){
    if($(this).attr("data-action") == "remove-from-cart"){
        ShowNotification("تمت الإزالة من السلة","error");
    }else if($(this).attr("data-action") == "add-to-cart"){
        ShowNotification("تمت الإضافة فى السلة","success");
    }
});

$(document).on("click",".question-section .section-header",function(){
    console.log($(this).closest(".question-section"));
    $(this).closest(".question-section").find(".question-section-answer").collapse("toggle");
});

$(document).on("click",".category-question-section  .category-question-section-header",function(){
    console.log($(this).closest(".category-question-section "));
    $(this).closest(".category-question-section").find(".category-question-section-container").collapse("toggle");
});



function ShowNotification(txt,type){
    //debugger;
    new Noty({
        text: txt,
        theme:'mint',
        timeout: 500,
        type: type, //alert, success, error, warning, info
    }).show();
}


function initMap() {
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('mapadd'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}


//----------------------- Loading Show -------------------
function LoadingShow(selector){
    $(selector).LoadingOverlay("show",{
        image: "/Content/images/favicon.ico",
        imageAnimation:  "1000ms pulse",
        imageResizeFactor: 0.5
    });
    //setTimeout(function(){ LoadingHide("body"); }, 3000);
}

//----------------------- Loading Hide -------------------
function LoadingHide(selector){
    $(selector).LoadingOverlay("hide");
}


//-----------------------ShowMsgModal--------------
//[Type,Icon,Msg,AborveFunction,CancleFunction]
function ShowMsgmodal(options){
    //debugger;
    var modal = $("#MsgModal");
    
    let icon =  modal.find(".modal-icon span").attr("class");
    modal.find(".modal-icon span").removeClass(icon);
    modal.find(".modal-icon span").addClass(options[1]);
    
    modal.find(".message").html(options[2]);

    let type = modal.find(".modal-icon");
    type.removeClass(type.attr("class"));
    type.addClass("modal-icon "+ options[0]);

    if(options[3] != null ){
        modal.find(".approve-btn").css("display","flex");
        modal.find(".approve-btn").attr("onclick",options[3].function);
        modal.find(".approve-btn").html(options[3].text);
    }else{
        modal.find(".approve-btn").css("display","none");
    }
    if(options[4] != null ){
        modal.find(".cancle-btn").css("display","flex");
        modal.find(".cancle-btn").attr("onclick",options[4].function);
        modal.find(".cancle-btn").html(options[4].text);
        if(options[4].function == null){
            modal.find(".cancle-btn").attr("onclick","$('#MsgModal').modal('hide');");
        }
    }else{
        modal.find(".cancle-btn").css("display","none");
    }

    modal.modal('show');
}

$(document).on("click",".filter-wrapper .sub-data-section-header",function(){
    $(this).closest(".sub-data-section").find(".sub-data-section-body").collapse("toggle");
    if($(this).find(".side-wrap-section-toggle-btn").hasClass("fa-minus")){
        $(this).find(".side-wrap-section-toggle-btn").removeClass("fa-minus");
        $(this).find(".side-wrap-section-toggle-btn").addClass("fa-plus");
    }else{
        $(this).find(".side-wrap-section-toggle-btn").removeClass("fa-plus");
        $(this).find(".side-wrap-section-toggle-btn").addClass("fa-minus");
    }
});