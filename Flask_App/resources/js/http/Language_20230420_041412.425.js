var xmlDoc;
var GEO_LANG_ID= "EN";

main();    //Create XML Paser
function main()
{		
	GetUsrLanguage();	
	loadXML("WebTable.xml");	
}		
	
function loadXML(fileName) 
{	
	// code for IE
	if (window.ActiveXObject)
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.load(fileName);
		return xmlDoc;
	}
	else if (window.XMLHttpRequest)
	{
		var xmlhttp=new XMLHttpRequest();
		xmlhttp.open("HEAD",fileName,false);
		xmlhttp.send();
		
		xmlDoc=new window.XMLHttpRequest();
		xmlDoc.open("GET",fileName,false);
		xmlDoc.send("");		
		return xmlDoc.responseXML;
	}
	else
	{
	  	//alert('Your browser cannot handle this script');
	}

	return null;
}


function MySelectSingleNode(xmlDocObj, elementPath)
{
    
	if(window.ActiveXObject)
	{
		if( xmlDocObj == xmlDoc )
			return xmlDoc.documentElement.selectSingleNode(elementPath);		
		else
			return xmlDocObj.selectSingleNode(elementPath);
		
	}
	else
	{		
		if( xmlDocObj == xmlDoc )
			return xmlDoc.responseXML.getElementsByTagName(elementPath);
		
		else		
			return xmlDocObj[0].getElementsByTagName(elementPath);		
	}
}

function MyLoadString(singleNodeValue)
{
	if(window.ActiveXObject){
		
		return singleNodeValue.text;
	}
	else{			
		return singleNodeValue[0].textContent
	}
}

function GetUsrLanguage()
{  
	var CY;
	var lang=null;
	var sub_lang;	
	
	if(window.ActiveXObject)
		CY=(navigator.userLanguage).toLowerCase();  
	else
		CY=(navigator.language).toLowerCase();
	
	lang = CY.substring(0,2);
			
	sub_lang = CY.substring(3,5);	


	if(lang == "zh"){
		
		if( sub_lang == "tw" || sub_lang == "hk" )
			GEO_LANG_ID = "TC"; 
		else
			GEO_LANG_ID = "SC";			
	}
	else if(lang == "ja")
	{
		GEO_LANG_ID = "JPN"; 
	}
	else if(lang == "fr" || lang.search("fr-")!=-1 )
	{
		GEO_LANG_ID = "FRA";  
	}
	else if(lang == "de")
	{
		GEO_LANG_ID = "GEM";  
	}
	else if(lang == "pl")
	{
		GEO_LANG_ID = "POL";  
	}
	else if(lang == "pt" || lang.search("pt-")!=-1 )
	{
		GEO_LANG_ID = "PTU";  
	}
	else if(lang == "es")
	{
		GEO_LANG_ID = "SPN"; 
	}
	else if(lang == "ru" || lang.search("ru-")!=-1 )
	{   	
		GEO_LANG_ID = "RUS";  
	}
	else if(lang == "ar" || lang.search("ar-")!=-1 )
	{   	
		GEO_LANG_ID = "ARB";  
	}
	else if(lang == "he")
	{   	
		GEO_LANG_ID = "HEB";  
	}
	else if(lang == "it")
	{   	
		GEO_LANG_ID = "ITA";  
	}
	else if(lang == "cs")
	{
		GEO_LANG_ID = "CZH";  
	}
	else if(lang == "da")
	{
		GEO_LANG_ID = "DAN";  
	}	
	else if(lang=="sr")
	{
		GEO_LANG_ID = "SRL";  
	}
	else if(lang == "hu")
	{
		GEO_LANG_ID = "HUN";
	}
	else if(lang == "th")
	{
		GEO_LANG_ID = "TAI";
	}
	else if(lang == "nl")
	{
		GEO_LANG_ID = "NLD";
	}
	else if(lang == "fa")
	{
		GEO_LANG_ID = "PRS";
	}
	else if(lang == "lt")
	{
		GEO_LANG_ID = "LT";
	}
	else if(lang == "in"||lang == "id")
	{
		GEO_LANG_ID = "ID";
	}
	else if(lang == "no")
	{
		GEO_LANG_ID = "NO";
	}
	else if(lang == "sk")
	{
		GEO_LANG_ID = "SK";
	}
	else if(lang == "sl")
	{
		GEO_LANG_ID = "SL";
	}
	else if(lang == "el")
	{
		GEO_LANG_ID = "EL";
	}
	else if(lang == "hi")
	{
		GEO_LANG_ID = "HI";
	}
	else if(lang == "tr")
	{
		GEO_LANG_ID = "TR";
	}
	else if(lang == "bg")
	{
		GEO_LANG_ID = "BG";
	}
	else if(lang == "ro")
	{
		GEO_LANG_ID = "RO";
	}
	else if(lang == "fi")
	{
		GEO_LANG_ID = "FI";
	}
	else if(lang == "sv")
	{
		GEO_LANG_ID = "SV";
	}
	else
	{
		GEO_LANG_ID = "EN";  
	}
}

function GetXML(STRING_ID)
{
	var  pElement;
	var  pLangResult;
	
	  
	if( xmlDoc != null )
	{
		
		
		try
		{					
			pElement=MySelectSingleNode(xmlDoc,STRING_ID);			
			
			if( pElement == null )
				return STRING_ID;
		}
		catch (e)
		{				
			return "";
		}		
		
		 
		try
		{
			pLangResult = MySelectSingleNode(pElement,GEO_LANG_ID);

			if( pLangResult == null || pLangResult.length == 0 )
			{
				var pEN = MySelectSingleNode(pElement,"EN");

				if(pEN == null)
					return STRING_ID;
				else
					return MyLoadString(pEN);			 	
			}
			else
			{
				var sText = MyLoadString(pLangResult);
				if( sText == "" ){					
					var pEN = MySelectSingleNode(pElement,"EN");

					if(pEN == null)
						return STRING_ID;
					else
						return MyLoadString(pEN);
				}
				
				return sText;
			}
		}
		catch (e)
		{
			return "";	
		}
		 
	}
}


function  LoadString(STRING_ID) 
{	
	document.write(GetXML(STRING_ID));
}

function  LoadGetString(ID) 
{
	return GetXML(ID);
}