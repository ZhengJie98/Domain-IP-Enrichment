jQuery(document).ready(function () {
    jQuery(".jisc-dropdown-menu option").each(function () {
        if (jQuery(this).html() == '') {
            jQuery(this).hide();
        }
    });
    jQuery(document).on('scroll', function () {
        if (jQuery(document).scrollTop() > 180) {
            jQuery('#nav').addClass('sticky');
        } else {
            jQuery('#nav').removeClass('sticky');
        }
    });
});