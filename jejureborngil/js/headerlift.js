// window.addEventListener('load',()=>{
//   const headerWrap=document.querySelector('#header_wrap')


//   headerWrap.addEventListener('scroll',headerActive)

//   let currentY=null
//   let lastY=window.scrollY
//   function headerActive(){
//     headerWrap.classList.add('active')
//     currentY=window.scrollY
//     if(currentY<window.scrollY){
//       // headerWrap.classList.remove('active')
//       headerWrap.style.position=sticky
//       headerWrap.style.top='0px'
//     }
//   }
// })

window.addEventListener('load',()=>{
  let lastScrollTop = 0;
  const navbar = document.querySelector('#header_wrap')
  
  window.addEventListener('scroll', function() {
      let currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll>90 ) {
          navbar.style.top = '-90px';    // 스크롤 다운 시 숨김
          navbar.classList.remove('selected')
          // navbar.style.background='white';
        } else if(currentScroll<lastScrollTop && currentScroll>90) {
          navbar.style.top = '0';        // 스크롤 업 시 표시
          navbar.classList.add('selected')
      } else if(currentScroll === 0){
        navbar.classList.remove('selected')
      }
      
      lastScrollTop = currentScroll;
  });

})



// window.addEventListener('load', () => {
//   const headerWrap = document.querySelector('#header_wrap');
//   let lastScrollY = window.scrollY;  // 마지막 스크롤 위치
//   let ticking = false; // requestAnimationFrame 최적화 플래그

//   // scroll 이벤트를 사용하여 스크롤 방향 추적
//   window.addEventListener('scroll', () => {
//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         headerActive();  // 스크롤 이벤트 발생 시 headerActive 함수 실행
//         ticking = false;  // ticking 플래그 리셋
//       });
//       ticking = true;  // 애니메이션 프레임이 실행될 때까지 이벤트가 중복 실행되지 않도록
//     }
//   });

//   function headerActive() {
//     const currentY = window.scrollY;  // 현재 스크롤 위치
//     const isScrollingDown = currentY > lastScrollY; // 스크롤 방향 확인

//     // 스크롤을 내리면 'active' 클래스 추가
//     if (isScrollingDown) {
//       headerWrap.classList.add('active');
//     } else {
//       // 스크롤을 올리면 'active' 클래스 제거
//       // headerWrap.classList.remove('active');
//       headerWrap.style.top="0"
//     }

//     // 스크롤 위치가 100px 이상이면 헤더를 sticky로 고정
//     if (currentY > 100) {
//       headerWrap.style.position = 'fixed'; // position을 'fixed'로 설정하여 헤더가 고정되도록 함
//       headerWrap.style.top = '-90px'; // 화면 상단에 고정
//       // headerWrap.style.height='0px';
//     } else {
//       // 스크롤이 100px 미만이면 'absolute'로 설정하여 원래 위치로 돌아옴
//       headerWrap.style.position = '';
//       headerWrap.style.top = '';
//       // headerWrap.style.height='';
//     }

//     // 마지막 스크롤 위치 갱신
//     lastScrollY = currentY <= 0 ? 0 : currentY; // 스크롤이 0보다 작으면 0으로 고정
//   }
// });
