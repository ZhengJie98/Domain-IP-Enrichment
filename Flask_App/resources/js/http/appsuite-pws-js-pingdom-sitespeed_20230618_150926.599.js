

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" >

<head id="Head1"><title>
	Log In - College of American Pathologists eCP XML Comparator
</title><meta http-equiv="content-type" content="text/html;charset=utf-8" /><link type="text/css" rel="stylesheet" href="Content/core/core.css" /><link type="text/css" rel="stylesheet" href="Content/core/nav.css" /><link rel="stylesheet" href="Content/Include/Menu.css" />

         <style type="text/css">       
             
             table{margin:auto;}       
            h1{
                text-align:center;
            } 
            .bg { 
                /* The image used */
                /*background-image: url("images/dotsbg.jpg");*/
                background-color:#E9E9E9;
                /* Full height */
                height: 100%; 

                /* Center and scale the image nicely */
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            } 
            div.center {
                width: 400px;
                height: 250px;
                margin-top:20px;
                background-color: transparent;
                /*position: absolute;*/
                top:0;
                bottom: 0;
                left: 0;
                right: 0;
                /*margin: auto;*/
                margin-right:auto;
                margin-left:auto;
            }

            td{padding:5px}

            .login{
                border:none;
                background-color:#009BBF;
                width:50%;
                color:white;
                padding:4px;
            }
        </style>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" 
        integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" 
        crossorigin="anonymous"></script>
    <script type="text/javascript" language="javascript" src="/appsuite/pws/js/pingdom-sitespeed.js"></script>
<script>
var _prum = [['id', '5a0dd35053eca6f24e7b23c6'],
             ['mark', 'firstbyte', (new Date()).getTime()]];
(function() {
    var s = document.getElementsByTagName('script')[0]
      , p = document.createElement('script');
    p.async = 'async';
    p.src = '//rum-static.pingdom.net/prum.min.js';
    s.parentNode.insertBefore(p, s);
})();
</script>

        <script type="text/javascript">

            $(document).ready(function () {
                localStorage.setItem("file1name", null);
                localStorage.setItem("lastTab", null);
                localStorage.setItem("checklists", null);
                console.log('cleared');
            })
            function clearform()
            {
                document.getElementById("UserName").value = "";
                document.getElementById("Password").value = "";
            }
            function validate() {
                var userName = document.getElementById("UserNameRequired");
                var password = document.getElementById("PasswordRequired");

                if (username == null || username == "") {
                    alert("Please enter the username.");
                    return false;
                }
                if (password == null || password == "") {
                    alert("Please enter the password.");
                    return false;
                }
            }
            </script>
			
			
			
			 <style>
	body {
		background-color: #e9e9e9;
		color: #666;
		font-family: Arial, Helvetica, sans-serif;
	}
	.loginbox {
		background-color: #d2d2d2;
		padding: 0 40px 20px 40px;
		text-align: center;
		overflow: hidden;
	}
	h1, h2 {
		margin: 20px 0 20px 0;
		font-size: 1.57em;
		font-weight: 500;
		text-align: center;
	}
	.button {
		background-color: #00549f;
		text-transform: uppercase;
		font-weight: bold;
		width:100%;
		font-size:0.8em;
		 color:white;
		height:38px;
		transition: background-color 0.25s ease-out, color 0.25s ease-out;
		margin: 0;
	}
	.button:hover {background-color: #00396c;}

	ul {list-style-type: none; margin:0; line-height: 1.3;}

	.helplist a {
		text-transform: uppercase;
		font-size: 0.7em;
		color: #00549f;
		font-weight: bold;
	}

	.helplist a:hover {color:#00396c}

	#logobox {
		/*display: block;*/
		overflow: hidden;
		position: relative;
		width: 100%;
	}
	.logo {
		left: 0;
		right: 0;
		margin: 24px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	.fa-stack-2x { color:#999; margin-top:2px;}
        
	        
	.margin-bot-6 { margin-bottom:6px;font-size:12px;font-family:Arial}
    
    .nobookmark h2 {
            font-size: 2.4em;            
            text-align: left;
            margin-bottom: 12px;
            text-shadow: 1px 1px 4px #999;
        }
        
    .nobookmark h3 {font-size: 1.2em;}
        
    .nobookmark {margin-top: 64px;}
        
    a.hintlink {color: #00549f;}        
    
    #errorMsg, #errMsg, #pwdHintVal {
    	font-size:.9em; 
    	color: #b41f28; 
    	margin-bottom: 12px;
    }
        
    /* Small only */
    @media screen and (max-width: 39.9375em) {
        .nobookmark {margin-top: 24px;}
    }   

	input[type="text"]::-moz-placeholder, input[type="password"]::-moz-placeholder { /* Firefox 19+ */
	 color: #000;
	  opacity:0.4;
	}
    </style>  
	
    </head>

    <body class="bg">
	    <form method="post" action="./Login.aspx?ReturnUrl=%2fappsuite%2fpws%2fjs%2fpingdom-sitespeed.js" id="form1" class="center">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="VksMsOZpAs/SJ2CIvAN9IvO3rfNpM9jhdAuNZ155IRk5GkNIfJoIZmGqn8qvQ+XkqH0/Uga8piaLy1rX2uwjXtzhvOjJUIIvV0tGMHr2usnWkPalZDWuJn9zzpwp5S8+3Sfyiw==" />

<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="C2EE9ABB" />
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="mqIo0WWqb5YgFloV0gAcl/HhRMxji+MZ2b4nz8JLhng/JzPdYnY6oeHVLIeAGH1fczB8B4BRBbDHOwplK/TwqSBNsgElnl9w85Evu9Z39t+p7mNM7bYRxo8r3fkUycnb/HrjbF7eacsl7cY5CVsV1d34YHE=" />            
<a href='https://www.cap.org/' id="logobox"><div class="logo">
    
    <img src='images/cap-logo-265x49.gif' alt="The College of American Pathologists"/>

     </div></a>									    
	<div  style="width:35%;height:100%;margin:20px auto;">
                    <div style="background-color:#D2D2D2;" >
                        <table id="Login1" cellspacing="0" cellpadding="0">
	<tr>
		<td>
                                <table >
                                    <tr><td colspan="2"><font color="#666"><h1>Licensed CAP eCP Users - XML Comparator</h1></td></tr>
                                    <tr>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td style="text-align:right"><b>User ID:</b></td>
                                                    <td >
                                                        <input name="Login1$UserName" type="text" id="UserName" />
                                                        &nbsp;
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:right"><b> Password:</b></td>
                                                    <td>
                                                        <input name="Login1$Password" type="password" id="Password" />
                                                        &nbsp;
                                                    </td>
                                                </tr>                                    
                                            </table>
                                        </td>                            
                                    </tr>
                                    <tr>
                                        <td style="text-align:center">
                                            <input type="submit" name="Login1$Login" value="LOG IN     »" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;Login1$Login&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="Login1_Login" class="button margin-bot-6" />                                            
                                            </font>
										</td>
                                    </tr>
                                    <tr>
                                        <td ></td>
                                    </tr>
                                </table>
                            </td>
	</tr>
</table> 
                        
                    </div>
                    
                    <div id="forgotPassword" style="text-align:center;margin-top:20px">                                                     
                                 <h1>Forgot your password? </h1> 
					                Contact CAP at <a  style="color:#009BBF" href="mailto:capecc@cap.org">capecc@cap.org</a> (or) call at 847-832-7700. 
                                                        
                                </div> 
        <div id="help" style="text-align:center;margin-top:20px">
            <a href="Content/Help/CAP eCC XML Comparator User Guide.pdf" target="_blank">Help</a>
        </div>                          
                </div>
            
            
        </form>
    </body>
</html>
