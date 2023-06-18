﻿/* noty.js - CACHE HIT */

if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;
return new a()}}(function(a){var b={init:function(d){this.options=a.extend({},a.noty.defaults,d);
this.options.layout=(this.options.custom)?a.noty.layouts.inline:a.noty.layouts[this.options.layout];
this.options.theme=a.noty.themes[this.options.theme];delete d.layout;delete d.theme;
this.options=a.extend({},this.options,this.options.layout.options);this.options.id="noty_"+(new Date().getTime()*Math.floor(Math.random()*1000000));
this.options=a.extend({},this.options,d);this._build();return this},_build:function(){var d=a('<div class="noty_bar"></div>').attr("id",this.options.id);
d.append(this.options.template).find(".noty_text").html(this.options.text);this.$bar=(this.options.layout.parent.object!==null)?a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(d):d;
if(this.options.buttons){this.options.closeWith=[];this.options.timeout=false;var e=a("<div/>").addClass("noty_buttons");
(this.options.layout.parent.object!==null)?this.$bar.find(".noty_bar").append(e):this.$bar.append(e);
var f=this;a.each(this.options.buttons,function(j,h){var g=a("<button/>").addClass((h.addClass)?h.addClass:"gray").html(h.text).appendTo(f.$bar.find(".noty_buttons")).bind("click",function(){if(a.isFunction(h.onClick)){h.onClick.call(g,f)
}})})}this.$message=this.$bar.find(".noty_message");this.$closeButton=this.$bar.find(".noty_close");
this.$buttons=this.$bar.find(".noty_buttons");a.noty.store[this.options.id]=this},show:function(){var d=this;
a(d.options.layout.container.selector).append(d.$bar);d.options.theme.style.apply(d);
(a.type(d.options.layout.css)==="function")?this.options.layout.css.apply(d.$bar):d.$bar.css(this.options.layout.css||{});
d.$bar.addClass(d.options.layout.addClass);d.options.layout.container.style.apply(a(d.options.layout.container.selector));
d.options.theme.callback.onShow.apply(this);if(a.inArray("click",d.options.closeWith)>-1){d.$bar.one("click",function(){d.close()
})}if(a.inArray("hover",d.options.closeWith)>-1){d.$bar.one("mouseenter",function(){d.close()
})}if(a.inArray("button",d.options.closeWith)>-1){d.$closeButton.one("click",function(){d.close()
})}if(a.inArray("button",d.options.closeWith)==-1){d.$closeButton.remove()}if(d.options.callback.onShow){d.options.callback.onShow.apply(d)
}d.$bar.animate(d.options.animation.open,d.options.animation.speed,d.options.animation.easing,function(){if(d.options.callback.afterShow){d.options.callback.afterShow.apply(d)
}d.shown=true});if(d.options.timeout){d.$bar.delay(d.options.timeout).promise().done(function(){d.close()
})}return this},close:function(){if(this.closed){return}var e=this;if(!this.shown){var d=[];
a.each(a.noty.queue,function(f,g){if(g.options.id!=e.options.id){d.push(g)}});a.noty.queue=d;
return}e.$bar.addClass("i-am-closing-now");if(e.options.callback.onClose){e.options.callback.onClose.apply(e)
}e.$bar.clearQueue().stop().animate(e.options.animation.close,e.options.animation.speed,e.options.animation.easing,function(){if(e.options.callback.afterClose){e.options.callback.afterClose.apply(e)
}}).promise().done(function(){if(e.options.modal){a.notyRenderer.setModalCount(-1);
if(a.notyRenderer.getModalCount()==0){a(".noty_modal").fadeOut("fast",function(){a(this).remove()
})}}a.notyRenderer.setLayoutCountFor(e,-1);if(a.notyRenderer.getLayoutCountFor(e)==0){a(e.options.layout.container.selector).remove()
}if(typeof e.$bar!=="undefined"&&e.$bar!==null){e.$bar.remove();e.$bar=null;e.closed=true
}delete a.noty.store[e.options.id];e.options.theme.callback.onClose.apply(e);if(!e.options.dismissQueue){a.noty.ontap=true;
a.notyRenderer.render()}})},setText:function(d){if(!this.closed){this.options.text=d;
this.$bar.find(".noty_text").html(d)}return this},setType:function(d){if(!this.closed){this.options.type=d;
this.options.theme.style.apply(this);this.options.theme.callback.onShow.apply(this)
}return this},setTimeout:function(e){if(!this.closed){var d=this;this.options.timeout=e;
d.$bar.delay(d.options.timeout).promise().done(function(){d.close()})}return this
},closed:false,shown:false};a.notyRenderer={};a.notyRenderer.init=function(e){var d=Object.create(b).init(e);
(d.options.force)?a.noty.queue.unshift(d):a.noty.queue.push(d);a.notyRenderer.render();
return(a.noty.returns=="object")?d:d.options.id};a.notyRenderer.render=function(){var d=a.noty.queue[0];
if(a.type(d)==="object"){if(d.options.dismissQueue){a.notyRenderer.show(a.noty.queue.shift())
}else{if(a.noty.ontap){a.notyRenderer.show(a.noty.queue.shift());a.noty.ontap=false
}}}else{a.noty.ontap=true}};a.notyRenderer.show=function(d){if(d.options.modal){a.notyRenderer.createModalFor(d);
a.notyRenderer.setModalCount(+1)}if(a(d.options.layout.container.selector).length==0){if(d.options.custom){d.options.custom.append(a(d.options.layout.container.object).addClass("i-am-new"))
}else{a("body").append(a(d.options.layout.container.object).addClass("i-am-new"))
}}else{a(d.options.layout.container.selector).removeClass("i-am-new")}a.notyRenderer.setLayoutCountFor(d,+1);
d.show()};a.notyRenderer.createModalFor=function(d){if(a(".noty_modal").length==0){a("<div/>").addClass("noty_modal").data("noty_modal_count",0).css(d.options.theme.modal.css).prependTo(a("body")).fadeIn("fast")
}};a.notyRenderer.getLayoutCountFor=function(d){return a(d.options.layout.container.selector).data("noty_layout_count")||0
};a.notyRenderer.setLayoutCountFor=function(e,d){return a(e.options.layout.container.selector).data("noty_layout_count",a.notyRenderer.getLayoutCountFor(e)+d)
};a.notyRenderer.getModalCount=function(){return a(".noty_modal").data("noty_modal_count")||0
};a.notyRenderer.setModalCount=function(d){return a(".noty_modal").data("noty_modal_count",a.notyRenderer.getModalCount()+d)
};a.fn.noty=function(d){d.custom=a(this);return a.notyRenderer.init(d)};a.noty={};
a.noty.queue=[];a.noty.ontap=true;a.noty.layouts={};a.noty.themes={};a.noty.returns="object";
a.noty.store={};a.noty.get=function(d){return a.noty.store.hasOwnProperty(d)?a.noty.store[d]:false
};a.noty.close=function(d){return a.noty.get(d)?a.noty.get(d).close():false};a.noty.setText=function(d,e){return a.noty.get(d)?a.noty.get(d).setText(e):false
};a.noty.setType=function(d,e){return a.noty.get(d)?a.noty.get(d).setType(e):false
};a.noty.clearQueue=function(){a.noty.queue=[]};a.noty.closeAll=function(){a.noty.clearQueue();
a.each(a.noty.store,function(d,e){e.close()})};var c=window.alert;a.noty.consumeAlert=function(d){window.alert=function(e){if(d){d.text=e
}else{d={text:e}}a.notyRenderer.init(d)}};a.noty.stopConsumeAlert=function(){window.alert=c
};a.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:true,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:false,force:false,modal:false,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){}},buttons:false};
a(window).resize(function(){a.each(a.noty.layouts,function(d,e){e.container.style.apply(a(e.container.selector))
})})})(jQuery);function noty(b){var c=0,a={animateOpen:"animation.open",animateClose:"animation.close",easing:"animation.easing",speed:"animation.speed",onShow:"callback.onShow",onShown:"callback.afterShow",onClose:"callback.onClose",onClosed:"callback.afterClose"};
jQuery.each(b,function(e,f){if(a[e]){c++;var d=a[e].split(".");if(!b[d[0]]){b[d[0]]={}
}b[d[0]][d[1]]=(f)?f:function(){};delete b[e]}});if(!b.closeWith){b.closeWith=jQuery.noty.defaults.closeWith
}if(b.hasOwnProperty("closeButton")){c++;if(b.closeButton){b.closeWith.push("button")
}delete b.closeButton}if(b.hasOwnProperty("closeOnSelfClick")){c++;if(b.closeOnSelfClick){b.closeWith.push("click")
}delete b.closeOnSelfClick}if(b.hasOwnProperty("closeOnSelfOver")){c++;if(b.closeOnSelfOver){b.closeWith.push("hover")
}delete b.closeOnSelfOver}if(b.hasOwnProperty("custom")){c++;if(b.custom.container!="null"){b.custom=b.custom.container
}}if(b.hasOwnProperty("cssPrefix")){c++;delete b.cssPrefix}if(b.theme=="noty_theme_default"){c++;
b.theme="defaultTheme"}if(!b.hasOwnProperty("dismissQueue")){if(b.layout=="topLeft"||b.layout=="topRight"||b.layout=="bottomLeft"||b.layout=="bottomRight"){b.dismissQueue=true
}else{b.dismissQueue=false}}if(b.buttons){jQuery.each(b.buttons,function(e,d){if(d.click){c++;
d.onClick=d.click;delete d.click}if(d.type){c++;d.addClass=d.type;delete d.type}})
}return jQuery.notyRenderer.init(b)};;

/* noty.ns.js - CACHE HIT */

var notifier=(function(){var b=null,a={elem:"",layout:"top",type:"",text:"",timeout:4000,animation:{open:{height:"toggle"},close:{height:"toggle"},speed:250},closeWith:["click"],callback:{afterClose:function(){b=null
}}};return{spawn:function(g){var f=$.extend({},a,g),d=$(f.elem),e='<a id="close" style=""><span class="fa fa-times fa-lg"></span></a>',c=$(e);
c.on("click",function(h){h.preventDefault();$.noty.closeAll()});if(d.length>0){if(f.text===""){return
}$.noty.clearQueue();if(b==null){switch(f.type){case"warning":f.timeout=false;f.closeWith=[""];
f.text=f.text;break;case"error":f.timeout=false;default:f.text=f.text+e;break}b=d.noty({type:f.type,text:f.text,layout:f.layout,timeout:f.timeout,animation:f.animation,callback:f.callback,closeWith:f.closeWith})
}else{$.noty.closeAll();b=null;setTimeout(function(){notifier.spawn(f)},500)}}},close:function(c){if(typeof c!="undefined"){$.noty.close(c)
}},closeAll:function(){$.noty.closeAll()}}})();;

/* theme.js - CACHE HIT */

(function(a){a.noty.themes.defaultTheme={name:"defaultTheme",helpers:{borderFix:function(){if(this.options.dismissQueue){var b=this.options.layout.container.selector+" "+this.options.layout.parent.selector;
switch(this.options.layout.name){case"top":a(b).css({borderRadius:"0px 0px 0px 0px"});
a(b).last().css({borderRadius:"0px 0px 5px 5px"});break;case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomLeft":case"bottomRight":case"center":case"centerLeft":case"centerRight":case"inline":break;
case"bottom":a(b).css({borderRadius:"0px 0px 0px 0px"});a(b).first().css({borderRadius:"5px 5px 0px 0px"});
break;default:break}}}},modal:{css:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#000",zIndex:10000,opacity:0.6,display:"none",left:0,top:0}},style:function(){this.$closeButton.css({position:"absolute",top:4,right:4,width:10,height:10,display:"none"});
this.$buttons.css({padding:5,textAlign:"right",borderTop:"1px solid #ccc",backgroundColor:"#fff"});
this.$buttons.find("button").css({marginLeft:5});this.$buttons.find("button:first").css({marginLeft:0});
this.$bar.bind({mouseenter:function(){a(this).find(".noty_close").fadeIn()},mouseleave:function(){a(this).find(".noty_close").fadeOut()
}});switch(this.options.layout.name){case"top":this.$bar.css({borderRadius:"0px 0px 5px 5px",borderBottom:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});
break;case"topCenter":case"center":case"bottomCenter":case"inline":break;case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":case"centerLeft":case"centerRight":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});
this.$message.css({fontSize:"13px",textAlign:"left"});break;case"bottom":this.$bar.css({borderRadius:"5px 5px 0px 0px",borderTop:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"});
break;default:this.$bar.css({border:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});
break}switch(this.options.type){case"alert":case"notification":this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"});
break;case"warning":this.$bar.addClass("warning");this.$buttons.css({borderTop:"1px solid #FFC237"});
break;case"error":this.$bar.addClass("failure");this.$buttons.css({borderTop:"1px solid darkred"});
break;case"information":this.$bar.css({backgroundColor:"#57B7E2",borderColor:"#0B90C4",color:"#FFF"});
this.$buttons.css({borderTop:"1px solid #0B90C4"});break;case"success":this.$bar.addClass("success");
this.$buttons.css({borderTop:"1px solid #50C24E"});break;default:this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"});
break}},callback:{onShow:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)
},onClose:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)}}}})(jQuery);;

/* _bottom.js - CACHE HIT */

(function(a){a.noty.layouts.bottom={name:"bottom",options:{},container:{object:'<ul id="noty_bottom_layout_container" />',selector:"ul#noty_bottom_layout_container",style:function(){a(this).css({bottom:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})
}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}
})(jQuery);;

/* _center.js - CACHE HIT */

(function(a){a.noty.layouts.center={name:"center",options:{},container:{object:'<ul id="noty_center_layout_container" />',selector:"ul#noty_center_layout_container",style:function(){a(this).css({position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:10000000});
var c=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");
a("body").append(c);c.find(".i-am-closing-now").remove();c.find("li").css("display","block");
var b=c.height();c.remove();if(a(this).hasClass("i-am-new")){a(this).css({left:(a(window).width()-a(this).outerWidth(false))/2+"px",top:(a(window).height()-b)/2+"px"})
}else{a(this).animate({left:(a(window).width()-a(this).outerWidth(false))/2+"px",top:(a(window).height()-b)/2+"px"},500)
}}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}
})(jQuery);;

/* _inline.js - CACHE HIT */

(function(a){a.noty.layouts.inline={name:"inline",options:{},container:{object:'<ul id="noty_inline_layout_container" />',selector:"ul#noty_inline_layout_container",style:function(){a(this).css({zIndex:9999999})
}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}
})(jQuery);;

/* _top.js - CACHE HIT */

(function(a){a.noty.layouts.top={name:"top",options:{},container:{object:'<ul id="noty_top_layout_container" />',selector:"ul#noty_top_layout_container",style:function(){a(this).css({top:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})
}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}
})(jQuery);;

