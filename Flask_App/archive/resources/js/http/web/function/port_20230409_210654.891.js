

function port_set_check(port,port_type)
{
	var portnum = parseInt(port, 10);

	if ( port.length==0 || port.length > 5 || port.indexOf(" ")!=-1 ) {
		if (port_type=="HTTP") {
			jAlert( _T('_PORT','msg1'), _T('_common','error'));
			return 1;
		}
		else if (port_type=="HTTPS") {
			jAlert( _T('_PORT','msg2'), _T('_common','error'));
			return 1;
		}
	}
	else if (portnum < 1024 || portnum > 65535) {

		if (port_type=="HTTP" && portnum == 80) {
			return 0;
		}
		else if (port_type=="HTTPS" && portnum == 443) {
			return 0;
		}
		else
		{
			var str="";
			if (port_type=="HTTP") 
				str = _T('_PORT','msg1');
			else
				str = _T('_PORT','msg2');
			
			jAlert( str, _T('_common','error'));
			return 1;
		}
	}
	
	if( 67 == parseInt(port,10) || 68 == parseInt(port,10))
	{
		//jAlert( _T('_ftp','msg5'), _T('_common','error'));	//Text: The port 67,68 has used for DHCP Server.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;
	}	
	if( 3689 == parseInt(port) )
	{
		//jAlert( _T('_ftp','msg3'),  _T('_common','error'));	//Text:The port 3689 has used for iTunes Server.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;	
	}
	
	if( 50000 <= parseInt(port,10) && 65500 >= parseInt(port,10))
	{
		//jAlert( _T('_ftp','msg4'), _T('_common','error'));	//Text:The port 50000-65500 has used for UPnP Server.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;	
	}
	
	if( 4711 == parseInt(port,10))
	{
		//jAlert( _T('_ftp','msg28'), _T('_common','error'));	//Text: The port 4711 has used for aMule.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;
	}
	
	if( 8000 == parseInt(port,10))
	{
		//jAlert( _T('_ftp','msg32'), _T('_common','error'));	//Text: The port 8000 has used for IceStation.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;
	}
	
	if( 9000 == parseInt(port,10))
	{
		//jAlert( _T('_ftp','msg29'), _T('_common','error'));	//Text: The port 9000 has used for Squeeze Center.
		jAlert( _T('_PORT','msg3'), _T('_common','error'))
		return 1;
	}

	return 0;
}	