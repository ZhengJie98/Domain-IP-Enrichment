// JavaScript Document
/** 取得物件 */
function MM_findObj(n, d) //v4.01
{ 
	var p,i,x;  
	if(!d) 
		d=document; 
	if((p=n.indexOf("?"))>0&&parent.frames.length) 
	{
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
	}
		if(!(x=d[n])&&d.all) x=d.all[n]; 
		for (i=0;!x&&i<d.forms.length;i++) 
		{
			x=d.forms[i][n];
		}
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
		{
			x=MM_findObj(n,d.layers[i].document);
		}
		if(!x && d.getElementById) x=d.getElementById(n); 
			return x;
}
/** 取得物件結束 */
/** 預先載入圖片 **/
function MM_preloadImages() //v3.0
{ 
	var d=document; if(d.images)
	{ 
		if(!d.MM_p) d.MM_p=new Array();
    	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; 
		for(i=0; i<a.length; i++)
		{
    		if (a[i].indexOf("#")!=0)
			{ 
				d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];
			}
		}
	}
}
/** 預先載入圖片結束 **/
/** 回復成原圖 **/
function MM_swapImgRestore() //v3.0
{ 
  	var i,x,a=document.MM_sr; 
  	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)
		x.src=x.oSrc;
}
/** 回復成原圖結束 **/
/** 換圖 */
function MM_swapImage() //v3.0
{ 
	var i,j=0,x,a=MM_swapImage.arguments; 
	document.MM_sr=new Array; 
	for(i=0;i<(a.length-2);i+=3)
	{
		if ((x=MM_findObj(a[i]))!=null)
		{
			document.MM_sr[j++]=x; 
			if(!x.oSrc) 
				x.oSrc=x.src; 
				x.src=a[i+2];
		}
	}
   	
}
/** 換圖 */
//**  轉向換頁 **/
function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

/** 顯示確認訊息並轉向 */
function global_confirm_tourl(msg, url)
{
	$("#dialog-confirm .dialog-confirm-msg").html(msg);
	
	//刪除原dialog
	//$("#dialog-confirm").dialog('destroy');
	//建立新的dialog
	$("#dialog-confirm").dialog({
		bgiframe: true,
		autoOpen: false,//是否自動出現
		modal: true,//是否遮蓋背景
		buttons: {
			'確定': function() {
				location.replace(url);
			},
			'取消': function() {
				$(this).dialog('close');
			}
		}
	});
	
	$('#dialog-confirm').dialog('open');
}
/** 顯示確認訊息並轉向結束 */

/** 顯示確認訊息 */
function global_alert(msg)
{
	$("#dialog-alert .dialog-alert-msg").html(msg);
	//刪除原dialog
	//$("#dialog-alert").dialog( "destroy" );
	//建立新的dialog
	$("#dialog-alert").dialog({
		bgiframe: true,
		autoOpen: false,//是否自動出現
		modal: true,//是否遮蓋背景
		buttons: {
			'確定': function() {
				$(this).dialog('close');
			}
		}
	});
	$('#dialog-alert').dialog('open');
}
/** 顯示確認訊息結束 */

/** 顯示載入圖示 */
function global_show_loading(elId, loadimg)
{
	var el = document.getElementById(elId);
	el.innerHTML = "<img src='" + loadimg + "'>";
}
/** 顯示載入圖示結束 */

/** 物件Display控制 */
function global_display_ctrl()
{
	var arrArg = global_display_ctrl.arguments; 
	
	if (arrArg[0]!='')
	{
		var elBlock = document.getElementById(arrArg[0]);
		elBlock.style.display = "block";
	}
	
	var elNone = '';
	
	for(i=1;i<(arrArg.length);i++)
	{
		elNone = document.getElementById(arrArg[i]);
		elNone.style.display = "none";
	}
}
/** 物件Display控制結束 */

/** 變換圖片，可設定寬高 */
function global_swap_image(el, src, width, height)
{ 
	var obj = document.getElementById(el);

	obj.width = width;
	obj.height = height;
	obj.src = src;
   	
}
/** 變換圖片，可設定寬高結束 */

/** 改變物件class */
function global_class_change(obj, className)
{
   	obj.className = className;
}
/** 改變物件class結束 */

/** 改變action */
function global_change_action(formname, theaction)
{
	document.getElementById(formname).action = theaction ;

}
/** 改變action結束 */
function br2nl(text) 
{    
	return text.replace(/<BR\s*\/?>/mg,"\n");
}
function nl2br(str, is_xhtml) 
{
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Philip Peterson
    // +   improved by: Onno Marsman
    // +   improved by: Atli Þór
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: nl2br('Kevin\nvan\nZonneveld');
    // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
    // *     example 2: nl2br("\nOne\nTwo\n\nThree\n", false);
    // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
    // *     example 3: nl2br("\nOne\nTwo\n\nThree\n", true);
    // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
 
    var breakTag = '';
 
    breakTag = '<br />';
    if (typeof is_xhtml != 'undefined' && !is_xhtml) {
        breakTag = '<br>';
    }
 
    return (str + '').replace(/([^>]?)\n/g, '$1'+ breakTag +'\n');
}
