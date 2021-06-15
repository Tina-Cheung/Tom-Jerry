var nowpage = 1;
var page8_nowpage = 1;

var page1_html = $('.page1').html();
var page2_html = $('.page2').html();
var page3_html = $('.page3').html();
var page4_html = $('.page4').html();
var page5_html = $('.page5').html();
var page6_html = $('.page6').html();
var page7_html = $('.page7').html();
var page8_html = $('.page8').html();


$(document).ready(function() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	//设置各页面宽高
	$('.content').width(width);
	$('.content').height(height * 8);
	
	$('.page').width(width);
	$('.page').height(height);

	$('.content').swipe({
		//当监听到滑动时执行
		//event事件，direction方向，distance滑动距离
		//duration时间,fingerCount触屏点数
		swipe: function(event, direction, distance, duration, fingerCount) {
			console.log('滑动');
			if(direction == 'up') {
				nowpage += 1;
			}
			if(nowpage > 8) {
				nowpage = 8;
			}
			if(direction == 'down') {
				nowpage -= 1;
			}
			if(nowpage < 1) {
				nowpage = 1;
			}
			//animate
			//$('.content').animate({'top':'-'+(nowpage-1)*100+'%'},{duration:1000,complete:function(){}});
			$('.content').animate({
				'top': '-' + (nowpage - 1) * 100 + '%'
			}, {
				duration: 1000,
				//animationofPage当动画结束后执行，animationofPage()立即执行
				complete: animationofPage()
			});
		}
	})

});


//各页执行的动画及初始化
function animationofPage() {
	if(nowpage == 1) {
		//第一页动画

		//初始化第二页
		$('.page2').children().stop(false, true).animate();
		$('.page2').html(page2_html);
	} else if(nowpage == 2) {
		//第二页动画


		//初始化第一页
		$('.page1').children().stop(false, true).animate();
		$('.page1').html(page1_html);

		//初始化第三页
		$('.page3').children().stop(false, true).fadeIn();
		$('.page3').children().stop(false, true).animate();
		$('.page3').html(page3_html);
	} else if(nowpage == 3) {
		//第三页动画
		
		
		//初始化第二页
		$('.page2').children().stop(false, true).fadeIn();
		$('.page2').children().stop(false, true).animate();
		$('.page2').html(page2_html);

		//初始化第四页
		$('.page4').children().stop(false, true).fadeIn();
		$('.page4').children().stop(false, true).animate();
		$('.page4').html(page4_html);
	} else if(nowpage == 4) {
		//第四页动画

		//初始化第三页
		$('.page3').children().stop(false, true).fadeIn();
		$('.page3').children().stop(false, true).animate();
		$('.page3').html(page3_html);

		//初始化第五页
		$('.page5').children().stop(false, true).fadeIn();
		$('.page5').children().stop(false, true).fadeOut();
		$('.page5').children().stop(false, true).animate();
		$('.page5').html(page5_html);
	} else if(nowpage == 5) {
		//第五页动画
		
		//初始化第四页
		$('.page4').children().stop(false, true).fadeIn();
		$('.page4').children().stop(false, true).fadeOut();
		$('.page4').children().stop(false, true).animate();
		$('.page4').html(page4_html);

		//初始化第六页
		$('.page6').children().stop(false, true).fadeIn();
		$('.page6').children().stop(false, true).fadeOut();
		$('.page6').children().stop(false, true).animate();
		$('.page6').html(page6_html);
	} else if(nowpage == 6) {
		//第六页动画
	
		//初始化第五页
		$('.page5').children().stop(false, true).fadeIn();
		$('.page5').children().stop(false, true).fadeOut();
		$('.page5').children().stop(false, true).animate();
		$('.page5').html(page5_html);

		//初始化第七页
		$('.page7').children().stop(false, true).fadeIn();
		$('.page7').children().stop(false, true).fadeOut();
		$('.page7').children().stop(false, true).animate();
		$('.page7').html(page7_html);
	

	} else if(nowpage == 7) {
		//第七页动画
		
		$('.X3').hide();
		$('.X4').hide();
		$('.X5').hide();
		$('.X6').hide();
		$('.Y3').hide();
		$('.Y4').hide();
		$('.Y5').hide();
		$('.Y6').hide();
		get();
		//初始化第六页
		$('.page6').children().stop(false, true).fadeIn();
		$('.page6').children().stop(false, true).fadeOut();
		$('.page6').children().stop(false, true).animate();
		$('.page6').html(page6_html);
		
		$('.page8').children().stop(false, true).fadeIn();
		$('.page8').children().stop(false, true).fadeOut();
		$('.page8').children().stop(false, true).animate();
		$('.page8').html(page8_html);

	}else if(nowpage == 8) {
		//第八页动画
	
	
		//初始化第七页
		$('.page7').children().stop(false, true).fadeIn();
		$('.page7').children().stop(false, true).fadeOut();
		$('.page7').children().stop(false, true).animate();
		$('.page8').html(page8_html);
	
	}
}



//音乐控制
function playMusic(obj) {
	var player = document.getElementById("player");
	if(player.paused) {
		player.play();
		obj.src = 'p/musicicon.png';
		$('.musicBtn').addClass('btnrotate');
	} else {
		player.pause();
		obj.src = 'p/musicno.png';
		$('.musicBtn').removeClass('btnrotate');
	}
}
	        $(".CusAnimateDom").each(function () {
	            var _delay = $(this).attr("data-delay");
	            var _duration = $(this).attr("data-duration");
	            $(this).css("-webkit-animation-delay", (_delay) + "ms");
	            $(this).css("-webkit-animation-duration", (_duration) + "ms");
	        });