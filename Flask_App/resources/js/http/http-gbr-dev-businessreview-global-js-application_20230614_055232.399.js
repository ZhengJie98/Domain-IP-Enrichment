$(function() {
    $( ".slides li" ).click(function() {
        var link = $(this).attr('target');
        location.href = link;
    });
});