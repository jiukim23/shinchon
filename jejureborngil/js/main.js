document.addEventListener('DOMContentLoaded', () => {
  const mainLogo = document.querySelector('#mainheader_logo');
  const mainWrap = document.querySelector('#mainheader_wrap');
  const brandWrap = document.querySelector('#brand');
  const brandTitle = document.querySelector('#brand_title');
  const brandSubTitle = document.querySelector('#brand_subtitle');
  const brandBtn = document.querySelector('#brand_btn');
  const brandImg = document.querySelector('#brand_img');
  const programsSection = document.querySelector('#programs');
  const programsWrap = document.querySelector('#programs_wrap');
  const programsSubWrap = document.querySelector('#programs_subwrap');
  const programsTitle = document.querySelector('#programs_title');
  const mainTitle = document.querySelectorAll('.main_title');
  const courseList = document.querySelector('#course_list');

  const galleryBg = document.createElement('div');
  const galleryList = document.querySelectorAll('#gallery_list>li');

  gsap.to(mainLogo, {
    y: -400,
    opacity: 0,
    scrollTrigger: {
      trigger: mainWrap,
      start: 'top 0%',
      end: '200% 0%',
      scrub: 4
    }
  });

  gsap.set(brandTitle, { y: 300 });
  gsap.to(brandTitle, {
    y: 0, duration: 1,
    scrollTrigger: {
      trigger: brandWrap,
      start: 'top 80%'
    }
  });
  gsap.set(brandSubTitle, { y: 100 });
  gsap.to(brandSubTitle, {
    y: 50, duration: 1,
    scrollTrigger: {
      trigger: brandSubTitle,
      start: 'top 80%'
    }
  });
  gsap.set(brandBtn, { y: 100 });
  gsap.to(brandBtn, {
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: brandSubTitle,
      start: 'top 80%'
    }
  });
  // gsap.set(brandImg,{y:300,opacity:0})
  // gsap.to(brandImg,{y:0,opacity:1,duration:1,scrollTrigger:{
  //   trigger:brandWrap,
  //   start:'top 50%'
  // }})
  //gsap.set(brandImg,{width:'60%',opacity:0})
  gsap.to(brandImg, {
    width: '1180px',
    scrollTrigger: {
      trigger: brandWrap,
      start: 'top 20%',
      end: 'bottom 85%',
      scrub: 1,
      // pin:true,
      // markers: true
    }
  });

  gsap.to(programsTitle, {
    y: -200,
    scrollTrigger: {
      trigger: programsSection,
      start: 'top 70%',
      end: '100% 0%',
      scrub: true
    }
  });

  for (const item of mainTitle) {
    // item.style.border = 'solid 3px yellow';
    gsap.set(item, { y: 80 });
    gsap.to(item, {
      y: -20,
      scrollTrigger: {
        trigger: item,
        start: 'top 70%',
        end: '100% 50%',
        scrub: 2
      }
    });
  }

  // 스크롤 위치를 저장할 변수 선언
  let scrollPosition;
  // 메인 애니메이션 함수 정의
  function upAni() {
    // courseList 요소에 대한 애니메이션 설정
    gsap.to(courseList, {
      y: -800,
      scrollTrigger: {
        trigger: programsSection,
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 2,
        // preventOverlaps: true, // 애니메이션 겹침 방지
        onEnter: () => {
          // 트리거 영역 진입 시 실행되는 함수
          if (window.innerWidth <= 1174) {
            // 모바일 크기일 때 programSubWrap 스타일 초기화
            gsap.set(programsSubWrap, {
              clearProps: 'all'
            });
          }
          // gsap.to()
          ScrollTrigger.create({
            trigger: programsSection,
            start: 'top 0%',
            end: 'bottom 110%',
            toggleClass: 'activated',
            // scrub:2,
            markers:true,
          });
        }
      }
    });
  }
  // 화면 크기별 ScrollTrigger 설정
  ScrollTrigger.matchMedia({
    // 데스크톱 버전 (1175px 이상)
    '(min-width: 1175px)': function () {
      maintainScrollPosition();
      upAni(); // 데스크톱용 애니메이션 실행
    },
    // 모바일 버전 (1174px 이하)
    '(max-width: 1174px)': function () {
      maintainScrollPosition();
      gsap.to(courseList, {
        y: 0, // Y축 이동 없음
        scrollTrigger: {
          trigger: programsSection,
          start: 'top 0%',
          end: 'bottom 0%',
          scrub: 2,
        }
      });
    }
  });

  // 스크롤 위치 유지 함수
  function maintainScrollPosition() {
    // 현재 스크롤 위치 저장
    scrollPosition = window.scrollY;
    // 다음 프레임에서 저장된 위치로 스크롤 복원
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 50);
  }

  // // resize 이벤트에 debounce 적용한 핸들러
  // const debounceResize = debounce(() => {
  //   ScrollTrigger.refresh(); // ScrollTrigger 새로고침
  //   maintainScrollPosition(); // 스크롤 위치 유지
  // }, 250); // 250ms 딜레이

  // resize 이벤트 리스너 등록
  // window.addEventListener('resize', debounceResize);

  // wheel()
});


function wheel() {
  let isScrolling = false;

  function handleWheel(event) {
    event.preventDefault();

    if (isScrolling) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    let scrollAmount;

    // 그 외의 경우는 100vh 단위로 이동
    scrollAmount = currentScroll + windowHeight * direction;

    isScrolling = true;

    gsap.to(window, {
      scrollTo: scrollAmount,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        isScrolling = false;
      }
    });
  }
    
  window.addEventListener('wheel', handleWheel, { passive: false });
}
