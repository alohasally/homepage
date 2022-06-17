// $(document).ready(
//     function(){
//         $("aside .top").click(
//             function(){
//                 $("html, body").animate({scrollTop:"0px"}, 2000); //수치 속성값을 애니메이트
//                 return false;
//             }
//         );
//     }
// );



            /*
             * - 변수 지정하기  
             변수명btt  id back to top
             * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
             * - 스크롤과 클릭 이벤트 작성하기
             * 
             스크롤양 확인하기
             document.documentElement.scrollTop
             window.pageYOffset

             window.pageYOffset = 0; 불가
             document.documentElement.scrollTop = 0; 가능

             window.scrollTo(x, y); x축 y축 스크롤양을 지정한다.
             window.scrollTo(0, 0);
             window.scrollBy(0, -50); 현재 스크롤양에서 세롤 스크롤양을 50축소.
            */
            //var btt = document.getElementById('back-to-top');
            var btt = document.querySelector('#back-to-top'),
                docElem = document.documentElement,
                scrollAmount;

            // 스크롤 이벤트 추가
            window.addEventListener('scroll',function(){
                // scrollAmount = docElem.scrollTop;
                scrollAmount = this.pageYOffset;
                
                console.log(scrollAmount);
                if(scrollAmount > 300){
                    // btt.classList.add('.visible');
                    btt.className = 'visible';
                } else{
                    btt.classList.remove('visible');
                }
            });

            // 클릭 이벤트 추가
            btt.addEventListener('click', function(e){
                e.preventDefault();
                   
                var scrollInterval = setInterval(function(){
                        
                        if(scrollAmount != 0){
                            window.scrollBy(0,-55);
                        }else{
                            clearInterval(scrollInterval);
                        }
                }, 10);               
                
            });
        