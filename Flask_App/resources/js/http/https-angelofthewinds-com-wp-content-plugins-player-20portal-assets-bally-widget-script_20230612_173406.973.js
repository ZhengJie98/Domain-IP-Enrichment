function showItem(htmlItem) {
    jQuery(".item").hide();
    jQuery(htmlItem).fadeIn('slow');
}

jQuery("#iAcct").click(function (event) {
    event.preventDefault();
    showItem("#cAcct");
});

jQuery("#iHost").click(function (event) {
    event.preventDefault();
    showItem("#cHost");
});

jQuery("#iComp").click(function (event) {
    event.preventDefault();
    showItem("#cComp");
});

jQuery("#iPoint").click(function (event) {
    event.preventDefault();
    showItem("#cPoint");
});

jQuery("#widget_statement_win_loss").submit(function (event) {
    event.preventDefault();

    var form_element = document.getElementById("widget_statement_win_loss");
    var formData = new FormData(form_element);

    formData.append('action', "aotw_player_portal_winloss");
    formData.append('_ajax_nonce', bally_ajax_global.nonce);

    jQuery.ajax({
        type: 'post',
        processData: false,
        contentType: false,
        url: bally_ajax_global.ajax_url,
        data: formData
    }).done(function (response) {
        jQuery("#winloss_feedback").html("We have received your Win/Loss request. Please check your email.");
    });

});

jQuery("#iLogout").click(function (event) {
    event.preventDefault();
    jQuery.ajax({
        type: 'post',
        dataTYpe: 'json',
        url: bally_ajax_global.ajax_url,
        data: {
            action: "aotw_player_portal_logout",
            _ajax_nonce: bally_ajax_global.nonce
        }
    }).done(function (response) {
        location.reload();
    });
});



