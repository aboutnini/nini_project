$(document).ready(function(){

	
	

	$(window).on('scroll',function(){

		var scrollTop = $(window).scrollTop();

		//h1
		$('h1').text(scrollTop)

		//헤더
		if(scrollTop >0){
			$('#header').addClass('on')
		}else{
			$('#header').removeClass('on')
		}

		activeBtn(scrollTop);

		//막대기
		$('#global').css({
			'transform':'rotate('+scrollTop+'deg)'
		})

		

	})


	//버튼 눌렀을때
	$('.navi li').on('click',function(e){
		e.preventDefault();
		var i = $(this).index();
		move(i);
	})

	var divArr = [];
	var len = $('#wrap div').length;
	savePos();

	//면적구하기
	function savePos(){

		for(var i=0; i<len; i++) {
			var divTop = $('#wrap div').eq(i).offset().top;
			divArr.push(divTop)
			
		}
		var lastDiv = $('#wrap div').last().height()+$('#wrap div').last().offset().top;
		divArr.push(lastDiv)
	}


	//거리구하기
	function activeBtn(scroll){

		$('#wrap div').removeClass('on');
		$('.navi li').removeClass('on');

		for(var i=0; i<len; i++){
			if(scroll >= divArr[i] && scroll < divArr[i+1]){

				$('#wrap div').eq(i).addClass('on');
				$('.navi li').eq(i).addClass('on');
			}
		}
	}



	//좌표 이동 
	function move(i){
		$('html').stop().animate({
			'scrollTop': divArr[i]
		});
	}




	
	

	


});






