window.addEventListener('load', () => {
  const header = document.querySelector('header');
  const mobileMenuWrap = document.querySelector('#mobilemenu'); //모바일 메뉴 전체영역
  const mobileBtn = document.querySelector('#menu_bar');
  const mobileCloseBtn = document.querySelector('#mobileclose_btn');

  const mobileGrayLayer = document.createElement('div'); //
  mobileGrayLayer.id = 'mobile_grayLayer';

  const mobileMenu = document.querySelectorAll('#mobilemenu_list>li'); // 각 모바일 메인메뉴

  let mobileMenuWidth = window.innerWidth * 0.87; //모바일메뉴 가로크기 (윈도우의 87%)
  let closeHeight = 64; //메인메뉴 닫혔을때 높이 (메인메뉴 하나의 세로크기 , 서브메뉴 안보이게 overflow:hidden 처리)

  gsap.set(mobileMenuWrap, { width: mobileMenuWidth, height: window.innerHeight, right: -mobileMenuWidth });

  mobileBtn.addEventListener('click', mobileMenuOpen);
  mobileCloseBtn.addEventListener('click', mobileMenuClose);

  // 메뉴 아이템의 상태를 저장할 Map 생성
  const menuStates = new Map();

  mobileMenu.forEach((item) => {
    const menuTitle = item.querySelector('button');
    // Map에 초기 상태 저장
    menuStates.set(item, false);

    menuTitle.addEventListener('click', () => {
      mainMenuOpen(item, menuTitle);
    });
  });

  function mobileMenuOpen() {
    gsap.set(mobileGrayLayer, { display: 'block' });
    header.append(mobileGrayLayer);

    gsap.set('body,html', { overflow: 'hidden' });
    // body만큼만 보이게하고 스크롤안되게 함

    gsap.set(mobileMenuWrap, { display: 'block' });
    gsap.to(mobileMenuWrap, { right: 0, duration: 0.5, ease: 'power1.out' });
  }
  function mobileMenuClose() {
    gsap.set(mobileGrayLayer, { display: 'none' });
    gsap.to(mobileMenuWrap, {
      right: -mobileMenuWidth,
      duration: 0.5,
      ease: 'power1.out',
      onComplete: () => {
        gsap.set(mobileMenuWrap, { display: 'none' });
        gsap.set('body,html', { overflow: 'visible' });
        mobileMenu.forEach((item) => {
          const menuTitle = item.querySelector('button');
          closeMenu(item, menuTitle);
        });
      }
    });
  }

  function mainMenuOpen(item, menuTitle) {
    if (!menuStates.get(item)) {
      // =if(menuStates.get(item) === false)
      gsap.to(item, { height: 'auto', duration: 0.5, ease: 'power1.out' });
      menuStates.set(item, true);
      item.classList.add('active');
      menuTitle.setAttribute('aria-expanded', 'true');
    } else {
      closeMenu(item, menuTitle);
    }
  }

  function closeMenu(item, menuTitle) {
    gsap.to(item, { height: closeHeight, duration: 0.5, ease: 'power1.out' });
    menuStates.set(item, false);
    item.classList.remove('active');
    menuTitle.setAttribute('aria-expanded', 'false');
  }
});
