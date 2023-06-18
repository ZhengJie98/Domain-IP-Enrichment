//-------------------------------------//
// init Masonry

var $grid = $('#liste_oeuvres').masonry({
    itemSelector: 'none', // select none at first
    columnWidth: '.oeuvres',

    percentPosition: true,

    // nicer reveal transition
    visibleStyle: {transform: 'translateY(0)', opacity: 1},
    hiddenStyle: {transform: 'translateY(100px)', opacity: 0},
});

// get Masonry instance
var msnry = $grid.data('masonry');

// initial items reveal
$grid.imagesLoaded(function () {
    $grid.masonry('option', {itemSelector: '.oeuvres'});
    var $items = $grid.find('.oeuvres');
    $grid.masonry('appended', $items);
});

//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
    '202252c2f5f192688dada252913ccf13',
    'a308f05af22690139e9a2bc655bfe3ee',
    '6c9ff23039157ee37b3ab982245eef28',
];


//-------------------------------------//
// init Infinte Scroll
var nextURL;
nbrScroll = 1;

function updateNextURL(doc) {
    nextURL = $(doc).find('#next a').attr('href');
}
// get initial nextURL
updateNextURL(document);

$grid.infiniteScroll({
    path: function () {
        return nextURL;
    },
    append: '.oeuvres',
    outlayer: msnry,
    hideNav: '#pagination',
    status: '.page-load-status',
    
    // using button, disable loading on scroll 
    loadOnScroll: true,
});

$('#div-footer').css({'margin-top': '400px'});


//-------------------------------------//
// voirPlus

    $grid.on('load.infiniteScroll', function (event, response) {

        updateNextURL(response);
         $grid.masonry('layout');  
    });
   
