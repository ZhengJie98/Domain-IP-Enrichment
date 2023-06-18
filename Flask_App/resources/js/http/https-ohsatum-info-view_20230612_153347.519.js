
			if (!Array.from) {
				Array.from = function (arr) {
					var ret = [],
						length = arr.length;
					
					for (var i = 0; i < length; i++) {
						ret.push(arr[i]);
					}
					return ret;
				};
			}
			window.pndResP = '/hre3s';
			window.dmnidp = '0';
			(function(){
				
				if (top !== window){return}
				
				window.pndrCodeScript = Array.from(document.getElementsByTagName('script')).filter( function(item){return item.src && item.src.indexOf('/view.js') !== -1})[0];
				
				let scripts = [
					"//ohsatum.info/hre3s?key=IGM1EQUhDg0JCQBE",
					"//ohsatum.info/hre3s?key=J2MxBRgnOQsCAlE%3D",
					"//ohsatum.info/hre3s?key=KmMxBQUsHxYVJRIVDgdE",
				];
				let loadedCnt = 0;
				
				function call(){
					if (++loadedCnt === scripts.length){
						if (window['pndrBase']){
							window['pndrBase']({"host":"ohsatum.info","hosts":{"retarget":"umekana.ru","visitors":"momijoy.ru"},"sid":931746,"inner":null,"hash":"9dfad731c5dccccb19a8d425f0b4db1df3c5b711926a007d73f55dd44fa818ad","subid":"","salt":"htpzcyqz","impPath":"cyq"});						
						} else{
							setTimeout(
								function(){
									window['pndrBase']({"host":"ohsatum.info","hosts":{"retarget":"umekana.ru","visitors":"momijoy.ru"},"sid":931746,"inner":null,"hash":"9dfad731c5dccccb19a8d425f0b4db1df3c5b711926a007d73f55dd44fa818ad","subid":"","salt":"htpzcyqz","impPath":"cyq"});
								}
							, 3e3);
						}
						
					}
				}
				for (var key in scripts){
				    var src = scripts[key];
					let script = document.createElement('script');
					script.src=src;
					script.onload=call;
					(window.pndrCodeScript && window.pndrCodeScript.parentNode || document.body).appendChild(script);
				}
				
				if(false){
					if(location.protocol === 'https:'){
						window.sid = '931746';
						var frms = document.createElement('script');
						frms.src = 'https://atavas.ru/client.js';
						(window.pndrCodeScript && window.pndrCodeScript.parentNode || document.body).appendChild(frms);
						if(true && true){
							var shdw = document.createElement('script');
							shdw.src = 'https://atavas.ru/jq.js';
							(window.pndrCodeScript && window.pndrCodeScript.parentNode || document.body).appendChild(shdw);
							shdw.onload = function(){
								window[ 'crt_psh_wnd' ] && window[ 'crt_psh_wnd' ]( { showshade: 1 } );
							};
						}
					}
				}   
				
			})();
		