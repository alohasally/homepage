$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation:true,
        navigationPosition:'right'
	});
});

// animate__animated 추가
         
$(window).scroll(function(){
	var sct = $(this).scrollTop();

	$('section').each(function(){
		var sectionOST = $(this).offset().top - 500;
		var sectionEffect = $(this).attr('data-effect');
		if(sct >= sectionOST){
			$(this).addClass(sectionEffect);
		}
	});
});

//top버튼 클릭스크롤, 위치
function scrollTopBtn(win1){
	let topBtn = document.getElementsByClassName('scroll-top')[0];
	let ch_point = document.getElementById("title").offsetHeight;
	topBtn.addEventListener('click',function(){
	  window.scrollTo({top:0, left:0, behavior:'smooth'});
	}); 
	if(win1 <= ch_point){
	  topBtn.style.display= "none";
	}else{
	  topBtn.style.display= "block";
	}
  }

