$(document).ready(function () {
    var yourNavigation = $(".nav_top");
    stickyDiv = "sticky";
    yourHeader = $('.nav_top').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > yourHeader) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });

    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
        return false;
    });

    $('#burger').click( function () {
        $(this).closest("#drawer_menu").addClass('menu__mobile_active');
    });

    $('.closed, .closed_btn').click( function () {
        $(this).closest("#drawer_menu").removeClass('menu__mobile_active');
    });
});
