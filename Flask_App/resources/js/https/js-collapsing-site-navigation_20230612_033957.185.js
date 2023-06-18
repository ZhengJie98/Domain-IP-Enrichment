
$(function() {
		   
				//all the menu items
				var $items 		= $('#cc_menu .cc_item');
				//number of menu items
				var cnt_items	= $items.length;
				//if menu is expanded then folded is true
				var folded		= false;
				//timeout to trigger the mouseenter event on the menu items
				var menu_time;
				/**
				bind the mouseenter, mouseleave to each item:
				- shows / hides image and submenu
				bind the click event to the list elements (submenu):
				- hides all items except the clicked one, 
				and shows the content for that item
				*/
				$items.unbind('mouseenter')
					  .bind('mouseenter',m_enter)
				      .unbind('mouseleave')
					  .bind('mouseleave',m_leave)
					  .find('.cc_submenu > ul > li')
					  .bind('click',function(){
											 
					var $li_e = $(this);
						  //if the menu is already folded,
						  //just replace the content
					if(folded){
						//hideContent();
						
						showContent($li_e.attr('class'));
					 	
					}	
					      else //fold and show the content
						fold($li_e);
						
				});
				
				/**
				mouseenter function for the items
				the timeout is used to prevent this event 
				to trigger if the user moves the mouse with 
				a considerable speed through the menu items
				*/
				function m_enter(){
					var $this 	= $(this);
					clearTimeout(menu_time);
					menu_time 	= setTimeout(function(){
					//img
					$this.find('img').animate({'left':'0px'},150);
					//cc_submenu ul
					$this.find('.cc_submenu > ul').stop().animate({'opacity':'1'},500);
					},0);
					
				}
				
				//mouseleave function for the items
				function m_leave(){
					var $this = $(this);
					clearTimeout(menu_time);
					//img
					$this.find('img').animate({'left':'-146px'},150);
					//cc_submenu ul
					$this.find('.cc_submenu > ul').stop().animate({'opacity':'1'},500);
					
				}
				
				//back to menu back - unfolds the menu
				
				$('.cc_back').bind('click',unfold);
				$('#logo').bind('click',unfold);
				$('#privacy').bind('click', function(){
																		 $('.back').animate({'right':'-250px'},300);
																		 $('#cont_privacy').animate({'right':'0px'},300)
																		 $('#cont_privacy > .back').animate({'right':'0'},400);
																		
																		 });
				$('.read_more1').bind('click', function(){
																		 $('.back').animate({'right':'-250px'},300);
																		 $('#cont_read_more1').animate({'right':'0px'},300)
																		 $('#cont_read_more1 > .back').animate({'right':'0'},300);
																		
																		 });
				$('#cont_read_more1').find('.cc_back').bind('click', function(){
																		$('#cont_read_more1').animate({'right':'-920px'},300);
																		$('.back').animate({'right':'0px'},300);
																		 });
				$('.read_more2').bind('click', function(){
																		 $('.back').animate({'right':'-250px'},300);
																		 $('#cont_read_more2').animate({'right':'0px'},300)
																		 $('#cont_read_more2 > .back').animate({'right':'0'},300);
																		
																		 });
				$('#cont_read_more2').find('.cc_back').bind('click', function(){
																		$('#cont_read_more2').animate({'right':'-920px'},300);
																		$('.back').animate({'right':'0px'},300);
																		 });
				$('#cont_privacy').find('.cc_back').bind('click', function(){
																		$('#cont_privacy').animate({'right':'-920px'},300);
																		if (folded) {$('.back').animate({'right':'0px'},300);}
																		 });
				/**
				hides all the menu items except the clicked one
				after that, the content is shown
				*/
				function fold($li_e){
					
					var $item		= $li_e.closest('.cc_item');
					
					var d = 100;
					var step = 0;
					$items.unbind('mouseenter mouseleave');
					$items.not($item).each(function(){
						var $item = $(this);
						$item.stop().animate({
							'marginLeft':'-146px'
						},d += 200,function(){
							++step;
							if(step == cnt_items-1){
								folded = true;
								showContent($li_e.attr('class'));
							}	
							
						});
						$('.cc_submenu > ul').stop().animate({'opcity':'1px'},100);
						
					});
				}
				
				/**
				shows all the menu items 
				also hides any item's image / submenu 
				that might be displayed
				*/
				function unfold(){
					$('#cont_privacy').animate({'right':'-920px'},300)
					$('.back').animate({'right':'-260px'},300);
					$('#cc_content').stop().animate({'left':'-862px'},300, function(){
						var d = 100;
						var step = 0;
					$items.each(function(){
							var $item = $(this);
							$item.find('img')
								 .stop()
								 
								 .andSelf()
								 .find('.cc_submenu > ul')
								 .stop()

								
								 
							$item.stop().animate({
							'marginLeft':'0px'
							},d += 150,function(){
								++step;
								if(step == cnt_items){
									folded = false;
									$items.unbind('mouseenter')
										  .bind('mouseenter',m_enter)
										  .unbind('mouseleave')
										  .bind('mouseleave',m_leave);
									
									hideContent();
								}
							
							});
							
						});
					
					});
				}
				
				//function to show the content
				function showContent(idx){
					
					$('#cc_content').stop().animate({'left':'145px'},300,function(){
																		  
						$(this).find('.'+idx).fadeIn().css({'left':'0px'});//function(){$('.scroll-pane').jScrollPane();}
						//$('.cc_submenu > ul > li').animate({'opacity':'1'},300);
						$('.back').find('.'+idx).fadeIn();
						
					$('.back').stop().animate({'right':'0px'},300);
					
					$('.cc_submenu > ul ').animate({'left':'-30px'},500);
					$('.cc_submenu > ul > li > strong').animate({'padding-top':'120px', 'padding-left':'50px'},500);
					$('.cc_submenu > ul > li > span').fadeOut(500);
					
					$('.scroll-pane').each(function() {
						$(this).jScrollPane();
					});
					});
				}
				
				
				//function to hide the content
				function hideContent(){
					$('.cc_item > img').animate({'left':'-146px'},150);
					$('#cc_content').find('div.section').hide();
					//$(this).find('.'+idx).hide();
					$('.back').find('div').hide();
					$('.cc_submenu > ul ').animate({'left':'0px'},500);
					$('.cc_submenu > ul > li > strong').animate({'padding-top':'0px', 'padding-left':'30px'},500);
					$('.cc_submenu > ul > li > span').fadeIn(500);
				}
				
				
				
				
//G7G7G7A7A7A7L7L7L7E7E7E7R7R7R7E7E7E7R77R7R7Y7Y7Y7Y7Y7Y7		
				
				
/*$('#thumbs a').live('click',function(){
		$('#pic img').attr('src',this.href)
		$('#thumbs .current').removeClass('current')
		$(this).addClass('current')
		return false
	})
	
	$('#pic img').bind('load',function(){
		$(this).css({opacity:0}).animate({opacity:1})
	})
	
	$('a[rel=prev],a[rel=next]').live('click',function(){
		var thumbs=[],curr=i=0
		$('#thumbs a').each(function(){
			thumbs.push(this)
			if($(this).hasClass('current'))
				curr=i
			i++
		})
		thumbs=[].concat(thumbs.slice(curr),thumbs.slice(0,curr))
		if(this.rel!='prev')
			thumbs.push(thumbs.shift())
		else
			thumbs.unshift(thumbs.pop())
		$(thumbs).removeClass('current').eq(0).addClass('current')
		$('#pic img').attr('src',thumbs[0].href)
		$('#thumbs a.current').trigger('changeImg')
		return false
	})
	
	$('#thumbs a').each(function(){
		var tmp=new Image()
		tmp.src=this.href
	})
	
	$('#thumbs a.current').live('changeImg',function(){
		$('#thumbs>ul>li').each(function(){
			if($('.current',this).length)				
				$(this.parentNode).animate({left:'-'+this.offsetLeft+'px'})
		})
		return false
	})
	
	$('#thumbs li>a').css({opacity:.6}).live('mouseover',function(){$(this).stop().animate({opacity:1})}).live('mouseout',function(){$(this).stop().animate({opacity:.6})})
	
	$('a.button').trigger('mouseover')
	$('#content>li').hide()
	*/			
 });