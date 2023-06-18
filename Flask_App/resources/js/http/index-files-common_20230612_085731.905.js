var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function(){
    $("#globalNavi").on("click", ".dropdown > a", function(){
        //PCの場合か、下層が空の場合はクリックさせる
        if ($('.navbar-toggle').css('display') == 'none' || !$(this).find(".caret").length) {
            window.location.href = $(this).attr("href");
        }
    });
});

}
/*
     FILE ARCHIVED ON 13:46:17 Apr 06, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:26:24 May 25, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.922
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.062
  RedisCDXSource: 0.421
  esindex: 0.004
  LoadShardBlock: 120.494 (3)
  PetaboxLoader3.datanode: 156.979 (4)
  CDXLines.iter: 12.185 (3)
  load_resource: 161.912
  PetaboxLoader3.resolve: 96.277
*/