/** this code is copyright (C) 2006-2042 by PCInfo-Web.com. If you want to reuse it, please ask us at : contact (AT) pcinfo-web (DOT) com */


function txt_height(a, b) {
	if(a == 'moins') {
		height = Math.floor(Math.floor($(b).getHeight())-20)+"px";
	}
	else {
		height = Math.floor(Math.floor($(b).getHeight())+20)+"px";
	}
	$(b).setStyle({
		height: height
	});
};

// console.log() wrapper for non compatible browsers
function logconsole (val) {
	if (console && console.log) {
		console.log(val)
	};
}

// console.error() wrapper for non compatible browsers
function errconsole (val) {
	if (console && console.error) {
		console.error(val)
	};
}

function disp_or_not(element, width) {
	if(screen.width <= width) {
		element.style.display = "none";
	}
	else {
		element.style.display = "block";
	}
}

function goto(url, timeout) {
	if(typeof(timeout) != 'undefined') {
		setTimeout('location.href="'+url+'";', timeout);
	}
	else {
		location.href = url;
	}
}

function GetValueFromIndex(select) {
	var id = select.selectedIndex;
	var value = select.options[id].value;
	return value;
}

function opacity(id, opacStart, opacEnd, millisec) {
	/* speed for each frame */
	var speed = Math.round(millisec / 100);
	var timer = 0;
	if(opacStart > opacEnd) {
		for(i = opacStart; i >= opacEnd; i--) {
			setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
			timer++;
		}
	}
	else if(opacStart < opacEnd) {
		for(i = opacStart; i <= opacEnd; i++) {
			setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
			timer++;
		}
	}
}

function changeOpac(opacity, id) {
	var object = document.getElementById(id).style;
	object.opacity = (opacity / 100);
	object.MozOpacity = (opacity / 100);
	object.KhtmlOpacity = (opacity / 100);
	object.filter = "alpha(opacity=" + opacity + ")";
}

function addfavourites() {
	var ptitle = document.getElementsByTagName("title")[0].innerHTML;

	if ( navigator.appName != 'Microsoft Internet Explorer' ){ 

		window.sidebar.addPanel(ptitle,location.href,''); 
	} 

	else { 

		window.external.AddFavorite(location.href,ptitle);
	}

}

function gogole_display(opt) {
 

	var valeur = location.hash;
	/* window.alert(valeur); */
	if(opt == 1) {
		if((valeur.search(/p[0-9]+/) != -1) || (valeur.search(/viewtopic\.php\?p=[0-9]+/) != -1)) {

		}

		else {
			var bloc = document.getElementById("Gogole_ad");
			google_ad_client = "pub-1532782001250342"; 
			google_ad_width = 120;
			google_ad_height = 240;
			google_ad_format = "120x240_as";
			google_ad_type = "text"; 
			google_ad_channel = "2603143219";
			google_color_border = "FFFFFF"; 
			google_color_bg = "FFFFFF"; 
			google_color_link = "1D8CC2"; 
			google_color_text = "6f6f6f"; 
			google_color_url = "FF9900"; 
			var texte = '<center></sc'+'ript><scri'+'pt type="text/java'+'script" src="http://pagead2.googlesy'+'ndication.com/pagead/show_ads.js"></scr'+'ipt></center><br />';

			document.write(texte);
		}
	}

	else if(opt == 2) {
		if((valeur.search(/p[0-9]+/) != -1) || (valeur.search(/viewtopic\.php\?p=[0-9]+/) != -1)) {

			google_ad_client = "pub-1532782001250342";
			google_ad_width = 468;
			google_ad_height = 60;
			google_ad_format = "468x60_as";
			google_ad_type = "text";

			google_ad_channel = "2603143219";
			google_color_border = "FFFFFF";
			google_color_bg = "FFFFFF";
			google_color_link = "1D8CC2";
			google_color_text = "6F6F6F";
			google_color_url = "FF9900";


			var texte = '<scri'+'pt type="text/java'+'script" src="http://pagead2.googlesy'+'ndication.com/pagead/show_ads.js"></scr'+'ipt>';

			document.write(texte);


		}

	}






}


function add_del_page() {
	if(window.confirm("Toutes les modifications en cours seront perdues, voulez-vous vraiment continuer ?")) {
		return true;
	}
	else {
		return false;
	}


}

/*  FOnction pour changer l'attribut "action" d'un formulaire (ex : preview) */
function changeaction(formulaire, valeur) {
	document.forms[formulaire].action = valeur; 
}

window.onload=montre;
function montre(id) {
	var d = document.getElementById(id);
	for (var i = 1; i<=10; i++) {
		if (document.getElementById('smenu'+i)) {
			document.getElementById('smenu'+i).style.display='none';
		}
	}
	if (d) {
		d.style.display='block';
	}
}

function show_menu_dl(bool) {
	if(bool) {
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.search(/MSIE\ 7\.0/) != -1 && screen.width > 800) {
			document.getElementById('smenu_dl').style.visibility = 'visible';
		}
		else {
			montre('smenu4');
		}
		
	}
	else {
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.search(/MSIE\ 7\.0/) != -1 && screen.width > 800) {
			document.getElementById('smenu_dl').style.visibility = 'hidden';
		}
		else {
			montre('');
		}
	}
}

function show_menu_ressources(bool) {
	if(bool) {
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.search(/MSIE\ 7\.0/) != -1 && screen.width > 800) {
			document.getElementById('smenu_res').style.visibility = 'visible';
		}
		else {
			montre('smenu3');
		}
		
	}
	else {
		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.search(/MSIE\ 7\.0/) != -1 && screen.width > 800) {
			document.getElementById('smenu_res').style.visibility = 'hidden';
		}
		else {
			montre('');
		}
	}
}

function showmailbox()
{
	var objet=document.getElementById('mailbox');
	objet.style.display="block";		
}		

/* &&&&&&&& NOTE : /!\ Ne pas utiliser de noms numriques pours les champs utiliss avec les deux fonctions suivantes &&&&&& */
/* fonction de vrification du formulaire */
function checkform(f, except_arr, tinyMCE_isupdated, badtags_opt) {
	var errortext = "";
	var checkedgroups = "";
	var checkedgroupsbox = "";

	if(typeof(tinyMCE) != "undefined" && (typeof(tinyMCE_isupdated) == "undefined" || !tinyMCE_isupdated)) { /*  Si tinyMCE est activ il faut d'abord mettre  jour les textareas avant de rcuprer leurs donnes  */
		upd_mce_badtags(f, badtags_opt);
	}

	for(var i=0; i<f.elements.length; i++) {
		var element = f.elements[i];
		var forbidden = false;
		if(except_arr) {
			for(var h=0;h<except_arr.length; h++) {
				if(except_arr[h] == element.name) {
					forbidden = true;
				}
			}
		}
		if(forbidden) {
			continue;
		}
		else {
			switch(element.type) {
				case "text":
				case "textarea":
				case "password":
					if (element.value.replace(/\s/g, "") == "" && element.disabled != "disabled") {
						errortext +=element.name + "\n";
					}
	
					break;
		
				case "checkbox":
					if(!element.checked) {
						var namebox = "" + element.name;
				
						var groupbox = f.elements[namebox];
						if(checkedgroupsbox.indexOf("[" + element.name + "]") > -1) {
							continue;
						}
						else {
							checkedgroupsbox += "[" + element.name + "]";
						}
						var groupokbox = false;
						for (var y=0; y < groupbox.length; y++) {
							if (groupbox[y].checked) {
								groupokbox = true;
							}
						}
						if(!groupokbox) {
							errortext += element.name + "\n";
						}
					}
					break;
		
				case "radio":
					var nameradio = "" + element.name;
			
					var group = f.elements[nameradio];
					if(checkedgroups.indexOf("[" + element.name + "]") > -1) {
						continue;
					}
					else {
						checkedgroups += "[" + element.name + "]";
					}
					var groupok = false;
					for (var y=0; y < group.length; y++) {
						if (group[y].checked) {
							groupok = true;
						}
					}
					if(!groupok) {
						errortext += element.name + "\n";
					}
					break;
			
				case "select-one":
				case "select-multiple":
					var selectok = false;
					for (var z=0; z<element.options.length; z++) {
						var item = element.options[z];
						if (item.selected && item.value != "") {
							selectok = true;
						}
					}
					if (!selectok) {
						errortext += element.name + "\n";
					}
					break;
		
				default:
					break;
		
			}
		}
	
	} /*  fermeture de la boucle de lecture de f.elements[] */

	if(errortext == "") {
		return true;
	}
	else {
		window.alert("Les champs obligatoires suivants n'ont pas t remplis \n \n" 
			+ errortext);
		return false;
	}

} /*  fin de la fonction */

/* fonction de creation d'objet de type XMLHttpRequest() */
function GetHttpRequest() {
	var http = null;

 
	if (window.XMLHttpRequest)
	{
		http = new XMLHttpRequest();
		if (http.overrideMimeType) 
		{
			http.overrideMimeType('text/xml');
		}
	} 
	else if (window.ActiveXObject) 
	{
		try {
			http = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e)
{
			try {
				http = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	return http;
/*  fin de la fonction */
}


/* Preview : */
function preview(field) {
	if(field.value) {
		var value = field.value;/* .replace(/\+/g, '\%2B'); */
		var data = "texte="+encodeURIComponent(value);
		var http = null;
		if (window.XMLHttpRequest)
		{
			http = new XMLHttpRequest();

		} 
		else if (window.ActiveXObject) 
		{
			try {
				http = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e)
{
				try {
					http = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {}
			}
		}
		var f = field.form;

		var loadNodePrev = document.createElement("p");
		loadNodePrev.innerHTML = "<img src='http://www.pcinfo-web.com/style/loading.gif' alt='loading' />";
		loadNodePrev.style.position = "fixed";
		loadNodePrev.style.bottom = "0px";
		loadNodePrev.style.right = "0px";
		loadNodePrev.style.backgroundColor = "red";
		loadNodePrev.style.fontWeight = "bold";
		loadNodePrev.style.color = "white";	
		loadNodePrev.setAttribute("id", "loadNodePrev");
		document.body.appendChild(loadNodePrev);
	
		http.onreadystatechange = function() {
			if(http.readyState == 4) {
				if(http.status == 200) {
					loadNodePrev.innerHTML = "Effectu&eacute;";
				
					window.setTimeout("document.getElementById('loadNodePrev').parentNode.removeChild(document.getElementById('loadNodePrev'));", 3000);
					if(document.getElementById("preview_box_"+field.name)) {
						document.getElementById("preview_box_"+field.name).innerHTML = "<p id='preview_title'>Pr&eacute;visualisation : </p>" + http.responseText;
					}
					else {
						var PreviewNode = document.createElement("div");
						PreviewNode.setAttribute("style", "background-color:gray; border:1px solid black;");
						PreviewNode.setAttribute("id", "preview_box_"+field.name);
						PreviewNode.innerHTML = "<p id='preview_title'>Pr&eacute;visualisation : </p>" + http.responseText;
						var nodepos = document.getElementById(field.name);
						nodepos.parentNode.insertBefore(PreviewNode, nodepos);
					}

				}
			
				else {
					var ErrorNode = document.createElement("div");
					ErrorNode.innerHTML = "<b><span style='font-color:red;' >Erreur : "+http.statusText+"</span></b>";
					document.body.replaceChild(ErrorNode, document.getElementById("loadNodePrev"));
				}
			
			}
	
		};
	
		http.open("POST", "/ajax.php?func=preview", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(data);
	
		return true;
	}
	else {

		alert("Vous devez taper un texte");
		return false;
	
	}

}


function convertUrl(string) {
	return encodeURIComponent(string);/* .replace(/\+/g, '%2B').replace("", "%80")); */
}

function upd_mce_badtags(f, badtags_opt) {
	for(var ij=0;ij<f.elements.length;ij++) {
		var elem = f.elements[ij];
		if(elem.type == 'textarea') {
			/* tinyMCE.execCommand('mceToggleEditor',false,elem.id); */
			if(typeof(tinyMCE) != "undefined" && typeof(tinyMCE.get(elem.id)) != "undefined") { /*  Si tinyMCE est activ sur le champs que l'on doit corriger, on force d'abord la sauvegarde du contenu de tinyMCE dans le champ avant de corriger */
				tinyMCE.get(elem.id).save();
			}
			if(typeof(badtags_opt) != "undefined" && badtags_opt && badtags_opt.active) {
				var stop = true;
				for(var ghj = 0; ghj < badtags_opt.fields.length; ghj++) {
					if(badtags_opt.fields[ghj] == elem.id) {
						var stop = false;
					}
				}
				if(!stop) { /*  Si le champ est bien un champ qu'il faut vrifier : */
					badtags(elem, true, false, false);
				}
			}
			if(typeof(tinyMCE) != "undefined" && typeof(tinyMCE.get(elem.id)) != "undefined") {/*  Si tinyMCE est activ sur le champs que l'on doit corriger, on recharge ensuite le contenu maintenant corrig  */
				tinyMCE.get(elem.id).load();
			}
		/* tinyMCE.execCommand('mceToggleEditor',false,elem.id); */
		}
	}
}

function PCWSerializeForm(f) {
	/* alert('PCWSerializeFOrm is running'); */
	var values = "";
	var registered = "";
	var registered_box = "";


	for(var i=0; i<f.elements.length; i++) {
		var element = f.elements[i];
		switch(element.type)
		{
			case "text":
			case "hidden":
			case "textarea":
			case "password":
				values += "&" + escape(element.name) + "=" + convertUrl(element.value);
				/* alert(element.value); */
				/* alert(convertUrl(element.value)); */
				break;

			case "checkbox":
				var namebox = "" + element.name;
				var length = f.elements[namebox].length;
				if(length > 1) {
					if(registered_box.indexOf(element.name) != -1) {
						continue;
					}
					else {
						if(element.checked) {
							registered_box += escape(element.name) + "&";
							values += "&" + escape(element.name) + "=" + convertUrl(element.value);
						}
					}
				}
				else {
					if(element.checked) {
						values += "&" + escape(element.name) + "=" + convertUrl(element.value);
					}
				}
				break;

			case "select-one":
				for(var j=0; j<element.options.length; j++) {
					var item = element.options[j];

					if(item.selected) {
						values += "&" + escape(element.name) + "=" +convertUrl(element.value);
					}
				}
				break;

			case "radio":
				if(registered.indexOf(element.name) != -1) {
					continue;
				}
				else {
					if(element.checked) {
						registered += escape(element.name) + "&";
						values += "&" + escape(element.name) + "=" + convertUrl(element.value);
					}
				}
				break;

		}
	}
	/* fin de l'enregistrement des donnes */

	values = values.substr(1);
	return values;
}
/* fonction d'envoi de formulaires en ajax */
/* @param f : formulaire
 * @param cible : fichier a excuter
 * @param verif : excution ou non de checkform() avant d'envoyer (et nenvoit pas en cas d'chec de vrification)
 * @param disable : dsactivation des champs du fomulaire une fois celui-ci envoy sans erreur
 * @param tinyMCE_isupdated : si true alors les champs tinyMCE sont considrs comme mis  jour et sendajax() n'y touche pas. Si false alors sendajax() mettra les textareas a jour  l'aide du paramtre suivant
 * @param OBJECT badtags_opt : objet dfinissant si on doit ou non corriger les balises et celles de quels champs on doit corriger (attributs active et fields)
 * @param myfunction : fonction excute aprs dsactivation ou non du formulaire, une fois la requte excute, le XMLDOC est automatiquement pass en 1er paramtre  myfunction(), et la prsence ou non d'erreur (true = erreur, false = pas d'erreur) est passe en deuxime argument
 * @param myfctn_arg : argument passed to myfunction in last argument /!\ To pass plural arguments use {arg1: xxx, arg2: xxx} and make the function using as this !!! WARNING !!!! BEWARE THAT THIS ARGUMENT WILL BE THE  FOURTH  ARGUMENT !!!!!!
 * @param synchrone : force the request to be asynchronous OR NOT
 */

function sendajax(f, cible, processus, verif, disable, tinyMCE_isupdated, badtags_opt, myfunction, myfctn_arg, asynchrone) {
	if((typeof(tinyMCE) != "undefined" && (typeof(tinyMCE_isupdated) == "undefined" || !tinyMCE_isupdated)) || typeof(badtags_opt) != "undefined") { /*  Si tinyMCE est activ il faut d'abord mettre  jour les textareas avant de rcuprer leurs donnes  */
		if(typeof(badtags_opt) != 'undefined') {
			upd_mce_badtags(f, badtags_opt);
		}
		else {
			upd_mce_badtags(f);
		}
	}
	if(verif) {
		if(!checkform(f, null, true)) {
			return false;
		}
	}
	if(typeof(asynchrone) == 'undefined') {
		var asynchrone=true;
	}

	var values = PCWSerializeForm(f);
	/* f.elements.disabled = true; */

	var loadNode = document.createElement("div");
	loadNode.setAttribute("id", "loadNode");
	/* loadNode.style.position = "fixed";
loadNode.style.bottom = "0px";
loadNode.style.right = "0px";*/
	loadNode.style.backgroundColor = "transparent";
	loadNode.style.fontWeight = "bold";
	loadNode.style.color = "red";

	loadNode.innerHTML = "<img src='http://www.pcinfo-web.com/style/loading.gif' title='loading' alt='loading' />";
	if(f.elements['submit'] && f.elements['submit'].parentNode && f.elements['submit'].parentNode.appendChild(loadNode)) {
	
	}
	else {
		f.appendChild(loadNode);
	}

	var http = GetHttpRequest();
	/* window.alert('http enclench'); */

	http.onreadystatechange = function()
	{
		if(http.readyState == 4)
		{
			if(http.status == 200)
			{
				var xmldoc = http.responseXML;
					
				var ErrNode = xmldoc.getElementsByTagName("error");
				if(ErrNode != null && ErrNode[0] != null) {
					ErrNode = ErrNode[0].firstChild;
				}
				else if (ErrNode != null) 						{
					ErrNode = ErrNode.firstChild;
				}
				if(ErrNode != null && ErrNode != false && (ErrNode.data == 0 || ErrNode.data == "0")) {
					var is_error = false;
				}
				else {
					var is_error = true;
				}
					
				if(disable && !is_error) {
					for (var xy=0;xy<f.elements.length; xy++) {
						f.elements[xy].disabled = true;
					}
				}
					
				if(typeof(myfunction) == "undefined" || !myfunction) {
					if(xmldoc) {
						/*  Note : on met une condition des fois que loadNode ait t supprim par un programme tiers */
						if(typeof(loadNode) != "undefined") loadNode.innerHTML = xmldoc.getElementsByTagName("message")[0].firstChild.data;
						if(typeof(xmldoc.getElementsByTagName("hideafter")[0].firstChild.data) != "undefined" && xmldoc.getElementsByTagName("hideafter")[0].firstChild.data == "no") {
						}
						else {
							window.setTimeout("document.getElementById('loadNode').parentNode.removeChild(document.getElementById('loadNode'));", 4000);
						}
					}
				}
				else {
					myfunction(xmldoc, http.responseText, is_error, myfctn_arg);
				}
			}	
			else	
			{
				loadNode.innerHTML = "<span style='color:red;' ><strong>Erreur </strong>: <i>" + http.statusText + "</i>";	
			}	
					
		} 
	}; 


	if(processus == "GET" || processus == "get") {
		var cible_get = (cible.search(/\.php\?/) != -1) ? String(cible + "&" + values) : String(cible + "?" + values);

		http.open("GET", cible_get, asynchrone);
	}
	else if(processus == "POST" || processus == "post") {
		http.open("POST", cible, asynchrone);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	/* window.alert('POST enclenchee'); */
	}
	else {
		window.alert('No method found');
	}
	var send = (processus == "POST" || processus == "post") ? values : null;
	/* alert("Message de maintenance : \n"+send); */
	http.send(send);
	return true;
}

/* fonction de dtection de prsence... ou non, de MP ( en fonction de la valeur de {PRIVATE_MESSAGE_INFO} ) */
function detectMP() {
	var valeur = "{PRIVATE_MESSAGE_INFO}";
	var find = valeur.search(/Vous avez/);
	if(find != -1) {
		var nombre = valeur.search(/[0-9]/);
		var chiffre = valeur.substr(nombre, 2);
		if(chiffre > 1) {
			document.write('<strong>Vous avez '+chiffre+' nouveaux messages</strong>');
		}
		else {
			document.write('<strong>Vous avez 1 nouveau message</strong>');
		} 
	}
	else {
		document.write('Vous n\'avez aucun nouveau message');
	}
}

/*  Fonction pour la pop up du chat IRC */
function pop_it(the_form) {
	my_form = eval(the_form);
	var tchat = window.open("about:blank", "tchat", "height=440, width=640, menubar='no', toolbar='no', location='no', status='no', scrollbars='no'");
	my_form.target = "tchat";
	my_form.submit();
	tchat.focus();
}


function hide_ucp_panel() {
	var ucp_panel = document.getElementById("ucp_nav");
	if(!document.getElementById("ucp_showpanel_link")) {
		/* alert("Not found, insert one"); */
		var link = document.createElement("div");
		link.innerHTML = '<a href="#" style="display:none;" onclick="hide_ucp_panel();"  id="ucp_showpanel_link" >Montrer le menu de navigation</a>';
		ucp_panel.parentNode.parentNode.parentNode.parentNode.insertBefore(link, ucp_panel.parentNode.parentNode.parentNode);
	}
	/* alert(Cookie.get("show_ucpnav")); */
	
	if(ucp_panel.style.visibility == "hidden" || typeof(Cookie.get("show_ucpnav")) == "undefined" || (Cookie.get("show_ucpnav") == "oui" && ucp_panel.style.visibility != "visible")) { /*  On appelle la fonction alors que le menu est cach => On montre le menu */
		/* alert(1); */
		ucp_panel.style.visibility = "visible";
		ucp_panel.style.position = "static";
		ucp_panel.style.top = "0px";
		ucp_panel.style.width = "180px";
		document.getElementById("ucp_showpanel_link").style.display = "none";
		Cookie.set("show_ucpnav", "oui");
	}
	else { 
		/* alert(2); */
		/* if(Cookie.get("show_ucpnav") == "non" || (ucp_panel.style.visibility == "visible" && Cookie.get("show_ucpnav") == "oui")){ */
		ucp_panel.style.visibility = "hidden";
		ucp_panel.style.position = "absolute";
		ucp_panel.style.top = "-1000px";
		ucp_panel.style.width = "0px";
		document.getElementById("ucp_showpanel_link").style.display = "block";
		Cookie.set("show_ucpnav", "non");
	}
}

function pop_open(href, width, height, name) {
	if(!name) name = "pop_up";
	if(!width) width = 300;
	if(!height) height = 400;
	window.open(href, name, "height="+height+", width="+width+", menubar='no', toolbar='no', location='no', status='no', scrollbars='no'");
}

function show_hide(id) {
	if(!id) {
		alert("Erreur, aucun id fourni");
	}
	var b = document.getElementById(id);
	
	if(b.style.display == "none") {
		b.style.display = "";
	}
	else {
		b.style.display = "none";
	}
}

/*  Vrifie si la fonction demande est une fonction  */
function is_func(func) {
	if(typeof(func) == 'function') {
		return true;
	}
	else {
		return false;
	}
}

function expand_codepre(div) {
	/* alert(div.style.width); */
	var pre = div.getElementsByTagName('pre')[0];
	if($(div).getWidth() > 400) {
		/* pre.style.overflow = "auto"; */
		pre.style.maxHeight = "600px";
		div.style.maxWidth = "400px";
	}
	else {
		div.style.maxWidth = Math.round($(div).parentNode.getWidth()*0.99);
		/* pre.style.overflow = "visible"; */
		pre.style.maxHeight = "none";
	}
}

function select_code(div) {
	/*  Get ID of code block */
	/* var e = a.parentNode.parentNode.parentNode.getElementsByTagName('DIV')[0]; */
	var e = div.getElementsByTagName('pre')[0];
	if (document.selection) {
		var r = document.body.createTextRange();
		r.moveToElementText(e);
		r.select();
	}
	else {
		var s = window.getSelection();
		var r = document.createRange();
		r.setStartBefore(e);
		r.setEndAfter(e);
		s.addRange(r);
	}
}

var ajax = {
	xhr : null,
	init : function () {
		this.xhr = GetHttpRequest();
	},
	
	send : function() {
		if(typeof(this.method) == "undefined") {
			alert("Erreur, aucune mthode n'est dfinie");
			return false;
		}
		if(typeof(this.url) == "undefined") {
			alert("Erreur, aucune URL n'est dfinie pour la requte.");
			return false;
		}
		if(typeof(this.async) == "undefined" || this.async == null) {
			this.async = true;
		}
		
		if(this.method == "GET" || this.method == "get") {
			var cible_get = (this.url.search(/\.([A-Z]+)\?/i) != -1) ? String(this.url + "&" + this.params.join("&")) : String(this.url + "?" + this.params.join("&"));

			this.xhr.open("GET", cible_get, this.async);
		}
		else if(this.method == "POST" || this.method == "post") {
			this.xhr.open("POST", this.url, this.async);
			this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
		else {
			window.alert('No method found');
		}
		var send = (this.method == "POST" || this.method == "post") ? this.params.join("&") : null;
		this.xhr.send(send);
		return true;
	}
};

function insertAfter(node_insert, referenceNode) {
	if(referenceNode.parentNode.lastChild == referenceNode) { 
		referenceNode.parentNode.appendChild(node_insert); 
	}
	else {
		referenceNode.parentNode.insertBefore(node_insert, referenceNode.nextSibling);
	}
}

function node_suicide(node) {
	node.parentNode.removeChild(node);
}

/* START OF CODE FOR QUICKREG FORM */

function showtb() {
	document.getElementById('TB_overlay').style.display='block';
	var tbwindow=document.getElementById('TB_window');
	tbwindow.style.display='table';
	return true;
}

function tbremove() {
	document.getElementById('TB_overlay').style.display='none';
	document.getElementById('TB_window').style.display='none';
}

function pwnfunc(xmldoc, doctxt, error) {
	logconsole("dtxt=")
	logconsole(doctxt)
	logconsole("err=")
	logconsole(error)
	
	var content = doctxt;
	content = content.replace(/\r\n/gi, "\n").replace(/\n/ig, "kknnhhooll");
	var num = content.match(/\<error\>(.*)\<\/error\>(.*)/gi);
	if (num != null) var error = content.replace(/\<error\>(.*)\<\/error\>(.*)/gi, "$1").replace(/kknnhhooll/gi, "<br />");
	else var error = null;
					
	if(error != null) {
		document.getElementById("registerform_status").innerHTML = '<span style="color:red; font-weight:bold;" >/!\\&nbsp;&nbsp; '+error+' &nbsp;&nbsp;/!\\</span>';
		document.getElementById("registerform_status").style.display="table-cell";
		return false;
	}
	else {
		var newin = document.createElement("div");
		newin.setAttribute("ID" ,  'TB_window');
		newin.innerHTML = '<div class="msg_ok_box" style="height:3em; width:400px; border:0px 0px 0px 0px; font-weight:bold;">Merci de vous &ecirc;tre inscrit ! La page va &ecirc;tre recharge. Vous &ecirc;tes connect&eacute;.</div>';
		node_suicide(document.getElementById('TB_window'));
		document.getElementsByTagName("body")[0].appendChild(newin);
		var newin2 = document.getElementById('TB_window');
		newin2.style.display='block';
		newin2.style.height = "3em";
		newin2.style.width = "400px";
		newin2.style.fontSize = "1.3em";
		newin2.style.padding = "0px 0px 0px 0px";
		newin2.style.backgroundColor = "transparent";
		newin2.style.border = "none";
		newin2.style.marginLeft = "-200px";
		newin2.style.marginTop = "-1.5em";
	}
	node_suicide(document.getElementById('loadNode'));
	
	window.setTimeout('location.href=location.href;', 2000);
	window.setTimeout('location.reload();', 2010);
	return true;
}

var prepareform = function () {
	regValidator = new FormValidator('registration_form');
	regValidator.register('username', 'notEmpty', {
		failure_message:'Vous devez entrer un nom d&#039;utilisateur'
	});
	regValidator.register('email', 'regexp', {
		regexp:'^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$', 
		failure_message:'Vous devez entrer une adresse email valide', 
		status_field:'email_status'
	});
	regValidator.register('password', 'length', {
		match_field:'password2', 
		status_field:'password_status', 
		min: 6, 
		failure_message:'Votre mot de passe doit avoir une longueur de 6 caract&egrave;res ou plus'
	});
	regValidator.register('password2', 'matches', {
		match_field:'password', 
		status_field:'password_status', 
		failure_message:'Les mots de passe que vous avez entr&eacute;s doivent &ecirc;tre identiques'
	});
	regValidator.register('username', 'length', {
		min: 3, 
		max: 30, 
		failure_message:'Le nom d&#039;utilisateur doit avoir une longueur entre 3 et 30 caract&egrave;res'
	});
	regValidator.register('username', 'ajax', {
		url:(location.href.indexOf('forum.pcinfo') == -1) ? /* ns sommes sur le site */ '/forum/xmlhttp.php?action=username_availability' : /* ns sommes sur le forum */  '/xmlhttp.php?action=username_availability', 
		loading_message:'V&eacute;rification de la disponibilit&eacute; du nom d&#039;utilisateur'
	}); /* needs to be last */
};

var prepareformJS = function () {
	if(prepareformJS.done == null || typeof prepareformJS.done == 'undefined') {
		loadRemoteJS('http://forum.pcinfo-web.com/jscripts/prototype.js');
		loadRemoteJS('http://forum.pcinfo-web.com/jscripts/validator.js', 'prepareform();');
		prepareformJS.done = true;
	}
};


/* END OF CODE FOR QUICKREG FORM */

/* NOTE : CALLBACK IS A STRING, THE STRING THAT'LL BE PUT IN ONLOAD ATTRIBUTE AND, THEREFORE, EXECUTED !  */
var loadRemoteJS = function (url, callback_str) {
	var head = document.getElementsByTagName('head')[0];
	var newscript = document.createElement('script');
	newscript.setAttribute('src', url);
	newscript.setAttribute('type', 'text/javascript');
	newscript.setAttribute('onload', callback_str);
	head.appendChild(newscript);
	return true;
};

var toggleDisplay = function ( whichLayer ) {
	var elem, vis;
	if( document.getElementById ) // this is the way the standards work
		elem = document.getElementById( whichLayer );
	else if( document.all ) // this is the way old msie versions work
		elem = document.all[whichLayer];
	else if( document.layers ) // this is the way nn4 works
		elem = document.layers[whichLayer];
	vis = elem.style;
	// if the style.display value is blank we try to figure it out here
	if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined) {
		vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
	}
	vis.display = (vis.display==''||vis.display=='block')?'none':'block';
};