﻿
/************************  Fix Pie for IE  *************************/

outsystems.internal.$(document).ready(function() {
    if (outsystems.internal.$.browser.msie) {
        // Classify IEs for the sake of CSS
        outsystems.internal.$('html').addClass('ie' + parseInt(outsystems.internal.$.browser.version));
        // Fix css3pie margin issues in IE7
        if (outsystems.internal.$.browser.version < 8) {
            // Force redraw
            document.body.style.margin = "1px";
            setTimeout('document.body.style.margin = "0px";', 13); /* 'Magic' value to force IE7 to run this later... */
        }
    }
});


/***************************  Utils  ****************************/

function unescapeHTML(html) {
  return html.replace(/&amp;/g, '&'); 
}

function copyToClip(copyText) {
  try {
    // IE send-to-clipboard method
    if (window.clipboardData) {
      window.clipboardData.setData('Text', copyText);
    } else {
      return false;
    }
    return true;
  } catch(exception) {
    return false;
  }
}

function belongsToClass(elem,className) {
 var classArray = elem.className.split(" ");
 for(var i = 0; i < classArray.length; i++)
  if(classArray[i]==className) return true;
 return false;
}

function setOpacity(id, decimalOpacity) {
  var elem = document.getElementById(id);
  if(null != elem) {
    // IE must have element layed out. Zoom set will do this...
    try {
      elem.style.zoom = 1.0;
      elem.style.filter = 'alpha(opacity=' + decimalOpacity * 100 + ')';
    } catch(err) {}
    // CSS 3, Moz, NN, FF, gecko, Konqueror, Safari
    try {
    elem.style.KhtmlOpacity = elem.style.MozOpacity = elem.style.opacity = decimalOpacity;
    } catch(err) {}
  }
}

/***************************  AJAX - XmlHttpRequest  ****************************/

function getHTTPObject(){
  var A=null;
  
  if(!A&&typeof XMLHttpRequest!="undefined"){
    A=new XMLHttpRequest()
  }
  return A
}

/***************************  Row Highlighting  ****************************/

//The prefix from our current weblock (by default we are NOT on a webblock)
var webBlockPrefix = "";

function getTableFromCheckbox(checkbox) {
//Get the checkbox parent node (probably the cell)
 var par = checkbox.parentNode;
 while(par != null) {
  if(par.tagName == "TABLE") {  //Is this the table row?
   return par;
  }
  else par = par.parentNode;
 }
}

function toggleEnabledElements(elems,checkbox) {
  if(elems == null) {
   return;
  }
  var table;
  var checkboxesSelected = 0;
  
  if(checkbox){
    table = getTableFromCheckbox(checkbox);
    checkboxesSelected = getNumberSelectedBoxes(table);
  }
  
  var i; 
  for (i = 0; i < elems.length; i++) {
    var elem = document.querySelector("[id$='"+elems[i]+"']");
    if( elem != null ) {
        elem.disabled = (checkboxesSelected == 0);
        if (elem.tagName == "SELECT") {
           var choices = elem.closest('.choices');
           if (elem.disabled) {
                choices.classList.add('choices-disabled');
            }
            else {
                choices.classList.remove('choices-disabled');
            }
        }   
    }
  }
}

function getNumberSelectedBoxes(table) {
 var nSelectedBoxes = 0;
 var inputs = table.getElementsByTagName("input");
 for(var i = 0; i < inputs.length ; i++) {
  var input = inputs[i];

  if(input.type == "checkbox" && input.checked ==  true) {
   nSelectedBoxes++;      
  }
 }
 return nSelectedBoxes;
}
             
function highlightAllRowsContaining(elems,tableId, string) {
 var table = document.getElementById(tableId);
  if(table == null) {
  return;
 }
 rows = table.rows;
 for(i = 0; i < rows.length; i++) {
  node = rows[i];
  contains = (rows[i].innerHTML.indexOf(string) != -1);
  var row = rows[i];
  inputs = row.getElementsByTagName("input");
  for(var j = 0; j < inputs.length ; j++) {
   var input = inputs[j];
   //If it is a checkbox, (un)check it and highlight
   if(input.type == "checkbox" && input.disabled == false) {
    input.checked = contains;
    highlightRow(elems,i-1, input);
   }
  }
 }
}

function highlightAllRows(elems,tableId, check) {
 var table = document.getElementById(tableId);
 if(table == null) {
  return;
 }
 var inputs = table.getElementsByTagName("input");
 var checkCount = 0;
 for(var i = 0; i < inputs.length ; i++) {
  var input = inputs[i];
  // If it is a checkbox, (un)check it and highlight
  if(input.type == "checkbox" && input.checked != null && input.disabled == false) {
   input.checked = check;
   highlightRow(elems,checkCount++, input);
   
  }
 }
}

function highlightRow(elems,rowIndex, checkbox) {
    
 // Get the checkbox parent node (probably the cell)
    var par = checkbox.parentNode;
    var selected = checkbox.checked;
    while(par != null) {
        if(par.tagName == "TR") {  // Is this the table row?
            var childNodes = par.querySelectorAll("td");
            var i = 0;
            for(i = 0; i < childNodes.length; i++) {
                if (selected){
                    childNodes[i].classList.add("row-selected");
                }
                else {
                    childNodes[i].classList.remove("row-selected");
                }
            }
            par = null;
        } else {
            par = par.parentNode;
        }
    }
    toggleEnabledElements(elems,checkbox);
}

/***************************  Expand & Collapse  ****************************/

// Display the expand / collapse images
function filter(imagename,objectsrc){
 if (document.images){
  document.images[imagename].src=eval(objectsrc+".src");
 }
}

function hide(id) {
 document.getElementById(id).style.display = 'none'; 
}

// show OR hide funtion depends on if element is shown or hidden
function showHide(id) { 
 if (document.getElementById) { // DOM3 = IE5, NS6
  if (document.getElementById(id).style.display == "none"){
   document.getElementById(id).style.display = 'block';
   // filter(("img"+id),'imgin');   
  } else {
   // filter(("img"+id),'imgout');
   document.getElementById(id).style.display = 'none';   
  } 
 } else { 
  if (document.layers) { 
   if (document.id.display == "none"){
    document.id.display = 'block';
    // filter(("img"+id),'imgin');
   } else {
    // filter(("img"+id),'imgout'); 
    document.id.display = 'none';
   }
  } else {
   if (document.all.id.style.visibility == "none"){
    document.all.id.style.display = 'block';
   } else {
    // filter(("img"+id),'imgout');
    document.all.id.style.display = 'none';
   }
  }
 }
}

/***************************  Test Tenant  ****************************/

function TestTenant(url) {
  newwin = window.open(url,'TestTenant');
  newwin.focus();
}

/***************************  Open Generic Window ****************************/

function OpenExternalWindow(url, name) {
  newwin = window.open(url, name);
  newwin.focus();
}

/***************************  Client Side Tabs Start  ****************************/

// Please Keep in mind this scripts only allows one Tab Set per page 


var tabs = new Array(); 

// Loads the tabs array based on the string t with the following format:
// <TabToken1>,<DivName1>,<TabLabel1>;<TabToken2>,<DivName2>,<TabLabel2>; ...

function LoadTab(conf) {
  tabs_tmp = conf.split(';');
  for (i=0;i<tabs_tmp.length;i++) {
    var tmp_array = new Array();
    tab_tmp = tabs_tmp[i].split(',');    
    tmp_array[0] = tab_tmp[0];
    tmp_array[1] = tab_tmp[1];
    tmp_array[2] = tab_tmp[2];    
    tabs[i] = tmp_array;    
  }  
}

function ToggleTab(token) { 
  // Search for the token
  tokenIndex = -1;
  for (j=0;j<tabs.length;j++) {
    if (tabs[j][0]==token) {
      tokenIndex = j;
      break;
    } 
  }
  if (tokenIndex>=0) {
    for (i=0;i<tabs.length;i++) {
      document.getElementById('TabLink'+tabs[i][0]).className = 'Tab_TextOff';
      document.getElementById('TabLink'+tabs[i][0]).parentNode.className = 'Tab_Off';
      document.getElementById(tabs[i][1]).style.display = 'none';
    }
    document.getElementById('TabLink' + token).className = 'Tab_TextOn';
    document.getElementById('TabLink' + token).parentNode.className = 'Tab_On';
    document.getElementById('wtInputTab').value = token;
    document.getElementById(tabs[tokenIndex][1]).style.display = 'block';
  } 
}

function RenderTab() {
  html = '<table cellspacing=0 cellpadding=0 border=0 width=100%><tr>';
  for (i=0;i<tabs.length;i++) {
    html += '<td><a id="TabLink' + tabs[i][0] + '" href="javascript:void(0);" onclick="ToggleTab(\'' + tabs[i][0] + '\')">' + tabs[i][2] + '</a></td>';
  }
  html += '<td width="100%" class="Tab_End">&nbsp;</td></tr></table>';
  document.getElementById('TabZone').innerHTML = html;
}