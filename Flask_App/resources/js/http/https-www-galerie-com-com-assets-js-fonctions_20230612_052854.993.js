
//------------------------------------scrolle infini

jQuery(document).ready(function() {
    $.scrollUp({
       animation: 'fade',
	   scrollImg:true                    
    });
});
//---------------------------------------------- vote

function ceour(id){
$.ajax({
  type: "POST",
  url: "/ajax/ceour/",
  data: "id="+id,
  success: function(msg){
  	$('#c'+id).html(msg);
	$('#c'+id).css("font-weight","bold");
  }
});}

function tech(id){
$.ajax({
  type: "POST",
  url: "/ajax/technique/",
  data: "id="+id,
  success: function(msg){
  	$('#t'+id).html(msg);
	$('#t'+id).css("font-weight","bold");
  }
});}

//---------------------------------------------- menu scroll
jQuery(document).ready(function(){
     $(window).scroll(function () {
          var rupture = $('#header').outerHeight() ;
          if( $(window).scrollTop() > rupture ) {
               $('#menu1').addClass('m-ombre');
          } else {
               $('#menu1').removeClass('m-ombre');
          }
     });
});
//----------------------------------------------selectpicker
     $('.selectpicker').selectpicker({
    
    });
//----------------------------------------------visible	
	function visible(parametre){
	if( $(parametre).css("display")=="none" ){
	$(parametre).slideDown(400);}else{
	$(parametre).slideUp(300);
	}
}
