$(function() {
	// ========== loading ==========
	$(document).ready(function(){
		$(".loading").css({ height : $(window).height() });
		  document.onreadystatechange = function () {    
				if(document.readyState=="complete") {          
					setTimeout("$('.loading').fadeOut(500);", 1200)
				}   
			};
		$(".loading").click(function(){
			$(this).fadeOut(500);
		})
	});
	// ========== header ==========
	$(window).scroll(function() {
		if ($(window).scrollTop()>630) { // 当滚动到距离最顶部630像素时
			$("header").css("transition",".5s ease-out");
			$("header").css("position","fixed");
			$("header").css("background","#242a37");
			
		}else{
			$("header").css("transition",".5s ease-out");
			$("header").css("position","absolute");
			$("header").css("background","");
		}
	});
	// ========== swiper-container ==========
	var mySwiper = new Swiper('.swiper-container',{
		loop: true,
		speed : 600,
		grabCursor: true,
		parallax: true,
		autoplay:{
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on:{
			init: function(){
				swiperAnimateCache(this); //隐藏动画元素 
				this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
			}, 
			slideChangeTransitionEnd: function(){ 
				swiperAnimate(this); //每个slide切换结束时运行当前slide动画
				//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展示一次
			} 
		}
	});
	// ========== product ==========
	$(document).ready(function(){
		var n=1;																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
		$(".product-item ul li").mouseenter(function(){
			var s=$(this);
			n=s.data("index");
			setTimeout(function(){
				if(n==s.data("index")){
					$(".product-item ul li").removeClass("product-active");
					s.addClass("product-active")
				}
			},120)
		});
	});
	$(".product-item ul li:nth-child(1)").addClass("product-active");
	// ========== service ==========
	jQuery(".service").slide();
	$(".service-item ul li:nth-child(1) .service-item-icon i").addClass('fa-laptop');
	$(".service-item ul li:nth-child(2) .service-item-icon i").addClass('fa-mobile');
	$(".service-item ul li:nth-child(3) .service-item-icon i").addClass('fa-bar-chart');
	$(".service-item ul li:nth-child(4) .service-item-icon i").addClass('fa-cog');
	$(".service-item ul li:nth-child(5) .service-item-icon i").addClass('fa-registered');
	// ========== solution ==========
	var mySwiper = new Swiper('.solution-slide',{
		loop: true,
		wrapperClass: 'solution-slide ul',
		slideClass: 'solution-slide ul li',
		slidesPerView: 5,
		speed : 600,
		grabCursor: true,
		parallax: true,
		autoplay:{
			delay: 3000,
			disableOnInteraction: false,
			paginationClickable: true,
		},
		navigation: {
			prevEl: '.solution .fa-angle-left',
			nextEl: '.solution .fa-angle-right',
		},
	});
	// ========== cases ==========
	jQuery(".cases").slide();
	// ========== news ==========
	jQuery(".news").slide();
});