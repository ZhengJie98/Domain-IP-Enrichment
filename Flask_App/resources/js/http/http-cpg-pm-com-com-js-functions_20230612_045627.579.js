function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

var getWindowHeight = function(){
  var innerHeight;
  if (navigator.appVersion.indexOf('MSIE')>0) {
    innerHeight = document.body.clientHeight;
  } else {
    innerHeight = window.innerHeight;
  }
  return innerHeight;
}

var getWindowWidth = function(){
  var innerWidth;
  if (navigator.appVersion.indexOf('MSIE')>0) {
    innerWidth = document.body.clientWidth;
  } else {
    innerWidth = window.innerWidth;
  }
  return innerWidth;
}

function __textarea_insert(name, value){
	var field = document.getElementById(name);
	// IE support
	if (document.selection) {
		field.focus();
		sel = document.selection.createRange();
		sel.text = value;
	}
	//MOZILLA/NETSCAPE support
	else 
		if (field.selectionStart || field.selectionStart == 0) {
			var startPos = field.selectionStart;
			var endPos = field.selectionEnd;
			field.value = field.value.substring(0, startPos) + value + field.value.substring(endPos, field.value.length);
		}
		else {
			field.value += value;
		}
}

function popup_show(id) {
  var win_w = getWindowWidth()
  var win_h = getWindowHeight()

//  var dimensions = Element.getDimensions($(id))
  //alert(dimensions.width + " " + dimensions.height)
  //alert(win_w + " " + win_h)
  $(id).addClassName("popup").show()

  var dimensions = Element.getDimensions($(id))
  var x = (win_w - dimensions.width)/2
  var y = 160
  //var y = (win_w - dimensions.heig)/2
  Element.setStyle($(id), {
	 								  top:y + "px",
	 								  left:x + "px",
                    padding: 10 + "px"
	 								});
}

function popup_hide(id) {
  $(id).removeClassName("popup").hide()
}

function watch_scroll() {
  if($('sms_popup')) {
    var page_scroll = document.viewport.getScrollOffsets();

    Element.setStyle($('sms_popup'), {
                  top: 160 + page_scroll.top + "px"
                });
  }
}

var placeholder_source = null;
var pos = null;
var subject = null;

function show_popup_box(id, data, callback) {
  if($('overlay')) {
    $('overlay').show();
  }

  placeholder_source = $(data.source).up("a");
  pos = data.pos;
  subject = data.subject;

  var popup_html = TrimPath.processDOMTemplate("popup_template", data);
  var page_scroll = document.viewport.getScrollOffsets();

  $(document.body).insert({'bottom': popup_html});
  Element.setStyle($('sms_popup'), {
                  top: 160 + page_scroll.top + "px"
                });
  initTooltips();
  //periodical_executer = new PeriodicalExecuter(watch_scroll, 0.3);
  document.observe("scroll", watch_scroll);

  return false;
}

function popupClose(source) {
  if($('overlay')) {
    $('overlay').hide();
  }

  document.stopObserving("scroll", watch_scroll);
  $(source).up('#sms_popup').remove();

  return false;
}

function saveTruncation(source) {
  var context = $(source).up('#sms_popup');
  context.select("input[type='radio']").each(function(elm) {
    if(elm.checked) {
      var id = context.select('#variable')[0].value;
      var placeholder = '';
      switch(elm.value) {
        case 'none':
          placeholder = "%" + id + "%";
          break;

        case 'cut':
          var length = trim($('cut_length').value)
          placeholder = "%" + id + ":" + length + "%";
          break;

        case 'cut_append':
          var length = trim($('cut_append_length').value);
          var postfix = trim($('cut_append_postfix').value);
          placeholder = "%" + id + ":" + length + ":" + postfix + "%";
          break;

        case 'remove':
          placeholder = "%" + id + ":DELETE%";
          break;
      }

      //__textarea_insert("message", placeholder);
      //input_insert(placeholder_source, "message", placeholder, update_length);
      do_insert(pos, subject, placeholder);
      update_length();
    }
  });

  return popupClose(source);
}