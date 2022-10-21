$(document).ready(function(){
    $("#list").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$(document).ready(function(){
    var link = $('.burger-menu__link');
    var link_active = $('.burger-menu__link_active');
    var menu = $('.burger-menu');
    var nav_link = $('.burger-menu a');

    link.click(function(){
        link.toggleClass('burger-menu__link_active');
        menu.toggleClass('burger-menu_active');
    });
    nav_link.click(function(){
        link.toggleClass('burger-menu__link_active');
        menu.toggleClass('burger-menu_active');
    });
});