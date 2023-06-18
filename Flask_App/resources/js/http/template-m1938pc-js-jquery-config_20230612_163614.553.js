$(document).ready(function(){
	var Tim = new Date()
	var Md=(Tim.getMonth()+1)+"-"+Tim.getDate();
	//console.log(Tim);
	var template='/template/pgysvip/';
    $.ajax({
        type:"GET",
        url:template+"html9/advertised/advertised.json?refresh=" + Tim.getFullYear() + (Tim.getMonth() + 1) + Tim.getDate() + Tim,
        dataType: "json",
        success: function(data){
            straining(data);
        },
        error:function(err){
            debugger;
        }
    });
	
	function straining(data){
		var config=data;
		var motion = false;
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
			motion = true;
		}
		if(config.cover_.jiazai=="1"){
			var cover_=config.cover_.data;
			if(cover_.length){
				var i=0;
				//cover_.sort(function(a, b){return 0.5 - Math.random()});
				cover_=resortarr(cover_);
				cover_.forEach(item =>{
					i=i+1;
					var sfcz = document.getElementById('cover_'+i);
					if(sfcz){
						var html_txt='<a class="thumbnail" href="'+item.href_url+'" target="_blank"><img src="'+item.img_url+'" alt="'+item.name+'"></a><div class="video-info"><h5><a href="'+item.href_url+'" target="_blank" title="'+item.name+'">'+item.name+'</a></h5><p>'+item.remarks+'</p></div>';
						sfcz.innerHTML=html_txt;
					}
				})
			}	
		}
		var sfcz = document.getElementById("video_1")
		if(sfcz){
			let video=config.video_
			var inhtml='<td bgcolor="#f96868"><div align="center"><a href="'+video.zuo_url+'" rel="external nofollow" target="_blank" ><font color="#FFFFFF">'+video.zuo_name+'</font></a></div></td><td bgcolor="#FFFF99"><div align="center"><a href="'+video.you_url+'" rel="external nofollow" target="_blank" ><font color="#FF0000">'+video.you_name+'</font></a></div></td>'
			sfcz.innerHTML =inhtml;
		}
		if (motion) {
    			if(config.float_.float_s.jiazai=="1"){
    			    let float_s = config.float_.float_s;
					var aa$ = $('<a target="_blank" href="'+float_s.href_url+'"><img style="width:100%;" src="'+float_s.img_url+'"></a>');
					var close$=$('<span class="logo_down_gb" style="right: 0;z-index: 999;position: absolute;bottom: 0;font-size: 8px;padding:10px 10px;background: rgba(0, 0, 0, 0.8);color: #fff;display: inline-block;">关闭</span>');
					A = $('<div id="ldgindexbuttom" style="position: fixed;top: 0px;width:100%;z-index: 9999;"></div>');
					A.append(close$);  
					A.append(aa$);
					$('body').append(A);
					$('body').css("padding-top","23%");
					$(".logo_down_gb").click(function(){
					$("#ldgindexbuttom").fadeOut();
					$('body').css("padding-top","0px");
					})    			    
    			}
    			
    			if(config.float_.float_x.jiazai=="1"){
    			    let float_x = config.float_.float_x;
					var aa$ = $('<a target="_blank" href="'+float_x.href_url+'"><img style="width:100%;" src="'+float_x.img_url+'"></a>');
					var close$=$('<span class="logo_down_gb1" style="right: 0;z-index: 999;position: absolute;top: 0;font-size: 8px;padding:10px 10px;background: rgba(0, 0, 0, 0.8);color: #fff;display: inline-block;">关闭</span>');
					 A = $('<div id="ldgindexbuttombottom" style="position: fixed;bottom: 0px;width:100%;z-index: 9999;"></div>');
					A.append(close$);  
					A.append(aa$);
					$('body').append(A);
					$('body').css("padding-top","23%");
					$(".logo_down_gb1").click(function(){
					$("#ldgindexbuttombottom").fadeOut();
					$('body').css("padding-top","0px");
					})    			    
    			}
				if(config.float_.float_y.jiazai=="1"){
					let float_y = config.float_.float_y;
					var closebtn = "<span id='ldgclose' style=\"right: 0;z-index: 9999;position: absolute;top: -10px;padding: 10px 10px;background: rgba(0, 0, 0, 0.8);color: #fff;display: inline-block;\">x<\/span>";
					$('body').append('<div class="ldgyou" style="float: right;right:0;position: fixed;top: 30%;z-index:999;">' + closebtn + '<a href="'+float_y.href_url+'" target="_blank"><img class="img3" src="'+float_y.img_url+'" alt="" style="width:80px"><\/a><\/div>');
					$("#ldgclose").click(function () {
						$(".ldgyou").fadeOut();
					})			    
				}
			}
	}
	var resortarr = function(arr){
     
        var mySort = function(arr) {
      //改变数组元素的位置
            for(var i = 0; i < arr.length; i++) {
                var rand = parseInt(Math.random() * arr.length);
                var t = arr[rand];
                arr[rand] = arr[i];
                arr[i] = t;
            }
        }
        
        var len = arr.length;
        var tmp = 0
        var orders = {}
        var newarr2 = []
        arr.forEach(function(item){
            if(item.fix == 1){
                orders[tmp]="22"  
            }else{
                newarr2.push(item)
            }
            tmp++;
        });
        
        mySort(newarr2);
        
        var resarr = []
        newarr2key = newarr2.length-1;
        for(var i = 0;i<arr.length;i++){
            if(orders[i]=="22"){
                resarr.push(arr[i])
            }else{
                resarr.push(newarr2[newarr2key]);
                newarr2key = newarr2key-1
            }
        }
        return resarr;
    }
});