// JavaScript OPTIONS

// TOOLTIPS
$(function ()
{
   $('.kikoo').tipsy(
   {
      gravity: 'n',
      fade: true
   });
});
//BLOC COMPTE
$(document).ready(function ()
{
   $(".signin").click(function (e)
   {
      e.preventDefault();
      $("fieldset#signin_menu").toggle();
      $(".signin").toggleClass("menu-open");
   });
   $("fieldset#signin_menu").mouseup(function ()
   {
      return false
   });
   $(document).mouseup(function (e)
   {
      if($(e.target).parent("a.signin").length == 0)
      {
         $(".signin").removeClass("menu-open");
         $("fieldset#signin_menu").hide();
      }
   });
});
// FANCY BOX
		$(document).ready(function ()
		{
		   $('.fancybox').fancybox(
		   {
		      afterClose: function ()
		      {
		         location.reload();
		         return;
		      },
		      padding: 0,
		      margin: 0,
		      maxWidth: 600,
		      topRatio: 0,
		      wrapCSS: 'fancybox-custom',
		      closeClick: true,
		      helpers: {
		         title: {
		            type: 'inside'
		         },
		         overlay: {
		            css: {
		               'background-color': '#eee'
		            }
		         }
		      }
		   });
		});